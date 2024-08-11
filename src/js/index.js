/* 
Objetivo- quando clicarmos no botão temos que mostrar a imagem de fundo correspondente 
passo 1 - dar um jeito de pegar o elemento HTML dos botoes
passo 2 - dar um jeito de identificar o clique do usuario no botao 
passo 3 - desmarcar o botao selecionado anterior
passo 4 - marcar o botao clicado como se estivesse selecionado 
passo 5 - esconder a imagem anteriormante selecionada
passo 6 - fazer aparecer a imagem correspondente ao botao clicado
passo 7 - esconder a informação do dragao anteriormente selecionado 
passo 8 - mostrar a informação do dragao referente ao botao clicado 
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");

// passo 2 - dar um jeito de identificar o clique do usuario no botao 
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //passo 3 - desmarcar o botao selecionado anterior
        const botaoSelecionado = document.querySelector(".selecionado");
        const imagens = document.querySelectorAll(".imagem");
        const informacoes = document.querySelectorAll(".informacoes");
        botaoSelecionado.classList.remove("selecionado");

        //passo 4 - marcar o botao clicado como se estivesse selecionado 
        botao.classList.add("selecionado");

        //passo 5 - esconder a imagem anteriormante selecionada
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        //passo 6 - fazer aparecer a imagem correspondente ao botao clicado
        imagens[indice].classList.add("ativa");

        //passo 7 - esconder a informação do dragao anteriormente selecionado 
        const informacaoAtiva = document.querySelector(".informacoes.ativa");
        informacaoAtiva.classList.remove("ativa");

        //passo 8 - mostrar a informação do dragao referente ao botao clicado 
        informacoes[indice].classList.add("ativa");
    });
});