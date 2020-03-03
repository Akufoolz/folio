const navMenu = document.querySelector('#navMenu');
const headerMenuToggle = document.querySelector('#headerMenuToggle');
const headerIconClose = document.querySelector('#headerIconClose');
const headerIconMenu = document.querySelector('#headerIconMenu');

headerMenuToggle.addEventListener('click', ()=> {
    headerIconClose.classList.toggle('hidden');
    headerIconMenu.classList.toggle('hidden');
    navMenu.classList.toggle('hidden');
});