import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <FadeIn delay={0.6} className="text-[var(--accent)] font-[var(--font-mono)] mb-[20px]">
        Hi, my name is
      </FadeIn>
      
      <FadeIn delay={0.7}>
        <h2 className="text-[clamp(40px,8vw,80px)] text-[var(--text-primary)] font-semibold leading-[1.1]">
          OLUWASINA OkikiJesu.
        </h2>
      </FadeIn>
      
      <FadeIn delay={0.8}>
        <h3 className="text-[clamp(30px,5vw,60px)] text-[var(--text-secondary)] font-semibold leading-[0.9] mt-[10px]">
          I build high-performance web experiences.
        </h3>
      </FadeIn>
      
      <FadeIn delay={0.9} className="max-w-[540px] mt-[20px] text-[var(--text-secondary)] text-[20px]">
        <p>I'm a frontend engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on creating accessible, user-centric products using React and TypeScript.</p>
      </FadeIn>
      
      <FadeIn delay={1.0} className="mt-[50px]">
        <a href="#projects" className="px-[1.75rem] py-[1.25rem] border border-[var(--accent)] rounded-[4px] text-[var(--accent)] font-[var(--font-mono)] text-[14px] inline-block mr-[20px] transition-all hover:bg-[rgba(100,255,218,0.1)]">
          Check out my work!
        </a>
        <a href="/okikijesu_oluwasina_Resume.pdf" target="_blank" rel="noopener noreferrer" download="okikijesu_oluwasina_Resume.pdf" className="px-[1.75rem] py-[1.25rem] bg-[rgba(100,255,218,0.1)] transition-all hover:bg-[rgba(100,255,218,0.2)] border border-[var(--accent)] rounded-[4px] text-[var(--accent)] font-[var(--font-mono)] text-[14px] inline-block">
          Download Resume
        </a>
      </FadeIn>
    </section>
  );
};

export default Hero;
