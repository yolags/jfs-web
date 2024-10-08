document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const navbar = document.getElementById('navbar');
    const headerTitle = document.querySelector('.header__title');
    const headerHeight = header.offsetHeight;
    const toggleMenu = document.querySelector('.toggle-menu');
    const menu = document.getElementById('menu');
    const sectionLinks = document.querySelectorAll('.navbar__link[href^="#"]');
    const body = document.body;

    // Función de Smooth Scroll
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        // Cerrar el menú después del desplazamiento si estamos en modo móvil
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            toggleMenu.classList.remove('active');
            menu.classList.remove('open');
            body.classList.remove('no-scroll'); // Desbloquear el scroll
        }
    }

    // Función para manejar el scroll según el dispositivo
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            header.classList.toggle('navbar--fixed', scrollPosition > headerHeight);
        } else {
            navbar.classList.toggle('navbar--fixed', scrollPosition > (headerTitle.offsetTop + headerTitle.offsetHeight));
        }
    }

    // Toggle del menú en mobile
    function toggleMenuHandler() {
        toggleMenu.classList.toggle('active');
        menu.classList.toggle('open');
        body.classList.toggle('no-scroll');
    }

    sectionLinks.forEach(link => link.addEventListener('click', smoothScroll));
    toggleMenu.addEventListener('click', toggleMenuHandler);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll();
});

AOS.init();