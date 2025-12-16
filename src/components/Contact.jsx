// src/components/Contact/Contact.js
'use strict';

import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-decoration circle-1"></div>
      <div className="contact-decoration circle-2"></div>
      
      <div className="contact-container">
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="contact-title">Let's Create Something Amazing</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's chat about how we can bring your ideas to life
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info-section">
            <div className="info-card">
              <div className="info-icon">💌</div>
              <div className="info-content">
                <h3 className="info-title">Email Me</h3>
                <a href="mailto:simrankotaa@gmail.com" className="info-link">
                  simrankotaa@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <div className="info-content">
                <h3 className="info-title">Call Me</h3>
                <a href="tel:+19259978633" className="info-link">
                  (925) 997-8633
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3 className="info-title">Location</h3>
                <p className="info-text">Pleasanton, California</p>
              </div>
            </div>

            <div className="availability-card">
              <div className="availability-indicator">
                <span className="status-dot"></span>
                <span className="status-text">Available for opportunities</span>
              </div>
              <p className="availability-text">
                Currently seeking UI/UX research and development roles where I can contribute to meaningful projects and continue growing as a designer and researcher.
              </p>
            </div>
          </div>
          
          <div className="contact-form-section">
            <div className="connect-section">
              <h3 className="connect-title">Connect With Me</h3>
              <div className="social-links">
                <a 
                  href="https://linkedin.com/in/simran-kota" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <span className="social-icon">in</span>
                  <span className="social-text">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/simmcodes" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                >
                  <span className="social-icon">gh</span>
                  <span className="social-text">GitHub</span>
                </a>
              </div>
            </div>

            <div className="availability-banner">
              <div className="availability-indicator">
                <span className="status-dot"></span>
                <span className="status-text">Available for opportunities</span>
              </div>
              <p className="availability-text">
                Currently seeking UI/UX research and development roles where I can contribute to meaningful projects and continue growing as a designer and researcher.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What should I call you?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell me about your project or just say hi!"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <span className="btn-text">Send Message</span>
                <span className="btn-icon">✨</span>
              </button>

              {formStatus === 'success' && (
                <div className="form-success">
                  <span className="success-icon">🎉</span>
                  <p>Thank you! I'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <p className="footer-text">
            Designed & built with <span className="heart">💖</span> by Simran Kota
          </p>
          <p className="footer-subtext">© 2025 All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;