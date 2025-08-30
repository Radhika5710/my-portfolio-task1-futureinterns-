export const skillsData = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 }
    ],
    icon: '🎨',
    color: '#667eea'
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 70 }
    ],
    icon: '⚙',
    color: '#f093fb'
  },
  {
    category: 'Database',
    technologies: [
      { name: 'MongoDB', level: 75 },
      { name: 'SQL', level: 70 }
    ],
    icon: '🗄',
    color: '#4fd1c5'
  },
  {
    category: 'Tools',
    technologies: [
      { name: 'Git', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'VS Code', level: 90 }
    ],
    icon: '🛠',
    color: '#f6ad55'
  }
];

// Helper function to get all technologies as a flat array (for backward compatibility if needed)
export const getAllTechnologies = () => {
  return skillsData.flatMap(category => 
    category.technologies.map(tech => tech.name)
  );
};

// Helper function to get technologies by category
export const getTechnologiesByCategory = (categoryName) => {
  const category = skillsData.find(cat => cat.category === categoryName);
  return category ? category.technologies : [];
};
