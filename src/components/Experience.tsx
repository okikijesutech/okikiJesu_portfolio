import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: "Factory.ng",
      title: "Founder & Engineer",
      date: "August 2025 - Present",
      details: [
        "Founded and sole-engineer a venture studio building digital infrastructure for African markets — 4 live products shipped across EdTech, CleanTech, and security.",
        "Architected and built EduFlows, a multi-tenant school management SaaS (Next.js, NestJS, Supabase, Prisma), now serving schools in Nigeria's AFED private school network.",
        "Designed Energy Flow OS, a virtual power plant platform with Nigeria-aware telemetry (NEPA voltage detection, zone-based DISCO modelling, NGN billing) and a Modbus/RS485 hardware gateway for residential solar systems.",
        "Built PwmngerTS, an open-source zero-knowledge password manager, through two full security audits — resolving critical issues including token leakage, stored XSS, and broken cryptographic salt.",
        "Established a Turborepo monorepo with shared auth, database, billing, and logging packages across all products.",
      ],
    },
    {
      company: "O3 Finance School",
      title: "Frontend Engineer",
      date: "Feburary 2024 - AUgust 2025",
      details: [
        "Build and maintain production features using Next.js, TypeScript, and Tailwind CSS.",
        "Collaborate with cross-functional teams to ship accessible, performant user interfaces.",
        "Also deploy EduFlows at this school as part of the Factory.ng pilot programme — giving me direct feedback from teachers and administrators in the field.",
      ],
    },
    {
      company: "Flincap",
      title: "Web Developer",
      date: "August 2023 - January 2024",
      details: [
        "Developed and maintained client-facing websites using HTML, CSS, Sass, and JavaScript.",
        "Tested across browsers and devices to ensure cross-browser compatibility and responsiveness.",
        "Communicated directly with clients on a weekly basis, managing expectations and delivering updates.",
      ],
    },
  ];

  return (
    <section id='experience' className='experience-section'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='experience-title'
      >
        <span className='experience-title-number'>02.</span>
        Where I've Worked
        <span className='experience-title-line'></span>
      </motion.h2>

      <div className='experience-content'>
        <div className='experience-layout'>
          <div className='experience-tabs'>
            {jobs.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`experience-tab ${activeTab === index ? "active" : ""}`}
              >
                {job.company}
              </button>
            ))}
          </div>

          <div className='experience-panel'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className='experience-job-title'>
                  {jobs[activeTab].title}{" "}
                  <span className='experience-job-company'>
                    @ {jobs[activeTab].company}
                  </span>
                </h3>
                <p className='experience-job-date'>{jobs[activeTab].date}</p>

                <ul className='experience-details'>
                  {jobs[activeTab].details.map((detail, i) => (
                    <li key={i} className='experience-detail-item'>
                      <span className='experience-detail-bullet'>▹</span>{" "}
                      {detail}
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
