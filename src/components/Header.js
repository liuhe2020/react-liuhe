import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { withRouter } from "react-router-dom";
// hash link allows scroll to hash(element by #id) even from another page component
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";
import gsap from "gsap";

function Header({ history }) {
  const [menuSate, setMenuState] = useState({ menuOpen: false });

  useEffect(() => {
    history.listen(() => {
      setMenuState({ menuOpen: false });
    });

    // menu open animation based on change of state, navbar is hidden on top of the page and slides down 40vh when toggled, the rest of the body slides down at the same time for 39.8vh, to prevent white line flashing between the navbar and the page body during animation
    if (menuSate.menuOpen === true) {
      gsap.to(".nav", { css: { top: "0" }, duration: 1, ease: "expo.inOut" });
      gsap.to(".page", { y: "39.8vh", duration: 1, ease: "expo.inOut" });
      gsap.to(".nav-toggle", { css: { display: "none" } });
      gsap.to(".nav-close", { css: { display: "block" }, delay: 0.5 });
      gsap.fromTo(
        ".nav-container",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.5 }
      );
    } else {
      gsap.to(".nav", {
        css: { top: "-40vh" },
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to(".page", { y: 0, duration: 1, ease: "expo.inOut" });
      gsap.to(".nav-toggle", { css: { display: "" }, delay: 0.5 });
      gsap.to(".nav-close", { css: { display: "none" } });
      gsap.fromTo(
        ".nav-container",
        { opacity: 1 },
        { opacity: 0, duration: 0.5 }
      );
    }
  });

  return (
    <div className="header">
      <div className="header-container">
        <HashLink to="/#home" smooth className="logo">
          <img src="/svg/liu_reacts_logo.png" alt="liu_reacts_logo" />
        </HashLink>
        <GiHamburgerMenu
          className="nav-toggle"
          onClick={() => setMenuState({ menuOpen: true })}
        />
        <FaRegArrowAltCircleUp
          className="nav-close"
          onClick={() => setMenuState({ menuOpen: false })}
        />
      </div>
    </div>
  );
}

export default withRouter(Header);
