import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import kitchen from "@/assets/portfolio-kitchen.jpg";
import bedroom from "@/assets/portfolio-bedroom.jpg";
import commercial from "@/assets/portfolio-commercial.jpg";
import living from "@/assets/case-built.jpg";

const PROJECTS = [
  { img: living, title: "The Serene Minimalist", meta: "3-BHK Turnkey · South Bombay", wide: true },
  { img: kitchen, title: "Sage & Travertine Kitchen", meta: "Kitchen & Living · Powai" },
  { img: bedroom, title: "Linen Light Suite", meta: "Bedroom Suite · Juhu" },
  { img: commercial, title: "Cove Café", meta: "Commercial · Lower Parel" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Homes that feel <em className="italic text-sage">quietly considered</em>
            </>
          }
          description="A selection of recent handovers across Mumbai. Every project is photographed after the family moves in — not before."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className={p.wide ? "md:col-span-2 md:row-span-2" : ""}
            >
              <a
                href="#case-study"
                className="group relative block h-full min-h-[280px] overflow-hidden rounded-3xl bg-muted"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/70">
                      {p.meta}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-medium text-cream">{p.title}</h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-charcoal opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
