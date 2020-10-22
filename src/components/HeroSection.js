import React from "react";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/video/liuhe_web_bg.mp4" autoPlay loop muted />
      <div className="intro">
        <span className="intro-top">Hi, I'm Liu.</span>
        <span className="intro-btm">I build websites.</span>
      </div>
      <div className="hero-words">
        <h1 className="hero-words-left">D</h1>
        <h2 className="hero-words-top">ESIGN</h2>
        <h2 className="hero-words-btm">EVELOP</h2>
      </div>
    </div>
  );
}

export default HeroSection;
