/** Configurações da experiência. Ative o limite diário sem reescrever a lógica. */
export const CONFIG = {
  /** Quando true, o usuário só pode sortear uma carta por dia. */
  oneCardPerDay: false,
};

export interface JourneyEntry {
  cardId: string;
  /** ISO date-time do sorteio */
  drawnAt: string;
  missionAccepted: boolean;
  saved: boolean;
}

const KEY = "taro-aprovacao:journey:v1";
const LAST_VISIT_KEY = "taro-aprovacao:last-visit:v1";

const isBrowser = () => typeof window !== "undefined";

export function readJourney(): JourneyEntry[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as JourneyEntry[]) : [];
  } catch {
    return [];
  }
}

function writeJourney(entries: JourneyEntry[]) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(entries));
    window.dispatchEvent(new Event("journey-updated"));
  } catch {
    /* armazenamento indisponível */
  }
}

export function addEntry(cardId: string): JourneyEntry {
  const entry: JourneyEntry = {
    cardId,
    drawnAt: new Date().toISOString(),
    missionAccepted: false,
    saved: false,
  };
  writeJourney([entry, ...readJourney()]);
  return entry;
}

export function updateLatest(patch: Partial<JourneyEntry>) {
  const entries = readJourney();
  if (entries.length === 0) return;
  entries[0] = { ...entries[0], ...patch };
  writeJourney(entries);
}

export function latestEntry(): JourneyEntry | undefined {
  return readJourney()[0];
}

export function clearJourney() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("journey-updated"));
}

const sameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();

/** Já sorteou hoje? (usado apenas quando CONFIG.oneCardPerDay estiver ativo) */
export function hasDrawnToday(): boolean {
  const last = latestEntry();
  if (!last) return false;
  return sameDay(new Date(last.drawnAt), new Date());
}

export function canDraw(): boolean {
  return CONFIG.oneCardPerDay ? !hasDrawnToday() : true;
}

/** Retorna true quando o estudante volta depois de alguns dias. */
export function registerVisitAndCheckReturn(): boolean {
  if (!isBrowser()) return false;
  const previous = window.localStorage.getItem(LAST_VISIT_KEY);
  const now = new Date();
  window.localStorage.setItem(LAST_VISIT_KEY, now.toISOString());
  if (!previous) return false;
  const diffDays =
    (now.getTime() - new Date(previous).getTime()) / (1000 * 60 * 60 * 24);
  return diffDays >= 2;
}

export function formatDrawnAt(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
