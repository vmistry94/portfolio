// Function to check which section is in view
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('.slide');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Function to handle smooth scrolling
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}

// Add scroll event listener
window.addEventListener('scroll', highlightNavOnScroll);

// Add click event listeners to navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Call the highlight function on page load
    highlightNavOnScroll();
});