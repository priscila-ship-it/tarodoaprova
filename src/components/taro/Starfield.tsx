const STARS = [
  { x: 8, y: 12, s: 2, d: 0 },
  { x: 22, y: 30, s: 1.4, d: 1.2 },
  { x: 36, y: 8, s: 1.8, d: 2.1 },
  { x: 52, y: 22, s: 1.2, d: 0.6 },
  { x: 68, y: 10, s: 2.2, d: 1.8 },
  { x: 84, y: 26, s: 1.4, d: 2.6 },
  { x: 92, y: 48, s: 1.8, d: 0.9 },
  { x: 74, y: 62, s: 1.2, d: 1.5 },
  { x: 58, y: 78, s: 1.6, d: 2.3 },
  { x: 40, y: 66, s: 1.2, d: 0.4 },
  { x: 24, y: 82, s: 2, d: 1.1 },
  { x: 10, y: 58, s: 1.5, d: 2.8 },
  { x: 46, y: 44, s: 1, d: 1.9 },
  { x: 88, y: 88, s: 1.3, d: 0.8 },
];

/** Céu discreto de fundo. Puramente decorativo. */
export function Starfield() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {STARS.map((star, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-mist"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.s,
            height: star.s,
            animationDelay: `${star.d}s`,
            boxShadow: "0 0 6px currentColor",
          }}
        />
      ))}
      <div
        className="absolute -left-24 top-1/3 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--lilac)" }}
      />
      <div
        className="absolute -right-20 top-2/3 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--skylight)" }}
      />
    </div>
  );
}
