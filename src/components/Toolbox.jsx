import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIntersection } from 'react-use';
import '../styles/Toolbox.css';

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
