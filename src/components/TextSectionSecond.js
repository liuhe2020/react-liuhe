import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIntersection } from 'react-use';
import '../styles/TextSectionSecond.css';

gsap.registerPlugin(ScrollTrigger);

export default function TextSectionSecond() {
  useEffect(() => {
    //text on the right fade in animation
    gsap.fromTo(
      '.TSS-topright',
      {
        autoAlpha: 0,
        x: '15vw',
      },
      {
        duration: 1,
        delay: 1.7,
        autoAlpha: 1,
        x: 0,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.TSS-topleft',
          start: 'top 80%',
        },
      }
    );
  }, []);

  // slogan fade in animation using intersection observer for staggered effect
  const sloganRef = useRef(null);
  const sloganIntersection = useIntersection(sloganRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  const slideIn = (element) => {
    gsap.to(element, {
      autoAlpha: 1,
      y: '0',
      duration: 1,
      ease: 'power4.out',
      stagger: { amount: 1.2 },
    });
  };

  if (sloganIntersection && sloganIntersection.intersectionRatio > 0.3) {
    slideIn('.TSS-slogan');
  }

  return (
    <div className='TSS'>
      <div className='TSS-container'>
        <div className='TSS-top'>
          <div className='TSS-topleft' ref={sloganRef}>
            <div className='TSS-slogan-container'>
              <h1 className='TSS-slogan'>YOU</h1>
            </div>
            <div className='TSS-slogan-container'>
              <h1 className='TSS-slogan'>NEVER GET</h1>
            </div>
            <div className='TSS-slogan-container'>
              <h1 className='TSS-slogan'>A SECOND CHANCE</h1>
            </div>
            <div className='TSS-slogan-container'>
              <h1 className='TSS-slogan'>TO MAKE A</h1>
            </div>
            <div className='TSS-slogan-container'>
              <h1 className='TSS-slogan slogan-bold'>FIRST IMPRESSION</h1>
            </div>
          </div>
          <h2 className='TSS-topright'>
            It takes less than a second for users to form a first impression about your website. That's why it is crucial to have a visually impactful design,
            which invites users to explore more about your business. My job is to make sure your website is built to do that.
          </h2>
        </div>
      </div>
    </div>
  );
}
