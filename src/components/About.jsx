// src/components/About/About.jsx
'use strict';

import React from 'react';
import '../styles/about.css';

const About = () => {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span className="greeting-text">Hi, I'm</span>
            </div>
            <h1 className="about-title">
              Simran
            </h1>
            <h2 className="about-subtitle">
              UI/UX Researcher and Developer on a mission to make technology feel less like technology.
            </h2>
            <p className="about-tagline">
              I ask why and then I design the answer.
            </p>
            <p className="about-roles">
              Designer. Developer. Storyteller.
            </p>
            <p className="about-description">
              I build digital experiences that feel human because I never forget there's a person on the other side of the screen.
            </p>
            <p className="about-description">
              Curious by nature, creative by choice, empathetic by design.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">60+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
            </div>
            <div className="about-buttons">
              <button className="btn btn-primary" onClick={handleScrollToProjects}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={handleScrollToContact}>
                Let's Connect
              </button>
            </div>
          </div>
          <div className="about-image">
            <div className="image-frame">
              <img 
                src="/images/profile.jpg" 
                alt="Simran - UI/UX Researcher and Developer"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default About;