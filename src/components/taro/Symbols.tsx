import type { FamilySymbol } from "@/data/cards";

/** Símbolo do projeto: portal aberto com uma estrela ao fundo. */
export function PortalMark({
  className,
  title = "Portal aberto com uma estrela ao fundo, símbolo do Tarô da Aprovação",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 80"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      <title>{title}</title>
      <path
        d="M32 4c14 0 24 10.5 24 24v48H8V28C8 14.5 18 4 32 4Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
      <path
        d="M32 16c8 0 14 6 14 14v46H18V30c0-8 6-14 14-14Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.45"
      />
      <path
        d="M32 30.5l2.6 6.2 6.7.6-5.1 4.4 1.6 6.5L32 44.7l-5.8 3.5 1.6-6.5-5.1-4.4 6.7-.6L32 30.5Z"
        fill="currentColor"
      />
      <circle cx="14" cy="60" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="52" r="1.2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function KeyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M11 11l8 8M16 16l2.2-2.2M18.6 18.6l1.8-1.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3.2l2.4 5.7 6.2.5-4.7 4 1.4 6-5.3-3.2L6.7 19.4l1.4-6-4.7-4 6.2-.5L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HourglassMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      role="img"
      aria-label="Ampulheta estilizada envolvida por uma órbita dourada, pequenas estrelas e uma chave discreta"
    >
      <ellipse
        cx="60"
        cy="60"
        rx="46"
        ry="30"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.45"
        transform="rotate(-24 60 60)"
      />
      <path
        d="M42 26h36M42 94h36M46 26c0 14 14 20 14 34s-14 20-14 34M74 26c0 14-14 20-14 34s14 20 14 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M53 40h14c-1 7-7 11-7 14s-6-7-7-14Z" fill="currentColor" opacity="0.85" />
      <path d="M60 66c3 6 8 10 8 16H52c0-6 5-10 8-16Z" fill="currentColor" opacity="0.5" />
      <circle cx="22" cy="34" r="1.6" fill="currentColor" opacity="0.8" />
      <circle cx="99" cy="80" r="1.6" fill="currentColor" opacity="0.8" />
      <circle cx="96" cy="30" r="1.1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function FamilyIcon({
  symbol,
  className,
}: {
  symbol: FamilySymbol;
  className?: string;
}) {
  if (symbol === "chave") return <KeyIcon className={className} />;
  if (symbol === "olho") return <EyeIcon className={className} />;
  return <StarIcon className={className} />;
}
