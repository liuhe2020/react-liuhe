import { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';
import gsap from 'gsap';
import '../../styles/Contact.css';
import Footer from '../Footer';
import { EntryTransition, PageTransition } from '../PageTransition';
import useScrollToTop from '../../utils/useScrollToTop';

const formSchema = z.object({
  name: z.string().min(2, 'Must be 2 or more characters long').max(70, 'Must be less than 70 characters'),
  company: z.string().max(70, 'Must be less than 70 characters').optional(),
  phone: z.string().max(15, 'Must be less than 15 digits').optional(),
  email: z.string().email('Please enter a valid email addresss').max(70, 'Must be less than 70 characters'),
  message: z.string().min(1, 'Please enter your message').max(5000, 'Must be less than 5000 characters'),
});

export default function Contact() {
  useScrollToTop();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 3000);
    });
    // email.js
    // emailjs.sendForm('liuhe_yahoo', 'template_liuhe', '#form', 'user_QXaR2CMF0bg5jBJRseDBl').then(
    //   (result) => {
    //     setStatusMsg('Message sent! Thank you.');
    //     submitMsg.className = 'status-msg success';
    //     e.target.reset();
    //   },
    //   (error) => {
    //     setStatusMsg('Failed to send message! Please try again.');
    //     submitMsg.className = 'status-msg failure';
    //   }
    // );
  };

  useEffect(() => {
    // fix flashing animated titles on page load
    gsap.to('.contact-title-inner', { css: { visibility: 'visible' } });

    // gsap opening animation on page load
    gsap.from('.contact-title', {
      y: 350,
      ease: 'power4.out',
      duration: 2,
      delay: 0.6,
      skewY: 5,
      stagger: { amount: 0.5 },
    });
  }, []);

  return (
    <PageTransition>
      <div className='contact-container'>
        <div className='contact-title-container'>
          <div className='contact-title-inner'>
            <h1 className='contact-title'>GET IN</h1>
            <h1 className='contact-title'>TOUCH</h1>
          </div>
        </div>
        <form className='form' id='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-top'>
            <div className='form-top-left'>
              <div className='input-field-wrapper'>
                <input className='input-field' placeholder='Full Name' disabled={isSubmitting} {...register('name')} />
                {errors.name && <p className='form-error'>{errors.name.message}</p>}
              </div>
              <div className='input-field-wrapper'>
                <input className='input-field' placeholder='Company' disabled={isSubmitting} {...register('company')} />
              </div>
              <div className='input-field-wrapper'>
                <input className='input-field' placeholder='Phone' disabled={isSubmitting} {...register('phone')} />
              </div>
              <div className='input-field-wrapper'>
                <input className='input-field' placeholder='Email' disabled={isSubmitting} {...register('email')} />
                {errors.email && <p className='form-error'>{errors.email.message}</p>}
              </div>
            </div>
            <div className='form-top-right'>
              <textarea className='textarea' placeholder='Your Message' disabled={isSubmitting} {...register('message')} />
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
          <p className='status-msg'></p>
        </form>
      </div>
      <Footer />
      <EntryTransition />
    </PageTransition>
  );
}
