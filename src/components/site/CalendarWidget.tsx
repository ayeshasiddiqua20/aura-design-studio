import { useState } from "react";
import { CalendarDays, Clock, Video, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DATES = [14, 15, 16, 17, 18, 19];
const SLOTS = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM", "6:30 PM"];

export function CalendarWidget({ compact = false }: { compact?: boolean }) {
  const [day, setDay] = useState(1);
  const [slot, setSlot] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border bg-card p-10 text-center shadow-soft">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-soft text-sage">
          <Check className="size-6" />
        </div>
        <h3 className="mt-5 text-2xl font-medium">You're booked.</h3>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Sep {DATES[day]} at {slot}. A calendar invite and a short pre-call questionnaire are on
          their way to your inbox.
        </p>
        <Button variant="outline" size="sm" className="mt-6" onClick={() => setDone(false)}>
          Book another slot
        </Button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-soft",
        compact ? "" : "md:grid md:grid-cols-[1fr_1.4fr]",
      )}
      aria-label="Booking calendar (Cal.com / Calendly placeholder)"
    >
      <div className={cn("border-b bg-muted/60 p-6", !compact && "md:border-b-0 md:border-r")}>
        <p className="eyebrow">Discovery Call</p>
        <h3 className="mt-2 text-2xl font-medium">15 minutes with a lead designer</h3>
        <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2.5">
            <Clock className="size-4 text-sage" /> 15 min, no obligation
          </li>
          <li className="flex items-center gap-2.5">
            <Video className="size-4 text-sage" /> Google Meet link sent instantly
          </li>
          <li className="flex items-center gap-2.5">
            <CalendarDays className="size-4 text-sage" /> Asia/Kolkata (IST)
          </li>
        </ul>
        <p className="mt-6 rounded-lg border border-dashed border-sage/40 bg-sage-soft/50 px-3 py-2 text-[11px] leading-snug text-accent-foreground">
          Placeholder UI — swap for your Cal.com or Calendly embed.
        </p>
      </div>

      <div className="p-6">
        <p className="text-sm font-semibold">September 2026</p>
        <div className="mt-4 grid grid-cols-6 gap-2" role="listbox" aria-label="Choose a day">
          {DAYS.map((d, i) => (
            <button
              key={d}
              role="option"
              aria-selected={day === i}
              onClick={() => {
                setDay(i);
                setSlot(null);
              }}
              className={cn(
                "flex flex-col items-center rounded-xl border py-2.5 text-xs transition-all",
                day === i
                  ? "border-foreground bg-foreground text-primary-foreground shadow-soft"
                  : "hover:border-sage hover:bg-sage-soft/50",
              )}
            >
              <span className="opacity-70">{d}</span>
              <span className="mt-1 text-base font-semibold">{DATES[i]}</span>
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold">Available times</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3" role="listbox" aria-label="Choose a time">
          {SLOTS.map((s) => (
            <button
              key={s}
              role="option"
              aria-selected={slot === s}
              onClick={() => setSlot(s)}
              className={cn(
                "rounded-full border px-3 py-2 text-xs font-medium transition-all",
                slot === s
                  ? "border-sage bg-sage text-sage-foreground"
                  : "hover:border-sage hover:text-accent-foreground",
              )}
            >
              {s}
            </button>
          ))}
        </div>
        <Button className="mt-6 w-full" disabled={!slot} onClick={() => setDone(true)}>
          Confirm {slot ? `· Sep ${DATES[day]}, ${slot}` : "booking"}
        </Button>
      </div>
    </div>
  );
}
