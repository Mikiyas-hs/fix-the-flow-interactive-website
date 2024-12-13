// Selecteer de Dark Mode-knop
const darkModeToggle = document.getElementById('darkModeToggle');



// Controleer of dark mode eerder is ingeschakeld
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
}

// Eventlistener om Dark Mode aan/uit te schakelen
darkModeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

    // Opslaan in localStorage
    if (isDarkMode) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
