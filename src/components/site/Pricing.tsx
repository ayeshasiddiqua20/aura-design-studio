import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const PLANS = [
  {
    name: "Design & Concept Only",
    tagline: "For DIY clients with their own contractor",
    price: "₹180",
    unit: "/ sq.ft. fixed fee",
    cta: "Get the design pack",
    features: [
      "Space planning & 2 layout options",
      "Photoreal 3D renders of every room",
      "Working drawings & electrical layouts",
      "Material & finish specification",
      "Contractor-ready BOQ",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Turnkey Execution",
    tagline: "Full hands-off project management",
    price: "₹1,950",
    unit: "/ sq.ft. onwards, locked quote",
    cta: "Book a discovery call",
    popular: true,
    features: [
      "Everything in Design & Concept",
      "Custom millwork from our workshop",
      "Dedicated site supervisor, 6 days a week",
      "Live progress dashboard & weekly video",
      "Locked BOQ — zero hidden fees",
      "On-time delivery guarantee",
      "White-glove handover & styling",
    ],
  },
  {
    name: "Styling & Refresh",
    tagline: "Furniture, decor & colour, no civil work",
    price: "₹1.2 L",
    unit: "fixed project fee",
    cta: "Refresh my space",
    features: [
      "In-home consultation & moodboard",
      "Colour palette & paint schedule",
      "Furniture & decor sourcing list",
      "Trade discounts passed on to you",
      "Installation & styling day",
    ],
  },
];

export function Pricing({ onBook }: { onBook: () => void }) {
  return (
    <section id="services" className="section-pad bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Services & Pricing"
          title={
            <>
              Transparent from the <em className="italic text-sage">first conversation</em>
            </>
          }
          description="Three ways to work together. Every fee is fixed before we begin — the number you sign is the number you pay."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="flex">
              <article
                className={cn(
                  "relative flex w-full flex-col rounded-[2rem] border p-8 transition-transform duration-500",
                  p.popular
                    ? "bg-charcoal-gradient text-cream shadow-lift lg:-translate-y-4 lg:scale-[1.02]"
                    : "bg-card shadow-soft",
                )}
              >
                {p.popular && (
                  <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-sage px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-sage-foreground shadow-soft">
                    <Sparkles className="size-3.5" /> Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-medium">{p.name}</h3>
                <p className={cn("mt-1 text-sm", p.popular ? "text-cream/65" : "text-muted-foreground")}>
                  {p.tagline}
                </p>
                <div className="mt-7 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-semibold leading-none">{p.price}</span>
                </div>
                <p className={cn("mt-2 text-xs", p.popular ? "text-cream/60" : "text-muted-foreground")}>
                  {p.unit}
                </p>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          p.popular ? "bg-sage text-sage-foreground" : "bg-sage-soft text-sage",
                        )}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className={p.popular ? "text-cream/90" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  variant={p.popular ? "cream" : "outline"}
                  className="mt-9 w-full"
                  onClick={p.popular ? onBook : undefined}
                  asChild={!p.popular}
                >
                  {p.popular ? (
                    <>
                      {p.cta} <ArrowRight />
                    </>
                  ) : (
                    <a href="#estimate">
                      {p.cta} <ArrowRight />
                    </a>
                  )}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
