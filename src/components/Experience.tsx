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
    <section id="experience" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '100px' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: 'clamp(26px, 5vw, 32px)', fontWeight: 600, marginBottom: '40px' }}
      >
        <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '20px' }}>02.</span> 
        Where I've Worked
        <span style={{ flex: 1, height: '1px', background: 'var(--text-secondary)', opacity: 0.2 }}></span>
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px' }}>
        {/* Mobile-friendly flex layout, but defaults to a side-by-side tab look on larger screens via CSS (simulated here with inline styles) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
          
          {/* Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', width: '200px', flexShrink: 0 }}>
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                style={{
                  textAlign: 'left',
                  padding: '15px 20px',
                  background: 'transparent',
                  border: 'none',
                  borderLeft: `2px solid ${activeTab === index ? 'var(--accent)' : 'rgba(136, 146, 176, 0.2)'}`,
                  color: activeTab === index ? 'var(--accent)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                  backgroundColor: activeTab === index ? 'rgba(100, 255, 218, 0.1)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== index) {
                    (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(100, 255, 218, 0.05)';
                    (e.target as HTMLButtonElement).style.color = 'var(--text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== index) {
                    (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLButtonElement).style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ flex: 1, minHeight: '300px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '5px' }}>
                  {jobs[activeTab].title} <span style={{ color: 'var(--accent)' }}>@ {jobs[activeTab].company}</span>
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  {jobs[activeTab].date}
                </p>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {jobs[activeTab].details.map((detail, i) => (
                    <li key={i} style={{ 
                      position: 'relative', 
                      paddingLeft: '30px', 
                      marginBottom: '10px', 
                      color: 'var(--text-secondary)',
                      fontSize: '18px',
                      lineHeight: '1.5'
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▹</span> {detail}
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
