import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./About.css";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const skills = [
    "TypeScript / JavaScript",
    "React / Next.js",
    "NestJS / Node.js",
    "PostgreSQL / Supabase",
    "Prisma / TimescaleDB",
    "MQTT / WebSockets",
  ];

  return (
    <section id='about' ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='about-title'
      >
        <span className='about-title-number'>01.</span>
        About Me
        <span className='about-title-line'></span>
      </motion.h2>

      <div className='about-content'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className='about-text'>
            I'm a full-stack engineer based in Lagos, Nigeria. I founded{" "}
            <a
              href='https://the-factory-ng.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Factory.ng
            </a>{" "}
            — a venture studio building culturally appropriate digital
            infrastructure for African markets. I'm the sole engineer across all
            products, which means I own every layer: database schema, API
            design, auth systems, frontend architecture, and production
            deployments.
          </p>
          <p className='about-text-spaced'>
            My active products include <strong>EduFlows</strong>, a multi-tenant
            school management SaaS serving private schools in Nigeria's AFED
            network; <strong>Energy Flow OS</strong>, a virtual power plant
            platform for the Nigerian residential solar market; and{" "}
            <strong>PwmngerTS</strong>, an open-source zero-knowledge password
            manager. Building these has pushed me deep into multi-tenant data
            isolation, real-time telemetry pipelines, hardware protocols
            (Modbus/RS485), and end-to-end cryptographic security.
          </p>
          <p className='about-text-spaced'>
            Here are the technologies I work with most:
          </p>
          <ul className='about-skills-list'>
            {skills.map((skill) => (
              <li key={skill} className='about-skill-item'>
                <span className='about-skill-bullet'>▹</span> {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='about-image-wrapper'
        >
          <motion.div
            className='about-image-border'
            style={{ y: parallaxY }}
          ></motion.div>

          <div className='about-image-container'>
            <img
              src='/Profile.JPG'
              alt='Oluwasina OkikiJesu'
              className='about-image'
            />
            <div className='about-image-overlay'></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
