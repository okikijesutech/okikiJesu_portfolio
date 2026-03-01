import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section id="experience" className="min-h-[80vh] flex flex-col justify-center pt-[100px]">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-[20px] text-[clamp(26px,5vw,32px)] font-semibold mb-[40px]"
      >
        <span className="text-[var(--accent)] font-[var(--font-mono)] text-[20px]">02.</span> 
        Where I've Worked
        <span className="flex-1 h-[1px] bg-[var(--text-secondary)] opacity-20"></span>
      </motion.h2>

      <div className="flex flex-col gap-[20px] max-w-[800px]">
        {/* Mobile-friendly flex layout, but defaults to a side-by-side tab look on larger screens via CSS */}
        <div className="flex flex-wrap gap-[30px]">
          
          {/* Tabs */}
          <div className="flex flex-col w-[200px] shrink-0">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  text-left px-[20px] py-[15px] bg-transparent border-none border-l-[2px] font-[var(--font-mono)] text-[14px] cursor-pointer transition-all duration-250
                  ${activeTab === index 
                    ? 'border-l-[var(--accent)] text-[var(--accent)] bg-[rgba(100,255,218,0.1)]' 
                    : 'border-l-[rgba(136,146,176,0.2)] text-[var(--text-secondary)] hover:bg-[rgba(100,255,218,0.05)] hover:text-[var(--text-primary)]'}
                `}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-[22px] text-[var(--text-primary)] mb-[5px]">
                  {jobs[activeTab].title} <span className="text-[var(--accent)]">@ {jobs[activeTab].company}</span>
                </h3>
                <p className="font-[var(--font-mono)] text-[13px] text-[var(--text-secondary)] mb-[20px]">
                  {jobs[activeTab].date}
                </p>

                <ul className="list-none p-0">
                  {jobs[activeTab].details.map((detail, i) => (
                    <li key={i} className="relative pl-[30px] mb-[10px] text-[var(--text-secondary)] text-[18px] leading-[1.5]">
                      <span className="absolute left-0 text-[var(--accent)]">▹</span> {detail}
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
