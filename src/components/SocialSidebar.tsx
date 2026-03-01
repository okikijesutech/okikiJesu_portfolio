import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const SocialSidebar = () => {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/okikijesutech', icon: <Github size={20} /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/okikijesu/', icon: <Linkedin size={20} /> },
    { name: 'Twitter', url: 'https://x.com/okikioluwasina', icon: <Twitter size={20} /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }} // Delays entrance until hero finishes
      className="social-sidebar fixed bottom-0 left-10 flex flex-col items-center gap-5 z-50 text-[var(--text-secondary)]"
    >
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          whileHover={{ y: -5, color: 'var(--accent)' }}
          className="transition-colors duration-200"
        >
          {social.icon}
        </motion.a>
      ))}
      <div className="w-[1px] h-[90px] bg-[var(--text-secondary)] mt-2.5" />
    </motion.div>
  );
};

export default SocialSidebar;
