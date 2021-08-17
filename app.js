const iconMenu1 = document.querySelector('#ico-menu-1'),
    iconMenu2 = document.querySelector('#ico-menu-2'),
    menu = document.querySelector('#nav');


iconMenu2.addEventListener('click', () => {
    menu.classList.toggle('active');
});
iconMenu1.addEventListener('click', () => {
    menu.classList.toggle('active');
});

gsap.from(".me", {duration: 3, x: 150, opacity: 0, scale: 0.5});

gsap.to(".skill-box", {
    y:50,
    duration: 1.3,
    repeat: -1,
    yoyo: true,
    stagger: {
        each: 0.1,
        from: "random"
    }
});

gsap.to(".social", {
    y:30,
    duration: 1.3,
    repeat: -1,
    yoyo: true,
    stagger: {
        each: 0.1,
        from: "random"
    }
});

// ScrollReveal().reveal('.about-me', {delay: 200});

ScrollReveal().reveal('.so-1', {delay: 100});
ScrollReveal().reveal('.so-2', {delay: 400});
ScrollReveal().reveal('.so-3', {delay: 700});
ScrollReveal().reveal('.so-4', {delay: 1000});
ScrollReveal().reveal('.so-5', {delay: 1300});
ScrollReveal().reveal('.so-6', {delay: 1600});
ScrollReveal().reveal('.so-7', {delay: 1900});
ScrollReveal().reveal('.so-8', {delay: 2100});