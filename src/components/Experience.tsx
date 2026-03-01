import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: 'O3 Finance school',
      title: 'Frontend Engineer',
      date: 'May 2025 - Present',
      details: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Next.js, and Tailwind CSS.',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.'
      ]
    },
    {
      company: 'Flincap',
      title: 'Web Developer',
      date: 'August 2023 - January 2024',
      details: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.',
        'Interfaced with clients on a weekly basis, providing technological expertise and project updates.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="experience-title"
      >
        <span className="experience-title-number">02.</span> 
        Where I've Worked
        <span className="experience-title-line"></span>
      </motion.h2>

      <div className="experience-content">
        {/* Mobile-friendly flex layout, but defaults to a side-by-side tab look on larger screens via CSS */}
        <div className="experience-layout">
          
          {/* Tabs */}
          <div className="experience-tabs">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`experience-tab ${activeTab === index ? 'active' : ''}`}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="experience-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="experience-job-title">
                  {jobs[activeTab].title} <span className="experience-job-company">@ {jobs[activeTab].company}</span>
                </h3>
                <p className="experience-job-date">
                  {jobs[activeTab].date}
                </p>

                <ul className="experience-details">
                  {jobs[activeTab].details.map((detail, i) => (
                    <li key={i} className="experience-detail-item">
                      <span className="experience-detail-bullet">▹</span> {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
