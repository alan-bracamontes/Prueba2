document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu'); // Cambiado a 'mobile-menu'
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});