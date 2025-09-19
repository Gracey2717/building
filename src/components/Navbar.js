import React, { useState } from "react";
import Logo from "../Assets/PJ1.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="PJ CREW Logo" className="logo-img" />
      
      <h2 className="logo-text">P&J CREW</h2>
       </div>
      <ul className="nav-links" style={{ display: open ? "flex" : "" }}>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
