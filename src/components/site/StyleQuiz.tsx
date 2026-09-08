import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Home,
  CookingPot,
  BedDouble,
  Building2,
  PenTool,
  HardHat,
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";
import warm from "@/assets/style-warm-minimalist.jpg";
import japandi from "@/assets/style-japandi.jpg";
import classic from "@/assets/style-modern-classic.jpg";
import industrial from "@/assets/style-industrial-lux.jpg";

const SPACES = [
  { id: "home", label: "Full Home", desc: "2–4 BHK, all rooms", icon: Home, base: [28, 45] },
  { id: "kitchen", label: "Kitchen & Living", desc: "Social core of the home", icon: CookingPot, base: [12, 20] },
  { id: "bedroom", label: "Bedroom Suite", desc: "Master + wardrobe + ensuite", icon: BedDouble, base: [7, 12] },
  { id: "commercial", label: "Commercial", desc: "Café, studio, boutique office", icon: Building2, base: [22, 40] },
] as const;

const STYLES = [
  { id: "warm", label: "Warm Minimalist", img: warm, mult: 1 },
  { id: "japandi", label: "Japandi", img: japandi, mult: 1.08 },
  { id: "classic", label: "Modern Classic", img: classic, mult: 1.25 },
  { id: "industrial", label: "Industrial Lux", img: industrial, mult: 1.18 },
] as const;

const SCOPES = [
  {
    id: "design",
    label: "Design Only",
    desc: "Concept, 3D renders, drawings & BOQ. You run the build.",
    icon: PenTool,
    mult: 0.18,
  },
  {
    id: "turnkey",
    label: "Turnkey Execution",
    desc: "We design, build, supervise & hand over. Zero friction.",
    icon: HardHat,
    mult: 1,
  },
] as const;

const STEPS = ["Space", "Aesthetic", "Scope", "Estimate"];

function fmtLakh(n: number) {
  return n >= 100 ? `₹${(n / 100).toFixed(2)} Cr` : `₹${Math.round(n)} L`;
}

