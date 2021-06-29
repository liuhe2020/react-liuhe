import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/About.css";
import ScrollToTop from "../ScrollToTop";
import Footer from "../Footer";
import Overlay from "../Overlay";

gsap.registerPlugin(ScrollTrigger);

const aboutMe = [
  {
    title: "Who am I?",
    text: "My name is Liu He and I'm a front-end web developer.",
  },
  {
    title: "Where am I?",
    text: "I was born and raised in southern China. In 2003, I moved to London, UK and now I live in Sheffield, Yorkshire.",
  },
  {
    title: "Why web development?",
    text: "Tech has been a life long passion of mine. In August 2020, I decided to pursuit a career in web development. The biggest challenge was to learn to code from scratch and build a foundation to solve real world problems. I really enjoy learning new things every day and being able to implement them into my work. My long term goal is to become a full stack developer.",
  },
  {
    title: "What are my past experiences?",
    text: "I have 10 years of industry experience working in business operations and customer service, also 7 of which as a freelance photographer expertised in portrait photography. These experiences help me find simple yet sophisticated solutions to complex problems in my designs.",
  },
  {
    title: "What do I do in my free time?",
    text: "When I am not coding or pushing pixels. You will find me getting lost in the wilderness with my adorable dog Archie.",
  },
];

function About() {
  ScrollToTop();

  // framer motion page transition values
  const pageVariants = {
    start: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 1 } },
    out: { opacity: 0, transition: { duration: 1 } },
  };

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
    gsap.to(".top-container", { css: { visibility: "visible" } });

    // gsap opening animation on page load
    gsap.from(".about-titles h1", 2, {
      y: 480,
      ease: "power4.out",
      delay: 0.6,
      skewY: 5,
      stagger: { amount: 0.5 },
    });

    gsap.to(".overlay", 2, {
      y: "-100vh",
      delay: 2,
      ease: "expo.inOut",
    });

    // text fade in animation on scroll with scrolltrigger
    fadeInRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: "15vh",
        },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power4.out",
          stagger: { amount: 0.3 },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <motion.div
      className="page"
      variants={pageVariants}
      initial="start"
      animate="in"
      exit="out"
    >
      <div className="about-container">
        <div className="top-container">
          <div className="about-titles">
            <h1 className="title1">WEB DEVELOPER</h1>
            <h1 className="title2">PHOTOGRAPHER</h1>
            <h1 className="title3">DOG LOVER</h1>
          </div>
          <img className="about-img1" src="/img/liuhe.png" alt="liu_he" />
          <img className="about-img2" src="/img/archie3.png" alt="pomeranian" />
        </div>
        <div className="btm-container">
          {aboutMe.map(({ title, text }) => {
            return (
              <div className="info-container" key={title} ref={addToRefs}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <Overlay />
    </motion.div>
  );
}

export default About;
