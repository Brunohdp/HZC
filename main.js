const menuLateral = document.querySelector(".menu-lateral");
const botaoMenu = document.querySelector(".cabecalho__menu");
const areaNoticacao = document.querySelector(".notificacoes");
const botaoNotificacao = document.querySelector(".cabecalho__notificacao");
const botaoParaPaginaDoVideo = document.querySelectorAll(".cartao__botao--play")
const botaoParaPaginaDoPico = document.querySelectorAll(".cartao__botao--pico")


botaoMenu.addEventListener("click", () => {
  menuLateral.classList.toggle('menu-lateral--ativo');
})

botaoNotificacao.addEventListener("click", () => {
  areaNoticacao.classList.toggle('notificacoes--ativo');
})

botaoParaPaginaDoVideo.forEach((botao) =>
  botao.addEventListener('click', (event) => {
    window.location.href="pagina-modelo-dos-videos.html"})
);

botaoParaPaginaDoPico.forEach((botao) =>
  botao.addEventListener('click', (event) => {
    window.location.href="pagina-modelo-dos-picos.html"})
);
