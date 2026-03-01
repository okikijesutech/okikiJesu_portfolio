import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

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
        style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: 'clamp(26px, 5vw, 32px)', fontWeight: 600, marginBottom: '40px' }}
      >
        <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '20px' }}>03.</span> 
        Some Things I’ve Built 
        <span style={{ flex: 1, height: '1px', background: 'var(--text-secondary)', opacity: 0.2 }}></span>
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
        {projects.map((project, i) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(12, 1fr)', 
              alignItems: 'center',
              textAlign: i % 2 === 0 ? 'right' : 'left'
            }}
          >
            {/* Project Image Overlay */}
            <div style={{ 
              gridArea: '1 / 1 / -1 / 8', 
              gridColumn: i % 2 === 0 ? '1 / 8' : '6 / -1',
              background: 'var(--bg-secondary)', 
              height: '360px', 
              borderRadius: '4px', 
              opacity: 0.6,
              border: '1px solid var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              overflow: 'hidden'
            }}>
              <img 
                src={project.image} 
                alt={`${project.title} Preview`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} 
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = `
                    <div style="font-size: 14px; font-family: var(--font-mono); color: var(--accent);">
                      Project Preview
                    </div>
                  `;
                }}
              />
            </div>

            {/* Project Content */}
            <div style={{ 
              gridArea: '1 / 6 / -1 / -1', 
              gridColumn: i % 2 === 0 ? '6 / -1' : '1 / 8',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: i % 2 === 0 ? 'flex-end' : 'flex-start'
            }}>
              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', margin: '10px 0', fontSize: '13px' }}>Featured Project</p>
              <h3 style={{ fontSize: '28px', color: 'var(--text-primary)', marginBottom: '20px' }}>{project.title}</h3>
              
              <div style={{ 
                background: 'var(--bg-secondary)', 
                padding: '25px', 
                borderRadius: '4px', 
                color: 'var(--text-secondary)', 
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)', 
                width: '110%',
                position: 'relative'
              }}>
                {project.description}
              </div>

              <ul style={{ 
                display: 'flex', 
                justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start', 
                gap: '15px', 
                listStyle: 'none', 
                fontFamily: 'var(--font-mono)', 
                fontSize: '13px', 
                color: 'var(--text-secondary)',
                marginTop: '25px',
                padding: 0
              }}>
                {project.tech.map(t => <li key={t}>{t}</li>)}
              </ul>

              <div style={{ marginTop: '20px', display: 'flex', gap: '20px', color: 'var(--text-primary)' }}>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link"><Github size={20} /></a>
                {project.external && <a href={project.external} target="_blank" rel="noreferrer" aria-label="External Link"><ExternalLink size={20} /></a>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
