import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Omoluabi',
      description: 'An open-source language learning platform dedicated to preserving and teaching African languages, starting with Yoruba. Features gamified learning and community-driven content enforcing software engineering best practices.',
      tech: ['React', 'TypeScript', 'Vite', 'Firebase', 'Zustand'],
      github: 'https://github.com/okikijesutech/Omoluabi',
      external: '',
      image: '/projects/omoluabi.png' 
    },
    {
      title: 'FInFlow',
      description: 'A premium FinTech dashboard featuring glassmorphism, interactive analytics with Recharts, and smooth micro-animations. Built for high-performance financial management and elegant data visualization.',
      tech: ['React 19', 'Tailwind CSS v4', 'Recharts', 'Framer Motion'],
      github: 'https://github.com/okikijesutech/FInFlow',
      external: 'https://fin-flow-silk.vercel.app/',
      image: '/finflow-screenshot.png'
    },
    {
      title: 'Chatter (Chat-ME)',
      description: 'A high-performance, real-time chat application demonstrating advanced frontend engineering capabilities. Features sub-millisecond bidirectional communication, virtualized lists for rendering thousands of messages smoothly, and complex state orchestration.',
      tech: ['Next.js 15+', 'React', 'Tailwind CSS', 'Supabase Realtime'],
      github: 'https://github.com/okikijesutech/Chat-ME',
      external: 'https://chat-me-tau-rosy.vercel.app/',
      image: '/screenshot-chat.png'
    }
  ];

  return (
    <section id="projects">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="projects-title"
      >
        <span className="projects-title-number">03.</span> 
        Some Things I’ve Built 
        <span className="projects-title-line"></span>
      </motion.h2>

      <div className="projects-list">
        {projects.map((project, i) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`project-row ${i % 2 === 0 ? 'project-row-even' : 'project-row-odd'}`}
          >
            {/* Project Image Overlay */}
            <div className="project-image-container">
              <a href={project.external || project.github} target="_blank" rel="noreferrer" style={{ width: '100%', height: '100%' }}>
                <img 
                  src={project.image} 
                  alt={`${project.title} Preview`} 
                  className="project-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `
                      <div style="font-size: 14px; font-family: var(--font-mono); color: var(--accent); display: flex; align-items: center; justify-content: center; height: 100%;">
                        Project Preview
                      </div>
                    `;
                  }}
                />
              </a>
            </div>

            {/* Project Content */}
            <div className="project-content">
              <p className="project-label">Featured Project</p>
              <h3 className="project-title">
                <a href={project.external || project.github} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  {project.title}
                </a>
              </h3>
              
              <div className="project-description">
                {project.description}
              </div>

              <ul className="project-tech-list">
                {project.tech.map(t => <li key={t}>{t}</li>)}
              </ul>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link" className="project-link-icon"><Github size={20} /></a>
                {project.external && <a href={project.external} target="_blank" rel="noreferrer" aria-label="External Link" className="project-link-icon"><ExternalLink size={20} /></a>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
