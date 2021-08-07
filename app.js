const iconMenu1 = document.querySelector('#ico-menu-1'), 
    iconMenu2 = document.querySelector('#ico-menu-2'),
    menu = document.querySelector('#nav');


iconMenu2.addEventListener('click', () => {
    menu.classList.toggle('active');
});
iconMenu1.addEventListener('click', () => {
    menu.classList.toggle('active');
});