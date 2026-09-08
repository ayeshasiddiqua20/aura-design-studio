import { Star, Play } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import videoThumb from "@/assets/video-thumb.jpg";

const REVIEWS = [
  {
    name: "Ananya & Rohan Sharma",
    place: "3-BHK, Cuffe Parade",
    text: "They quoted 12 weeks and ₹42 lakhs. We got the keys in week 12 and the final invoice was ₹42 lakhs. I didn't think that happened in Mumbai.",
  },
  {
    name: "Meera Iyer",
    place: "Kitchen & Living, Powai",
    text: "The live dashboard meant I never once had to call and ask 'what's happening on site?'. Daily photos, every single day.",
  },
  {
    name: "Karan Malhotra",
    place: "Bedroom Suite, Juhu",
    text: "The render and the finished room are indistinguishable. My wife kept swiping between the two on her phone in disbelief.",
  },
  {
    name: "Farah & Zain Khan",
    place: "Full Home, Bandra West",
    text: "Warm, calm, and every centimetre of storage we asked for. The handover styling day felt like moving into a hotel.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-star text-star" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title={
            <>
              Don't take <em className="italic text-sage">our word</em> for it
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <button
              type="button"
              onClick={() =>
                toast("Video coming soon", { description: "Connect your hosted video to play the tour here." })
              }
              className="group relative block aspect-video w-full overflow-hidden rounded-3xl shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Play: Watch the 60-second home tour with the Sharma family"
            >
              <img
                src={videoThumb}
                alt="The Sharma family in their newly designed living room"
                loading="lazy"
                width={1536}
                height={864}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-cream/40" />
                <span className="relative grid h-20 w-20 place-items-center rounded-full bg-cream text-charcoal shadow-lift transition-transform group-hover:scale-105">
                  <Play className="ml-1 size-7 fill-current" />
                </span>
              </span>
              <span className="absolute inset-x-0 bottom-0 p-6 text-left text-cream md:p-8">
                <span className="eyebrow text-sage-soft">Video Walkthrough · 0:60</span>
                <span className="mt-2 block font-display text-2xl font-medium md:text-3xl">
                  Watch the 60-second home tour with the Sharma family
                </span>
              </span>
            </button>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {REVIEWS.slice(0, 2).map((r, i) => (
              <Reveal key={r.name} delay={0.1 + i * 0.08}>
                <ReviewCard {...r} />
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {REVIEWS.slice(2).map((r, i) => (
            <Reveal key={r.name} delay={0.1 + i * 0.08}>
              <ReviewCard {...r} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ name, place, text }: (typeof REVIEWS)[number]) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border bg-card p-7 shadow-soft">
      <Stars />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">"{text}"</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-sage-soft font-display text-lg font-semibold text-accent-foreground">
          {name[0]}
        </span>
        <span>
          <span className="block text-sm font-semibold">{name}</span>
          <span className="block text-xs text-muted-foreground">{place}</span>
        </span>
      </figcaption>
    </figure>
  );
}
