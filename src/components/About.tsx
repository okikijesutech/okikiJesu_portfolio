import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion'];

  return (
    <section id="about" ref={containerRef} className="py-24">
      <SectionHeader number="01" title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_2fr] gap-12 mt-10">
        <FadeIn delay={0.2} className="text-[var(--text-secondary)] text-lg leading-relaxed">
          <p>
            Hello! My name is OkikiJesu and I enjoy creating engaging digital experiences that live on the internet. 
            My interest in web development evolved into a passion for crafting responsive, accessible, and high-performance user interfaces. 
            I focus on bridging the gap between design and solid engineering.
          </p>
          <p className="mt-5">
            Fast-forward to today, and I’ve had the privilege of building a variety of robust products, 
            ranging from community-driven language learning platforms like Omoluabi to real-time chat applications with sub-millisecond bidirectional communication. 
            My main focus these days is leveraging modern frontend architectures to solve complex UI/UX challenges.
          </p>
          <p className="mt-5">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-2 mt-5 font-[var(--font-mono)] text-sm">
            {skills.map(skill => (
              <li key={skill} className="relative pl-5">
                <span className="text-[var(--accent)] absolute left-0">▹</span> {skill}
              </li>
            ))}
          </ul>
        </FadeIn>
        
        <FadeIn delay={0.4} className="relative w-full max-w-[300px] mx-auto mt-10 md:mt-0 group">
          {/* Parallax Background Square */}
          <motion.div 
            style={{ y: parallaxY }}
            className="w-full aspect-square border-2 border-[var(--accent)] rounded absolute top-5 left-5 -z-10 transition-all duration-300 group-hover:top-3 group-hover:left-3"
          />
          
          <div className="w-full aspect-square bg-[var(--accent)] rounded relative overflow-hidden z-10 transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
            <img 
              src="/Profile.JPG" 
              alt="Oluwasina OkikiJesu Portrait" 
              className="w-full h-full object-cover block transition-all duration-300 grayscale contrast-120 group-hover:grayscale-0 group-hover:contrast-100" 
            />
            <div className="w-full h-full bg-[rgba(10,25,47,0.4)] mix-blend-multiply absolute inset-0 transition-all duration-300 group-hover:bg-transparent pointer-events-none" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
