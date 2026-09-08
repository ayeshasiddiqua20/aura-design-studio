import { motion } from "motion/react";
import { ArrowRight, ArrowDown, Home, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import heroBefore from "@/assets/hero-before.jpg";
import heroAfter from "@/assets/hero-after.jpg";

const METRICS = [
  { icon: Home, value: "50+", label: "Homes Handed Over" },
  { icon: Clock, value: "100%", label: "On-Time Delivery" },
  { icon: ShieldCheck, value: "Zero", label: "Hidden Fees" },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section id="top" className="bg-warm-gradient grain relative overflow-hidden pt-32 md:pt-40">
      <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-sage-soft/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-sand/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <motion.p {...fade(0)} className="eyebrow">
              Interior Design · Turnkey Execution · Mumbai
            </motion.p>
            <motion.h1
              {...fade(0.1)}
              className="mt-6 text-[2.75rem] font-medium leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[4.4rem]"
            >
              Spaces Designed for Living.{" "}
              <em className="font-normal italic text-sage">Executed Without the Friction.</em>
            </motion.h1>
            <motion.p
              {...fade(0.2)}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              We craft high-function, modern interiors tailored to your lifestyle—delivered strictly
              on budget and on schedule.
            </motion.p>
            <motion.div {...fade(0.3)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" asChild>
                <a href="#estimate">
                  Start Your Project <ArrowRight />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">
                  Explore Our Work <ArrowDown />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <BeforeAfterSlider before={heroBefore} after={heroAfter} priority />
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Drag the handle — Bandra West apartment, delivered in 9 weeks
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fade(0.5)}
          className="mt-16 grid grid-cols-1 divide-y divide-foreground/10 rounded-t-3xl border border-b-0 border-foreground/10 bg-cream/70 backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {METRICS.map((m) => (
            <div key={m.label} className="flex items-center gap-4 px-7 py-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sage-soft text-sage">
                <m.icon className="size-5" />
              </span>
              <div>
                <p className="font-display text-3xl font-semibold leading-none">{m.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
