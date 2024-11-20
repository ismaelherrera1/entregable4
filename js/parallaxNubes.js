document.addEventListener('scroll', function() {
    const clouds = document.querySelectorAll('.layerNubes');
    
    clouds.forEach(function(cloud) {
        let speed = cloud.getAttribute('data-speed');
        cloud.style.transform = 'translateX(' + window.scrollY * speed + 'px)';
    });
});