const header = document.getElementById('header');
const logo = document.querySelector('.logoimg');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('shrink');
        logo.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
        logo.classList.remove('shrink');
    }
});
