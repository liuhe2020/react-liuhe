import React, { useEffect } from "react";
import "../styles/Banner.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Banner() {
  useEffect(() => {
    //text fade in animation
    gsap.fromTo(
      ".slogan",
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
          trigger: ".slogan",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="banner">
      <div className="slogan">
        <h1>TURN POTENTIAL INTO PERFORMANCE</h1>
        <h3>
          I strive to create beautiful looking and interactive websites by
          merging imagination and technology to help your business accelerate
          its digital transformation. The goal isn't to build a website. The
          goal is to build your business.
        </h3>
      </div>
    </div>
  );
}

export default Banner;
