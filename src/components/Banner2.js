import React, { useEffect, useRef } from "react";
import "../styles/Banner2.css";
import gsap from "gsap";
import { useIntersection } from "react-use";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Banner2() {
  useEffect(() => {
    //text fade in animation
    gsap.fromTo(
      ".banner2-top",
      {
        autoAlpha: 0,
        y: "15vh",
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".banner2-top",
          start: "top 80%",
        },
      }
    );
  }, []);

  // toolbox img fade in animation using intersection observer for staggered effect
  const tbRef = useRef(null);
  const tbIntersection = useIntersection(tbRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      autoAlpha: 1,
      y: "-15vh",
      ease: "power4.out",
      stagger: { amount: 0.7 },
    });
  };

  if (tbIntersection && tbIntersection.intersectionRatio > 0.3) {
    fadeIn(".banner-item");
  }

  return (
    <div className="banner2">
      <div className="banner2-container">
        <div className="banner2-top">
          <h1>YOU NEVER GET A SECOND CHANCE TO MAKE A GOOD FIRST IMPRESSION</h1>
          <h3>
            It takes less than a second for users to form a first impression
            about your website. That's why it is crucial to have a visually
            impactful design, which invites users to explore more about your
            business. My job is to make sure your website is built to do that.
          </h3>
        </div>
        <div className="banner2-btm">
          <h1>MY TOOLBOX</h1>
          <div className="banner-items-container" ref={tbRef}>
            <img className="banner-item" src="/img/html.png" alt="html" />
            <img className="banner-item" src="/img/css.png" alt="css" />
            <img className="banner-item" src="/img/sass.png" alt="sass" />
            <img className="banner-item" src="/img/js.png" alt="javascript" />
            <img className="banner-item" src="/img/react.png" alt="react" />
            <img className="banner-item" src="/img/gsap.png" alt="gsap" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
