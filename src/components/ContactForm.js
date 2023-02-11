import '../styles/Contact.css';
import { useRef } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(2, 'Must be 2 or more characters long').max(70, 'Must be less than 70 characters'),
  company: z.string().max(70, 'Must be less than 70 characters').optional(),
  phone: z.string().max(15, 'Must be less than 15 digits').optional(),
  email: z.string().email('Please enter a valid email addresss').max(70, 'Must be less than 70 characters'),
  message: z.string().min(1, 'Please enter your message').max(5000, 'Must be less than 5000 characters'),
});

export default function ContactForm() {
  const form = useRef();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    reValidateMode: 'onSubmit',
    resolver: zodResolver(formSchema),
  });

  const resetField = (e) => {
    clearErrors(e.target.name);
  };

  const onSubmit = async (data) => {
    try {
      const token = await executeRecaptcha('submitForm');
      console.log(data, token);
      const res = await fetch('http://localhost:3000/api/contact-form', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
          recaptchaToken: token,
        }),
      });
      console.log(res);
    } catch (err) {}
  };

  return (
    <form className='form' ref={form} onSubmit={handleSubmit(onSubmit)}>
      <div className='form-top'>
        <div className='form-top-left'>
          <div className='input-field-wrapper'>
            <input className='input-field' placeholder='Full Name' disabled={isSubmitting} {...register('name')} onClick={resetField} />
            {errors.name && <p className='form-error'>{errors.name.message}</p>}
          </div>
          <div className='input-field-wrapper'>
            <input className='input-field' placeholder='Company' disabled={isSubmitting} {...register('company')} />
          </div>
          <div className='input-field-wrapper'>
            <input className='input-field' placeholder='Phone' disabled={isSubmitting} {...register('phone')} />
          </div>
          <div className='input-field-wrapper'>
            <input className='input-field' placeholder='Email' disabled={isSubmitting} {...register('email')} onClick={resetField} />
            {errors.email && <p className='form-error'>{errors.email.message}</p>}
          </div>
        </div>
        <div className='form-top-right'>
          <textarea className='textarea' placeholder='Your Message' disabled={isSubmitting} {...register('message')} onClick={resetField} />
          {errors.message && <p className='form-error'>{errors.message.message}</p>}
        </div>
      </div>
      <button className='form-button' type='submit' disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send'}
        {isSubmitting && (
          <div className='form-loader-wrapper'>
            <span className='form-loader' />
          </div>
        )}
      </button>
      <p className='status-msg'>Thank you for your message.</p>
    </form>
  );
}
