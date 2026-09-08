import { useState } from "react";
import { motion } from "motion/react";
import { PhoneCall, Box, ClipboardCheck, HardHat, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  {
    icon: PhoneCall,
    title: "Discovery Call",
    time: "15 mins",
    desc: "A short conversation about how you live, what's not working, and the budget you're comfortable with. No pitch.",
  },
  {
    icon: Box,
    title: "Concept & 3D Renders",
    time: "Week 1–2",
    desc: "Two layout directions, then photoreal renders of every room. You see the home before a single wall is touched.",
  },
  {
    icon: ClipboardCheck,
    title: "Material Selection & Locked Quote",
    time: "Week 3",
    desc: "Touch samples in our studio, finalise finishes, and sign a line-item BOQ. That number is locked.",
  },
  {
    icon: HardHat,
    title: "Site Execution & Live Dashboard",
    time: "Week 4–11",
    desc: "Our own crew, a dedicated supervisor, and a live dashboard with daily photos so you're never guessing.",
  },
  {
    icon: Sparkles,
    title: "White-Glove Handover & Styling",
    time: "Week 12",
    desc: "Deep clean, styling day, snag walk-through, and a 12-month workmanship warranty in writing.",
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section id="process" className="section-pad bg-charcoal-gradient relative overflow-hidden text-cream">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-sage/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          light
          eyebrow="The No-Stress Process"
          title={
            <>
              Five steps. <em className="italic text-sage-soft">Zero surprises.</em>
            </>
          }
          description="Most renovation stress comes from not knowing what happens next. So we tell you — before, during, and after."
        />

        <Reveal className="mt-16">
          {/* horizontal timeline */}
          <ol className="relative grid grid-cols-5 gap-2 md:gap-4" aria-label="Process steps">
            <span className="absolute left-[10%] right-[10%] top-6 h-px bg-cream/15" aria-hidden />
            <motion.span
              aria-hidden
              className="absolute left-[10%] top-6 h-px bg-sage"
              animate={{ width: `${(active / (STEPS.length - 1)) * 80}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative flex flex-col items-center text-center">
                <button
                  onClick={() => setActive(i)}
                  aria-current={i === active ? "step" : undefined}
                  aria-label={`Step ${i + 1}: ${s.title}`}
                  className={cn(
                    "relative z-10 grid h-12 w-12 place-items-center rounded-full border transition-all duration-300",
                    i === active
                      ? "border-sage bg-sage text-sage-foreground shadow-glow"
                      : i < active
                        ? "border-sage/60 bg-charcoal text-sage-soft"
                        : "border-cream/20 bg-charcoal text-cream/60 hover:border-cream/50",
                  )}
                >
                  {i === active && (
                    <span className="absolute inset-0 animate-pulse-ring rounded-full border border-sage" />
                  )}
                  <s.icon className="size-5" />
                </button>
                <span
                  className={cn(
                    "mt-3 hidden text-xs font-semibold leading-tight md:block",
                    i === active ? "text-cream" : "text-cream/50",
                  )}
                >
                  {s.title}
                </span>
                <span className="mt-2 text-[10px] font-bold text-cream/40 md:hidden">0{i + 1}</span>
              </li>
            ))}
          </ol>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto mt-12 max-w-2xl rounded-3xl border border-cream/10 bg-cream/5 p-8 text-center backdrop-blur-sm md:p-10"
          >
            <p className="eyebrow text-sage-soft">
              Step 0{active + 1} · {step.time}
            </p>
            <h3 className="mt-3 text-3xl font-medium">{step.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-cream/70">{step.desc}</p>
            <div className="mt-6 flex justify-center gap-2">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to step ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === active ? "w-8 bg-sage" : "w-1.5 bg-cream/25 hover:bg-cream/50",
                  )}
                />
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
