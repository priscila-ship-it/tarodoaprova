import type { TarotCard } from "@/data/cards";
import { FamilyIcon, HourglassMark } from "./Symbols";

/** Frente visual da carta. */
export function CardFront({
  card,
  className = "",
}: {
  card: TarotCard;
  className?: string;
}) {
  return (
    <div
      className={`relative flex aspect-[2/3] w-full flex-col overflow-hidden rounded-2xl border border-gold/45 p-4 text-center ${className}`}
      style={{
        background:
          "linear-gradient(170deg, oklch(0.3 0.095 292) 0%, var(--night) 60%, oklch(0.26 0.09 286) 100%)",
        boxShadow: "var(--shadow-gold)",
      }}
    >
      <div className="absolute inset-[6px] rounded-xl border border-gold/25" aria-hidden="true" />
      <div className="relative flex items-center justify-between text-[0.65rem] uppercase tracking-[0.22em] text-gold/85">
        <span>{card.id}</span>
        <span className="flex items-center gap-1">
          <FamilyIcon symbol={card.familySymbol} className="h-3.5 w-3.5" />
          {card.family}
        </span>
      </div>

      <div className="relative flex flex-1 items-center justify-center">
        <div
          className="animate-halo absolute h-28 w-28 rounded-full blur-2xl"
          style={{ background: "var(--lilac)", opacity: 0.4 }}
          aria-hidden="true"
        />
        <HourglassMark className="relative h-28 w-28 text-gold sm:h-32 sm:w-32" />
      </div>

      <div className="relative">
        <h2 className="font-display text-2xl leading-tight text-mist sm:text-3xl">{card.name}</h2>
        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.28em] text-skylight">
          {card.keyword}
        </p>
      </div>
    </div>
  );
}
