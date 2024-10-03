const header = document.querySelector('.header');
const title = document.querySelector('.header__title');
const links = document.querySelectorAll('.navbar__link');

const headerInitialTop = header.offsetTop;

function handleScroll() {
    if (window.scrollY > headerInitialTop) {
        header.classList.add('fixed');
        title.classList.add('hidden');
    } else {
        header.classList.remove('fixed');
        title.classList.remove('hidden');
    }
}

// Función para realizar scroll suave utilizando scrollIntoView
function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

window.addEventListener('scroll', handleScroll, { passive: true });

links.forEach(link => link.addEventListener('click', smoothScroll));
