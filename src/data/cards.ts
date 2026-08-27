export type CardFamily = "Movimento" | "Espelho" | "Amparo";
export type FamilySymbol = "chave" | "olho" | "estrela";

export interface TarotCard {
  id: string;
  number: number;
  enabled: boolean;
  name: string;
  family: CardFamily;
  familySymbol: FamilySymbol;
  keyword: string;
  power: string;
  estimatedTime: string;
  tools: string[];
  revealedMessage: string;
  mission: string;
  reflectionQuestion: string;
  whisper: string;
  illustrationDescription: string;
  accentColor: string;
}

export const FAMILIES: Record<
  CardFamily,
  { symbol: FamilySymbol; accentColor: string; purpose: string }
> = {
  Movimento: {
    symbol: "chave",
    accentColor: "var(--gold)",
    purpose: "Missões e técnicas práticas de estudo",
  },
  Espelho: {
    symbol: "olho",
    accentColor: "var(--lilac)",
    purpose: "Reconhecer comportamentos que interferem nos estudos",
  },
  Amparo: {
    symbol: "estrela",
    accentColor: "var(--skylight)",
    purpose: "Acolher, recuperar e favorecer a retomada",
  },
};

/** Placeholder para cartas ainda não escritas. Conteúdo definitivo chega depois. */
function draft(
  number: number,
  name: string,
  family: CardFamily,
): TarotCard {
  return {
    id: String(number).padStart(2, "0"),
    number,
    enabled: false,
    name,
    family,
    familySymbol: FAMILIES[family].symbol,
    keyword: "",
    power: "",
    estimatedTime: "",
    tools: [],
    revealedMessage: "",
    mission: "",
    reflectionQuestion: "",
    whisper: "",
    illustrationDescription: "",
    accentColor: FAMILIES[family].accentColor,
  };
}

export const CARDS: TarotCard[] = [
  {
    id: "01",
    number: 1,
    enabled: true,
    name: "O Cronômetro",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Concentração",
    power: "Foco",
    estimatedTime: "30 minutos",
    tools: ["Cronômetro", "Videoaula", "Caderno", "Três exercícios"],
    revealedMessage:
      "Por alguns minutos, deixe o restante do mundo do lado de fora. A aprovação não é construída apenas em longas jornadas, mas em pequenos períodos nos quais a atenção permanece inteira.",
    mission:
      "Defina um cronômetro de 25 minutos. Nesse período, assista a uma videoaula curta e registre os três pontos mais importantes. Quando o tempo terminar, responda a três exercícios sobre o conteúdo estudado.",
    reflectionQuestion:
      "Quanto você consegue avançar quando oferece toda a sua atenção a uma única tarefa?",
    whisper: "Quando a atenção permanece, o conhecimento encontra onde ficar.",
    illustrationDescription:
      "Uma ampulheta estilizada no centro, envolvida por uma órbita dourada, pequenas estrelas e uma chave discreta.",
    accentColor: "var(--gold)",
  },
  draft(2, "O Oráculo das Questões", "Movimento"),
  draft(3, "A Prova do Tempo", "Movimento"),
  draft(4, "O Espelho dos Erros", "Movimento"),
  draft(5, "A Roda da Memória", "Movimento"),
  draft(6, "A Página em Branco", "Movimento"),
  draft(7, "O Mapa Oculto", "Movimento"),
  draft(8, "A Voz do Mestre", "Movimento"),
  draft(9, "A Dupla Face", "Movimento"),
  draft(10, "O Guardião das Fórmulas", "Movimento"),
  draft(11, "A Palavra Desconhecida", "Movimento"),
  draft(12, "A Estratégia", "Movimento"),
  draft(13, "O Comparador", "Espelho"),
  draft(14, "A Pressa", "Espelho"),
  draft(15, "O Labirinto", "Espelho"),
  draft(16, "A Máscara da Produtividade", "Espelho"),
  draft(17, "A Sombra do Erro", "Espelho"),
  draft(18, "A Montanha Infinita", "Espelho"),
  draft(19, "O Recomeço", "Amparo"),
  draft(20, "A Pausa", "Amparo"),
  draft(21, "O Abrigo", "Amparo"),
  draft(22, "A Pequena Vitória", "Amparo"),
  draft(23, "A Imperfeição", "Amparo"),
  draft(24, "A Âncora", "Amparo"),
];

export const getEnabledCards = () => CARDS.filter((c) => c.enabled);

export const getCardById = (id: string) => CARDS.find((c) => c.id === id);

/** Sorteia uma carta habilitada, evitando repetir a última quando possível. */
export function drawCard(lastCardId?: string): TarotCard {
  const pool = getEnabledCards();
  const candidates =
    pool.length > 1 && lastCardId
      ? pool.filter((c) => c.id !== lastCardId)
      : pool;
  return candidates[Math.floor(Math.random() * candidates.length)];
}
