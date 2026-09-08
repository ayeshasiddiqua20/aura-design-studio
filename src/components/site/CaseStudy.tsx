import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarRange, Wallet, MapPin, Box, Camera, Quote, AlertTriangle, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";
import render from "@/assets/case-render.jpg";
import built from "@/assets/case-built.jpg";

const SPECS = [
  { icon: CalendarRange, label: "Duration", value: "12 Weeks" },
  { icon: Wallet, label: "Budget Tier", value: "₹42 L" },
  { icon: MapPin, label: "Location", value: "South Bombay" },
];

const VIEWS = [
  { id: "render", label: "3D Render Vision", icon: Box, img: render, caption: "Concept render, week 2" },
  { id: "built", label: "Final Built Reality", icon: Camera, img: built, caption: "Handover photo, week 12" },
] as const;

const MATERIALS = [
  { name: "Oak millwork", note: "Rift-cut veneer, matte PU", tone: "bg-sand-deep" },
  { name: "Textured micro-cement", note: "Walls & floor, warm grey", tone: "bg-muted" },
  { name: "Ambient LED recessed", note: "2700K cove & wall washers", tone: "bg-star/70" },
  { name: "Undyed linen", note: "Upholstery & drapery", tone: "bg-secondary" },
];

export function CaseStudy() {
  const [view, setView] = useState<(typeof VIEWS)[number]["id"]>("render");
  const active = VIEWS.find((v) => v.id === view)!;

  return (
    <section id="case-study" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Case Study · 3D Render vs. Real Executed Build"
              title={
                <>
                  The Serene <em className="italic text-sage">Minimalist</em>
                </>
              }
              description="A 3-BHK turnkey redesign for a family of four who wanted calm, storage, and a home that looked exactly like the render they signed off."
            />
            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
              {SPECS.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-soft"
                >
                  <s.icon className="size-4 text-sage" />
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-semibold">{s.value}</span>
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-10 space-y-6">
              <div className="rounded-2xl border-l-2 border-sage bg-secondary/60 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                  <Quote className="size-4" /> Client brief
                </div>
                <p className="mt-2 text-[15px] leading-relaxed">
                  "Warm, uncluttered, and not a single loose wire. We travel a lot — we want to
                  come home to quiet."
                </p>
              </div>
              <div className="rounded-2xl border-l-2 border-sand-deep bg-secondary/60 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <AlertTriangle className="size-4" /> Problem statement
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  A 1990s layout with a dark, boxed-in living room, three separate storage
                  cupboards eating floor area, and previous contractors who had overrun both budget
                  and timeline twice.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <Layers className="size-4" /> Material palette
                </div>
                <ul className="mt-3 grid grid-cols-2 gap-3">
                  {MATERIALS.map((m) => (
                    <li key={m.name} className="flex items-center gap-3 rounded-xl border bg-card p-3">
                      <span className={cn("h-9 w-9 shrink-0 rounded-full border border-foreground/10", m.tone)} />
                      <span>
                        <span className="block text-sm font-semibold">{m.name}</span>
                        <span className="block text-xs text-muted-foreground">{m.note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
            <div
              role="tablist"
              aria-label="Toggle render and built photo"
              className="inline-flex rounded-full border bg-card p-1 shadow-soft"
            >
              {VIEWS.map((v) => (
                <button
                  key={v.id}
                  role="tab"
                  aria-selected={view === v.id}
                  onClick={() => setView(v.id)}
                  className={cn(
                    "relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
                    view === v.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {view === v.id && (
                    <motion.span
                      layoutId="case-tab"
                      className="absolute inset-0 rounded-full bg-foreground"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <v.icon className="relative size-4" />
                  <span className="relative">{v.label}</span>
                </button>
              ))}
            </div>

            <div className="relative mt-5 aspect-[3/2] overflow-hidden rounded-3xl bg-muted shadow-lift">
              <AnimatePresence mode="sync" initial={false}>
                <motion.img
                  key={active.id}
                  src={active.img}
                  alt={active.label}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <span className="absolute bottom-4 left-4 rounded-full bg-charcoal/70 px-3 py-1.5 text-xs font-medium text-cream backdrop-blur-sm">
                {active.caption}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {VIEWS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setView(v.id)}
                  className={cn(
                    "overflow-hidden rounded-2xl border-2 transition-all",
                    view === v.id ? "border-sage" : "border-transparent opacity-60 hover:opacity-100",
                  )}
                  aria-label={`Show ${v.label}`}
                >
                  <img src={v.img} alt="" loading="lazy" width={1536} height={1024} className="aspect-[3/2] w-full object-cover" />
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
