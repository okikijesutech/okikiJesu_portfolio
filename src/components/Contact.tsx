import FadeIn from './FadeIn';

const Contact = () => {
  return (
    <section id="contact" className="text-center max-w-[600px] mx-auto pb-5">
      <div className="mb-[150px]">
        <FadeIn delay={0.1} className="font-[var(--font-mono)] text-[var(--accent)] mb-5">
          04. What's Next?
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h2 className="text-[clamp(40px,5vw,60px)] font-semibold text-[var(--text-primary)]">
            Get In Touch
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.3} className="text-[var(--text-secondary)] text-[18px] mt-5">
          <p>
            I’m currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <a 
            href="mailto:okikijesutech@gmail.com"
            className="mt-[50px] px-7 py-5 border border-[var(--accent)] rounded inline-block font-[var(--font-mono)] text-[var(--accent)] text-[14px] transition-all duration-300 hover:bg-[rgba(100,255,218,0.1)]"
          >
            Say Hello
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
