import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../styles/Header.css";
import gsap from "gsap";

function Header({ history }) {
  const [menuSate, setMenuState] = useState({ menuOpen: false });

  useEffect(() => {
    history.listen(() => {
      setMenuState({ menuOpen: false });
    });

    let navHeight = document.querySelector(".nav").offsetHeight;

    if (menuSate.menuOpen === true) {
      gsap.to(".nav", { css: { top: "0" }, duration: 1, ease: "expo.inOut" });
      gsap.to(".app", { y: navHeight, duration: 1, ease: "expo.inOut" });
      gsap.to(".nav-toggle", { css: { display: "none" } });
      gsap.to(".nav-close", { css: { display: "block" }, delay: 0.5 });
      gsap.fromTo(
        ".nav-row",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.5 }
      );
    } else {
      gsap.to(".nav", {
        css: { top: -navHeight },
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to(".app", { y: 0, duration: 1, ease: "expo.inOut" });
      gsap.to(".nav-toggle", { css: { display: "" }, delay: 0.5 });
      gsap.to(".nav-close", { css: { display: "none" } });
      gsap.fromTo(".nav-row", { opacity: 1 }, { opacity: 0, duration: 0.5 });
    }
  });

  return (
    <div className="header">
      <div className="header-container">
        <NavLink to="/" exact className="logo">
          <span className="logo-left">LIU</span>
          <span className="logo-right">REACTS</span>
        </NavLink>
        <i
          onClick={() => setMenuState({ menuOpen: true })}
          className="nav-toggle fas fa-bars"
        />
        <i
          onClick={() => setMenuState({ menuOpen: false })}
          className="nav-close far fa-arrow-alt-circle-up"
        />
      </div>
    </div>
  );
}

export default withRouter(Header);
