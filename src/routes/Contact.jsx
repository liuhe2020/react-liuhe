import { useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import gsap from 'gsap';
import '../styles/Contact.css';
import { Footer, ContactForm, EntryTransition, PageTransition } from '../components';
import useScrollToTop from '../utils/useScrollToTop';

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function Contact() {
  useScrollToTop();

  useEffect(() => {
    // fix flashing animated titles on page load
    gsap.to('.contact-title-inner', { css: { visibility: 'visible' } });

    // gsap opening animation on page load
    gsap.from('.contact-title', {
      y: 460,
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
        <div className='form-container'>
          <GoogleReCaptchaProvider reCaptchaKey={siteKey} useEnterprise useRecaptchaNet>
            <ContactForm />
          </GoogleReCaptchaProvider>
          <p className='recaptcha-terms'>
            This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy'>Privacy Policy</a> and{' '}
            <a href='https://policies.google.com/terms'>Terms of Service</a> apply.
          </p>
        </div>
      </div>
      <Footer />
      <EntryTransition />
    </PageTransition>
  );
}
