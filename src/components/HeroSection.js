import { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/HeroSection.css';

export default function HeroSection() {
  useEffect(() => {
    //intro animation
    gsap.from('.intro span', {
      y: 480,
      duration: 2,
      ease: 'power4.out',
      delay: 0.6,
      skewY: 5,
      stagger: { amount: 0.5 },
    });
  }, []);

  return (
    <div className='hero-container'>
      <video src='/video/bg.mp4' autoPlay loop muted />
      <div className='intro'>
        <span className='intro-top'>Hi, I'm Liu.</span>
        <span className='intro-btm'>Building custom websites for businesses is what I do.</span>
      </div>
    </div>
  );
}
