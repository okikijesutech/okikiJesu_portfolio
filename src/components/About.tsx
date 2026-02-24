import { motion } from 'framer-motion';

const About = () => {
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Framer Motion'];

  return (
    <section id="about">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: 'clamp(26px, 5vw, 32px)', fontWeight: 600 }}
      >
        <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '20px' }}>01.</span> 
        About Me 
        <span style={{ flex: 1, height: '1px', background: 'var(--text-secondary)', opacity: 0.2 }}></span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) 2fr', gap: '50px', marginTop: '40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>
            Hello! My name is OkikiJesu and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2021 when I decided to try editing custom themes — 
            turns out hacking together layouts taught me everything about how the web works underneath.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginTop: '20px' }}>
            Fast-forward to today, and I’ve had the privilege of working on a variety of projects, 
            ranging from full-stack language learning platforms to secure password managers. 
            My main focus these days is building accessible, high-performance web applications.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginTop: '20px' }}>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, minmax(140px, 200px))', 
            listStyle: 'none', 
            padding: 0, 
            marginTop: '20px', 
            fontFamily: 'var(--font-mono)', 
            fontSize: '14px',
            color: 'var(--text-secondary)'
          }}>
            {skills.map(skill => (
              <li key={skill} style={{ position: 'relative', paddingLeft: '20px', marginBottom: '10px' }}>
                <span style={{ color: 'var(--accent)', position: 'absolute', left: 0 }}>▹</span> {skill}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ position: 'relative', width: '300px', margin: '0 auto' }}
        >
          <div style={{ 
            width: '100%', 
            aspectRatio: '1', 
            border: '2px solid var(--accent)', 
            borderRadius: '4px', 
            position: 'absolute', 
            top: '20px', 
            left: '20px',
            zIndex: 0
          }}></div>
          <div style={{ 
            width: '100%', 
            aspectRatio: '1', 
            background: 'var(--accent)', 
            borderRadius: '4px', 
            position: 'relative', 
            overflow: 'hidden',
            zIndex: 1
          }}>
            <div style={{ width: '100%', height: '100%', background: 'rgba(10, 25, 47, 0.4)', mixBlendMode: 'multiply' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
