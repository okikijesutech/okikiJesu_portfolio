import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ 
        height: 'var(--nav-height)', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 50px', 
        background: 'rgba(10, 25, 47, 0.85)', 
        backdropFilter: 'blur(10px)', 
        position: 'fixed', 
        width: '100%', 
        zIndex: 10,
        boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)'
      }}
    >
      <div className="logo" style={{ color: 'var(--accent)', fontSize: '24px', fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>
        OK
      </div>
      <div className="nav-links" style={{ marginLeft: 'auto', display: 'flex', gap: '30px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            style={{ color: 'var(--text-primary)' }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '5px' }}>0{i + 1}.</span> {link.name}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
