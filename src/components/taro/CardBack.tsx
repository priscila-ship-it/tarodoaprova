import { PortalMark } from "./Symbols";

/** Verso da carta: azul-noturno, moldura dourada fina, portal com estrela, constelações. */
export function CardBack({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-gold/40 ${className}`}
      style={{
        background: "var(--gradient-card-back)",
        boxShadow: "var(--shadow-gold)",
      }}
    >
      <div className="absolute inset-[6px] rounded-xl border border-gold/25" />
      <div
        className="absolute inset-0 opacity-[0.16]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--mist) 0.7px, transparent 0)",
          backgroundSize: "9px 9px",
        }}
      />
      <svg
        viewBox="0 0 100 150"
        className="absolute inset-0 h-full w-full text-skylight/50"
        aria-hidden="true"
        fill="none"
      >
        <path d="M14 24l10 8 8-14" stroke="currentColor" strokeWidth="0.6" />
        <path d="M86 24l-10 8-8-14" stroke="currentColor" strokeWidth="0.6" />
        <path d="M14 126l10-8 8 14" stroke="currentColor" strokeWidth="0.6" />
        <path d="M86 126l-10-8-8 14" stroke="currentColor" strokeWidth="0.6" />
        {[
          [14, 24],
          [24, 32],
          [32, 18],
          [86, 24],
          [76, 32],
          [68, 18],
          [14, 126],
          [24, 118],
          [32, 132],
          [86, 126],
          [76, 118],
          [68, 132],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1" fill="currentColor" />
        ))}
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <div
            className="animate-halo absolute -inset-6 rounded-full blur-xl"
            style={{ background: "var(--lilac)", opacity: 0.35 }}
            aria-hidden="true"
          />
          <PortalMark className="relative h-[38%] max-h-28 w-auto text-gold" />
        </div>
      </div>
    </div>
  );
}
