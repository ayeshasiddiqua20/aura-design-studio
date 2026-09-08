import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  priority?: boolean;
};

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
  priority = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) update(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 3));
    if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 3));
  };

  return (
    <div
      ref={ref}
      className={cn(
        "group relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-3xl shadow-lift md:aspect-[3/2]",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img
        src={after}
        alt="Fully designed modern minimalist living room"
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={before}
          alt="Raw unfinished room before design"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          loading={priority ? "eager" : "lazy"}
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-charcoal/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-cream/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal backdrop-blur-sm">
        {afterLabel}
      </span>

      <div
        className="absolute inset-y-0 w-0.5 bg-cream/90 shadow-[0_0_20px_rgba(0,0,0,0.25)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-cream text-charcoal shadow-lift ring-4 ring-cream/30 transition-transform focus-visible:outline-none focus-visible:ring-sage group-active:scale-95"
        >
          <ChevronsLeftRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
