import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', paddingBottom: '20px' }}>
      <div style={{ marginBottom: '150px' }}>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginBottom: '20px' }}
        >
          04. What's Next?
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 600 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: 'var(--text-secondary)', fontSize: '18px', marginTop: '20px' }}
        >
          I’m currently looking for new opportunities, and my inbox is always open. 
          Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </motion.p>
        
        <motion.a 
          href="mailto:okikijesutech@gmail.com"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ 
            marginTop: '50px', 
            padding: '1.25rem 1.75rem', 
            border: '1px solid var(--accent)', 
            borderRadius: '4px', 
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent)',
            fontSize: '14px'
          }}
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
