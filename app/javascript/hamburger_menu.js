document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector("[data-collapse-toggle]");
    const navMenu = document.getElementById(toggleButton.getAttribute("aria-controls"));

    toggleButton.addEventListener("click", function() {
        navMenu.classList.toggle("hidden");
    });
});