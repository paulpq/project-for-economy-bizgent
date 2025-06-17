const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

const animatedElements = document.querySelectorAll('.animate');
animatedElements.forEach((el) => observer.observe(el));

// Back to Top Button
const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) { // Show button after 300px of scroll
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Direct language switcher implementation
window.addEventListener('DOMContentLoaded', function () {
    // Direct DOM access for language switcher
    const allButtons = document.querySelectorAll('.lang-switcher-btn');

    allButtons.forEach(function (button) {
        // Find the closest parent dropdown
        const dropdown = button.closest('.lang-dropdown');
        if (!dropdown) return;

        // Find the dropdown content within this dropdown
        const dropdownContent = dropdown.querySelector('.lang-dropdown-content');
        if (!dropdownContent) return;

        // Add click event to button
        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle dropdown visibility
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                button.classList.remove('active');
            } else {
                // Close all other dropdowns first
                document.querySelectorAll('.lang-dropdown-content').forEach(function (content) {
                    content.classList.remove('show');
                });
                document.querySelectorAll('.lang-switcher-btn').forEach(function (btn) {
                    btn.classList.remove('active');
                });

                // Show this dropdown
                dropdownContent.classList.add('show');
                button.classList.add('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.lang-dropdown')) {
            document.querySelectorAll('.lang-dropdown-content').forEach(function (dropdown) {
                dropdown.classList.remove('show');
            });
            document.querySelectorAll('.lang-switcher-btn').forEach(function (button) {
                button.classList.remove('active');
            });
        }
    });
});
