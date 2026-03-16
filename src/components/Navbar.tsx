import { useState } from "react";
import "./Navbar.css";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-content">

        {/* LEFT SIDE */}
        <div className="navbar-left">
          <img src="/profile.png" alt="Arin" className="profile-img" />

          <div className="profile-text">
            <span className="profile-name">Arin</span>
            <span className="profile-role">UI/UX Designer</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          {/* LINKS */}
          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <a href="#AboutMe" className="nav-item" onClick={closeMenu}>
              About Me
            </a>

            <a href="#Projects" className="nav-item" onClick={closeMenu}>
              Projects
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              className="nav-item"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>

          {/* MODE TOGGLE + HAMBURGER */}
          <div className="nav-controls">

            <ModeToggle />

            <button
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;