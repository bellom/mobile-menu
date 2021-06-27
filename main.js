let body = document.querySelector("body");
let main = document.querySelector(".main");
let footer = document.querySelector("footer");
let hide_logo = document.querySelector("#logo");
let openItem = document.querySelector(".open-item");
let closeItem = document.querySelector(".close-item");
let closeNav = document.querySelector(".close-nav");
let navItem = document.querySelectorAll(".list-item");

const openMenu = () => {
  body.style.backgroundColor = "#3C3A39"
  main.style.display = "none"
  footer.style.display = "none"
  hide_logo.style.display = "none"
  closeItem.style.display = "block"
  openItem.style.display = "none"
  closeNav.style.display = "block"
}

const closeMenu = () => {
  openItem.style.display = "block"
  closeItem.style.display = "none"
  main.style.display = "block"
  footer.style.display = "block"
  hide_logo.style.display = "block"
  closeNav.style.display = "none"
}

navItem.forEach((item) => {
  item.addEventListener('click', () => closeMenu());
});