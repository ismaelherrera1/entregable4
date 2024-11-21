let progress = 0;
const fillElement = document.querySelector('.progress-fill');
const numberElement = document.querySelector('.progress-number');


function simulateLoading() {
    const interval = setInterval(() => {
        
        const randomIncrement = Math.floor(Math.random() * 5) + 1;
        progress += randomIncrement;

        if (progress > 100) {
            progress = 100;
        }

        
        fillElement.style.width = `${progress}%`;
        numberElement.textContent = `${progress}%`;

       
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.body.innerHTML = '<h1 style="color: #FFFFFF; text-align: center;">¡Bienvenido a NumberBlocks!</h1>';
            }, 1000); 
        }
    }, 80); 
}


simulateLoading();