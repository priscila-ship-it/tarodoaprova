import { motion } from "motion/react";
import type { TarotCard } from "@/data/cards";
import { FamilyIcon } from "./Symbols";
import { Block, RitualButton } from "./ui";

export function CardReading({
  card,
  accepted,
  saved,
  onAccept,
  onSave,
}: {
  card: TarotCard;
  accepted: boolean;
  saved: boolean;
  onAccept: () => void;
  onSave: () => void;
}) {
  return (
    <div className="mt-8 space-y-4">
      <div className="panel flex items-center gap-3 p-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
          <FamilyIcon symbol={card.familySymbol} className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-mist/60">
            Família {card.family} · símbolo {card.familySymbol}
          </p>
          <p className="truncate font-display text-xl text-mist">
            Carta {card.id} — {card.name}
          </p>
        </div>
      </div>

      <Block label="Mensagem revelada">
        <p>{card.revealedMessage}</p>
      </Block>

      <Block label="Sua missão">
        <p>{card.mission}</p>
      </Block>

      <Block label="Pergunta para levar com você" accent>
        <p className="font-display text-xl leading-snug">{card.reflectionQuestion}</p>
      </Block>

      <Block label="Sussurro da carta" accent>
        <p className="italic">“{card.whisper}”</p>
      </Block>

      <div className="grid gap-4 sm:grid-cols-3">
        <Block label="Tempo da missão">
          <p>{card.estimatedTime}</p>
        </Block>
        <Block label="Instrumentos">
          <ul className="list-inside list-disc space-y-0.5">
            {card.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </Block>
        <Block label="Poder despertado">
          <p>{card.power}</p>
        </Block>
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <RitualButton
          onClick={() => { if (!accepted) onAccept(); }}
          aria-disabled={accepted}
          variant={accepted ? "outline" : "primary"}
          aria-live="polite"
        >
          {accepted ? "Convite aceito ✦" : "Aceitar o convite"}
        </RitualButton>
        <RitualButton onClick={() => { if (!saved) onSave(); }} aria-disabled={saved} variant="outline">
          {saved ? "Carta guardada na jornada ✦" : "Guardar esta carta"}
        </RitualButton>
      </div>

      {accepted && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="panel relative overflow-hidden p-5 text-center"
        >
          <div
            className="animate-halo pointer-events-none absolute inset-x-1/4 -top-10 h-24 rounded-full blur-2xl"
            style={{ background: "var(--gold)", opacity: 0.35 }}
            aria-hidden="true"
          />
          <p className="relative font-display text-xl text-gold">
            Cada missão cumprida acrescenta um novo passo à sua jornada.
          </p>
        </motion.div>
      )}
    </div>
  );
}
