document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)'; 
        card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)'; 
        card.style.filter = 'brightness(1.2)'; 
        card.style.zIndex = '10'; 
        card.style.transition = 'transform 0.3s, box-shadow 0.3s, filter 0.3s'; 
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)'; 
        card.style.boxShadow = 'none'; 
        card.style.filter = 'brightness(1)'; 
        card.style.zIndex = '1'; 
    });
});
