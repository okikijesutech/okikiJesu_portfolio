import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // As the user scrolls through the About section, the Y value shifts from -50px to 50px
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion'];

  return (
    <section id="about" ref={containerRef}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="about-title"
      >
        <span className="about-title-number">01.</span> 
        About Me 
        <span className="about-title-line"></span>
      </motion.h2>

      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="about-text">
            Hello! My name is OkikiJesu and I enjoy creating engaging digital experiences that live on the internet. 
            My interest in web development evolved into a passion for crafting responsive, accessible, and high-performance user interfaces. 
            I focus on bridging the gap between design and solid engineering.
          </p>
          <p className="about-text-spaced">
            Fast-forward to today, and I’ve had the privilege of building a variety of robust products, 
            ranging from community-driven language learning platforms like Omoluabi to real-time chat applications with sub-millisecond bidirectional communication. 
            My main focus these days is leveraging modern frontend architectures to solve complex UI/UX challenges.
          </p>
          <p className="about-text-spaced">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-skills-list">
            {skills.map(skill => (
              <li key={skill} className="about-skill-item">
                <span className="about-skill-bullet">▹</span> {skill}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="about-image-wrapper"
        >
          {/* Parallax Background Square */}
          <motion.div 
            className="about-image-border"
            style={{ y: parallaxY }}
          ></motion.div>
          
          <div className="about-image-container">
            <img 
              src="/Profile.JPG" 
              alt="Oluwasina OkikiJesu Portrait" 
              className="about-image"
            />
            <div className="about-image-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
