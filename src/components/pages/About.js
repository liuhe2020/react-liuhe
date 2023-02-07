import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/About.css';
import Footer from '../Footer';
import { EntryTransition, PageTransition } from '../PageTransition';
import useScrollToTop from '../../utils/useScrollToTop';

gsap.registerPlugin(ScrollTrigger);

const aboutMe = [
  {
    title: 'Who am I?',
    text: "My name is Liu He and I'm a web developer.",
  },
  {
    title: 'Where am I?',
    text: 'I was born and raised in southern China. In 2003, I moved to London, UK and now I live in Exeter, Devon.',
  },
  {
    title: 'Why web development?',
    text: 'Tech has been a life long passion of mine. In August 2020, I decided to teach myself how to code. The biggest challenge was to stay motivated and find solutions on my own even when sometimes it seemed impossible. I really enjoy learning new things every day and being able to implement them into my work. I now work in a team of like-minded web developers and continue to broaden my skill set.',
  },
  {
    title: 'What are my past experiences prior to being a web developer?',
    text: 'I have 10 years of experience in business operations and customer service in the hospitality industry, also 7 of which as a freelance photographer expertised in portrait photography. These experiences not only enriched me professionally and personally but also provided me with transferable skills in my current endeavour.',
  },
  {
    title: 'What do I do in my free time?',
    text: 'When I am not coding or pushing pixels. You will find me getting lost in the wilderness with my adorable dog Tofu.',
  },
];

export default function About() {
  useScrollToTop();
  // refs array for gsap fade in
  const fadeInRefs = useRef([]);
  fadeInRefs.current = [];

  const addToRefs = (el) => {
    if (el && !fadeInRefs.current.includes(el)) {
      fadeInRefs.current.push(el);
    }
  };

  useEffect(() => {
    // fix flashing animated titles on page load
    gsap.to('.top-container', { css: { visibility: 'visible' } });

    // gsap opening animation on page load
    gsap.from('.about-titles h1', {
      y: 480,
      ease: 'power4.out',
      duration: 2,
      delay: 0.6,
      skewY: 5,
      stagger: { amount: 0.5 },
    });

    // text fade in animation on scroll with scrolltrigger
    fadeInRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: '15vh',
        },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'power4.out',
          stagger: { amount: 0.3 },
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <PageTransition>
      <div className='about-container'>
        <div className='top-container'>
          <div className='about-titles'>
            <h1 className='title1'>WEB DEVELOPER</h1>
            <h1 className='title2'>PHOTOGRAPHER</h1>
            <h1 className='title3'>DOG LOVER</h1>
          </div>
          <img className='about-img1' src='/img/liuhe.png' alt='liu_he' />
          <img className='about-img2' src='/img/archie3.png' alt='pomeranian' />
        </div>
        <div className='btm-container'>
          {aboutMe.map(({ title, text }) => {
            return (
              <div className='info-container' key={title} ref={addToRefs}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <EntryTransition />
    </PageTransition>
  );
}
