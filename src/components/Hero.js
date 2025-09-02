import React from "react";
import BgPic from "../Assets/bgpic.png";

function Hero() {
  return (
    <section className="hero" id="hero">
  <div className="hero-text">
    <h1>Building Strong Foundations for the Future</h1>
    <p>Your trusted partner in civil engineering projects.</p>
  </div>
   <div className="hero-img">
        <img src={BgPic} alt="Civil Engineering project" />
      </div>
</section>

  );
}

export default Hero;
