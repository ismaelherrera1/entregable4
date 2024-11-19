document.addEventListener('mousemove', function(event) {
    // Obtener las dimensiones de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Obtener las coordenadas del mouse dentro de la ventana
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Seleccionar la imagen
    const personajes = document.getElementById('personajes');

    // Calcular el movimiento opuesto (invertir la dirección)
    const moveX = (windowWidth / 2 - mouseX) * 0.02;  // Movimiento más sutil
    const moveY = (windowHeight / 2 - mouseY) * 0.02;  // Movimiento más sutil

    // Aplicar el movimiento con estilo CSS
    personajes.style.transform = `translate(${moveX}px, ${moveY}px)`;
})