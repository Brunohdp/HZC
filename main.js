const menuLateral = document.querySelector(".menu-lateral")
const botaoMenu = document.querySelector(".cabecalho__menu")

botaoMenu.addEventListener("click", () => {
  menuLateral.classList.toggle('menu-lateral--ativo')
})
