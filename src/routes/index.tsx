import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { CardFlip } from "@/components/taro/CardFlip";
import { CardReading } from "@/components/taro/CardReading";
import { DrawDeck } from "@/components/taro/DrawDeck";
import { PortalMark } from "@/components/taro/Symbols";
import { CardBack } from "@/components/taro/CardBack";
import { RitualButton } from "@/components/taro/ui";
import { drawCard, getCardById, type TarotCard } from "@/data/cards";
import {
  addEntry,
  canDraw,
  latestEntry,
  registerVisitAndCheckReturn,
  updateLatest,
} from "@/lib/journey";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tarô da Aprovação — retire a carta do seu próximo passo" },
      {
        name: "description",
        content:
          "Retire uma carta e receba uma mensagem, uma missão prática de estudos e uma pergunta para refletir.",
      },
      { property: "og:title", content: "Tarô da Aprovação" },
      {
        property: "og:description",
        content:
          "As cartas não preveem a sua aprovação. Elas ajudam você a construir o caminho até ela.",
      },
    ],
  }),
  component: RitualPage,
});

type Stage = "abertura" | "preparacao" | "sorteio" | "carta";

const PREP_LINES = [
  "Pare por alguns segundos.",
  "Pense em como você está se sentindo diante dos estudos hoje.",
  "Quando estiver pronto, toque no baralho e revele sua carta.",
];

function RitualPage() {
  const reduced = useReducedMotion();
  const [stage, setStage] = useState<Stage>("abertura");
  const [card, setCard] = useState<TarotCard | null>(null);
  const [shuffling, setShuffling] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [confirmNew, setConfirmNew] = useState(false);
  const [returning, setReturning] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setReturning(registerVisitAndCheckReturn());
    setHasPrevious(Boolean(latestEntry()));
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const revisit = useCallback(() => {
    const entry = latestEntry();
    const previous = entry ? getCardById(entry.cardId) : undefined;
    if (!entry || !previous) return;
    setCard(previous);
    setAccepted(entry.missionAccepted);
    setSaved(entry.saved);
    setFlipped(true);
    setShowReading(true);
    setStage("carta");
  }, []);

  const startDraw = useCallback(() => {
    if (shuffling) return;
    setConfirmNew(false);
    setShuffling(true);
    setFlipped(false);
    setAccepted(false);
    setSaved(false);
    setShowReading(false);

    const last = latestEntry();
    const drawn = drawCard(last?.cardId);
    const shuffleMs = reduced ? 200 : 1600;
    const flipDelay = reduced ? 250 : 2100;

    timers.current.push(
      setTimeout(() => {
        setCard(drawn);
        setStage("carta");
        setShuffling(false);
        addEntry(drawn.id);
        setHasPrevious(true);
      }, shuffleMs),
      setTimeout(() => setFlipped(true), flipDelay),
    );
  }, [reduced, shuffling]);

  const accept = () => {
    setAccepted(true);
    updateLatest({ missionAccepted: true });
  };

  const save = () => {
    setSaved(true);
    updateLatest({ saved: true });
  };

  const blocked = !canDraw();

  return (
    <div className="pb-10">
      {returning && stage === "abertura" && (
        <p className="panel mb-6 p-4 text-center text-sm text-skylight">
          Todo retorno também conta. Sua jornada continua.
        </p>
      )}

      <AnimatePresence mode="wait">
        {stage === "abertura" && (
          <motion.section
            key="abertura"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center pt-6 text-center"
          >
            <PortalMark className="h-16 w-auto text-gold" />
            <h1 className="mt-5 font-display text-4xl leading-tight text-mist sm:text-5xl">
              Tarô da Aprovação
            </h1>
            <p className="mt-4 max-w-md font-display text-xl italic text-gold">
              As cartas não preveem a sua aprovação. Elas ajudam você a construir o caminho até
              ela.
            </p>
            <p className="mt-4 max-w-md text-sm text-mist/75">
              Às vezes, você não precisa saber tudo o que falta. Precisa apenas descobrir qual é o
              seu próximo passo.
            </p>

            <div className="my-8 w-32 animate-float-soft sm:w-36">
              <CardBack />
            </div>

            <RitualButton onClick={() => setStage("preparacao")}>Entrar no ritual</RitualButton>

            {hasPrevious && (
              <RitualButton variant="ghost" className="mt-3" onClick={revisit}>
                Revisitar minha carta
              </RitualButton>
            )}
          </motion.section>
        )}

        {(stage === "preparacao" || stage === "sorteio") && (
          <motion.section
            key="preparacao"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center pt-6 text-center"
          >
            <div className="min-h-[7.5rem] max-w-sm space-y-2">
              {PREP_LINES.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduced ? 0 : 0.5 + i * 1.1, duration: 0.7 }}
                  className={
                    i === 0
                      ? "font-display text-2xl text-mist"
                      : "text-sm leading-relaxed text-mist/80"
                  }
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="mt-8 w-full">
              <DrawDeck shuffling={shuffling} />
            </div>

            <RitualButton
              className="mt-6"
              onClick={startDraw}
              disabled={shuffling || blocked}
              aria-busy={shuffling}
            >
              {shuffling ? "Embaralhando…" : "Revelar minha carta"}
            </RitualButton>

            {blocked && (
              <p className="mt-3 max-w-xs text-xs text-mist/60">
                Você já retirou sua carta hoje. Revisite-a em Minha jornada.
              </p>
            )}
          </motion.section>
        )}

        {stage === "carta" && card && (
          <motion.section
            key="carta"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="pt-4"
          >
            <CardFlip card={card} flipped={flipped} />

            {flipped && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 flex flex-col items-center"
              >
                {!showReading ? (
                  <RitualButton onClick={() => setShowReading(true)}>
                    Ler minha mensagem
                  </RitualButton>
                ) : (
                  <div className="w-full">
                    <CardReading
                      card={card}
                      accepted={accepted}
                      saved={saved}
                      onAccept={accept}
                      onSave={save}
                    />

                    <div className="mt-8 flex flex-col items-center gap-3">
                      {!confirmNew ? (
                        <>
                          <RitualButton variant="ghost" onClick={revisit}>
                            Revisitar minha carta
                          </RitualButton>
                          <RitualButton
                            variant="outline"
                            onClick={() => setConfirmNew(true)}
                            disabled={blocked}
                          >
                            Realizar um novo sorteio
                          </RitualButton>
                        </>
                      ) : (
                        <div className="panel w-full p-5 text-center">
                          <p className="font-display text-lg text-mist">
                            Cada carta oferece um caminho diferente. Deseja revelar uma nova
                            mensagem?
                          </p>
                          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
                            <RitualButton
                              onClick={() => {
                                setStage("preparacao");
                                setConfirmNew(false);
                                setTimeout(startDraw, 60);
                              }}
                            >
                              Revelar outra carta
                            </RitualButton>
                            <RitualButton variant="ghost" onClick={() => setConfirmNew(false)}>
                              Continuar com esta
                            </RitualButton>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
