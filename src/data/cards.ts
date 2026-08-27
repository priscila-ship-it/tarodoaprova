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
  {
    id: "02",
    number: 2,
    enabled: true,
    name: "O Oráculo das Questões",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Prática",
    power: "Aprendizado com os erros",
    estimatedTime: "30 minutos",
    tools: ["Dez questões", "caderno e gabarito"],
    revealedMessage:
      "Cada questão revela algo. Os acertos mostram o que já está firme; os erros apontam onde o caminho ainda precisa de luz. Não responda apenas para medir seu conhecimento. Responda para ampliá-lo.",
    mission:
      "Escolha uma disciplina e responda a 10 questões. Depois, confira o gabarito, identifique por que errou e registre pelo menos um aprendizado retirado da correção.",
    reflectionQuestion:
      "Seus erros estão apenas sendo contabilizados ou realmente estudados?",
    whisper: "O erro observado deixa de ser um aviso e se transforma em direção.",
    illustrationDescription: "Pergaminho com interrogação",
    accentColor: "var(--gold)",
  },
  {
    id: "03",
    number: 3,
    enabled: true,
    name: "A Prova do Tempo",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Resistência",
    power: "Gestão do tempo",
    estimatedTime: "40 minutos",
    tools: ["Minissimulado", "cronômetro e gabarito"],
    revealedMessage:
      "Existem conhecimentos que precisam ser testados sob o movimento do relógio. A carta não exige perfeição. Ela convida você a conhecer seu ritmo, perceber suas escolhas e fortalecer sua resistência.",
    mission:
      "Realize um minissimulado com 15 questões e tempo máximo de 30 minutos. Não consulte materiais, marque as questões que gerarem dúvida e registre o tempo utilizado. Ao final, corrija o minissimulado.",
    reflectionQuestion:
      "O que muda na sua forma de responder quando o tempo também faz parte do desafio?",
    whisper: "Quem conhece o próprio ritmo atravessa a prova com mais segurança.",
    illustrationDescription: "Relógio com folha",
    accentColor: "var(--gold)",
  },
  {
    id: "04",
    number: 4,
    enabled: true,
    name: "O Espelho dos Erros",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Correção",
    power: "Diagnóstico",
    estimatedTime: "30 minutos",
    tools: ["Cinco questões já respondidas", "caderno e gabarito"],
    revealedMessage:
      "Algumas respostas erradas continuam retornando porque foram vistas, mas não compreendidas. Hoje, a carta não pede novos conteúdos. Ela pede que você ilumine as marcas deixadas pelo que já tentou.",
    mission:
      "Recupere cinco questões que você errou recentemente. Identifique se cada erro aconteceu por falta de conteúdo, interpretação, distração, cálculo ou estratégia. Depois, refaça as questões sem consultar a resposta anterior.",
    reflectionQuestion:
      "Existe um padrão escondido nos erros que você vem cometendo?",
    whisper: "O passado deixa pistas para quem decide observá-lo.",
    illustrationDescription: "Espelho com marca de verificação",
    accentColor: "var(--gold)",
  },
  {
    id: "05",
    number: 5,
    enabled: true,
    name: "A Roda da Memória",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Revisão",
    power: "Memória",
    estimatedTime: "30 minutos",
    tools: ["Folha", "material de estudo e cinco questões"],
    revealedMessage:
      "O conhecimento também precisa ser reencontrado. Aquilo que parecia dominado pode desaparecer quando não é chamado de volta. Revisar não é retornar ao início: é fortalecer o caminho que já foi percorrido.",
    mission:
      "Escolha um conteúdo estudado há pelo menos uma semana. Sem consultar o material, escreva tudo o que consegue recordar. Depois, compare sua lembrança com o conteúdo original, complete as lacunas e responda a cinco questões de revisão.",
    reflectionQuestion: "O que permanece quando o material é fechado?",
    whisper: "O conhecimento se fortalece cada vez que encontra o caminho de volta.",
    illustrationDescription: "Círculo com estrelas",
    accentColor: "var(--gold)",
  },
  {
    id: "06",
    number: 6,
    enabled: true,
    name: "A Página em Branco",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Expressão",
    power: "Escrita",
    estimatedTime: "60 minutos",
    tools: ["Proposta de redação", "folha ou editor de texto"],
    revealedMessage:
      "Toda página em branco carrega duas possibilidades: permanecer intocada ou se transformar. Você não precisa esperar pela frase perfeita. As ideias encontram forma enquanto são escritas.",
    mission:
      "Escolha uma proposta e escreva uma redação completa. Se não houver tempo, construa a tese, dois argumentos e uma proposta de intervenção. Ao final, destaque um ponto forte e um aspecto que pode melhorar.",
    reflectionQuestion:
      "O medo de não escrever perfeitamente está impedindo você de começar?",
    whisper: "As palavras não precisam nascer prontas para conduzir você adiante.",
    illustrationDescription: "Página com pena",
    accentColor: "var(--gold)",
  },
  {
    id: "07",
    number: 7,
    enabled: true,
    name: "O Mapa Oculto",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Conexão",
    power: "Organização do conhecimento",
    estimatedTime: "30 minutos",
    tools: ["Uma folha e materiais de estudo"],
    revealedMessage:
      "Nenhum conhecimento existe completamente sozinho. Conceitos, fórmulas, acontecimentos e argumentos formam caminhos que se cruzam. Quando você percebe essas conexões, o conteúdo deixa de ser uma lista e começa a formar um mapa.",
    mission:
      "Escolha um conteúdo e produza um mapa mental de uma página. Inclua o conceito central, três ideias principais, duas conexões com outros assuntos, um exemplo e uma possível forma de cobrança em uma questão.",
    reflectionQuestion:
      "Que conexões estavam escondidas enquanto você estudava cada informação separadamente?",
    whisper: "Quando os pontos se encontram, o caminho aparece.",
    illustrationDescription: "Mapa com constelação",
    accentColor: "var(--gold)",
  },
  {
    id: "08",
    number: 8,
    enabled: true,
    name: "A Voz do Mestre",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Compreensão",
    power: "Clareza",
    estimatedTime: "15 minutos",
    tools: ["Gravador de áudio opcional"],
    revealedMessage:
      "Você só descobre o quanto compreendeu quando tenta transformar o conhecimento em explicação. Hoje, a carta entrega a você o lugar de quem ensina.",
    mission:
      "Escolha um conteúdo estudado recentemente e explique-o em voz alta como se estivesse ensinando alguém que nunca o viu. Se desejar, grave um áudio de até três minutos. Depois, identifique onde a explicação ficou confusa, o que foi esquecido e o que precisa ser revisado.",
    reflectionQuestion:
      "Você consegue explicar com simplicidade aquilo que acredita ter aprendido?",
    whisper:
      "Quando o conhecimento encontra sua voz, ele revela onde ainda existem silêncios.",
    illustrationDescription: "Ondas de voz com estrela",
    accentColor: "var(--gold)",
  },
  {
    id: "09",
    number: 9,
    enabled: true,
    name: "A Dupla Face",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Conexão",
    power: "Interdisciplinaridade",
    estimatedTime: "25 minutos",
    tools: ["Folha e dois conteúdos já estudados"],
    revealedMessage:
      "Alguns conhecimentos parecem habitar mundos diferentes, mas podem estar unidos por caminhos invisíveis. Quando você encontra essas conexões, aprende a interpretar questões que misturam temas, linguagens e perspectivas.",
    mission:
      "Escolha dois conteúdos diferentes estudados recentemente. Registre o que cada um explica, um conceito importante de cada um, uma relação entre eles e uma situação em que poderiam aparecer juntos.",
    reflectionQuestion:
      "Que relação aparece quando você deixa de estudar cada conteúdo isoladamente?",
    whisper: "Entre dois conhecimentos sempre pode existir uma passagem secreta.",
    illustrationDescription: "Dois círculos conectados",
    accentColor: "var(--gold)",
  },
  {
    id: "10",
    number: 10,
    enabled: true,
    name: "O Guardião das Fórmulas",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Recuperação",
    power: "Memória ativa",
    estimatedTime: "25 minutos",
    tools: ["Folha e material para conferência"],
    revealedMessage:
      "Fórmulas, conceitos, datas e definições podem parecer seguros enquanto o material permanece aberto. Mas o verdadeiro teste acontece quando você precisa encontrá-los dentro da própria memória.",
    mission:
      "Escolha cinco fórmulas, conceitos ou informações importantes. Sem consultar o material, escreva tudo de que se lembra e explique quando cada item deve ser utilizado. Confira as respostas, complete o que faltou e crie um exemplo de aplicação.",
    reflectionQuestion:
      "O que você reconhece quando vê, mas ainda não consegue recuperar sozinho?",
    whisper:
      "O conhecimento protegido pela memória pode ser chamado mesmo quando os livros se fecham.",
    illustrationDescription: "Escudo com fórmula",
    accentColor: "var(--gold)",
  },
  {
    id: "11",
    number: 11,
    enabled: true,
    name: "A Palavra Desconhecida",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Interpretação",
    power: "Leitura",
    estimatedTime: "25 minutos",
    tools: ["Texto", "reportagem ou questão e dicionário"],
    revealedMessage:
      "Nem toda palavra desconhecida impede a compreensão. Algumas respostas estão escondidas nas frases próximas, na construção do texto e no sentido que permanece ao redor. Antes de recuar, observe as pistas.",
    mission:
      "Escolha um texto com vocabulário desafiador. Destaque até cinco palavras desconhecidas, tente deduzir seus significados pelo contexto e depois consulte as definições. Releia o trecho e escreva a ideia central do texto em uma frase.",
    reflectionQuestion:
      "O que o texto revela quando você observa também aquilo que cerca uma palavra?",
    whisper: "Mesmo o desconhecido deixa pistas para quem lê com atenção.",
    illustrationDescription: "Livro com lupa",
    accentColor: "var(--gold)",
  },
  {
    id: "12",
    number: 12,
    enabled: true,
    name: "A Estratégia",
    family: "Movimento",
    familySymbol: "chave",
    keyword: "Decisão",
    power: "Estratégia de prova",
    estimatedTime: "40 minutos",
    tools: ["Prova anterior", "três marcadores e cronômetro"],
    revealedMessage:
      "Conhecer o conteúdo é essencial, mas uma prova também exige escolhas. Há questões que abrem caminhos e outras que consomem tempo demais. Estratégia não é adivinhar: é observar, decidir e administrar os próprios recursos.",
    mission:
      "Observe 20 questões de uma prova anterior. Classifique-as como verde, quando souber como começar; amarela, quando precisar pensar; ou vermelha, quando não souber resolver. Responda primeiro às verdes, depois às amarelas e deixe as vermelhas para o final.",
    reflectionQuestion:
      "Você resolve as questões por estratégia ou apenas na ordem em que elas aparecem?",
    whisper: "Nem sempre o melhor caminho é aquele apresentado primeiro.",
    illustrationDescription: "Tabuleiro com caminho",
    accentColor: "var(--gold)",
  },
  {
    id: "13",
    number: 13,
    enabled: true,
    name: "O Comparador",
    family: "Espelho",
    familySymbol: "olho",
    keyword: "Individualidade",
    power: "Autoconhecimento",
    estimatedTime: "10 minutos",
    tools: ["Papel ou bloco de notas"],
    revealedMessage:
      "Você pode estar medindo os bastidores da sua preparação pela vitrine de outra pessoa. Horas estudadas, conteúdos concluídos e notas não revelam pontos de partida, dificuldades ou caminhos diferentes.",
    mission:
      "Registre três progressos que aconteceram na sua preparação nas últimas semanas. Depois, escolha um indicador pessoal para acompanhar durante a próxima semana.",
    reflectionQuestion:
      "Você está usando a evolução de outras pessoas como inspiração ou como instrumento de cobrança?",
    whisper: "O caminho de outra pessoa não é a régua destinada a medir o seu.",
    illustrationDescription: "Duas estrelas de tamanhos iguais",
    accentColor: "var(--lilac)",
  },
  {
    id: "14",
    number: 14,
    enabled: true,
    name: "A Pressa",
    family: "Espelho",
    familySymbol: "olho",
    keyword: "Ritmo",
    power: "Priorização",
    estimatedTime: "15 minutos",
    tools: ["Cronograma ou lista de conteúdos"],
    revealedMessage:
      "Quando você olha para tudo o que ainda falta, pode surgir a vontade de aprender muitos conteúdos ao mesmo tempo. A pressa cria a sensação de movimento, mas nem sempre permite que o conhecimento crie raízes.",
    mission:
      "Selecione um conteúdo que precisa ser aprendido, um que precisa ser revisado e uma habilidade que precisa ser praticada. Escolha apenas um desses itens para trabalhar hoje e determine o que significará concluir a tarefa.",
    reflectionQuestion:
      "Você está tentando aprender ou apenas tentando diminuir uma lista?",
    whisper:
      "Quem corre para atravessar todos os caminhos pode não perceber por onde passou.",
    illustrationDescription: "Pássaro em movimento",
    accentColor: "var(--lilac)",
  },
  {
    id: "15",
    number: 15,
    enabled: true,
    name: "O Labirinto",
    family: "Espelho",
    familySymbol: "olho",
    keyword: "Direção",
    power: "Decisão",
    estimatedTime: "10 minutos",
    tools: ["Papel e materiais de estudo"],
    revealedMessage:
      "Videoaulas, resumos, apostilas, mapas mentais, exercícios e diferentes métodos prometem mostrar o caminho. Porém, quando todas as possibilidades são abertas ao mesmo tempo, até uma boa escolha pode parecer insuficiente.",
    mission:
      "Escolha um conteúdo e defina uma rota simples: uma fonte para aprender, uma atividade para praticar e uma forma de revisar. Não procure outro método durante esse estudo, a menos que a fonte escolhida seja realmente insuficiente.",
    reflectionQuestion:
      "Você precisa de um recurso melhor ou precisa permanecer tempo suficiente no recurso que já escolheu?",
    whisper:
      "A saída aparece quando você deixa de percorrer todos os caminhos ao mesmo tempo.",
    illustrationDescription: "Labirinto circular",
    accentColor: "var(--lilac)",
  },
  {
    id: "16",
    number: 16,
    enabled: true,
    name: "A Máscara da Produtividade",
    family: "Espelho",
    familySymbol: "olho",
    keyword: "Intenção",
    power: "Ação",
    estimatedTime: "20 minutos",
    tools: ["A tarefa mais importante do dia"],
    revealedMessage:
      "Organizar a mesa, escolher cores, montar cronogramas e procurar o método perfeito podem parecer estudo. Essas ações têm valor quando facilitam a aprendizagem, mas também podem se transformar em esconderijos para evitar tarefas mais difíceis.",
    mission:
      "Observe o que você fez nos últimos 30 minutos e pergunte se isso produziu aprendizagem ou apenas preparou o cenário. Agora realize 20 minutos de contato direto com o conteúdo: videoaula, exercícios, revisão, escrita ou correção.",
    reflectionQuestion:
      "Qual atividade parece produtiva, mas frequentemente afasta você da tarefa principal?",
    whisper: "Há movimentos que levantam poeira, mas não levam o viajante adiante.",
    illustrationDescription: "Máscara diante de um livro",
    accentColor: "var(--lilac)",
  },
  {
    id: "17",
    number: 17,
    enabled: true,
    name: "A Sombra do Erro",
    family: "Espelho",
    familySymbol: "olho",
    keyword: "Tentativa",
    power: "Coragem",
    estimatedTime: "25 minutos",
    tools: ["Cinco questões e gabarito"],
    revealedMessage:
      "Talvez você esteja evitando questões, simulados ou redações porque ainda não se sente preparado. Mas esperar até ter certeza de que acertará impede que o erro revele o que precisa ser aprendido.",
    mission:
      "Responda a cinco questões desafiadoras sem consultar a resolução. Depois, complete para cada erro: ‘Eu errei porque…’ e ‘Para não repetir esse erro, preciso…’. Avalie a experiência pela clareza conquistada, não apenas pelo número de acertos.",
    reflectionQuestion:
      "O que você deixa de descobrir quando tenta se proteger de qualquer possibilidade de errar?",
    whisper: "O erro perde sua sombra quando se transforma em aprendizado.",
    illustrationDescription: "Sombra atravessada por luz",
    accentColor: "var(--lilac)",
  },
  {
    id: "18",
    number: 18,
    enabled: true,
    name: "A Montanha Infinita",
    family: "Espelho",
    familySymbol: "olho",
    keyword: "Perspectiva",
    power: "Organização",
    estimatedTime: "15 minutos",
    tools: ["Lista de conteúdos ou cronograma"],
    revealedMessage:
      "Quando você observa todos os conteúdos acumulados de uma só vez, a preparação pode parecer uma montanha sem fim. A mente mistura o que é urgente, o que é importante e o que talvez nem precise ser feito agora.",
    mission:
      "Divida seus conteúdos em três grupos: essencial agora, importante depois e pode esperar. Escolha apenas uma tarefa do primeiro grupo e determine seu primeiro passo concreto.",
    reflectionQuestion:
      "Todo o conteúdo está realmente atrasado ou está apenas reunido em uma única imagem assustadora?",
    whisper:
      "Até a maior montanha é atravessada por trechos que cabem em um único dia.",
    illustrationDescription: "Montanha com caminho iluminado",
    accentColor: "var(--lilac)",
  },
  {
    id: "19",
    number: 19,
    enabled: true,
    name: "O Recomeço",
    family: "Amparo",
    familySymbol: "estrela",
    keyword: "Retomada",
    power: "Constância",
    estimatedTime: "20 minutos",
    tools: ["Um conteúdo familiar e três questões"],
    revealedMessage:
      "Um período distante dos estudos não apaga tudo o que você construiu. Talvez seu ritmo tenha mudado e o primeiro movimento pareça difícil. Ainda assim, o caminho continua disponível.",
    mission:
      "Escolha um conteúdo de que gosta ou se recorda bem. Faça uma revisão breve e responda a três questões simples. A missão de hoje não é testar seus limites: é recuperar o movimento.",
    reflectionQuestion:
      "Qual seria uma forma gentil e possível de voltar aos estudos hoje?",
    whisper: "O caminho não desaparece quando você para. Ele espera pelo seu retorno.",
    illustrationDescription: "Sol nascendo",
    accentColor: "var(--skylight)",
  },
  {
    id: "20",
    number: 20,
    enabled: true,
    name: "A Pausa",
    family: "Amparo",
    familySymbol: "estrela",
    keyword: "Recuperação",
    power: "Equilíbrio",
    estimatedTime: "15 minutos",
    tools: ["Nenhum"],
    revealedMessage:
      "Nem toda interrupção representa desistência. Há momentos em que continuar sem atenção, compreensão ou energia apenas prolonga o cansaço. Uma pausa consciente recupera os recursos necessários para prosseguir.",
    mission:
      "Afaste-se dos materiais por 15 minutos. Beba água, movimente o corpo, descanse os olhos e evite trocar os estudos por notificações. Ao retornar, escolha uma única tarefa curta para concluir.",
    reflectionQuestion:
      "Seu corpo e sua mente estão pedindo para desistir ou apenas para recuperar o fôlego?",
    whisper: "Até a luz precisa diminuir para voltar a brilhar com nitidez.",
    illustrationDescription: "Lua sobre uma nuvem",
    accentColor: "var(--skylight)",
  },
  {
    id: "21",
    number: 21,
    enabled: true,
    name: "O Abrigo",
    family: "Amparo",
    familySymbol: "estrela",
    keyword: "Apoio",
    power: "Cooperação",
    estimatedTime: "15 minutos",
    tools: ["Uma dúvida e uma fonte de ajuda"],
    revealedMessage:
      "Há dúvidas que crescem quando permanecem escondidas. Pedir ajuda não diminui o que você sabe nem torna a caminhada menos sua. Algumas passagens são encontradas com mais facilidade quando outra pessoa segura uma luz.",
    mission:
      "Escolha uma dúvida que esteja impedindo seu avanço. Escreva exatamente o que você não compreendeu e procure uma resolução comentada, outra explicação, um professor ou um colega.",
    reflectionQuestion:
      "Que dificuldade está mais pesada porque você acredita que precisa resolvê-la sozinho?",
    whisper:
      "Aceitar uma luz não diminui a força de quem atravessa o caminho.",
    illustrationDescription: "Duas mãos protegendo uma estrela",
    accentColor: "var(--skylight)",
  },
  {
    id: "22",
    number: 22,
    enabled: true,
    name: "A Pequena Vitória",
    family: "Amparo",
    familySymbol: "estrela",
    keyword: "Reconhecimento",
    power: "Confiança",
    estimatedTime: "10 minutos",
    tools: ["Caderno ou bloco de notas"],
    revealedMessage:
      "Nem todo avanço faz barulho. Há conteúdos compreendidos, erros corrigidos e hábitos retomados que desaparecem rapidamente atrás da próxima obrigação. Quando você reconhece apenas o que falta, sua trajetória parece sempre incompleta.",
    mission:
      "Complete: ‘Antes eu tinha dificuldade em…’, ‘Hoje eu já consigo…’, ‘Um erro que passei a compreender foi…’, ‘Um hábito que estou construindo é…’ e ‘Meu próximo pequeno avanço será…’.",
    reflectionQuestion:
      "Que progresso se tornou invisível apenas porque você já se acostumou com ele?",
    whisper: "Algumas conquistas brilham baixo, mas ainda iluminam o caminho.",
    illustrationDescription: "Pequena estrela dentro de uma coroa",
    accentColor: "var(--skylight)",
  },
  {
    id: "23",
    number: 23,
    enabled: true,
    name: "A Imperfeição",
    family: "Amparo",
    familySymbol: "estrela",
    keyword: "Possibilidade",
    power: "Coragem",
    estimatedTime: "30 minutos",
    tools: ["Uma tarefa evitada por medo de errar"],
    revealedMessage:
      "A busca pelo resultado perfeito pode impedir que a tentativa exista. Talvez você esteja esperando dominar todo o conteúdo antes de responder questões ou encontrar a ideia ideal antes de escrever.",
    mission:
      "Escolha uma tarefa que está adiando: escrever uma introdução, responder cinco questões difíceis, resolver um problema sem consultar o exemplo ou explicar um conteúdo. Faça uma primeira versão em até 30 minutos. Identifique um acerto e um ponto a aprimorar.",
    reflectionQuestion:
      "O que poderia começar a existir se não precisasse nascer perfeito?",
    whisper:
      "Aquilo que pode ser aprimorado precisa primeiro ter a coragem de existir.",
    illustrationDescription: "Círculo incompleto com luz",
    accentColor: "var(--skylight)",
  },
  {
    id: "24",
    number: 24,
    enabled: true,
    name: "A Âncora",
    family: "Amparo",
    familySymbol: "estrela",
    keyword: "Estabilidade",
    power: "Segurança",
    estimatedTime: "25 minutos",
    tools: ["Um conteúdo dominado e cinco questões"],
    revealedMessage:
      "Em dias de dúvida, é fácil acreditar que você não sabe nada. A insegurança cobre o que já foi aprendido e transforma dificuldades pontuais em uma imagem de fracasso completo.",
    mission:
      "Escolha um conteúdo que você domina melhor. Faça uma revisão rápida e responda a cinco questões. Depois, registre: ‘Este é um ponto de apoio que eu já construí’. Use essa segurança para definir o próximo conteúdo que deseja fortalecer.",
    reflectionQuestion:
      "Que conhecimento já conquistado pode lembrar você de que é capaz de aprender o próximo?",
    whisper:
      "Quando o mar se agita, lembrar onde está sua âncora muda a travessia.",
    illustrationDescription: "Âncora iluminada",
    accentColor: "var(--skylight)",
  },
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
  return candidates[Math.floor(Math.random() * candidates.length)] as TarotCard;
}
