document.addEventListener('mousemove', function(event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const personajes = document.getElementById('personajes');

    const moveX = (windowWidth / 2 - mouseX) * 0.02;  
    const moveY = (windowHeight / 2 - mouseY) * 0.02; 

    personajes.style.transform = `translate(${moveX}px, ${moveY}px)`;
})