# Tarô Caminho Certo

Crie uma aplicação web mobile-first chamada “Tarô da Aprovação”.

CONCEITO DO PRODUTO

O Tarô da Aprovação é uma experiência digital, lúdica e pedagógica para estudantes. O usuário retira uma carta e recebe uma mensagem, uma missão prática de estudos e uma pergunta para reflexão.

Não se trata de previsão do futuro, prática esotérica ou promessa de aprovação. O conceito central é:

“As cartas não preveem a sua aprovação. Elas ajudam você a construir o caminho até ela.”

A aplicação deve ser misteriosa, encantadora, jovem, acolhedora e elegante. A estética pode se inspirar moderadamente no universo do tarô, mas a linguagem precisa ser simples, clara e contemporânea.

OBJETIVO DESTA PRIMEIRA VERSÃO

Construa o MVP completo e funcional, mas utilize inicialmente apenas uma carta com conteúdo completo. Prepare a arquitetura para receber posteriormente 24 cartas por meio de um arquivo de dados centralizado.

Não crie textos para as outras 23 cartas e não use conteúdo genérico gerado por IA. Os textos definitivos serão enviados posteriormente.

TECNOLOGIA E LIMITES

Crie uma aplicação web responsiva em React e TypeScript.

Priorize a experiência em celulares.

Não crie login.

Não crie banco de dados.

Não utilize Supabase.

Não crie painel administrativo.

Use localStorage para salvar a carta retirada, a data e o estado da missão.

Centralize todo o conteúdo das cartas em um único arquivo, como src/data/cards.ts.

Separe os componentes de interface dos dados das cartas.

Mantenha o código organizado e fácil de atualizar.

Utilize animações leves em CSS e Motion.

Respeite a configuração do sistema para redução de movimento.

Garanta boa performance em celulares.

Não inclua recursos pagos ou APIs externas.

IDENTIDADE VISUAL

Crie uma identidade visual autoral e sofisticada, inspirada em uma noite estrelada e em um baralho contemporâneo.

Paleta principal:

Azul-noturno profundo: #0B1026

Roxo profundo: #28164F

Lilás místico: #8D72D8

Dourado suave: #E8C878

Azul-luz: #9DD9F3

Branco levemente azulado: #F5F4FF

Utilize gradientes escuros, pontos de luz, constelações discretas, luas, estrelas, portais, caminhos e pequenos símbolos geométricos.

Não use uma estética assustadora, religiosa, excessivamente esotérica, medieval ou semelhante a aplicativos de horóscopo. O resultado deve parecer uma experiência educacional premium, jovem e compartilhável.

TIPOGRAFIA

Use uma fonte serifada elegante e legível nos títulos das cartas.

Use uma fonte sem serifa limpa e muito legível nos textos, botões e instruções.

Não use fontes excessivamente ornamentadas.

Garanta boa leitura dos textos longos no celular.

SÍMBOLO PRINCIPAL

Crie um símbolo para o projeto composto por uma porta ou portal aberto com uma pequena estrela ao fundo. Esse símbolo representa que as cartas não revelam o destino: elas iluminam uma possibilidade de caminho.

VERSO DA CARTA

O verso da carta deve ter:

fundo azul-noturno;

moldura dourada fina;

símbolo do portal com a estrela no centro;

pequenas constelações simétricas;

brilho discreto;

cantos arredondados;

textura visual sutil;

aparência elegante e contemporânea.

FAMÍLIAS DAS CARTAS

A estrutura deve estar preparada para três famílias:

Movimento

Símbolo: chave

Cor secundária: dourado

Função: propor missões e técnicas práticas de estudo

Espelho

Símbolo: olho

Cor secundária: lilás

Função: ajudar o estudante a reconhecer comportamentos que interferem nos estudos

Amparo

Símbolo: estrela

Cor secundária: azul-claro

Função: acolher, recuperar e favorecer a retomada

TELAS E EXPERIÊNCIA

TELA DE ABERTURA

Exiba:

Tarô da Aprovação

“As cartas não preveem a sua aprovação. Elas ajudam você a construir o caminho até ela.”

Texto de apoio:

“Às vezes, você não precisa saber tudo o que falta. Precisa apenas descobrir qual é o seu próximo passo.”

Botão principal:

“Entrar no ritual”

Inclua o símbolo do portal, estrelas discretas e uma carta fechada flutuando suavemente.

TELA DE PREPARAÇÃO

