const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('logged-in-message').style.display = 'block';
} else {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('logged-in-message').style.display = 'none';
}

const isDarkMode = localStorage.getItem('darkMode') === 'true';
document.body.classList.toggle('dark-mode', isDarkMode);

document.getElementById('home-btn').addEventListener('click', () => {
    window.location.href = 'Home.html';
});

document.getElementById('signup-link').addEventListener('click', () => {
    window.location.href = 'signup.html';
});

document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists and the password matches
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'Home.html';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});

const languageBtn = document.getElementById('language-btn');
const languageOptions = document.getElementById('language-options');
const langPl = document.getElementById('lang-pl');
const langEn = document.getElementById('lang-en');
const langDe = document.getElementById('lang-de');
const langEs = document.getElementById('lang-es');

languageBtn.addEventListener('click', () => {
    if (languageOptions.style.display === 'none' || languageOptions.style.display === '') {
        languageOptions.style.display = 'block';
    } else {
        languageOptions.style.display = 'none';
    }
});

langPl.addEventListener('click', () => {
    setLanguage('pl');
    languageOptions.style.display = 'none';
});

langEn.addEventListener('click', () => {
    setLanguage('en');
    languageOptions.style.display = 'none';
});

langDe.addEventListener('click', () => {
    setLanguage('de');
    languageOptions.style.display = 'none';
});

langEs.addEventListener('click', () => {
    setLanguage('es');
    languageOptions.style.display = 'none';
});

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    if (lang === 'pl') {
        document.getElementById('form-title').textContent = 'Logowanie';
        document.getElementById('username').placeholder = 'Nazwa użytkownika';
        document.getElementById('password').placeholder = 'Hasło';
        document.getElementById('login-btn').textContent = 'Zaloguj się';
        document.getElementById('signup-link').textContent = 'Nie masz konta? Zarejestruj się';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'Jesteś już zalogowany.';
        document.getElementById('home-btn').textContent = 'Wróć do strony głównej';
        languageBtn.textContent = 'Język';
    } else if (lang === 'de') {
        document.getElementById('form-title').textContent = 'Einloggen';
        document.getElementById('username').placeholder = 'Benutzername';
        document.getElementById('password').placeholder = 'Passwort';
        document.getElementById('login-btn').textContent = 'Einloggen';
        document.getElementById('signup-link').textContent = 'Haben Sie kein Konto? Registrieren';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'Sie sind bereits eingeloggt.';
        document.getElementById('home-btn').textContent = 'Zurück zur Startseite';
        languageBtn.textContent = 'Sprache';
    } else if (lang === 'es') {
        document.getElementById('form-title').textContent = 'Iniciar sesión';
        document.getElementById('username').placeholder = 'Nombre de usuario';
        document.getElementById('password').placeholder = 'Contraseña';
        document.getElementById('login-btn').textContent = 'Iniciar sesión';
        document.getElementById('signup-link').textContent = '¿No tienes una cuenta? Registrarse';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'Ya has iniciado sesión.';
        document.getElementById('home-btn').textContent = 'Volver a la página principal';
        languageBtn.textContent = 'Idioma';
    } else {
        document.getElementById('form-title').textContent = 'Login';
        document.getElementById('username').placeholder = 'Username';
        document.getElementById('password').placeholder = 'Password';
        document.getElementById('login-btn').textContent = 'Log in';
        document.getElementById('signup-link').textContent = 'Don\'t have an account? Sign up';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'You are already logged in.';
        document.getElementById('home-btn').textContent = 'Go back home';
        languageBtn.textContent = 'Language';
    }
}

const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
applyLanguage(preferredLanguage);