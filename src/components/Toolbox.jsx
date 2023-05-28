import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIntersection } from 'react-use';
import '../styles/Toolbox.css';
import { html, css, js, node, react, next, ts, sass, tailwind } from '../assets/images';

const toolbox = [
  {
    src: html,
    alt: 'html',
  },
  { src: css, alt: 'css' },
  { src: js, alt: 'javascript' },
  { src: node, alt: 'nodejs' },
  { src: react, alt: 'reactjs' },
  { src: next, alt: 'nextjs' },
  { src: ts, alt: 'typescript' },
  { src: sass, alt: 'sass' },
  { src: tailwind, alt: 'tailwind' },
];

gsap.registerPlugin(ScrollTrigger);

export default function Toolbox() {
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
    fadeIn('.toolbox-item');
  }

  return (
    <div className='toolbox'>
      <h1>MY TOOLBOX</h1>
      <div className='toolbox-items-container' ref={tbRef}>
        {toolbox.map((tool) => (
          <img className='toolbox-item' key={tool.alt} src={tool.src} alt={tool.alt} />
        ))}
      </div>
    </div>
  );
}
