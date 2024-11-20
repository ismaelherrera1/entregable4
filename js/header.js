// Seleccionamos los elementos necesarios
const header = document.getElementById('header');
const logo = document.querySelector('.logoimg');
const menu = document.getElementById('menu');
const hamburguesa = document.getElementById('hamburguesa');

// Evento para el scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0 || menu.classList.contains('visible')) {
        header.classList.add('shrink');
        logo.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
        logo.classList.remove('shrink');
    }
});

// Función para alternar la visibilidad del menú hamburguesa
hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('visible'); // Muestra/oculta el menú
    menu.classList.toggle('oculto'); // Alterna las clases de visibilidad
    hamburguesa.classList.toggle('active');
    
    // Verifica si debe aplicar la clase 'shrink' al header/logo
    if (menu.classList.contains('visible')) {
        header.classList.add('shrink');
        logo.classList.add('shrink');
    } else if (window.scrollY === 0) {
        header.classList.remove('shrink');
        logo.classList.remove('shrink');
    }
});

// Cierra el menú al hacer clic en un enlace
const enlaces = menu.querySelectorAll('a');
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menu.classList.add('oculto');
        menu.classList.remove('visible');

        // Verifica si debe eliminar la clase 'shrink' al cerrar el menú
        if (window.scrollY === 0) {
            header.classList.remove('shrink');
            logo.classList.remove('shrink');
        }
    });
});
