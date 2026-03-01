import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
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
    <section id="projects" className="py-24">
      <SectionHeader number="03" title="Some Things I’ve Built" />

      <div className="flex flex-col gap-[100px] mt-10">
        {projects.map((project, i) => (
          <FadeIn 
            key={project.title}
            delay={0.1}
            className={`grid grid-cols-12 items-center ${i % 2 === 0 ? 'text-right' : 'text-left'}`}
          >
            {/* Project Image Overlay */}
            <div 
              className={`
                col-span-12 md:col-span-7 bg-[var(--bg-secondary)] h-[360px] rounded opacity-60 border border-[var(--accent)] flex items-center justify-center z-10 overflow-hidden transition-all duration-300 hover:opacity-100 group
                ${i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6 md:col-end-13'}
                row-start-1
              `}
            >
              <a href={project.external || project.github} target="_blank" rel="noreferrer" className="w-full h-full block">
                <img 
                  src={project.image} 
                  alt={`${project.title} Preview`} 
                  className="w-full h-full object-cover grayscale contrast-120 mix-blend-multiply transition-all duration-300 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:contrast-100" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `
                      <div class="text-[14px] font-[var(--font-mono)] text-[var(--accent)] flex h-full items-center justify-center">
                        Project Preview
                      </div>
                    `;
                  }}
                />
              </a>
            </div>

            {/* Project Content */}
            <div 
              className={`
                col-span-12 md:col-span-7 z-20 flex flex-col pointer-events-none
                ${i % 2 === 0 ? 'md:col-start-6 md:col-end-13 items-start md:items-end' : 'md:col-start-1 md:col-end-8 items-start'}
                row-start-1 p-6 md:p-0
              `}
            >
              <p className="font-[var(--font-mono)] text-[var(--accent)] my-2.5 text-[13px] bg-[var(--bg-primary)] px-2 md:px-0 rounded md:bg-transparent">Featured Project</p>
              <h3 className="text-[28px] text-[var(--text-primary)] mb-5 font-semibold bg-[var(--bg-primary)] px-2 md:px-0 rounded md:bg-transparent pointer-events-auto">
                <a href={project.external || project.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </a>
              </h3>
              
              <div className="bg-[var(--bg-secondary)] p-[25px] rounded text-[var(--text-secondary)] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] w-full md:w-[110%] relative pointer-events-auto md:-ml-0 text-left md:text-inherit">
                {project.description}
              </div>

              <ul 
                className={`
                  flex flex-wrap gap-[15px] list-none font-[var(--font-mono)] text-[13px] text-[var(--text-secondary)] mt-[25px] p-0
                  ${i % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'}
                `}
              >
                {project.tech.map(t => <li key={t}>{t}</li>)}
              </ul>

              <div className="mt-5 flex gap-5 text-[var(--text-primary)] pointer-events-auto">
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link" className="hover:text-[var(--accent)] transition-colors"><Github size={20} /></a>
                {project.external && <a href={project.external} target="_blank" rel="noreferrer" aria-label="External Link" className="hover:text-[var(--accent)] transition-colors"><ExternalLink size={20} /></a>}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Projects;
