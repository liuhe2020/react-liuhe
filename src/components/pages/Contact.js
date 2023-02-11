import { useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import gsap from 'gsap';
import '../../styles/Contact.css';
import Footer from '../Footer';
import { EntryTransition, PageTransition } from '../PageTransition';
import useScrollToTop from '../../utils/useScrollToTop';
import ContactForm from '../ContactForm';

export default function Contact() {
  useScrollToTop();
  const key = process.env.RECAPTCHA_SITE_KEY;

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
        <GoogleReCaptchaProvider reCaptchaKey='6Lehp3EkAAAAAAU9loty8qyGtnwYRiJOhmNtkyh3' useEnterprise>
          <ContactForm />
        </GoogleReCaptchaProvider>
      </div>
      <Footer />
      <EntryTransition />
    </PageTransition>
  );
}
