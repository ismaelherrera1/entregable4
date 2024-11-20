document.addEventListener('DOMContentLoaded', () => {
    const layers = document.querySelectorAll('.layer');
 

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        layers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
            const initialTop = parseFloat(getComputedStyle(layer).top); 

            const yPos = initialTop - scrollY * speed;
            
            layer.style.transform = `translateY(${yPos - initialTop}px)`;
        });
    });
});


