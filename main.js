const menuLateral = document.querySelector(".menu-lateral");
const botaoMenu = document.querySelector(".cabecalho__menu");
const areaNoticacao = document.querySelector(".notificacoes");
const botaoNotificacao = document.querySelector(".cabecalho__notificacao");
const botaoParaPaginaDoVideo = document.querySelectorAll(".cartao__botao--play")


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
