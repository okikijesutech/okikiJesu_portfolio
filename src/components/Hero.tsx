import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', marginBottom: '20px' }}
      >
        Hi, my name is
      </motion.p>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        style={{ fontSize: 'clamp(40px, 8vw, 80px)', color: 'var(--text-primary)', fontWeight: 600, lineHeight: 1.1 }}
      >
        OLUWASINA OkikiJesu.
      </motion.h2>
      
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{ fontSize: 'clamp(30px, 5vw, 60px)', color: 'var(--text-secondary)', fontWeight: 600, lineHeight: 0.9, marginTop: '10px' }}
      >
        I build high-performance web experiences.
      </motion.h3>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{ maxWidth: '540px', marginTop: '20px', color: 'var(--text-secondary)', fontSize: '20px' }}
      >
        I'm a frontend engineer specializing in building (and occasionally designing) exceptional digital experiences. 
        Currently, I'm focused on creating accessible, user-centric products using React and TypeScript.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={{ marginTop: '50px' }}
      >
        <a href="#projects" style={{ 
          padding: '1.25rem 1.75rem', 
          border: '1px solid var(--accent)', 
          borderRadius: '4px', 
          color: 'var(--accent)',
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          display: 'inline-block',
          marginRight: '20px'
        }}>
          Check out my work!
        </a>
        <a href="/okikijesu_oluwasina_Resume.pdf" target="_blank" rel="noopener noreferrer" download="okikijesu_oluwasina_Resume.pdf" style={{ 
          padding: '1.25rem 1.75rem', 
          backgroundColor: 'rgba(100, 255, 218, 0.1)',
          border: '1px solid var(--accent)', 
          borderRadius: '4px', 
          color: 'var(--accent)',
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          display: 'inline-block'
        }}>
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
