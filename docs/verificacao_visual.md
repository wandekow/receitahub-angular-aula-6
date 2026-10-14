# Verificação visual — ReceitaHub

A aplicação foi aberta no navegador em ambiente Sandbox com o servidor Angular em modo de desenvolvimento. A home exibiu a identidade ReceitaHub, o hero “Receitas para viver devagar”, a navegação, os indicadores de 8 receitas e 3 favoritas, além dos cartões de destaque.

A rota `/receitas` apresentou os oito cartões, o campo de busca, o seletor de categorias e os estados de favorito. A busca por `chocolate` atualizou a tela para um único resultado. A rota `/receitas/3` exibiu a foto, o nome, categoria, tempo, dificuldade, ingredientes, modo de preparo e ação de favorito. Para `/receitas/999`, a condição `@if / @else` exibiu corretamente “Receita não encontrada”.

A tela `/cadastrar` exibiu o formulário responsivo com campos obrigatórios, mensagens de validação, campos de texto multilinha e botão de publicação. Uma receita de teste foi preenchida e publicada; o aplicativo navegou para `/receitas/9`, confirmando a atualização do Service em memória.
