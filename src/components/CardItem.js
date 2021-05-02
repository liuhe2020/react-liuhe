import React, { useEffect, useRef } from "react";
import "../styles/CardItem.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function CardItem(props) {
  let projectLink = useRef(null);
  let gitLink = useRef(null);
  let img = useRef(null);
  let overlay = useRef(null);
  let projectInfo = useRef(null);

  useEffect(() => {
    // project title slide in animation
    gsap.fromTo(
      projectLink,
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
          trigger: projectLink,
          start: "top 90%",
        },
      }
    );

    // github link slide in animation
    gsap.fromTo(
      gitLink,
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
          trigger: gitLink,
          start: "top 60%",
        },
      }
    );

    // project image reveal animation with scrolltrigger
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: overlay,
        start: "top 60%",
      },
    });

    tl.fromTo(
      img,
      { scale: 1.6 },
      {
        scale: 1,
        duration: 1.4,
        ease: "power2.easeInOut",
      }
    ).fromTo(
      overlay,
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
      projectInfo,
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
          trigger: overlay,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <div className="card" id="card">
      <div className="card-item-container">
        <div className="img-container">
          <img
            ref={(el) => {
              img = el;
            }}
            className="card-item-img"
            src={props.src}
            alt="project_img"
          />
          <div
            ref={(el) => {
              overlay = el;
            }}
            className="img-overlay"
          ></div>
        </div>
        <div className="card-item-info">
          <a
            ref={(el) => {
              gitLink = el;
            }}
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
          <p
            ref={(el) => {
              projectInfo = el;
            }}
            className="card-item-text"
          >
            {props.text}
          </p>
        </div>
        <div className="card-item-link-container">
          <a
            ref={(el) => {
              projectLink = el;
            }}
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
    </div>
  );
}

export default CardItem;
