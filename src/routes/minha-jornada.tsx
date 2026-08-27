import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { FamilyIcon } from "@/components/taro/Symbols";
import { RitualButton } from "@/components/taro/ui";
import { getCardById } from "@/data/cards";
import {
  clearJourney,
  formatDrawnAt,
  formatTime,
  readJourney,
  type JourneyEntry,
} from "@/lib/journey";

export const Route = createFileRoute("/minha-jornada")({
  head: () => ({
    meta: [
      { title: "Minha jornada — Tarô da Aprovação" },
      {
        name: "description",
        content:
          "Veja as cartas já retiradas, a data de cada retirada, a família e o estado da sua missão.",
      },
      { property: "og:title", content: "Minha jornada — Tarô da Aprovação" },
      {
        property: "og:description",
        content: "Todo retorno também conta. Sua jornada continua.",
      },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  const [entries, setEntries] = useState<JourneyEntry[]>([]);
  const [ready, setReady] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    const sync = () => setEntries(readJourney());
    sync();
    setReady(true);
    window.addEventListener("journey-updated", sync);
    return () => window.removeEventListener("journey-updated", sync);
  }, []);

  return (
    <div className="pt-4">
      <h1 className="font-display text-3xl text-mist sm:text-4xl">Minha jornada</h1>
      <p className="mt-2 text-sm text-mist/70">
        Cada carta retirada é um passo registrado no seu caminho.
      </p>

      {!ready ? (
        <div className="mt-8 space-y-3" aria-live="polite">
          <div className="panel h-24 animate-pulse" />
          <div className="panel h-24 animate-pulse" />
          <span className="sr-only">Carregando sua jornada…</span>
        </div>
      ) : entries.length === 0 ? (
        <div className="panel mt-8 p-6 text-center">
          <p className="font-display text-xl text-gold">
            Sua jornada ainda está em branco. Retire uma carta para iluminar o primeiro caminho.
          </p>
          <Link
            to="/"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-gold/45 px-6 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            Entrar no ritual
          </Link>
        </div>
      ) : (
        <ul className="mt-8 space-y-3">
          {entries.map((entry, i) => {
            const card = getCardById(entry.cardId);
            if (!card) return null;
            return (
              <li key={`${entry.drawnAt}-${i}`} className="panel p-4">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                    <FamilyIcon symbol={card.familySymbol} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-xl text-mist">
                      {card.id} — {card.name}
                    </p>
                    <p className="text-xs text-mist/60">
                      Família {card.family} · {formatDrawnAt(entry.drawnAt)} às{" "}
                      {formatTime(entry.drawnAt)}
                    </p>
                    <p
                      className={`mt-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${
                        entry.missionAccepted
                          ? "border-gold/45 text-gold"
                          : "border-mist/25 text-mist/70"
                      }`}
                    >
                      {entry.missionAccepted ? "✦ Convite aceito" : "○ Ainda não realizado"}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <div className="mt-12 text-center">
        <button
          onClick={() => setShowSettings((v) => !v)}
          className="text-xs text-mist/40 underline-offset-4 transition-colors hover:text-mist/70 hover:underline"
          aria-expanded={showSettings}
        >
          Configurações
        </button>

        {showSettings && (
          <div className="panel mx-auto mt-4 max-w-sm p-5">
            {!confirmClear ? (
              <RitualButton variant="ghost" onClick={() => setConfirmClear(true)}>
                Limpar histórico
              </RitualButton>
            ) : (
              <div>
                <p className="text-sm text-mist/80">
                  Deseja apagar todas as cartas guardadas? Esta ação não pode ser desfeita.
                </p>
                <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row">
                  <RitualButton
                    variant="outline"
                    onClick={() => {
                      clearJourney();
                      setConfirmClear(false);
                      setShowSettings(false);
                    }}
                  >
                    Sim, limpar
                  </RitualButton>
                  <RitualButton variant="ghost" onClick={() => setConfirmClear(false)}>
                    Cancelar
                  </RitualButton>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
