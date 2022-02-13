const menuLateral = document.querySelector(".menu-lateral");
const botaoMenu = document.querySelector(".cabecalho__menu");
const areaNoticacao = document.querySelector(".notificacoes");
const botaoNotificacao = document.querySelector(".cabecalho__notificacao");
const botaoVideoDestaque = document.querySelector(".cartao__botao--destaque")


botaoMenu.addEventListener("click", () => {
  menuLateral.classList.toggle('menu-lateral--ativo');
})

botaoNotificacao.addEventListener("click", () => {
  areaNoticacao.classList.toggle('notificacoes--ativo');
})

botaoVideoDestaque.addEventListener("click", () => {
  window.location.href="https://www.google.com"
})
