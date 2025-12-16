// src/components/Skills/Skills.jsx
'use strict';

import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "UX Research & Design",
      icon: "🔍",
      skills: [
        "User Research", "User Interviews", "Usability Testing",
        "User Personas", "Journey Mapping", "Wireframing",
        "Prototyping", "A/B Testing", "Design Thinking", "User Empathy"
      ]
    },
    {
      title: "UI Design & Tools",
      icon: "🎨",
      skills: [
        "Figma", "Adobe Creative Suite", "Sketch", "InVision",
        "Visual Design", "Interaction Design", "Design Systems",
        "Component Libraries", "WCAG Accessibility", "Responsive Design"
      ]
    },
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        "React.js", "JavaScript", "TypeScript", "HTML5 & CSS3",
        "Node.js", "Express.js", "RESTful APIs", "Responsive Web Design",
        "Performance Optimization", "Cross-browser Compatibility"
      ]
    },
    {
      title: "Backend & Full Stack",
      icon: "🔧",
      skills: [
        "Java", "JavaFX", "Python", "Database Design",
        "API Development", "System Architecture", "Git & GitHub",
        "Version Control", "Technical Documentation", "Debugging"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        "AWS (EC2, S3, RDS)", "Docker", "Terraform",
        "Infrastructure as Code", "CI/CD Pipelines", "Linux Administration",
        "System Monitoring", "Cloud Deployment", "Container Orchestration",
        "Infrastructure Automation"
      ]
    },
    {
      title: "Collaboration & Leadership",
      icon: "🤝",
      skills: [
        "Project Management", "Cross-functional Teams",
        "Stakeholder Communication", "Agile Methodology",
        "Team Leadership", "Strategic Thinking", "Problem Solving",
        "Data Analysis", "Creative Problem-Solving", "Analytical Thinking"
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-tag">My Expertise</span>
          <h2 className="skills-title">Skills & Capabilities</h2>
          <p className="skills-subtitle">
            Everything I bring to make ideas come alive
          </p>
        </div>
        
        <div className="skills-grid-simple">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card-simple">
              <div className="skill-card-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="role-tags-section">
          <h3 className="role-tags-title">Open to Opportunities In</h3>
          <div className="role-tags">
            <span className="role-tag">UI/UX Research & Development</span>
            <span className="role-tag">Frontend Developer</span>
            <span className="role-tag">Product Designer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;