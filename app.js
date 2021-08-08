const iconMenu1 = document.querySelector('#ico-menu-1'), 
    iconMenu2 = document.querySelector('#ico-menu-2'),
    menu = document.querySelector('#nav');


iconMenu2.addEventListener('click', () => {
    menu.classList.toggle('active');
});
iconMenu1.addEventListener('click', () => {
    menu.classList.toggle('active');
});


ScrollReveal().reveal('.about-me', {delay: 200});

ScrollReveal().reveal('.so-1', {delay: 100});
ScrollReveal().reveal('.so-2', {delay: 400});
ScrollReveal().reveal('.so-3', {delay: 700});
ScrollReveal().reveal('.so-4', {delay: 1000});
ScrollReveal().reveal('.so-5', {delay: 1300});
ScrollReveal().reveal('.so-6', {delay: 1600});
ScrollReveal().reveal('.so-7', {delay: 1900});
ScrollReveal().reveal('.so-8', {delay: 2100});
ScrollReveal().reveal('.so-9', {delay: 100});
ScrollReveal().reveal('.so-10', {delay: 400});
ScrollReveal().reveal('.so-11', {delay: 700});
ScrollReveal().reveal('.so-12', {delay: 1000});
ScrollReveal().reveal('.so-13', {delay: 1300});
ScrollReveal().reveal('.so-14', {delay: 1600});