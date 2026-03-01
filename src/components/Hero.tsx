import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <FadeIn delay={0.6} className="text-[var(--accent)] font-[var(--font-mono)] mb-5">
        Hi, my name is
      </FadeIn>
      
      <FadeIn delay={0.7}>
        <h2 className="text-[clamp(40px,8vw,80px)] text-[var(--text-primary)] font-semibold leading-[1.1]">
          OLUWASINA OkikiJesu.
        </h2>
      </FadeIn>
      
      <FadeIn delay={0.8}>
        <h3 className="text-[clamp(30px,5vw,60px)] text-[var(--text-secondary)] font-semibold leading-[0.9] mt-2.5">
          I build high-performance web experiences.
        </h3>
      </FadeIn>
      
      <FadeIn delay={0.9} className="max-w-[540px] mt-5 text-[var(--text-secondary)] text-[20px]">
        <p>This is a portfolio showcasing my work as a frontend engineer. I specialize in building (and occasionally designing) exceptional, highly-interactive digital experiences using React, TypeScript, and modern frontend architecture.</p>
      </FadeIn>
      
      <FadeIn delay={1.0} className="mt-12 flex gap-5">
        <a href="#projects" className="px-7 py-5 border border-[var(--accent)] rounded text-[var(--accent)] font-[var(--font-mono)] text-sm inline-block transition-all hover:bg-[rgba(100,255,218,0.1)]">
          Check out my work!
        </a>
        <a href="/okikijesu_oluwasina_Resume.pdf" target="_blank" rel="noopener noreferrer" download="okikijesu_oluwasina_Resume.pdf" className="px-7 py-5 bg-[rgba(100,255,218,0.1)] transition-all hover:bg-[rgba(100,255,218,0.2)] border border-[var(--accent)] rounded text-[var(--accent)] font-[var(--font-mono)] text-sm inline-block">
          Download Resume
        </a>
      </FadeIn>
    </section>
  );
};

export default Hero;
