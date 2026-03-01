import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';

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
    <section id="experience" className="min-h-[80vh] flex flex-col justify-center py-24">
      <SectionHeader number="02" title="Where I've Worked" />

      <div className="flex flex-col gap-5 max-w-[800px] mt-10">
        <div className="flex flex-col sm:flex-row gap-8">
          
          {/* Tabs */}
          <div className="flex flex-row sm:flex-col overflow-x-auto sm:overflow-visible w-full sm:w-[200px] shrink-0 border-b-2 sm:border-b-0 sm:border-l-2 border-[rgba(136,146,176,0.2)]">
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  text-left px-5 py-4 bg-transparent border-none font-[var(--font-mono)] text-sm cursor-pointer transition-all duration-250 
                  whitespace-nowrap sm:whitespace-normal
                  ${activeTab === index 
                    ? 'text-[var(--accent)] bg-[rgba(100,255,218,0.1)] sm:border-l-2 sm:-ml-[2px] border-[var(--accent)] sm:border-b-0 border-b-2 -mb-[2px]' 
                    : 'text-[var(--text-secondary)] hover:bg-[rgba(100,255,218,0.05)] hover:text-[var(--text-primary)]'}
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
                <h3 className="text-[22px] text-[var(--text-primary)] mb-1 font-semibold">
                  {jobs[activeTab].title} <span className="text-[var(--accent)]">@ {jobs[activeTab].company}</span>
                </h3>
                <p className="font-[var(--font-mono)] text-[13px] text-[var(--text-secondary)] mb-5">
                  {jobs[activeTab].date}
                </p>

                <ul className="list-none p-0">
                  {jobs[activeTab].details.map((detail, i) => (
                    <li key={i} className="relative pl-[30px] mb-2.5 text-[var(--text-secondary)] text-lg leading-relaxed">
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
