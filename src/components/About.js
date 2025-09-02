import React, { useState } from "react";
import AuthModal from "./AuthModal";

function About() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="about-container" id="about">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          We are a team of passionate engineers and architects committed to
          delivering innovative solutions for our clients.
        </p>
        <p>
          Together we are a leading civil engineering firm dedicated to building a
          sustainable future.
        </p>
      </div>

      <button onClick={() => setIsAuthOpen(true)} className="button">
        Learn More
      </button>

      {/* Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}

export default About;
