const body = document.querySelector('body');
const main = document.querySelector('.main');
const footer = document.querySelector('footer');
const hideLogo = document.querySelector('#logo');
const openItem = document.querySelector('.open-item');
const closeItem = document.querySelector('.close-item');
const closeNav = document.querySelector('.close-nav');
const navItem = document.querySelectorAll('.list-item');

/* eslint-disable no-unused-vars */
const openMenu = () => {
  body.style.backgroundColor = '#3c3a39';
  main.style.display = 'none';
  footer.style.display = 'none';
  hideLogo.style.display = 'none';
  closeItem.style.display = 'block';
  openItem.style.display = 'none';
  closeNav.style.display = 'block';
};

const closeMenu = () => {
  openItem.style.display = 'block';
  closeItem.style.display = 'none';
  main.style.display = 'block';
  footer.style.display = 'block';
  hideLogo.style.display = 'block';
  closeNav.style.display = 'none';
};

navItem.forEach((item) => {
  item.addEventListener('click', () => closeMenu());
});
