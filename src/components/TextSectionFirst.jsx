import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/TextSectionFirst.css';

gsap.registerPlugin(ScrollTrigger);

export default function TextSectionFirst() {
  useEffect(() => {
    //slogan slide up animation
    gsap.from('.slogan1', {
      y: '30vh',
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.slogan1',
        start: 'top 100%',
      },
    });
    gsap.from('.slogan2', {
      y: '30vh',
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.slogan2',
        start: 'top 100%',
      },
    });
    gsap.from('.slogan3', {
      y: '30vh',
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.slogan3',
        start: 'top 100%',
      },
    });
    gsap.from('.slogan4', {
      y: '30vh',
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.slogan4',
        start: 'top 100%',
      },
    });

    //text fade in animation
    gsap.fromTo(
      '.TSF-text',
      {
        autoAlpha: 0,
        y: '15vh',
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.TSF-text',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className='TSF'>
      <div className='slogan'>
        <div className='slogan-container'>
          <h1 className='slogan1'>TURN</h1>
        </div>
        <div className='slogan-container'>
          <h1 className='slogan2'>POTENTIAL</h1>
        </div>
        <div className='slogan-container'>
          <h1 className='slogan3'>INTO</h1>
        </div>
        <div className='slogan-container'>
          <h1 className='slogan4'>PERFORMANCE</h1>
        </div>
        <h2 className='TSF-text'>
          I strive to create beautiful looking and interactive websites by merging imagination and technology to help your business accelerate its digital
          transformation. The goal isn't to build a website. The goal is to build your business.
        </h2>
      </div>
    </div>
  );
}
