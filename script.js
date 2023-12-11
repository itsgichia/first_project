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
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // ... (existing JavaScript code) ...

    const visitCountElement = document.getElementById('visitCount');
    const incrementCounterButton = document.getElementById('incrementCounter');
    let visitCount = 0;

    if (incrementCounterButton && visitCountElement) {
        incrementCounterButton.addEventListener('click', function () {
            // Increment the counter and update the element
            visitCount++;
            visitCountElement.textContent = visitCount.toString();
        });
    }
});
