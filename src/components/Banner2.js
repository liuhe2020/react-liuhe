import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIntersection } from 'react-use';
import '../styles/Banner2.css';

gsap.registerPlugin(ScrollTrigger);

const toolbox = [
  {
    src: '/img/html.png',
    alt: 'html',
  },
  { src: '/img/css.png', alt: 'css' },
  { src: '/img/js.png', alt: 'javascript' },
  { src: '/img/node.png', alt: 'nodejs' },
  { src: '/img/react.png', alt: 'reactjs' },
  { src: '/img/next.png', alt: 'nextjs' },
  { src: '/img/sass.png', alt: 'sass' },
  { src: '/img/tailwind.png', alt: 'tailwind' },
];

export default function Banner2() {
  useEffect(() => {
    //text on the right fade in animation
    gsap.fromTo(
      '.banner2-topright',
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
          trigger: '.banner2-topleft',
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
    slideIn('.banner2-slogan');
  }

  // toolbox img fade in animation using intersection observer for staggered effect
  const tbRef = useRef(null);
  const tbIntersection = useIntersection(tbRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      autoAlpha: 1,
      y: '-15vh',
      duration: 1,
      ease: 'power4.out',
      stagger: { amount: 1.2 },
    });
  };

  if (tbIntersection && tbIntersection.intersectionRatio > 0.3) {
    fadeIn('.banner-item');
  }

  return (
    <div className='banner2'>
      <div className='banner2-container'>
        <div className='banner2-top'>
          <div className='banner2-topleft' ref={sloganRef}>
            <div className='banner2-slogan-container'>
              <h1 className='banner2-slogan'>YOU</h1>
            </div>
            <div className='banner2-slogan-container'>
              <h1 className='banner2-slogan'>NEVER GET</h1>
            </div>
            <div className='banner2-slogan-container'>
              <h1 className='banner2-slogan'>A SECOND CHANCE</h1>
            </div>
            <div className='banner2-slogan-container'>
              <h1 className='banner2-slogan'>TO MAKE A</h1>
            </div>
            <div className='banner2-slogan-container'>
              <h1 className='banner2-slogan slogan-bold'>FIRST IMPRESSION</h1>
            </div>
          </div>
          <h2 className='banner2-topright'>
            It takes less than a second for users to form a first impression about your website. That's why it is crucial to have a visually impactful design,
            which invites users to explore more about your business. My job is to make sure your website is built to do that.
          </h2>
        </div>
        <div className='banner2-btm'>
          <h1>MY TOOLBOX</h1>
          <div className='banner-items-container' ref={tbRef}>
            {toolbox.map((tool) => (
              <img className='banner-item' key={tool.alt} src={tool.src} alt={tool.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
