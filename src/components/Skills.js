import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, 
  FaDatabase, FaServer, FaTools, FaGitAlt, FaDocker 
} from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiMysql, SiNpm, SiPostman } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, level: 88, color: "#F7DF1E" },
        { name: "React", icon: <FaReact />, level: 85, color: "#61DAFB" }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Java", icon: <FaJava />, level: 92, color: "#ED8B00" },
        { name: "Spring Boot", icon: <SiSpringboot />, level: 88, color: "#6DB33F" },
        { name: "Hibernate", icon: <SiHibernate />, level: 85, color: "#BCAE79" },
        { name: "REST APIs", icon: <FaServer />, level: 90, color: "#FF6B6B" }
      ]
    },
    {
      title: "Database & Tools",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", icon: <SiMysql />, level: 87, color: "#4479A1" },
        { name: "Git", icon: <FaGitAlt />, level: 85, color: "#F05032" },
        { name: "Docker", icon: <FaDocker />, level: 80, color: "#2496ED" },
        { name: "Postman", icon: <SiPostman />, level: 88, color: "#FF6C37" }
      ]
    }
  ];

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
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="skill-header">
                      <div 
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <h4>{skill.name}</h4>
                    </div>

                    <div className="skill-progress">
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="progress-text">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Additional Skills</h3>
          <div className="skills-tags">
            {[
              "Responsive Design", "UI/UX Design", "Agile Methodology", 
              "RESTful APIs", "Microservices", "JUnit Testing", 
              "Maven", "Gradle", "JSON", "XML", "JWT", "OAuth2"
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;











