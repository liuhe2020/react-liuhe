import React, { useEffect } from "react";
import "../styles/CardItem.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function CardItem(props) {
  useEffect(() => {
    // project title slide in animation
    gsap.fromTo(
      ".cards-item-bottom",
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
          trigger: ".cards-item-bottom",
          start: "top 85%",
        },
      }
    );

    // github link slide in animation
    gsap.fromTo(
      ".cards-item-git-link",
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
          trigger: ".cards-item-bottom",
          start: "top 85%",
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
      .from(".cards-item-img", 1.4, {
        scale: 1.6,
        ease: "power2.easeInOut",
      })
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
      ".cards-item-text",
      {
        autoAlpha: 0,
        y: "15vh",
      },
      {
        duration: 1,
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
    <div className="cards" id="cards">
      <div className="cards-inner">
        <div className="cards-item-container">
          <a
            className="cards-item-link"
            target="_blank"
            rel="noopener noreferrer"
            href={props.url}
          >
            <div className="img-container">
              <img className="cards-item-img" src={props.src} alt="Project" />
              <div className="img-overlay"></div>
            </div>
            <div className="cards-item-bottom">
              <img
                className="cards-item-arrow-right"
                src="../svg/arrow_right.png"
                alt="Arrow Icon"
              />
              <h1 className="cards-item-title">{props.title}</h1>
            </div>
          </a>
          <div className="cards-item-info">
            <a
              className="cards-item-git-link"
              target="_blank"
              rel="noopener noreferrer"
              href={props.gitUrl}
            >
              <h5 className="cards-item-git">GitHub</h5>
              <img
                className="cards-item-arrow-left"
                src="../svg/arrow_left.png"
                alt="Arrow Icon"
              />
            </a>
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
