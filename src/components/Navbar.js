import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Radhika Shivanand Biradar
        </Link>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={getNavLinkClass('/')} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className={getNavLinkClass('/about')} onClick={closeMenu}>
            About
          </Link>
          <Link to="/projects" className={getNavLinkClass('/projects')} onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/resume" className={getNavLinkClass('/resume')} onClick={closeMenu}>
            Resume
          </Link>
          <Link to="/skills" className={getNavLinkClass('/skills')} onClick={closeMenu}>
            Skills
          </Link>
          <Link to="/contact" className={getNavLinkClass('/contact')} onClick={closeMenu}>
            Contact
          </Link>
        </div>
        <div className="nav-social">
          <a href="https://github.com/Radhika5710" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/radhika-biradar-b62778360" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
