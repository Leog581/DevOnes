document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const DARK_MODE_START_HOUR = 20; // 8 PM
    const DARK_MODE_END_HOUR = 6;    // 6 AM

    /**
     * Checks if localStorage is available and accessible.
     * @returns {boolean} True if localStorage is available, false otherwise.
     */
    function isStorageAvailable() {
        try {
            const testKey = '__theme_test__';
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
     * Sets the theme automatically based on the current time.
     * Applies dark mode between DARK_MODE_START_HOUR and DARK_MODE_END_HOUR.
     */
    const setAutomaticTheme = () => {
        const hour = new Date().getHours();
        if (hour >= DARK_MODE_START_HOUR || hour < DARK_MODE_END_HOUR) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    };

    /**
     * Loads the theme from localStorage or sets it automatically if no preference is saved.
     */
    const loadTheme = () => {
        if (isStorageAvailable()) {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                htmlElement.classList.toggle('dark', savedTheme === 'dark');
                return;
            }
        }
        setAutomaticTheme();
    };

    /**
     * Toggles the theme between light and dark mode and saves the preference.
     */
    const toggleTheme = () => {
        htmlElement.classList.toggle('dark');
        if (isStorageAvailable()) {
            const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        }
    };

    // Initial theme load
    loadTheme();

    // Event listener for the theme toggle button
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});
