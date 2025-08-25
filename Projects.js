import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJava, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiTensorflow, SiArduino } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI Based Stress Prediction System",
      description: "An intelligent system that predicts stress levels using machine learning algorithms and physiological data analysis. Features real-time monitoring and personalized recommendations.",
      image: "🧠",
      category: "ai",
      technologies: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"],
      icons: [<FaBrain />, <SiTensorflow />],
      github: "#",
      live: "#",
      features: ["Real-time stress monitoring", "ML-based prediction", "Personalized recommendations", "Data visualization"]
    },
    {
      id: 2,
      title: "Bird Voice Recognition System",
      description: "Advanced audio recognition system that identifies bird species through their vocalizations using deep learning and signal processing techniques.",
      image: "🐦",
      category: "ai",
      technologies: ["Python", "Deep Learning", "Audio Processing", "Neural Networks"],
      icons: [<FaBrain />, <SiTensorflow />],
      github: "#",
      live: "#",
      features: ["Audio pattern recognition", "Species classification", "Real-time processing", "High accuracy detection"]
    },
    {
      id: 3,
      title: "Simple Clap Control Home Automation",
      description: "Smart home automation system controlled by clap detection using Arduino and sensors. Provides hands-free control of home appliances.",
      image: "🏠",
      category: "iot",
      technologies: ["Arduino", "C++", "Sensors", "IoT"],
      icons: [<SiArduino />],
      github: "#",
      live: "#",
      features: ["Clap detection", "Appliance control", "Energy efficient", "Easy installation"]
    },
    {
      id: 4,
      title: "Weather Forecasting App",
      description: "Modern weather application with real-time data, forecasts, and interactive maps. Built with React and integrated with weather APIs.",
      image: "🌤️",
      category: "web",
      technologies: ["React", "JavaScript", "Weather API", "CSS3"],
      icons: [<FaReact />],
      github: "#",
      live: "#",
      features: ["Real-time weather data", "5-day forecast", "Interactive maps", "Location-based services"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'iot', label: 'IoT' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Showcasing my latest work</p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                layout
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="project-image">
                  <div className="project-emoji">{project.image}</div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.icons.map((icon, index) => (
                      <span key={index} className="tech-icon">
                        {icon}
                      </span>
                    ))}
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Interested in working together?</h3>
          <p>Let's discuss your next project and bring your ideas to life!</p>
          <motion.button
            className="btn btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;











