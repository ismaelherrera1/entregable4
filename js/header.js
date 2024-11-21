const header = document.getElementById('header');
const logo = document.querySelector('.logoimg');
const menu = document.getElementById('menu');
const hamburguesa = document.getElementById('hamburguesa');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0 || menu.classList.contains('visible')) {
        header.classList.add('shrink');
        logo.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
        logo.classList.remove('shrink');
    }
});

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('visible'); 
    menu.classList.toggle('oculto'); 
    hamburguesa.classList.toggle('active');
    
    if (menu.classList.contains('visible')) {
        header.classList.add('shrink');
        logo.classList.add('shrink');
    } else if (window.scrollY === 0) {
        header.classList.remove('shrink');
        logo.classList.remove('shrink');
    }
});

const enlaces = menu.querySelectorAll('a');
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menu.classList.add('oculto');
        menu.classList.remove('visible');

        if (window.scrollY === 0) {
            header.classList.remove('shrink');
            logo.classList.remove('shrink');
        }
    });
});
