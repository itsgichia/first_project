// script.js

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkModeButton = document.getElementById('darkModeToggle');

    // Check if the button exists
    if (darkModeButton) {
        // Add click event listener
        darkModeButton.addEventListener('click', function () {
            // Toggle dark mode class on body
            body.classList.toggle('dark-mode');
        });
    }
});
