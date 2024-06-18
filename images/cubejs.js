document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const cubeContainer = document.querySelector('.cube-container');
    const cube = document.querySelector('.cube');

    closeBtn.addEventListener('click', function() {
        cubeContainer.style.display = 'none';
    });

    cube.addEventListener('click', function() {
        window.open('https://www.sabinrokka.com.np/payment', '_blank');
    });
});
