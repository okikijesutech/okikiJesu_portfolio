import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const resumeFile = "/okikijesu_oluwasina_resume.pdf";

  return (
    <section id='hero' className='hero'>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='hero-subtitle'
      >
        Hi, my name is
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='hero-title'
      >
        OLUWASINA OkikiJesu.
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='hero-description'
      >
        I build full-stack products for real markets.
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className='hero-text'
      >
        I'm a full-stack engineer and the founder of{" "}
        <a
          href='https://the-factory-ng.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Factory.ng
        </a>
        , a venture studio building digital infrastructure for African markets.
        I've shipped 4 live products across EdTech, CleanTech, and security —
        solo, from architecture to production.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='hero-actions'
      >
        <a href='#projects' className='hero-btn-primary'>
          See what I've built
        </a>
        <a
          href={resumeFile}
          download='okikijesu_oluwasina_resume.pdf'
          className='hero-btn-secondary'
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
