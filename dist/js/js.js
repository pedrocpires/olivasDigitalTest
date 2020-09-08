let openButton = document.querySelector('#open-menu');
let menu = document.querySelector('.menu-mobile-opened');

function showMenu() {
  openButton.style.transform = 'translateX(-300px)';
  menu.style.display = 'flex';
  setTimeout(function () {
    menu.style.transform = 'translateX(-300px)';
  }, 100);
}
function hideMenu() {
  menu.style.transform = 'translateX(0px)';
  openButton.style.transform = 'translateX(0px)';
  setTimeout(function () {
    menu.style.display = 'none';
  }, 1000);
}

openButton.addEventListener('click', showMenu);
window.addEventListener('click', (e) => {
  //Verifica se a área clicada pelo usuário pertence a barra lateral ou ao botão 'Option'.
  if (e.path.indexOf(menu) == -1 && e.path.indexOf(openButton) == -1) {
    hideMenu();
  }
});
