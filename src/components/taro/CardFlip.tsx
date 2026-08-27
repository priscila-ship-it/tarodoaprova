import { motion, useReducedMotion } from "motion/react";
import type { TarotCard } from "@/data/cards";
import { CardBack } from "./CardBack";
import { CardFront } from "./CardFront";

const SPARKS = [
  { x: -46, y: -30 },
  { x: 44, y: -46 },
  { x: 58, y: 24 },
  { x: -60, y: 34 },
  { x: 6, y: -70 },
  { x: -14, y: 74 },
];

/** Carta escolhida indo ao centro e virando em 3D. */
export function CardFlip({ card, flipped }: { card: TarotCard; flipped: boolean }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto w-44 sm:w-52">
      <motion.div
        className="animate-halo absolute -inset-8 rounded-[2rem] blur-2xl"
        style={{ background: "var(--lilac)", opacity: flipped ? 0.45 : 0.25 }}
        aria-hidden="true"
      />
      {flipped &&
        !reduced &&
        SPARKS.map((s, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-gold"
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
            animate={{ opacity: [0, 1, 0], x: s.x, y: s.y, scale: [0.4, 1, 0.6] }}
            transition={{ duration: 1.4, delay: 0.1 + i * 0.06, ease: "easeOut" }}
          />
        ))}
      <div className="relative" style={{ perspective: 1200 }}>
        <motion.div
          className="relative aspect-[2/3] w-full"
          style={{ transformStyle: "preserve-3d" }}
          initial={false}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
            <CardBack />
          </div>
          <div
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <CardFront card={card} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
