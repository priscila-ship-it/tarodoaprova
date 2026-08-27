import { createFileRoute } from "@tanstack/react-router";

import { PortalMark, KeyIcon, EyeIcon, StarIcon } from "@/components/taro/Symbols";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Tarô — Tarô da Aprovação" },
      {
        name: "description",
        content:
          "Uma dinâmica lúdica e pedagógica com missões, reflexões e estratégias para apoiar a rotina de estudos.",
      },
      { property: "og:title", content: "Sobre o Tarô — Tarô da Aprovação" },
      {
        property: "og:description",
        content: "As cartas não fazem previsões: elas apoiam a construção do caminho.",
      },
    ],
  }),
  component: AboutPage,
});

const families = [
  {
    name: "Movimento",
    icon: <KeyIcon className="h-5 w-5" />,
    symbol: "Chave",
    text: "Propõe missões e técnicas práticas de estudo.",
    tone: "text-gold border-gold/45",
  },
  {
    name: "Espelho",
    icon: <EyeIcon className="h-5 w-5" />,
    symbol: "Olho",
    text: "Ajuda a reconhecer comportamentos que interferem nos estudos.",
    tone: "text-lilac border-lilac/45",
  },
  {
    name: "Amparo",
    icon: <StarIcon className="h-5 w-5" />,
    symbol: "Estrela",
    text: "Acolhe, recupera e favorece a retomada.",
    tone: "text-skylight border-skylight/45",
  },
];

function AboutPage() {
  return (
    <div className="pt-4">
      <div className="flex items-center gap-3">
        <PortalMark className="h-10 w-auto shrink-0 text-gold" />
        <h1 className="font-display text-3xl text-mist sm:text-4xl">Sobre o Tarô</h1>
      </div>

      <div className="panel mt-6 p-6">
        <p className="text-[1.02rem] leading-relaxed text-mist/90">
          O Tarô da Aprovação é uma dinâmica lúdica e pedagógica. Suas cartas apresentam missões,
          reflexões e estratégias para apoiar a rotina de estudos. Elas não realizam previsões, não
          determinam resultados e não substituem orientação pedagógica ou apoio profissional. A
          aprovação não está escrita nas cartas: ela é construída por meio das escolhas, dos
          aprendizados e dos passos realizados ao longo do caminho.
        </p>
      </div>

      <h2 className="mt-10 font-display text-2xl text-mist">As três famílias</h2>
      <ul className="mt-4 space-y-3">
        {families.map((family) => (
          <li key={family.name} className="panel p-5">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border ${family.tone}`}>
                {family.icon}
              </span>
              <div className="min-w-0">
                <p className="font-display text-xl text-mist">
                  {family.name}{" "}
                  <span className="text-xs uppercase tracking-[0.2em] text-mist/55">
                    · {family.symbol}
                  </span>
                </p>
                <p className="mt-1 text-sm text-mist/80">{family.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center font-display text-xl italic text-gold">
        As cartas não preveem a sua aprovação. Elas ajudam você a construir o caminho até ela.
      </p>
    </div>
  );
}
