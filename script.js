document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Apple-like reveal animations
    const observerOptions = {
        threshold: 0.15, // Trigger slightly later for better effect
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed if you want it to happen only once. 
                // Apple sites often re-trigger or stay visible. Let's keep it simple.
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Navbar transparency check (optional polish)
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.global-nav');
        if (window.scrollY > 0) {
            nav.style.backgroundColor = 'rgba(22, 22, 23, 0.8)';
        } else {
            // Keep it consistent or make it fully transparent at top if desired
            // nav.style.backgroundColor = 'rgba(22, 22, 23, 1)'; 
        }
    });
});
