import React from 'react';
import './About.css';
import { skillsData } from '../data/skills';

const About = () => {
  return (
    <div className="about-section section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Radhika Shivanand Biradar, a passionate full-stack developer eager to build modern web applications. With a strong foundation in frontend and backend technologies, I enjoy creating seamless and user-friendly digital experiences. My journey in tech began while working on academic and personal projects, where I discovered my love for problem-solving and turning ideas into reality through code. I’m enthusiastic about learning, exploring new technologies, and contributing to meaningful projects. Outside of coding, I enjoy hiking, reading tech blogs, and exploring open-source communities to keep growing as a developer.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <h4>Name</h4>
                <p>Radhika Shivanand Biradar</p>
              </div>
              <div className="info-item">
                <h4>Email</h4>
                <p>radhikabiradar5710@gmail.com</p>
              </div>
              <div className="info-item">
                <h4>Location</h4>
                <p>Bengaluru</p>
              </div>
              <div className="info-item">
                <h4>Availability</h4>
                <p>Available for job</p>
              </div>
            </div>
          </div>
          <div className="skills-container">
            {/* Skills section removed as per user request */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
