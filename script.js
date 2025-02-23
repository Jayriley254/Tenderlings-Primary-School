// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission alert
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting Tenderlings Primary School! We will get back to you soon.');
});