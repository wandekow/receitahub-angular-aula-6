# ReceitaHub — Plataforma de Receitas Culinárias

Aplicação web desenvolvida em Angular para a atividade da Aula 6. A implementação segue a diretriz específica do enunciado para execução por IA: **ReceitaHub**, em português brasileiro, com componentes standalone, rotas, Service e armazenamento em memória, sem backend ou banco de dados.

## Funcionalidades

- Página inicial com apresentação da plataforma, total de receitas, total de favoritas e destaques dinâmicos.
- Catálogo em `/receitas` com oito receitas iniciais, busca por nome, filtro por categoria, favoritos e mensagem de nenhum resultado.
- Detalhes em `/receitas/:id`, com leitura do parâmetro via `ActivatedRoute` e mensagem `Receita não encontrada` para IDs inválidos.
- Cadastro em `/cadastrar`, com `[(ngModel)]`, validação de campos obrigatórios, tempo maior que zero e inclusão pelo `ReceitaService` sem recarregar a página.
- Página `/sobre` com identificação, disciplina, tecnologias e responsabilidades de componentes, rotas e service.
- Rota curinga para endereços inexistentes.
- Interface responsiva com identidade visual própria, estados, efeitos e navegação por `routerLink`.

## Requisitos técnicos atendidos

| Requisito | Implementação |
| --- | --- |
| Componentes Angular | `components/menu` e `components/receita-card`, além das páginas standalone |
| Interpolação | Textos, métricas, nomes, categorias e detalhes dinâmicos |
| Property Binding | `[src]`, `[alt]`, `[routerLink]`, `[class]`, `[disabled]` e atributos ARIA |
| Event Binding | Cliques, envio de formulário, favoritos e menu responsivo |
| Two-way Binding | `[(ngModel)]` no catálogo e no cadastro |
| `@if` / `@else` | Resultados, estados vazios, erros e feedback de formulário |
| `@for` | Listagem, categorias, ingredientes e passos de preparo |
| `@switch` | Dificuldade da receita e dicas contextuais |
| Rotas e `routerLink` | Home, catálogo, detalhes, cadastro, sobre e rota curinga |
| Service e DI | `ReceitaService` único, injetado nas páginas e no card via eventos |
| Interface TypeScript | `Receita` e `NovaReceita` em `src/app/models/receita.model.ts` |
| CSS responsivo | SCSS global e específico por componente/página |

## Organização

```text
src/app/
├── components/
│   ├── menu/
│   └── receita-card/
├── models/receita.model.ts
├── pages/
│   ├── cadastrar-receita/
│   ├── home/
│   ├── not-found/
│   ├── receita-detalhes/
│   ├── receitas/
│   └── sobre/
├── services/receita.service.ts
├── app.config.ts
├── app.routes.ts
├── app.html
└── app.ts
```

## Como executar

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm start
```

Acesse `http://localhost:4200/`.

## Build e testes

```bash
npm run build
CHROME_BIN=/usr/bin/chromium npm test -- --no-watch --no-progress --browsers=ChromeHeadless
```

Os dados são mantidos em memória enquanto a aplicação está aberta. Ao recarregar a página, o catálogo volta aos dados iniciais.

## Identificação

O enunciado não informa o nome do aluno. Por isso, a página Sobre registra explicitamente essa ausência sem inventar uma identificação. O campo pode ser atualizado em `src/app/pages/sobre/sobre.html` quando o nome oficial for informado.
