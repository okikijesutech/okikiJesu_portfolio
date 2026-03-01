import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion'];

  return (
    <section id="about" ref={containerRef} className="pt-[100px] pb-[20px]">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-[20px] text-[clamp(26px,5vw,32px)] font-semibold"
      >
        <span className="text-[var(--accent)] font-[var(--font-mono)] text-[20px]">01.</span> 
        About Me 
        <span className="flex-1 h-[1px] bg-[var(--text-secondary)] opacity-20"></span>
      </motion.h2>

      <div className="grid grid-cols-[minmax(0,3fr)_2fr] gap-[50px] mt-[40px] max-md:grid-cols-1">
        <FadeIn delay={0.2}>
          <p className="text-[var(--text-secondary)] text-[18px]">
            Hello! My name is OkikiJesu and I enjoy creating engaging digital experiences that live on the internet. 
            My interest in web development evolved into a passion for crafting responsive, accessible, and high-performance user interfaces. 
            I focus on bridging the gap between design and solid engineering.
          </p>
          <p className="text-[var(--text-secondary)] text-[18px] mt-[20px]">
            Fast-forward to today, and I’ve had the privilege of building a variety of robust products, 
            ranging from community-driven language learning platforms like Omoluabi to real-time chat applications with sub-millisecond bidirectional communication. 
            My main focus these days is leveraging modern frontend architectures to solve complex UI/UX challenges.
          </p>
          <p className="text-[var(--text-secondary)] text-[18px] mt-[20px]">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] list-none p-0 mt-[20px] font-[var(--font-mono)] text-[14px] text-[var(--text-secondary)]">
            {skills.map(skill => (
              <li key={skill} className="relative pl-[20px] mb-[10px]">
                <span className="text-[var(--accent)] absolute left-0">▹</span> {skill}
              </li>
            ))}
          </ul>
        </FadeIn>
        
        <FadeIn delay={0.4} className="relative w-[300px] mx-auto scale-90 md:scale-100 group">
          {/* Parallax Background Square */}
          <motion.div 
            style={{ y: parallaxY }}
            className="w-full aspect-square border-[2px] border-[var(--accent)] rounded-[4px] absolute top-[20px] left-[20px] z-0 transition-transform flex-shrink-0"
          />
          
          <div className="w-full aspect-square bg-[var(--accent)] rounded-[4px] relative overflow-hidden z-10">
            <img 
              src="/Profile.JPG" 
              alt="Oluwasina OkikiJesu Portrait" 
              className="w-full h-full object-cover block filter grayscale contrast-120 hover:grayscale-0 hover:contrast-100 transition-all duration-300" 
            />
            <div className="w-full h-full bg-[rgba(10,25,47,0.4)] mix-blend-multiply absolute top-0 left-0 pointer-events-none transition-all duration-300 hover:bg-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
