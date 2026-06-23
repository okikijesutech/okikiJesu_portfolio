import { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='navbar'
    >
      <div className='navbar-logo'>OK</div>
      <button
        type='button'
        className='nav-toggle'
        aria-label='Toggle navigation menu'
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className='nav-toggle-bar' />
        <span className='nav-toggle-bar' />
        <span className='nav-toggle-bar' />
      </button>
      <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className='nav-link'
          >
            <span className='nav-link-number'>0{i + 1}.</span> {link.name}
          </motion.a>
        ))}

        <motion.a
          href='/okikijesu_oluwasina_Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          download='okikijesu_oluwasina_Resume.pdf'
          onClick={() => setIsMenuOpen(false)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
          className='resume-btn'
        >
          Resume
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
