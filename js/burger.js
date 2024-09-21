const clas = {
opened: "opened",
}
const header = document.querySelector(".header")
const menu = document.querySelector(".header-menu__button") 
const toggleMenu = () => header.classList.toggle(clas.opened)
menu.addEventListener("click", toggleMenu)