Exiba o texto gradualmente:

“Pare por alguns segundos.”

“Pense em como você está se sentindo diante dos estudos hoje.”

“Quando estiver pronto, toque no baralho e revele sua carta.”

Botão:

“Revelar minha carta”

Inclua três a cinco cartas fechadas, parcialmente sobrepostas, formando um pequeno baralho.

ANIMAÇÃO DE SORTEIO

Quando o usuário tocar no botão:

as cartas devem se movimentar como se estivessem sendo embaralhadas;

uma carta deve se destacar;

as outras devem desaparecer suavemente;

a carta escolhida deve ir para o centro;

deve ocorrer uma pausa curta;

a carta deve virar em 3D;

um brilho discreto deve surgir ao redor;

pequenas estrelas ou partículas podem aparecer;

a animação completa deve durar aproximadamente 2 a 3 segundos;

a experiência precisa funcionar bem em celulares;

impeça cliques repetidos durante a animação.

Não faça uma animação exagerada, rápida ou infantil.

CARTA REVELADA

Mostre primeiro a frente visual da carta com:

número da carta;

nome;

símbolo da família;

ilustração ou símbolo central;

palavra-chave;

família.

Abaixo ou após tocar em “Ler minha mensagem”, apresente o conteúdo em blocos bem organizados:

Mensagem revelada

Sua missão

Pergunta para levar com você

Sussurro da carta

Tempo da missão

Instrumentos

Poder despertado

O conteúdo deve ser confortável de ler no celular. Não comprima todo o texto dentro de uma carta estreita. A carta visual pode aparecer no topo, e a leitura completa deve acontecer em uma área ampla abaixo dela.

CONCLUSÃO DA MISSÃO

Inclua o botão:

“Aceitar o convite”

Depois do clique, altere para:

“Convite aceito ✦”

Mostre uma animação breve e delicada de luz ou estrelas e a mensagem:

“Cada missão cumprida acrescenta um novo passo à sua jornada.”

Salve a conclusão no localStorage.

Inclua também:

“Guardar esta carta”

Nesta primeira versão, esse botão deve salvar a carta no histórico local.

CARTA DO DIA E NOVO SORTEIO

Após revelar uma carta, mostre a opção:

“Revisitar minha carta”

Não obrigue o usuário a esperar 24 horas para testar o MVP.

Inclua também um botão secundário:

“Realizar um novo sorteio”

Antes de sortear novamente, exiba:

“Cada carta oferece um caminho diferente. Deseja revelar uma nova mensagem?”

Botões:

“Revelar outra carta”

“Continuar com esta”

Deixe a estrutura preparada para ativarmos futuramente o limite de uma carta por dia por meio de uma constante de configuração, sem precisar reescrever a lógica.

HISTÓRICO

Crie uma tela simples chamada “Minha jornada”.

Mostre:

cartas já retiradas;

data de cada retirada;

família;

status da missão: “Convite aceito” ou “Ainda não realizado”.

Se não houver histórico, exiba:

“Sua jornada ainda está em branco. Retire uma carta para iluminar o primeiro caminho.”

Não crie sequência punitiva, ofensiva ou streak que zere.

Quando o estudante retornar depois de alguns dias, use a mensagem:

“Todo retorno também conta. Sua jornada continua.”

TELA SOBRE A EXPERIÊNCIA

Crie uma seção acessível pelo menu chamada “Sobre o Tarô”.

Use o texto:

“O Tarô da Aprovação é uma dinâmica lúdica e pedagógica. Suas cartas apresentam missões, reflexões e estratégias para apoiar a rotina de estudos. Elas não realizam previsões, não determinam resultados e não substituem orientação pedagógica ou apoio profissional. A aprovação não está escrita nas cartas: ela é construída por meio das escolhas, dos aprendizados e dos passos realizados ao longo do caminho.”

NAVEGAÇÃO

Use uma navegação simples e discreta com:

Início

Minha jornada

Sobre o Tarô

Em celulares, utilize menu compacto. Não deixe a navegação competir com a experiência da carta.

ACESSIBILIDADE

Garanta contraste adequado.

Use tamanhos de fonte confortáveis.

Todos os botões devem ter rótulos claros.

Não dependa apenas da cor para identificar as famílias.

Adicione textos alternativos aos elementos visuais.

Permita navegação por teclado.

Respeite prefers-reduced-motion.

Evite partículas ou brilhos que prejudiquem a leitura.

