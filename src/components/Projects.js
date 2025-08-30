import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Talkmate-Bot',
    description: 'An AI-powered chatbot application built with React and Node.js. Features include real-time conversations, natural language processing integration, and a user-friendly interface for interactive communication.',
    image: '/images/talbot.jpeg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Radhika5710/Talkmate-Bot',
  },
  {
    id: 2,
    title: 'Anime Wishlist',
    description: 'A full-stack anime wishlist application built with React, Node.js, and MongoDB. Features include user authentication, personalized anime lists, and seamless integration with a free anime API.',
    image: '/images/anime.jpeg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Radhika5710/ANIME-WISHLIST-',
  },
  {
    id: 3,
    title: 'Employee Details',
    description: 'An employee management solution built with React, pug, and MongoDB. Features include employee CRUD operations, role-based authentication, and an admin dashboard for managing records.',
    image: '/images/employee.jpeg',
    technologies: ['React js', 'pug', 'CSS3', 'MongoDB'],
    github: 'https://github.com/Radhika5710/EMPLOYEE-DETAILS',
  },
  {
    id: 4,
    title: 'Virtual Mouse',
    description: 'A virtual mouse system developed using OpenCV and MediaPipe. Features include real-time hand gesture recognition for cursor control, click, and scroll functionalities without physical hardware.',
    image: '/images/virtual.jpeg',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    github: 'https://github.com/Radhika5710/Virtual-mouse',
  },

];

const Projects = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="projects-section section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map(project => (
            <div
              key={project.id}
              className={`project-card flip-card ${flipped[project.id] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(project.id)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link" onClick={e => e.stopPropagation()}>
                    <FontAwesomeIcon icon={faGithub} /> View on GitHub
                  </a>
                </div>
                <div className="flip-card-back">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
