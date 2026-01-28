Micro Frontends com Next.js e Module Federation

Este projeto demonstra a implementação de uma arquitetura de Micro Frontends utilizando Next.js, React e Webpack Module Federation.

O sistema é dividido em três aplicações independentes que se comunicam entre si por meio de eventos globais, simulando um fluxo real de composição de micros em um container principal.

📦 Estrutura do Projeto

O repositório está organizado como um monorepo, contendo três aplicações distintas:

micro-frontends/
├── container/   # Aplicação principal (host)
├── cardapio/    # Micro frontend de listagem de produtos
└── pedido/      # Micro frontend de exibição do pedido

Descrição dos Micros

Container

Aplicação principal

Responsável por importar e renderizar os micro frontends

Não contém regras de negócio específicas

Micro Cardápio

Exibe uma lista de produtos disponíveis

Cada item possui nome, descrição e botão de ação

Dispara eventos globais ao adicionar um item ao pedido

Micro Pedido

Escuta eventos globais

Exibe dinamicamente os itens adicionados ao pedido

🧠 Arquitetura e Decisões Técnicas
Micro Frontends

Cada micro frontend é um projeto independente

Integração realizada via Webpack Module Federation

O container atua como host, consumindo os micros remotamente

Comunicação entre Micros

A comunicação é feita através de eventos globais do browser, conforme sugerido no enunciado da tarefa:

window.dispatchEvent(new CustomEvent('pedido:add', { detail: item }));

window.addEventListener('pedido:add', handler);


Essa abordagem mantém os micros desacoplados, sem dependência direta entre eles.

SSR desativado para Micros

Os micro frontends são carregados exclusivamente no client-side:

dynamic(() => import('micro/App'), { ssr: false });


Isso evita conflitos de runtime com o Module Federation e garante o correto funcionamento dos hooks do React.

🛠 Tecnologias Utilizadas

React 18

Next.js 14

Webpack Module Federation

JavaScript (ES6+)

nextjs-mf

Não foi utilizado TypeScript conforme especificado no escopo da tarefa.

▶️ Como Rodar o Projeto
Pré-requisitos

Node.js 18 LTS

npm ou yarn

Passo a passo

Instale as dependências em cada aplicação:

cd cardapio
npm install

cd ../pedido
npm install

cd ../container
npm install


Inicie os micros nesta ordem:

# Terminal 1
cd cardapio
npm run dev

# Terminal 2
cd pedido
npm run dev

# Terminal 3
cd container
npm run dev


Acesse no navegador:

http://localhost:3000

🔄 Fluxo de Funcionamento

O Container carrega os micros Cardápio e Pedido

O usuário adiciona um item no Cardápio

Um evento global é disparado

O micro Pedido escuta o evento e atualiza a lista de itens

📌 Observações Importantes

Todos os projetos utilizam a mesma versão de React e Next.js

Os micros podem ser executados de forma isolada

O projeto prioriza clareza arquitetural e desacoplamento

🚀 Possíveis Evoluções

Uso de um Event Bus dedicado

Compartilhamento de estado via Context externo

Implementação de Error Boundaries no container

Estilização unificada entre micros

👤 Autor

Projeto desenvolvido como exercício prático de arquitetura de Micro Frontends com foco em boas práticas e integração entre aplicações independentes.

🏁 Conclusão

Este projeto demonstra, de forma prática, como micro frontends podem ser organizados, integrados e comunicados utilizando ferramentas modernas do ecossistema React e Next.js, respeitando princípios de desacoplamento e escalabilidade.