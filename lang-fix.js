/**
 * Language Switcher Fix
 * This standalone script fixes the language switcher functionality
 * Include this script at the end of the body tag on all language versions
 */
(function () {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
    } else {
        // DOM already loaded
        initLanguageSwitcher();
    }

    function initLanguageSwitcher() {
        // Find all language switcher buttons
        var buttons = document.querySelectorAll('.lang-switcher-btn');

        if (buttons.length === 0) {
            console.log('No language switcher buttons found');
            return;
        }

        console.log('Found ' + buttons.length + ' language switcher buttons');

        // Add click event to each button
        buttons.forEach(function (button) {
            // Find the dropdown content within the parent dropdown element
            var dropdown = button.closest('.lang-dropdown');
            if (!dropdown) {
                console.log('No parent dropdown found for button', button);
                return;
            }

            var dropdownContent = dropdown.querySelector('.lang-dropdown-content');
            if (!dropdownContent) {
                console.log('No dropdown content found for button', button);
                return;
            }

            // Remove any existing click handlers by cloning and replacing
            var newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            button = newButton;

            // Add click event to button
            button.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                // Toggle dropdown
                var isVisible = dropdownContent.classList.contains('show');

                // Close all dropdowns first
                document.querySelectorAll('.lang-dropdown-content').forEach(function (el) {
                    el.classList.remove('show');
                });

                document.querySelectorAll('.lang-switcher-btn').forEach(function (el) {
                    el.classList.remove('active');
                });

                // Toggle this dropdown
                if (!isVisible) {
                    dropdownContent.classList.add('show');
                    button.classList.add('active');
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.lang-dropdown')) {
                document.querySelectorAll('.lang-dropdown-content').forEach(function (el) {
                    el.classList.remove('show');
                });

                document.querySelectorAll('.lang-switcher-btn').forEach(function (el) {
                    el.classList.remove('active');
                });
            }
        });

        console.log('Language switcher initialized successfully');
    }
})(); 