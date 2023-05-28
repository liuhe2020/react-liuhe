import { useEffect, useRef } from 'react';
import '../styles/Project.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { arrowLeft, arrowRight } from '../assets/images';

gsap.registerPlugin(ScrollTrigger);

export default function Project(props) {
  const projectLink = useRef(null);
  const gitLink = useRef(null);
  const img = useRef(null);
  const projectInfo = useRef(null);
  let overlay = useRef(null);

  useEffect(() => {
    // project title slide in animation
    gsap.fromTo(
      projectLink.current,
      {
        autoAlpha: 0,
        x: '-15vw',
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: overlay,
          start: 'top 35%',
        },
      }
    );

    // github link slide in animation
    gsap.fromTo(
      gitLink.current,
      {
        autoAlpha: 0,
        x: '100%',
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.5,
        delay: 0.5,
        ease: 'expo.in',
        scrollTrigger: {
          trigger: overlay,
          start: 'top 60%',
        },
      }
    );

    // project image reveal animation with scrolltrigger
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: overlay,
        start: 'top 60%',
      },
    });

    tl.fromTo(
      img.current,
      { scale: 1.6 },
      {
        scale: 1,
        duration: 1.2,
        ease: 'power2.easeInOut',
      }
    ).to(overlay, {
      width: '0%',
      duration: 1.5,
      ease: 'power2.easeInOut',
      delay: -1.2,
    });

    // project description text fade in animation
    gsap.fromTo(
      projectInfo.current,
      {
        autoAlpha: 0,
        y: '5vh',
      },
      {
        duration: 1,
        delay: 0.6,
        autoAlpha: 1,
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: overlay,
          start: 'top 60%',
        },
      }
    );
  }, []);

  return (
    <div className='card' id='card'>
      <div className='card-item-container'>
        <div className='img-container'>
          <img ref={img} className='card-item-img' src={props.src} alt='project_img' />
          <div ref={(el) => (overlay = el)} className='img-overlay'></div>
        </div>
        <div className='card-item-info'>
          <a ref={gitLink} className='card-item-git-link' target='_blank' rel='noopener noreferrer' href={props.gitUrl}>
            <h4 className='card-item-git'>GitHub</h4>
            <img className='card-item-arrow-left' src={arrowLeft} alt='Arrow Icon' />
          </a>
          <p ref={projectInfo} className='card-item-text'>
            {props.text}
          </p>
        </div>
        <div className='card-item-link-container'>
          <a ref={projectLink} className='card-item-link' target='_blank' rel='noopener noreferrer' href={props.url}>
            <img className='card-item-arrow-right' src={arrowRight} alt='Arrow Icon' />
            <h3 className='card-item-title'>{props.title}</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
