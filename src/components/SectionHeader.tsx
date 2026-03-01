import FadeIn from './FadeIn';

interface SectionHeaderProps {
  number: string;
  title: string;
}

const SectionHeader = ({ number, title }: SectionHeaderProps) => {
  return (
    <FadeIn 
      className="flex items-center gap-5 text-[clamp(26px,5vw,32px)] font-semibold mb-10 w-full"
    >
      <span className="text-[var(--accent)] font-[var(--font-mono)] text-[20px]">
        {number}.
      </span> 
      <h2 className="text-[var(--text-primary)] whitespace-nowrap">{title}</h2>
      <span className="flex-1 h-[1px] bg-[var(--text-secondary)] opacity-20 relative top-1"></span>
    </FadeIn>
  );
};

export default SectionHeader;
