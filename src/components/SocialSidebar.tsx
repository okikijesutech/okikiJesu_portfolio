import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import "./SocialSidebar.css";

const SocialSidebar = () => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/okikijesutech",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/okikijesu/",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Twitter",
      url: "https://x.com/okikioluwasina",
      icon: <Twitter size={20} />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }} // Delays entrance until hero finishes
      className='social-sidebar'
    >
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={social.name}
          whileHover={{ y: -5, color: "var(--accent)" }}
          className='social-link'
        >
          {social.icon}
        </motion.a>
      ))}
      <div className='social-line' />
    </motion.div>
  );
};

export default SocialSidebar;
