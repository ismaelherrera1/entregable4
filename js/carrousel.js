document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel .scroller img');
    let currentIndex = 0;
    
    function showImage(index) {

        images.forEach(img => img.classList.remove('active'));

        images[index].classList.add('active');
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; 
        showImage(currentIndex);
    }, 3000);

    showImage(currentIndex);
});
