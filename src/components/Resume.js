import React from 'react';
import './Resume.css';
import { skillsData } from '../data/skills';

const Resume = () => {
  const education = [
    {
      id: 1,
      degree: "BE in Computer Science",
      institution: "HKBK College of Engineering",
      year: "Ongoing",
      description: "CGPA: 9.07"
    },
    {
      id: 2,
      degree: "12th CBSE",
      institution: "Kittur Rani Channamma Residential Sainik School for Girls",
      year: "2022",
      description: "Percentage: 78"
    },
    {
      id: 3,
      degree: "  10th CBSE",
      institution: "Kittur Rani Channamma Residential Sainik School for Girls",
      year: "2020",
      description: "Percentage: 79.4"
    }
  ];

  const experience = [
    // No work experience provided yet
  ];

  const certifications = [
    {
      id: 1,
      name: "Udemy Certification on The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      year: "Aug 2025"
    },
    {
      id: 2,
      name: "Certification on React JS Beginner to Advance",
      issuer: "GeeksforGeeks",
      year: "Aug 2025"
    },
    {
      id: 3,
      name: "Value added course on enhancing Data Insights and Image Analysis",
      issuer: "",
      year: "Nov 2024"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Virtual Mouse using Hand Gestures By Using OpenCV and MediaPipe",
      description: "Developed a virtual mouse system that uses hand gesture recognition in real-time with OpenCV and MediaPipe, enabling cursor movement and click events based on finger positions and gestures.",
      technologies: [" python", "OpenCV", "MediaPipe"]
    },
    {
      id: 2,
      title: "Anime Wishlist",
      description: "Built a Full stack Anime Wishlist web application allowing users to search, view, and save their favorite anime titles. Developed the frontend using React and integrated it with a Node.js + Express backend connected to a MongoDB database.",
      technologies: ["React", "Node.js", "Express", "MongoDB"]
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-section section">
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        <div className="resume-content">
          <div className="resume-column">
            <h3>Education</h3>
            <div className="timeline">
              {education.map(item => (
                <div className="timeline-item" key={item.id}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{item.degree}</h4>
                    <h5>{item.institution}</h5>
                    <p className="timeline-year">{item.year}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3>Certifications</h3>
            <div className="certifications">
              {certifications.map(cert => (
                <div className="certification-item" key={cert.id}>
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer} - {cert.year}</p>
                </div>
              ))}
            </div>

            <h3>Projects</h3>
            <div className="projects-container">
              {projects.map(project => (
                <div className="project-item" key={project.id}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3>Skills</h3>
            <div className="skills-container">
              <div className="skills-row">
                {skillsData.filter(cat => ['Frontend', 'Backend', 'Database', 'Tools'].includes(cat.category)).map((category, index) => (
                  <div className="skill-category" key={index}>
                    <h4 className="category-header" style={{color: category.color}}>
                      <span className="category-icon" role="img" aria-label={category.category}>{category.icon}</span> {category.category}
                    </h4>
                    <ul className="category-skills">
                      {category.technologies.map((tech, techIndex) => (
                        <li className="skill-item" key={techIndex}>
                          {tech.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {skillsData.filter(cat => !['Frontend', 'Backend', 'Database', 'Tools'].includes(cat.category)).map((category, index) => (
                <div className="skill-category" key={index}>
                  <h4 className="category-header" style={{color: category.color}}>
                    <span className="category-icon" role="img" aria-label={category.category}>{category.icon}</span> {category.category}
                  </h4>
                  <ul className="category-skills">
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
        <div className="resume-download">
          <button className="btn" onClick={handlePrint}>
            Print Resume (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
