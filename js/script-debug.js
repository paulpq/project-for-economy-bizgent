// Simple Language Switcher with Debug
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded');

    // Get the language switcher button
    const langBtn = document.querySelector('.lang-switcher-btn');
    console.log('Language button found:', langBtn);

    const langDropdown = document.querySelector('.lang-dropdown-content');
    console.log('Language dropdown found:', langDropdown);

    if (langBtn && langDropdown) {
        console.log('Setting up language switcher event listeners');

        // Toggle dropdown when clicking the button
        langBtn.addEventListener('click', function (e) {
            console.log('Language button clicked');
            e.preventDefault();
            e.stopPropagation();

            const isShowing = langDropdown.classList.contains('show');
            console.log('Dropdown is currently shown:', isShowing);

            if (isShowing) {
                console.log('Hiding dropdown');
                langDropdown.classList.remove('show');
                langBtn.classList.remove('active');
            } else {
                console.log('Showing dropdown');
                langDropdown.classList.add('show');
                langBtn.classList.add('active');
            }

            console.log('Dropdown classes after toggle:', langDropdown.className);
            console.log('Button classes after toggle:', langBtn.className);
        });

        // Close dropdown when clicking anywhere else
        document.addEventListener('click', function (e) {
            console.log('Document clicked');
            if (!e.target.closest('.lang-dropdown')) {
                console.log('Click outside dropdown, hiding dropdown');
                langDropdown.classList.remove('show');
                langBtn.classList.remove('active');
            } else {
                console.log('Click inside dropdown, keeping open');
            }
        });

        // Prevent closing when clicking inside dropdown
        langDropdown.addEventListener('click', function (e) {
            console.log('Dropdown clicked');
            if (!e.target.closest('a')) {
                console.log('Click not on a link, stopping propagation');
                e.stopPropagation();
            } else {
                console.log('Click on a link, allowing navigation');
            }
        });

        console.log('Language switcher setup complete');
    } else {
        console.error('Language switcher elements not found!');
        console.log('Available elements in DOM:');
        console.log('Buttons:', document.querySelectorAll('button'));
        console.log('Lang dropdown elements:', document.querySelectorAll('.lang-dropdown'));
        console.log('Lang dropdown content elements:', document.querySelectorAll('.lang-dropdown-content'));
    }
}); 