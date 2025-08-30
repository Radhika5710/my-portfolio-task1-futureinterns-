import React from 'react';
import './Skills.css';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <div className="skills-section section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          {skillsData.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-header" style={{ color: category.color }}>
                <span className="category-icon" role="img" aria-label={category.category}>
                  {category.icon}
                </span>{' '}
                {category.category}
              </h3>
              <ul className="skills-list">
                {category.technologies.map((tech, techIndex) => (
                  <li className="skill-item" key={techIndex}>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