Não reproduza sons automaticamente.

CONTEÚDO DA CARTA DE TESTE

Use esta carta completa:

Número: 01

Nome: O Cronômetro

Família: Movimento

Símbolo da família: Chave

Palavra-chave: Concentração

Poder despertado: Foco

Tempo da missão: 30 minutos

Instrumentos: Cronômetro, videoaula, caderno e três exercícios

Mensagem revelada:

“Por alguns minutos, deixe o restante do mundo do lado de fora. A aprovação não é construída apenas em longas jornadas, mas em pequenos períodos nos quais a atenção permanece inteira.”

Sua missão:

“Defina um cronômetro de 25 minutos. Nesse período, assista a uma videoaula curta e registre os três pontos mais importantes. Quando o tempo terminar, responda a três exercícios sobre o conteúdo estudado.”

Pergunta para levar com você:

“Quanto você consegue avançar quando oferece toda a sua atenção a uma única tarefa?”

Sussurro da carta:

“Quando a atenção permanece, o conhecimento encontra onde ficar.”

Ilustração sugerida:

Uma ampulheta estilizada no centro, envolvida por uma órbita dourada, pequenas estrelas e uma chave discreta. A areia da ampulheta pode emitir um brilho suave.

ESTRUTURA DAS 24 CARTAS

Prepare o arquivo de dados para receber estas cartas:

MOVIMENTO

O Cronômetro

O Oráculo das Questões

A Prova do Tempo

O Espelho dos Erros

A Roda da Memória

A Página em Branco

O Mapa Oculto

A Voz do Mestre

A Dupla Face

O Guardião das Fórmulas

A Palavra Desconhecida

A Estratégia

ESPELHO

O Comparador

A Pressa

O Labirinto

A Máscara da Produtividade

A Sombra do Erro

A Montanha Infinita

AMPARO

O Recomeço

A Pausa

O Abrigo

A Pequena Vitória

A Imperfeição

A Âncora

Por enquanto, apenas “O Cronômetro” deve estar disponível para sorteio. As demais cartas podem existir no arquivo com enabled: false e campos de conteúdo vazios. Não invente nem exiba textos para elas.

ESTRUTURA DOS DADOS

Cada carta deve aceitar os seguintes campos:

id

number

enabled

name

family

familySymbol

keyword

power

estimatedTime

tools

revealedMessage

mission

reflectionQuestion

whisper

illustrationDescription

accentColor

REGRAS DO SORTEIO

Sorteie apenas cartas com enabled: true.

Evite repetir a carta mais recente quando houver mais de uma carta disponível.

A lógica deve funcionar automaticamente quando as outras 23 cartas forem ativadas.

Registre no localStorage a carta, a data, o horário e o estado da missão.

Permita limpar o histórico apenas dentro de uma área discreta de configurações, com confirmação.

Não exiba configurações técnicas para o usuário.

TOM DE VOZ

Todo texto da interface deve ser:

misterioso, mas compreensível;

encantador, mas não infantil;

motivacional, mas não exagerado;

acolhedor, mas não genérico;

pedagógico, mas não professoral;

jovem, mas sem excesso de gírias.

Evite:

promessas de aprovação;

previsões;

linguagem religiosa;

afirmações sobre destino;

frases como “o universo escolheu”;

culpa;

medo;

competitividade;

mensagens que tratem descanso como fracasso;

referências diretas a signos, horóscopo ou adivinhação.

MICROINTERAÇÕES

Inclua:

brilho sutil ao passar o cursor sobre a carta;

leve movimento de flutuação na carta fechada;

transição suave entre telas;

mudança visual ao aceitar o convite;

feedback claro ao guardar a carta;

estados de carregamento;

estados de foco nos botões;

feedback visual sem depender de som.

RESULTADO ESPERADO

Entregue uma aplicação funcional, refinada e pronta para teste. Priorize:

experiência mobile;

beleza e coerência visual;

legibilidade;

animação de sorteio e virada da carta;

organização do código;

facilidade para inserir posteriormente as outras 23 cartas.

Antes de finalizar, teste todos os botões, a animação, o armazenamento local, o histórico, a responsividade e o funcionamento da carta de teste.

Não adicione funcionalidades que não foram solicitadas. Não use textos genéricos para preencher espaços. Não crie depoimentos, planos pagos, cadastro, ranking ou elementos comerciais.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://tarodoaprova.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8d1da39f-a3b8-42a0-b742-b966755955f2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
