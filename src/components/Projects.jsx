// src/components/Projects/Projects.jsx
'use strict';

import React, { useState } from 'react';
import '../styles/projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Professional Networking Platform',
      category: 'UX Research & UI Development',
      type: 'ux',
      timeline: 'May 2025 - Present',
      role: 'UX Researcher & Frontend Developer',
      shortDescription: 'Full-cycle product development combining user research, accessible UI design, and React.js implementation for a professional networking application.',
      fullDescription: 'Led complete product development for professional networking application to help students and professionals connect more effectively, conducting end-to-end UX research and building accessible, production-ready interfaces.',
      challenge: 'Create a networking platform that effectively connects professionals while ensuring accessibility for all users and incorporating AI-powered personalization.',
      solution: 'Conducted comprehensive user research with 15+ participants, designed accessible interfaces in Figma with WCAG 2.1 AA compliance, and built production-ready React.js application with full accessibility features.',
      impact: [
        'Achieved 40% improvement in task completion rates after implementing accessibility features',
        'Users praised clear navigation and ease of use across desktop and mobile devices',
        'Verified 4.5:1 contrast ratios for accessible color palette',
        'Successfully tested with NVDA and VoiceOver screen readers',
        'Explored AI personalization for transparent, explainable connection suggestions'
      ],
      responsibilities: [
        'Conducted user interviews with 15+ participants by developing interview protocol and recruiting through student networks',
        'Facilitated sessions about networking challenges and desired features',
        'Coded qualitative feedback to identify top pain points and user needs',
        'Designed complete interface in Figma starting with wireframes to map user flows',
        'Created high-fidelity mockups with accessible color palette (verified contrast ratios)',
        'Designed readable typography (16px minimum) and consistent component library',
        'Built production-ready React.js application with JavaScript',
        'Implemented accessible components using semantic HTML and comprehensive ARIA labels',
        'Developed keyboard navigation patterns with visible focus indicators',
        'Conducted usability testing revealing significant improvements',
        'Ensured AI recommendations remained transparent and accessible to screen reader users'
      ],
      tools: ['User Interviews', 'Figma', 'React.js', 'JavaScript', 'WCAG 2.1', 'ARIA', 'NVDA', 'VoiceOver'],
      color: 'pink',
      hasLiveDemo: true,
      hasGithub: true,
      liveDemoUrl: 'glintor.netlify.app',
      githubUrl: 'https://github.com/simmcodes/Glintor'
    },
    {
      id: 2,
      title: 'PeerFlix - Decentralized Video Platform',
      category: 'Cloud Infrastructure & Deployment',
      type: 'cloud',
      timeline: 'Feb 2025 - April 2025',
      role: 'Cloud Engineer & DevOps',
      shortDescription: 'Cloud computing course project focused on deploying a decentralized peer-to-peer video platform on AWS infrastructure with automated deployment pipelines.',
      fullDescription: 'Deployed and managed a decentralized video sharing platform on AWS cloud infrastructure, focusing on infrastructure automation, containerization, and scalable deployment practices.',
      challenge: 'Deploy a scalable video platform with decentralized architecture on cloud infrastructure while implementing automated deployment pipelines and ensuring system reliability.',
      solution: 'Leveraged AWS services (EC2, RDS, S3) with Docker containerization and Terraform for infrastructure as code, creating an automated deployment pipeline for the peer-to-peer video platform.',
      impact: [
        'Successfully deployed full-stack application on AWS EC2 instances',
        'Automated infrastructure provisioning reducing deployment time by 60%',
        'Implemented monitoring and logging for 99.9% uptime',
        'Managed Security Groups and network configurations for secure deployment',
        'Built scalable peer-to-peer architecture reducing server load'
      ],
      responsibilities: [
        'Deployed full-stack video application on AWS EC2 instances with RDS database integration',
        'Configured AWS S3 storage for efficient video content delivery',
        'Containerized application using Docker for consistent environment setup',
        'Automated infrastructure provisioning using Terraform managing EC2, S3, and Security Groups',
        'Implemented reproducible deployments through Infrastructure as Code',
        'Built automated deployment pipeline for continuous integration',
        'Configured Security Groups, network configurations, and access controls',
        'Implemented system monitoring and logging for performance tracking',
        'Applied Linux system administration for server configuration',
        'Optimized resource distribution for decentralized architecture'
      ],
      tools: ['AWS (EC2, RDS, S3)', 'Docker', 'Terraform', 'Linux', 'Infrastructure as Code', 'CI/CD'],
      color: 'purple',
      hasGithub: true,
      hasLiveDemo: false,
      githubUrl: 'https://github.com/simmcodes/Peerflix.git'
    },
    {
      id: 3,
      title: 'Beauty Blog Platform',
      category: 'Accessible Web Development',
      type: 'web',
      timeline: 'Sep 2024 - Dec 2024',
      role: 'UX Designer & Frontend Developer',
      shortDescription: 'Designed and developed WCAG 2.1 AA compliant blog platform demonstrating end-to-end accessible design and frontend development skills.',
      fullDescription: 'Created an accessible blog platform focusing on user-centered design principles, WCAG compliance, and accessible React.js frontend development from concept to implementation.',
      challenge: 'Build a visually appealing blog platform that maintains full accessibility compliance while creating an engaging user experience across all devices.',
      solution: 'Applied accessible design principles from the start in Figma, then implemented using semantic HTML5, proper ARIA landmarks, and comprehensive keyboard navigation in React.js.',
      impact: [
        'Achieved WCAG 2.1 AA compliance across entire platform',
        'Created documented design system with 15+ accessible components',
        'Verified accessibility through NVDA and VoiceOver screen reader testing',
        'Implemented full keyboard-only navigation functionality',
        'Designed accessible color palette with verified contrast ratios'
      ],
      responsibilities: [
        'Created complete visual design in Figma with accessibility built-in from design phase',
        'Selected accessible color palette with verified contrast ratios meeting WCAG standards',
        'Designed readable typography hierarchy ensuring 16px minimum font sizes',
        'Created comprehensive component library with accessibility documentation',
        'Implemented accessible React.js frontend using semantic HTML5 elements',
        'Used proper HTML5 elements (article, nav, main, section) for content structure',
        'Implemented proper ARIA landmarks for screen reader navigation',
        'Created logical heading hierarchy (h1-h6) throughout the platform',
        'Added descriptive alt text for all images',
        'Developed complete keyboard-only navigation functionality',
        'Conducted accessibility testing navigating site with keyboard only',
        'Tested with NVDA and VoiceOver screen readers to verify full accessibility'
      ],
      tools: ['User Research', 'Figma', 'React.js', 'HTML5', 'CSS3', 'WCAG 2.1', 'Accessibility Testing'],
      color: 'blue',
      hasLiveDemo: true,
      hasGithub: true,
      liveDemoUrl: 'beautyblogsim.netlify.app',
      githubUrl: 'https://github.com/simmcodes/neu-info6150-web-design-and-user-experience-engineering-fall2024/tree/main/final-project'
    },
    {
      id: 4,
      title: 'Image Management Tool',
      category: 'Java Application Development',
      type: 'tool',
      timeline: 'Sep 2024 - Dec 2024',
      role: 'UX Researcher & Java Developer',
      shortDescription: 'Desktop application built with Java and JavaFX focusing on user research insights and intuitive file management workflows.',
      fullDescription: 'Designed and developed a desktop image management application using Java and JavaFX, combining user research to understand workflow needs with technical implementation of file handling and image processing.',
      challenge: 'Create an intuitive desktop application for complex image management and conversion workflows using Java and JavaFX while ensuring usability for non-technical users.',
      solution: 'Conducted user research to understand image management pain points, then designed and developed a Java/JavaFX application with drag-and-drop functionality and clear visual feedback.',
      impact: [
        'Developed intuitive drag-and-drop interface reducing user learning curve',
        'Implemented multi-format image conversion (JPG, PNG, WebP)',
        'Created real-time processing progress indicators',
        'Built comprehensive error handling with user-friendly messaging',
        'Achieved 95% task completion rate in user testing'
      ],
      responsibilities: [
        'Conducted user research to understand image management workflows and pain points',
        'Identified key user needs for file organization and batch processing',
        'Designed intuitive desktop interface prioritizing usability',
        'Developed complete application using Java and JavaFX',
        'Implemented drag-and-drop file upload functionality',
        'Built multi-format image conversion system',
        'Created batch processing capabilities for multiple files',
        'Developed real-time processing progress indicators',
        'Implemented comprehensive error handling with clear user messaging',
        'Designed clear visual feedback for all user actions',
        'Conducted usability testing to validate design decisions',
        'Iterated based on user feedback to improve workflows'
      ],
      tools: ['User Research', 'Java', 'JavaFX', 'File Processing', 'Desktop UI Design'],
      color: 'mint',
      hasLiveDemo: false,
      hasGithub: true,
      githubUrl: 'https://github.com/simmcodes/neu-info5100-application-engineering--development-fall2024.git'
    },
    {
      id: 5,
      title: 'Music Recommendation System',
      category: 'Machine Learning & AI/UX',
      type: 'ml',
      timeline: 'Oct 2024 - Present',
      role: 'ML Developer & UX Researcher',
      shortDescription: 'Building personalized music recommendation system using machine learning while researching transparent AI design and fairness considerations.',
      fullDescription: 'Developing a machine learning-powered music recommendation system that analyzes user listening behavior patterns to deliver personalized suggestions, while exploring UX challenges of transparent and fair AI recommendations.',
      challenge: 'Create accurate music recommendations using ML while ensuring transparency, user control, and addressing algorithmic bias and fairness concerns.',
      solution: 'Building ML model with Python and scikit-learn analyzing multiple behavioral features, while researching UX patterns for explainable AI and user-controllable recommendations.',
      impact: [
        'Analyzing multiple behavioral features: play time, replay frequency, artist preferences',
        'Incorporating temporal patterns: time of day, day of week listening habits',
        'Tracking engagement actions: likes, playlist creation, downloads',
        'Researching transparent recommendation explanations',
        'Exploring fairness and diversity in algorithmic recommendations'
      ],
      responsibilities: [
        'Building personalized music recommendation system using machine learning',
        'Analyzing user listening behavior patterns including play time and song replay frequency',
        'Incorporating artist preferences and temporal listening patterns',
        'Tracking time of day and day of week usage patterns',
        'Monitoring user engagement actions (likes, playlist creation, downloads)',
        'Developing ML model using Python and scikit-learn',
        'Analyzing multiple behavioral features to understand user music taste',
        'Delivering personalized recommendations based on comprehensive data analysis',
        'Researching UX challenges of explaining AI recommendations to users',
        'Exploring design patterns for transparent recommendation systems',
        'Investigating how to allow users to understand why songs were recommended',
        'Designing interfaces for users to refine recommendations based on preferences',
        'Studying fairness and bias considerations in recommendation systems',
        'Understanding how algorithms can create filter bubbles',
        'Researching how to introduce music diversity while respecting preferences'
      ],
      tools: ['Python', 'scikit-learn', 'Machine Learning', 'Data Analysis', 'UX Research', 'AI Ethics'],
      color: 'peach',
      hasLiveDemo: false,
      hasGithub: true,
      githubUrl: ''
    },
    {
      id: 6,
      title: 'Market Research & Consumer Insights',
      category: 'UX Research & Data Analysis',
      type: 'research',
      timeline: 'Jan 2019 - Nov 2021',
      role: 'Project Manager & UX Researcher',
      shortDescription: 'Led 60+ primary research studies combining qualitative and quantitative methods for major consumer brands, translating data insights into strategic recommendations.',
      fullDescription: 'Designed and executed comprehensive research studies for consumer brands at Ugam (A Merkle Company), conducting large-scale surveys, in-depth interviews, and mixed-methods analysis to drive strategic business decisions.',
      challenge: 'Conduct large-scale research studies collecting both qualitative depth and quantitative validation while managing complex stakeholder requirements and tight timelines.',
      solution: 'Built comprehensive survey instruments using Qualtrics and Decipher, recruited diverse samples through Lucid Marketplace, and analyzed mixed-methods data to deliver actionable insights.',
      impact: [
        'Designed and executed 60+ primary research studies successfully',
        'Collected robust data from 5,000+ respondents per study',
        'Conducted 20+ in-depth interviews and focus groups',
        'Drove 25% improvement in campaign effectiveness through insights',
        'Achieved 98% client satisfaction through strategic recommendations',
        'Improved research efficiency by 25% through standardized processes'
      ],
      responsibilities: [
        'Designed comprehensive survey questionnaires combining qualitative open-ended questions with quantitative scaled responses',
        'Built complex survey instruments using Qualtrics, Lucid Marketplace, and Decipher',
        'Programmed skip logic and randomization for robust data collection',
        'Set quality controls ensuring data reliability',
        'Recruited diverse participant samples through Lucid Marketplace',
        'Defined demographic quotas and screening criteria for representative samples',
        'Managed recruitment delivering samples enabling confident generalization',
        'Conducted qualitative research including in-depth interviews and focus groups',
        'Explored consumer attitudes, motivations, and decision-making processes',
        'Used probing techniques to uncover deeper insights beyond survey data',
        'Analyzed mixed-methods data coding qualitative transcripts and responses',
        'Identified themes and sentiment patterns from qualitative analysis',
        'Conducted statistical analysis using cross-tabulations and significance testing',
        'Performed regression analysis uncovering key drivers of behavior',
        'Coordinated cross-functional teams throughout research lifecycle',
        'Presented research findings to C-level executives',
        'Translated complex data into strategic business recommendations',
        'Led team of 20 researchers across multiple concurrent projects'
      ],
      tools: ['Qualtrics', 'Decipher', 'Lucid Marketplace', 'Statistical Analysis', 'Qualitative Coding', 'Data Analysis'],
      color: 'lavender',
      hasLiveDemo: false,
      hasGithub: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ux', label: 'UX Research & Design' },
    { id: 'web', label: 'Web Development' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'tool', label: 'Applications' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'research', label: 'Research' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Real-world problems solved through research, design, and development
          </p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card project-${project.color}`}
              onClick={() => openProjectModal(project)}
            >
              <div className="project-image-wrapper">
                <div className="project-image-placeholder">
                  <span className="placeholder-icon">
                    {project.type === 'ux' && '🎨'}
                    {project.type === 'web' && '💻'}
                    {project.type === 'cloud' && '☁️'}
                    {project.type === 'tool' && '🔧'}
                    {project.type === 'ml' && '🤖'}
                    {project.type === 'research' && '🔍'}
                  </span>
                  <p className="placeholder-text">View Details</p>
                </div>
                <div className="project-overlay">
                  <span className="overlay-tag">{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-timeline">{project.timeline}</span>
                  <span className="project-role">{project.role}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>

                <div className="project-tools">
                  {project.tools.slice(0, 4).map((tool, idx) => (
                    <span key={idx} className="tool-tag">{tool}</span>
                  ))}
                  {project.tools.length > 4 && (
                    <span className="tool-tag">+{project.tools.length - 4} more</span>
                  )}
                </div>

                <button className="view-details-btn">
                  View Full Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>×</button>
            
            <div className="modal-header">
              <div className="modal-category">{selectedProject.category}</div>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-meta">
                <span>{selectedProject.timeline}</span>
                <span className="separator">•</span>
                <span>{selectedProject.role}</span>
              </div>
              
              {/* Action Buttons */}
              <div className="modal-actions">
                {selectedProject.hasLiveDemo && (
                  <a 
                    href={selectedProject.liveDemoUrl || '#'} 
                    className="action-btn live-demo-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!selectedProject.liveDemoUrl) {
                        e.preventDefault();
                        alert('Live demo link coming soon!');
                      }
                    }}
                  >
                    <span className="btn-icon">🚀</span>
                    Live Demo
                  </a>
                )}
                {selectedProject.hasGithub && (
                  <a 
                    href={selectedProject.githubUrl || '#'} 
                    className="action-btn github-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!selectedProject.githubUrl) {
                        e.preventDefault();
                        alert('GitHub link coming soon!');
                      }
                    }}
                  >
                    <span className="btn-icon">💻</span>
                    View Code
                  </a>
                )}
              </div>
            </div>

            <div className="modal-body">
              <section className="modal-section">
                <h3>Overview</h3>
                <p>{selectedProject.fullDescription}</p>
              </section>

              <section className="modal-section">
                <h3>The Challenge</h3>
                <p>{selectedProject.challenge}</p>
              </section>

              <section className="modal-section">
                <h3>The Solution</h3>
                <p>{selectedProject.solution}</p>
              </section>

              <section className="modal-section">
                <h3>Impact & Results</h3>
                <ul className="modal-list">
                  {selectedProject.impact.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-section">
                <h3>My Responsibilities</h3>
                <ul className="modal-list">
                  {selectedProject.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-section">
                <h3>Tools & Technologies</h3>
                <div className="modal-tools">
                  {selectedProject.tools.map((tool, idx) => (
                    <span key={idx} className="modal-tool-tag">{tool}</span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;