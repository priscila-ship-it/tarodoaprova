import { motion, useReducedMotion } from "motion/react";
import { CardBack } from "./CardBack";

const OFFSETS = [
  { x: -68, r: -12 },
  { x: -34, r: -6 },
  { x: 0, r: 0 },
  { x: 34, r: 6 },
  { x: 68, r: 12 },
];

/**
 * Baralho fechado. Durante o sorteio as cartas embaralham,
 * uma se destaca e as outras desaparecem suavemente.
 */
export function DrawDeck({ shuffling }: { shuffling: boolean }) {
  const reduced = useReducedMotion();
  const chosen = 2;

  return (
    <div className="relative mx-auto h-56 w-full max-w-xs" aria-hidden="true">
      {OFFSETS.map((o, i) => {
        const isChosen = i === chosen;
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-0 w-28 -translate-x-1/2 sm:w-32"
            initial={false}
            animate={
              shuffling && !reduced
                ? isChosen
                  ? { x: [o.x, o.x - 18, 0], rotate: [o.r, o.r + 8, 0], y: [0, -14, -6], scale: [1, 1.02, 1.12], opacity: 1 }
                  : { x: [o.x, o.x * 1.6, o.x * 0.2], rotate: [o.r, o.r * 2, 0], opacity: [1, 1, 0], scale: [1, 1, 0.9] }
                : { x: o.x, rotate: o.r, y: 0, scale: 1, opacity: 1 }
            }
            transition={{ duration: shuffling ? 1.5 : 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex: isChosen ? 10 : 5 - Math.abs(i - chosen) }}
          >
            <div className={shuffling ? "" : "animate-float-soft"} style={{ animationDelay: `${i * 0.4}s` }}>
              <CardBack />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
