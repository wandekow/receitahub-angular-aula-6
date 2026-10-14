# Relatório de testes — ReceitaHub

## Validações executadas

| Verificação | Comando ou procedimento | Resultado |
| --- | --- | --- |
| Instalação | `npm install --no-audit --no-fund` | Aprovada; 539 pacotes instalados |
| Build | `npm run build` | Aprovado; bundle de produção gerado em `dist/receitahub-angular` |
| Testes automatizados | `CHROME_BIN=/usr/bin/chromium npm test -- --no-watch --no-progress --browsers=ChromeHeadless` | Aprovado; **6 testes** executados com sucesso |
| Home | Navegação para `/` | Aprovada; hero, menu, métricas e 3 destaques renderizados |
| Catálogo | Navegação para `/receitas` | Aprovada; 8 receitas, busca, filtro e favoritos disponíveis |
| Busca | Pesquisa por `chocolate` | Aprovada; resultado reduzido para 1 receita |
| Detalhes | Navegação para `/receitas/3` | Aprovada; ID recuperado e dados completos exibidos |
| ID inexistente | Navegação para `/receitas/999` | Aprovada; mensagem `Receita não encontrada` exibida |
| Cadastro | Preenchimento e envio do formulário | Aprovado; nova receita criada e aberta em `/receitas/9` |

## Observações

A aplicação utiliza dados em memória. O cadastro atualiza o Service e a navegação ocorre sem recarregar a página; ao reiniciar o navegador, os oito registros originais são restaurados. As imagens da interface usam URLs públicas do Unsplash e possuem fallback visual por composição do layout caso a rede esteja indisponível.
