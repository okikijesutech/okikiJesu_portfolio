import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "EduFlows",
      description:
        "Multi-tenant school management SaaS serving Nigerian private schools. Covers fee collection, results management, timetabling, and AI-assisted curriculum planning — with strict tenant data isolation across every layer. Built with Next.js, NestJS, Supabase, and Prisma on a Turborepo monorepo.",
      tech: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "Supabase",
        "Prisma",
        "PostgreSQL",
      ],
      github: "https://github.com/okikijesutech",
      external: "",
      image: "/eduflowsDashboard.png",
    },
    {
      title: "PwmngerTS",
      description:
        "Open-source zero-knowledge password manager. The server never sees plaintext — all encryption and decryption happens client-side. Went through two full security audits: resolved token leakage in API responses, stored XSS in the browser extension, broken HKDF salt, and missing rate limiting across all routes.",
      tech: ["TypeScript", "Node.js", "Web Crypto API", "Browser Extension"],
      github: "https://github.com/okikijesutech/PwmngerTS",
      external: "",
      image: "/screenshot-chat.png",
    },
    {
      title: "Omoluabi",
      description:
        "Open-source Yorùbá language learning platform — preserving an endangered language through gamified, community-driven content. Features spaced repetition, audio pronunciation, and a contribution system for native speakers to submit and validate content.",
      tech: ["React", "TypeScript", "NestJS", "Supabase", "Zustand"],
      github: "https://github.com/okikijesutech/Omoluabi",
      external: "",
      image: "/projects/omoluabi.png",
    },
  ];

  return (
    <section id='projects'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='projects-title'
      >
        <span className='projects-title-number'>03.</span>
        Some Things I've Built
        <span className='projects-title-line'></span>
      </motion.h2>

      <div className='projects-list'>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`project-row ${i % 2 === 0 ? "project-row-even" : "project-row-odd"}`}
          >
            <div className='project-image-container'>
              <a
                href={project.external || project.github}
                target='_blank'
                rel='noreferrer'
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className='project-image'
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `
                      <div style="font-size: 14px; font-family: var(--font-mono); color: var(--accent); display: flex; align-items: center; justify-content: center; height: 100%;">
                        ${project.title}
                      </div>
                    `;
                  }}
                />
              </a>
            </div>

            <div className='project-content'>
              <p className='project-label'>Featured Project</p>
              <h3 className='project-title'>
                <a
                  href={project.external || project.github}
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {project.title}
                </a>
              </h3>

              <div className='project-description'>{project.description}</div>

              <ul className='project-tech-list'>
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className='project-links'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub'
                  className='project-link-icon'
                >
                  <Github size={20} />
                </a>
                {project.external && (
                  <a
                    href={project.external}
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Live site'
                    className='project-link-icon'
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
