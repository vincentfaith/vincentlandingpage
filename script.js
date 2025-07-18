const toggleBtn = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
