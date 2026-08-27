import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-55";

const variants: Record<Variant, string> = {
  primary:
    "text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-gold/45 text-gold hover:bg-gold/10 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-mist/80 hover:text-mist hover:bg-mist/10",
};

export function RitualButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
      style={variant === "primary" ? { background: "var(--gradient-gold)" } : undefined}
    >
      {children}
    </button>
  );
}

export function Block({
  label,
  children,
  accent = false,
}: {
  label: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <section className="panel p-5">
      <h3
        className={`font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] ${
          accent ? "text-skylight" : "text-gold"
        }`}
      >
        {label}
      </h3>
      <div className="mt-2 text-[0.98rem] leading-relaxed text-mist/90">{children}</div>
    </section>
  );
}
