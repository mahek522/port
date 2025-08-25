import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaGraduationCap, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
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

  const stats = [
    { icon: <FaCode />, number: "4+", label: "Years Experience" },
    { icon: <FaUser />, number: "50+", label: "Projects Completed" },
    { icon: <FaGraduationCap />, number: "100%", label: "Client Satisfaction" },
    { icon: <FaHeart />, number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about-card" variants={itemVariants}>
              <h3>Who I Am</h3>
              <p>
                I'm Mahek Sultana, a passionate Full Stack Developer with expertise in both frontend and backend technologies. 
                I love creating innovative solutions that solve real-world problems and enhance user experiences.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={itemVariants}>
              <h3>My Journey</h3>
              <p>
                With over 4 years of experience in web development, I've worked on diverse projects ranging from 
                AI-based applications to modern web platforms. My passion for technology drives me to continuously 
                learn and adapt to new technologies.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={itemVariants}>
              <h3>What I Do</h3>
              <p>
                I specialize in building scalable web applications using React, Java, Spring Boot, and MySQL. 
                From concept to deployment, I ensure every project meets the highest standards of quality and performance.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-features"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="features-grid">
            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">🚀</div>
              <h4>Fast & Responsive</h4>
              <p>Optimized applications that load quickly and work seamlessly across all devices.</p>
            </motion.div>

            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">🛡️</div>
              <h4>Secure & Reliable</h4>
              <p>Built with security best practices to protect your data and ensure reliability.</p>
            </motion.div>

            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">🎨</div>
              <h4>Beautiful Design</h4>
              <p>Modern, intuitive interfaces that provide exceptional user experiences.</p>
            </motion.div>

            <motion.div
              className="feature-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon">⚡</div>
              <h4>Scalable Solutions</h4>
              <p>Architecture designed to grow with your business needs and user base.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;











