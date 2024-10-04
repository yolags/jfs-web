document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const headerTitle = document.querySelector(".header__title");

    const observerOptions = {
        root: null, // Viewport
        threshold: 0 // Detectar cuando el h1 está completamente fuera del viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add("navbar--fixed"); // H1 está fuera del viewport, fijar navbar
            } else {
                navbar.classList.remove("navbar--fixed"); // H1 está dentro del viewport, restaurar navbar
            }
        });
    }, observerOptions);

    observer.observe(headerTitle);
});

document.addEventListener("DOMContentLoaded", function () {
    const sectionLinks = document.querySelectorAll('.navbar__link[href^="#"]');

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    sectionLinks.forEach(link => link.addEventListener('click', smoothScroll));
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const menu = document.getElementById('menu');

    toggleMenu.addEventListener('click', function() {
        toggleMenu.classList.toggle('active');
        menu.classList.toggle('open');
    });
});