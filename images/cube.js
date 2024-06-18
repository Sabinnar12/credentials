
  document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const cubeContainer = document.querySelector('.cube-container');

    closeBtn.addEventListener('click', function() {
        cubeContainer.style.display = 'none';
    });
});
