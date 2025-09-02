import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">PJ CREW.</h2>
      
      <ul className="nav-links" style={{ display: open ? "flex" : "" }}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
