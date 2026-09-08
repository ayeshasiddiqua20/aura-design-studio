import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { CalendarWidget } from "./CalendarWidget";

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.1 2.46 7.62 6 9.17-.08-.78-.16-1.98.03-2.83l1.17-4.97s-.3-.6-.3-1.48c0-1.39.8-2.43 1.81-2.43.85 0 1.26.64 1.26 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.39-1.72-4.07-4.18-4.07-2.85 0-4.52 2.13-4.52 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29l-.28 1.13c-.04.18-.15.22-.34.13-1.25-.58-2.03-2.41-2.03-3.88 0-3.16 2.29-6.06 6.62-6.06 3.47 0 6.17 2.48 6.17 5.78 0 3.45-2.18 6.23-5.2 6.23-1.01 0-1.97-.53-2.29-1.15l-.62 2.38c-.23.87-.84 1.96-1.25 2.62.94.29 1.94.45 2.98.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary/50">
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Direct Booking"
                title={
                  <>
                    Let's talk about <em className="italic text-sage">your home</em>
                  </>
                }
                description="Pick a 15-minute slot. You'll speak with a lead designer, not a sales rep — and leave with a clear next step whether or not we work together."
              />
              <Reveal delay={0.1} className="mt-10 space-y-4 text-sm">
                <a href="mailto:hello@auradesign.studio" className="flex items-center gap-3 hover:text-sage">
                  <Mail className="size-4 text-sage" /> hello@auradesign.studio
                </a>
                <a href="tel:+919820012345" className="flex items-center gap-3 hover:text-sage">
                  <Phone className="size-4 text-sage" /> +91 98200 12345
                </a>
                <p className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-sage" />
                  Studio 4, Kala Ghoda Lane, Fort, Mumbai 400001
                </p>
              </Reveal>
              <Reveal delay={0.15} className="mt-8 flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-full border bg-card transition-colors hover:bg-foreground hover:text-primary-foreground"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Pinterest"
                  className="grid h-11 w-11 place-items-center rounded-full border bg-card transition-colors hover:bg-foreground hover:text-primary-foreground"
                >
                  <PinterestIcon className="size-5" />
                </a>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <CalendarWidget />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-xs text-muted-foreground md:flex-row md:px-8">
          <span className="text-[12px] font-bold tracking-[0.28em] text-foreground">AURA DESIGN STUDIO</span>
          <nav className="flex gap-6" aria-label="Footer">
            <a href="#portfolio" className="hover:text-foreground">Portfolio</a>
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#process" className="hover:text-foreground">Process</a>
            <a href="#case-study" className="hover:text-foreground">Case Studies</a>
          </nav>
          <span>© {new Date().getFullYear()} Aura Design Studio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