export function StyleQuiz() {
  const [step, setStep] = useState(0);
  const [space, setSpace] = useState<(typeof SPACES)[number]["id"] | null>(null);
  const [style, setStyle] = useState<(typeof STYLES)[number]["id"] | null>(null);
  const [scope, setScope] = useState<(typeof SCOPES)[number]["id"] | null>(null);
  const [sent, setSent] = useState(false);
  const [dir, setDir] = useState(1);

  const canNext = [!!space, !!style, !!scope, true][step];

  const go = (n: number) => {
    setDir(n > step ? 1 : -1);
    setStep(n);
  };

  const s = SPACES.find((x) => x.id === space);
  const st = STYLES.find((x) => x.id === style);
  const sc = SCOPES.find((x) => x.id === scope);
  const low = s && st && sc ? s.base[0] * st.mult * sc.mult : 0;
  const high = s && st && sc ? s.base[1] * st.mult * sc.mult : 0;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSent(true);
    toast.success(`Report on its way, ${String(data.get("name")).split(" ")[0]}!`, {
      description: "Check your inbox in the next few minutes.",
    });
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
  };

  return (
    <section id="estimate" className="section-pad relative overflow-hidden bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Style Quiz & Budget Estimator"
          title={
            <>
              Know your number <em className="italic text-sage">in 60 seconds</em>
            </>
          }
          description="Four quick choices. An honest, instant range — and a full design report in your inbox if you want it."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border bg-card shadow-lift">
            {/* progress */}
            <ol className="flex border-b" aria-label="Progress">
              {STEPS.map((label, i) => (
                <li
                  key={label}
                  className={cn(
                    "flex flex-1 items-center gap-2 px-4 py-4 text-xs font-semibold transition-colors sm:px-6",
                    i === step ? "text-foreground" : i < step ? "text-sage" : "text-muted-foreground",
                  )}
                  aria-current={i === step ? "step" : undefined}
                >
                  <span
                    className={cn(
                      "grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[11px]",
                      i < step
                        ? "border-sage bg-sage text-sage-foreground"
                        : i === step
                          ? "border-foreground bg-foreground text-primary-foreground"
                          : "",
                    )}
                  >
                    {i < step ? <Check className="size-3" /> : i + 1}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </li>
              ))}
            </ol>

            <div className="p-6 sm:p-10">
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.div
                  key={step}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {step === 0 && (
                    <>
                      <h3 className="text-3xl font-medium">What are we designing?</h3>
                      <div className="mt-7 grid gap-3 sm:grid-cols-2" role="radiogroup">
                        {SPACES.map((o) => (
                          <button
                            key={o.id}
                            role="radio"
                            aria-checked={space === o.id}
                            onClick={() => setSpace(o.id)}
                            className={cn(
                              "flex items-center gap-4 rounded-2xl border p-5 text-left transition-all",
                              space === o.id
                                ? "border-sage bg-sage-soft/60 shadow-glow"
                                : "hover:border-foreground/30 hover:bg-muted/50",
                            )}
                          >
                            <span
                              className={cn(
                                "grid h-12 w-12 shrink-0 place-items-center rounded-full transition-colors",
                                space === o.id ? "bg-sage text-sage-foreground" : "bg-secondary text-foreground",
                              )}
                            >
                              <o.icon className="size-5" />
                            </span>
                            <span>
                              <span className="block font-semibold">{o.label}</span>
                              <span className="block text-sm text-muted-foreground">{o.desc}</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {step === 1 && (
                    <>
                      <h3 className="text-3xl font-medium">Which aesthetic feels like home?</h3>
                      <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4" role="radiogroup">
                        {STYLES.map((o) => (
                          <button
                            key={o.id}
                            role="radio"
                            aria-checked={style === o.id}
                            onClick={() => setStyle(o.id)}
                            className={cn(
                              "group relative aspect-[4/5] overflow-hidden rounded-2xl border-2 text-left transition-all",
                              style === o.id ? "border-sage shadow-glow" : "border-transparent hover:border-foreground/20",
                            )}
                          >
                            <img
                              src={o.img}
                              alt={o.label}
                              loading="lazy"
                              width={768}
                              height={768}
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <span className="absolute inset-0 bg-gradient-to-t from-charcoal/75 to-transparent" />
                            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-cream">
                              <span className="text-sm font-semibold">{o.label}</span>
                              {style === o.id && (
                                <span className="grid h-6 w-6 place-items-center rounded-full bg-sage">
                                  <Check className="size-3.5" />
                                </span>
                              )}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <h3 className="text-3xl font-medium">How involved do you want to be?</h3>
                      <div className="mt-7 grid gap-4 sm:grid-cols-2" role="radiogroup">
                        {SCOPES.map((o) => (
                          <button
                            key={o.id}
                            role="radio"
                            aria-checked={scope === o.id}
                            onClick={() => setScope(o.id)}
                            className={cn(
                              "relative rounded-2xl border p-6 text-left transition-all",
                              scope === o.id
                                ? "border-sage bg-sage-soft/60 shadow-glow"
                                : "hover:border-foreground/30 hover:bg-muted/50",
                            )}
                          >
                            {o.id === "turnkey" && (
                              <span className="absolute right-4 top-4 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                                Recommended
                              </span>
                            )}
                            <span
                              className={cn(
                                "grid h-12 w-12 place-items-center rounded-full",
                                scope === o.id ? "bg-sage text-sage-foreground" : "bg-secondary",
                              )}
                            >
                              <o.icon className="size-5" />
                            </span>
                            <span className="mt-4 block text-lg font-semibold">{o.label}</span>
                            <span className="mt-1 block text-sm text-muted-foreground">{o.desc}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
                      <div className="rounded-2xl bg-charcoal-gradient p-7 text-cream">
                        <p className="eyebrow text-sage-soft">Your instant estimate</p>
                        <p className="mt-5 font-display text-5xl font-medium leading-none">
                          {fmtLakh(low)} <span className="text-cream/50">–</span> {fmtLakh(high)}
                        </p>
                        <p className="mt-3 text-sm text-cream/70">
                          Locked before we start. No revisions to the quote unless you change the
                          scope.
                        </p>
                        <dl className="mt-7 space-y-2.5 border-t border-cream/15 pt-6 text-sm">
                          {[
                            ["Space", s?.label],
                            ["Aesthetic", st?.label],
                            ["Scope", sc?.label],
                          ].map(([k, v]) => (
                            <div key={k} className="flex justify-between gap-4">
                              <dt className="text-cream/60">{k}</dt>
                              <dd className="font-medium">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      {sent ? (
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed p-8 text-center">
                          <span className="grid h-14 w-14 place-items-center rounded-full bg-sage-soft text-sage">
                            <Sparkles className="size-6" />
                          </span>
                          <h4 className="mt-5 text-2xl font-medium">Report on its way</h4>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Your full design report — moodboard, material tiers and a line-item cost
                            split — lands in your inbox shortly.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={onSubmit} className="space-y-4">
                          <div>
                            <h4 className="text-2xl font-medium">Get the full design report</h4>
                            <p className="mt-1 text-sm text-muted-foreground">
                              Moodboard, material tiers and a line-item cost split. Free.
                            </p>
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="q-name">Name</Label>
                            <Input id="q-name" name="name" required placeholder="Priya Sharma" className="h-11 rounded-xl" />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="q-email">Email</Label>
                            <Input id="q-email" name="email" type="email" required placeholder="priya@example.com" className="h-11 rounded-xl" />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="q-phone">Phone</Label>
                            <Input id="q-phone" name="phone" type="tel" required placeholder="+91 98XXX XXXXX" className="h-11 rounded-xl" />
                          </div>
                          <Button type="submit" size="lg" className="w-full">
                            <Mail /> Email me the report
                          </Button>
                          <p className="text-center text-[11px] text-muted-foreground">
                            No spam. One report, one follow-up, that's it.
                          </p>
                        </form>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between border-t pt-6">
                <Button
                  variant="ghost"
                  onClick={() => go(step - 1)}
                  disabled={step === 0}
                  className="text-muted-foreground"
                >
                  <ArrowLeft /> Back
                </Button>
                {step < 3 ? (
                  <Button onClick={() => go(step + 1)} disabled={!canNext}>
                    {step === 2 ? "See my estimate" : "Continue"} <ArrowRight />
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSpace(null);
                      setStyle(null);
                      setScope(null);
                      setSent(false);
                      go(0);
                    }}
                  >
                    Start over
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
