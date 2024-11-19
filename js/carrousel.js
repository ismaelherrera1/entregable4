document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel .scroller img');
    let currentIndex = 0;
    
    // Muestra la imagen actual
    function showImage(index) {
        // Oculta todas las imágenes
        images.forEach(img => img.classList.remove('active'));

        // Muestra la imagen seleccionada
        images[index].classList.add('active');
    }

    // Cambia la imagen cada 3 segundos (3000 ms)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; // Incrementa y vuelve al principio al llegar al final
        showImage(currentIndex);
    }, 3000); // Cambiar imagen cada 3 segundos

    // Muestra la primera imagen inicialmente
    showImage(currentIndex);
});
