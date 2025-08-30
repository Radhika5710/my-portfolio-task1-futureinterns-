import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
        <h1>Hi, I'm <span className="highlight">Radhika Shivanand Biradar</span></h1>
        <p className="tagline">Full Stack Developer & UI/UX Designer</p>
        <p className="intro">
          I create beautiful, functional, and user-centered digital experiences.
          Welcome to my portfolio website!
        </p>
        <div className="home-buttons">
          <Link to="/projects" className="btn">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
