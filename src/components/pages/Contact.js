import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import gsap from 'gsap';
import '../../styles/Contact.css';
import ScrollToTop from '../../utils/ScrollToTop';
import Footer from '../Footer';
import { EntryTransition, ExitTransition } from '../PageTransition';

export default function Contact() {
  ScrollToTop();

  useEffect(() => {
    // fix flashing animated titles on page load
    gsap.to('.contact-title-inner', { css: { visibility: 'visible' } });

    // gsap opening animation on page load
    gsap.from('.contact-title', 2, {
      y: 560,
      ease: 'power4.out',
      delay: 0.6,
      skewY: 4,
      stagger: { amount: 0.5 },
    });
  }, []);

  // react hook form
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [statusMsg, setStatusMsg] = useState('Msg');

  const onSubmit = (data, e) => {
    const submitMsg = document.querySelector('.status-msg');
    console.log(data);

    // email.js
    emailjs.sendForm('liuhe_yahoo', 'template_liuhe', '#form', 'user_QXaR2CMF0bg5jBJRseDBl').then(
      (result) => {
        setStatusMsg('Message sent! Thank you.');
        submitMsg.className = 'status-msg success';
        e.target.reset();
      },
      (error) => {
        setStatusMsg('Failed to send message! Please try again.');
        submitMsg.className = 'status-msg failure';
      }
    );
  };

  return (
    <ExitTransition>
      <div className='contact-container'>
        <div className='contact-title-container'>
          <div className='contact-title-inner'>
            <h1 className='contact-title'>GET IN TOUCH</h1>
          </div>
        </div>
        <form noValidate className='form' id='form' name='contact' onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' name='form-name' value='contact' />
          <div className='form-top'>
            <div className='form-top-left'>
              <input
                type='text'
                className='input-field'
                name='name'
                placeholder='Full Name'
                ref={register({
                  required: {
                    value: true,
                    message: '*Please enter your name',
                  },
                  minLength: {
                    value: 4,
                    message: '*Must be at least 4 characters',
                  },
                })}
              />
              {errors.name && <p className='form-error'>{errors.name.message}</p>}
              <input type='text' className='input-field' name='company' placeholder='Company' ref={register} />
              <input type='tel' className='input-field' name='phone' placeholder='Phone' ref={register} />
              <input
                type='email'
                className='input-field'
                name='email'
                placeholder='Email'
                ref={register({
                  required: {
                    value: true,
                    message: '*Please enter your email address',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: '*Invalid email address',
                  },
                })}
              />
              {errors.email && <p className='form-error'>{errors.email.message}</p>}
            </div>
            <div className='form-top-right'>
              <textarea
                className='textarea'
                name='msg'
                placeholder='Your Message'
                ref={register({
                  required: {
                    value: true,
                    message: '*Please enter your message',
                  },
                  minLength: {
                    value: 4,
                    message: '*Must be at least 4 characters',
                  },
                })}
              />
              {errors.msg && <p className='form-error'>{errors.msg.message}</p>}
            </div>
          </div>
          <button type='submit' className='form-button'>
            Send
          </button>
          <p className='status-msg'>{statusMsg}</p>
        </form>
      </div>
      <Footer />
      <EntryTransition />
    </ExitTransition>
  );
}
