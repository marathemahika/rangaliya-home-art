import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: "up" | "left" | "right" | "fade";
};

const Reveal = ({ children, className, delay = 0, direction = "up" }: RevealProps) => {
  const { ref, visible } = useReveal();

  const base = "transition-all duration-700 ease-out";

  const hidden: Record<string, string> = {
    up: "opacity-0 translate-y-8",
    left: "opacity-0 -translate-x-8",
    right: "opacity-0 translate-x-8",
    fade: "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={cn(base, visible ? "opacity-100 translate-x-0 translate-y-0" : hidden[direction], className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
