import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-study" },
];

export function Header({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open ? "glass py-3" : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Aura Design Studio home">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-foreground/20 font-display text-lg font-semibold leading-none">
            A
          </span>
          <span className="text-[13px] font-bold tracking-[0.28em]">AURA DESIGN STUDIO</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button onClick={onBook} size="default">
            Book Discovery Call <ArrowUpRight />
          </Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-lg font-medium hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <Button
                className="mt-3 w-full"
                size="lg"
                onClick={() => {
                  setOpen(false);
                  onBook();
                }}
              >
                Book Discovery Call <ArrowUpRight />
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
