// === themeToggle.js ===

function applyTheme(theme, toggleButton, htmlElement) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        toggleButton.textContent = '🌙';
    } else {
        htmlElement.classList.remove('dark');
        toggleButton.textContent = '☀️';
    }
}

function saveAndApplyTheme(theme, toggleButton, htmlElement) {
    localStorage.setItem('theme', theme);
    applyTheme(theme, toggleButton, htmlElement);
}

export function initThemeToggle() {
    const themeToggleButton = document.querySelector('.theme-toggle-button');
    const htmlElement = document.documentElement;

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const isDark = htmlElement.classList.contains('dark');
            saveAndApplyTheme(isDark ? 'light' : 'dark', themeToggleButton, htmlElement);
        });
    }

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme, themeToggleButton, htmlElement);
    } else if (prefersDark) {
        applyTheme('dark', themeToggleButton, htmlElement);
    } else {
        applyTheme('light', themeToggleButton, htmlElement);
    }
}
