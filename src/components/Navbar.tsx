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
      className="flex items-center px-6 md:px-12 bg-[rgba(10,25,47,0.85)] backdrop-blur-[10px] fixed w-full z-10 shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]"
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="logo text-[var(--accent)] text-2xl font-bold font-[var(--font-mono)] hover:text-[#7dffe2] transition-colors cursor-pointer">
        OK
      </div>
      <div className="nav-links ml-auto flex gap-7 font-[var(--font-mono)] text-[13px] items-center">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
          >
            <span className="text-[var(--accent)] mr-1">0{i + 1}.</span> {link.name}
          </motion.a>
        ))}
        
        <motion.a 
          href="/okikijesu_oluwasina_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          download="okikijesu_oluwasina_Resume.pdf"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
          className="text-[var(--accent)] border border-[var(--accent)] rounded-[4px] px-4 py-2 ml-4 transition-all hover:bg-[rgba(100,255,218,0.1)]"
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
