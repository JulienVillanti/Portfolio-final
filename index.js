// Create a function to switch active link for the navbar

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(navLink => {
        const sectionId = navLink.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section.getBoundingClientRect().top <= 20 && section.getBoundingClientRect().bottom >= 20) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    })
}
// Adding another function to fix the issue with the elements height

function elementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// function calculateSectionHeights() {
//     const sections = document.querySelectorAll('section');
//     sections.forEach(section => {
//         const height = section.getBoundingClientRect().height;
//         section.style.minHeight = height + 'px';
//     });
// }

window.addEventListener('scroll', updateActiveNavLink);
// window.addEventListener('resize', calculateSectionHeights);

// calculateSectionHeights();
updateActiveNavLink();