import React, { useEffect } from "react";
import "../styles/CardItem.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function CardItem(props) {
  useEffect(() => {
    // project title slide in animation
    gsap.fromTo(
      ".card-item-link",
      {
        autoAlpha: 0,
        x: "-15vw",
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".img-container",
          start: "top 40%",
        },
      }
    );

    // github link slide in animation
    gsap.fromTo(
      ".card-item-git-link",
      {
        autoAlpha: 0,
        x: "100vw",
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".img-container",
          start: "top 40%",
        },
      }
    );

    // project image reveal animation with scrolltrigger
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img-container",
        start: "top 60%",
      },
    });

    tl.to(".img-container", 0, { css: { visibility: "visible" } })
      .fromTo(
        ".card-item-img",
        { scale: 1.6 },
        {
          scale: 1,
          duration: 1.4,
          ease: "power2.easeInOut",
        }
      )
      .fromTo(
        ".img-overlay",
        { width: "100%" },
        {
          width: "0%",
          duration: 1.8,
          ease: "power2.easeInOut",
          delay: -1.4,
        }
      );

    // project description text fade in animation
    gsap.fromTo(
      ".card-item-text",
      {
        autoAlpha: 0,
        y: "15vh",
      },
      {
        duration: 1,
        delay: 0.6,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".img-container",
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <div className="card" id="card">
      <div className="card-item-container">
        <div className="img-container">
          <img className="card-item-img" src={props.src} alt="project_img" />
          <div className="img-overlay"></div>
        </div>
        <div className="card-item-info">
          <a
            className="card-item-git-link"
            target="_blank"
            rel="noopener noreferrer"
            href={props.gitUrl}
          >
            <h4 className="card-item-git">GitHub</h4>
            <img
              className="card-item-arrow-left"
              src="../svg/arrow_left.png"
              alt="Arrow Icon"
            />
          </a>
          <p className="card-item-text">{props.text}</p>
        </div>
        <a
          className="card-item-link"
          target="_blank"
          rel="noopener noreferrer"
          href={props.url}
        >
          <img
            className="card-item-arrow-right"
            src="../svg/arrow_right.png"
            alt="Arrow Icon"
          />
          <h3 className="card-item-title">{props.title}</h3>
        </a>
      </div>
    </div>
  );
}

export default CardItem;
