import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <div className='contact-container'>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='contact-label'
        >
          04. What's Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='contact-title'
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='contact-text'
        >
          I’m currently looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </motion.p>

        <motion.a
          href='mailto:okikijesuoluwasina@gmail.com'
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='contact-button'
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
