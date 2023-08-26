const burger = document.querySelector('.burger');
const navListMobile = document.querySelector('.nav__mobile');


burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});


burger.addEventListener('click', function() {
    navListMobile.classList.toggle('open');
    navListMobile.classList.toggle('block');
});