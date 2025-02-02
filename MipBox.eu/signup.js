const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('logged-in-message').style.display = 'block';
} else {
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('logged-in-message').style.display = 'none';
}

document.getElementById('home-btn').addEventListener('click', () => {
    window.location.href = 'Home.html';
});

document.getElementById('login-link').addEventListener('click', () => {
    window.location.href = 'login.html';
});

document.getElementById('signup-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').textContent = 'Account created successfully!';
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
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
        document.getElementById('form-title').textContent = 'Rejestracja';
        document.getElementById('username').placeholder = 'Nazwa użytkownika';
        document.getElementById('password').placeholder = 'Hasło';
        document.getElementById('signup-btn').textContent = 'Zarejestruj się';
        document.getElementById('login-link').textContent = 'Masz już konto? Zaloguj się';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'Jesteś już zalogowany.';
        document.getElementById('home-btn').textContent = 'Wróć do strony głównej';
        languageBtn.textContent = 'Język';
    } else if (lang === 'de') {
        document.getElementById('form-title').textContent = 'Registrieren';
        document.getElementById('username').placeholder = 'Benutzername';
        document.getElementById('password').placeholder = 'Passwort';
        document.getElementById('signup-btn').textContent = 'Registrieren';
        document.getElementById('login-link').textContent = 'Haben Sie bereits ein Konto? Einloggen';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'Sie sind bereits eingeloggt.';
        document.getElementById('home-btn').textContent = 'Zurück zur Startseite';
        languageBtn.textContent = 'Sprache';
    } else if (lang === 'es') {
        document.getElementById('form-title').textContent = 'Registrarse';
        document.getElementById('username').placeholder = 'Nombre de usuario';
        document.getElementById('password').placeholder = 'Contraseña';
        document.getElementById('signup-btn').textContent = 'Registrarse';
        document.getElementById('login-link').textContent = '¿Ya tienes una cuenta? Iniciar sesión';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'Ya has iniciado sesión.';
        document.getElementById('home-btn').textContent = 'Volver a la página principal';
        languageBtn.textContent = 'Idioma';
    } else {
        document.getElementById('form-title').textContent = 'Sign Up';
        document.getElementById('username').placeholder = 'Username';
        document.getElementById('password').placeholder = 'Password';
        document.getElementById('signup-btn').textContent = 'Sign Up';
        document.getElementById('login-link').textContent = 'Already have an account? Log in';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'You are already logged in.';
        document.getElementById('home-btn').textContent = 'Go back home';
        languageBtn.textContent = 'Language';
    }
}

const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
applyLanguage(preferredLanguage);
