import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
};

export function Reveal({ children, delay = 0, y = 28, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "text-sage-soft" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-4 text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl ${
          light ? "text-cream" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? "text-cream/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
