document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const setAutomaticTheme = () => {
        const hour = new Date().getHours();
        // Dark mode between 8 PM (20) and 6 AM (6)
        if (hour >= 20 || hour < 6) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    };

    // On page load, check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    } else {
        setAutomaticTheme();
    }

    themeToggleButton.addEventListener('click', () => {
        // Toggle the 'dark' class on the html element
        htmlElement.classList.toggle('dark');

        // Save the user's preference to localStorage
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
