document.addEventListener('DOMContentLoaded', () => {
    const languageOptions = document.getElementById('language-options');
    const saveBtn = document.getElementById('save-btn');
    const username = localStorage.getItem('loggedInUser');

    // Set the selected language based on localStorage
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    languageOptions.value = preferredLanguage;
    applyLanguage(preferredLanguage);

    saveBtn.addEventListener('click', () => {
        const selectedLanguage = languageOptions.value;
        localStorage.setItem('preferredLanguage', selectedLanguage);
        applyLanguage(selectedLanguage);
    });

    if (username) {
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('username-display').textContent = `Logged in as: ${username}`;
        document.getElementById('logout-btn').classList.remove('hidden');
        document.getElementById('settings-btn').classList.remove('hidden');
        if (username === 'ADMIN') {
            document.getElementById('admin-btn').classList.remove('hidden');
        }
    }

    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'Home.html';
    });

    document.getElementById('admin-btn').addEventListener('click', () => {
        window.location.href = 'adminpanel.html';
    });

    document.getElementById('settings-btn').addEventListener('click', () => {
        window.location.href = 'settings.html';
    });

    document.getElementById('home-btn').addEventListener('click', () => {
        window.location.href = 'Home.html';
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);
    darkModeToggle.checked = isDarkMode;

    darkModeToggle.addEventListener('change', () => {
        const isDark = darkModeToggle.checked;
        localStorage.setItem('darkMode', isDark);
        document.body.classList.toggle('dark-mode', isDark);
    });
});

function applyLanguage(lang) {
    if (lang === 'pl') {
        document.querySelector('title').textContent = 'Ustawienia';
        document.getElementById('settings-title').textContent = 'Ustawienia';
        document.getElementById('language-label').textContent = 'Wybierz język:';
        document.getElementById('save-btn').textContent = 'Zapisz';
        document.getElementById('home-btn').textContent = 'Strona główna';
        document.getElementById('settings-btn').textContent = 'Ustawienia';
    } else if (lang === 'de') {
        document.querySelector('title').textContent = 'Einstellungen';
        document.getElementById('settings-title').textContent = 'Einstellungen';
        document.getElementById('language-label').textContent = 'Sprache wählen:';
        document.getElementById('save-btn').textContent = 'Speichern';
        document.getElementById('home-btn').textContent = 'Startseite';
        document.getElementById('settings-btn').textContent = 'Einstellungen';
    } else if (lang === 'es') {
        document.querySelector('title').textContent = 'Configuraciones';
        document.getElementById('settings-title').textContent = 'Configuraciones';
        document.getElementById('language-label').textContent = 'Elige lengua:';
        document.getElementById('save-btn').textContent = 'Guardar';
        document.getElementById('home-btn').textContent = 'Inicio';
        document.getElementById('settings-btn').textContent = 'Configuraciones';
    } else {
        document.querySelector('title').textContent = 'Settings';
        document.getElementById('settings-title').textContent = 'Settings';
        document.getElementById('language-label').textContent = 'Choose Language:';
        document.getElementById('save-btn').textContent = 'Save';
        document.getElementById('home-btn').textContent = 'Home';
        document.getElementById('settings-btn').textContent = 'Settings';
    }
}