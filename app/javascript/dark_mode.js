document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    // Funkcja do ustawiania ikon w zależności od trybu
    const updateIcons = (isDarkMode) => {
        if (isDarkMode) {
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        } else {
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
        }
    };

    // Sprawdzenie preferencji użytkownika lub systemowych preferencji
    const isDarkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateIcons(false);
    }

    themeToggleButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isNowDarkMode = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isNowDarkMode ? 'dark' : 'light');
        updateIcons(isNowDarkMode);
    });
});