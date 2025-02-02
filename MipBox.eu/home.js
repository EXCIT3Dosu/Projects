document.getElementById('login-btn').addEventListener('click', () => {
    window.location.href = 'login.html';
});

document.getElementById('signup-btn').addEventListener('click', () => {
    window.location.href = 'signup.html';
});

const username = localStorage.getItem('loggedInUser');
if (username) {
    document.getElementById('user-info').classList.remove('hidden');
    document.getElementById('username-display').textContent = `Logged in as: ${username}`;
    document.getElementById('logout-btn').classList.remove('hidden');
}

document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
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
        document.getElementById('title').textContent = 'Witaj na stronie MipBox.eu';
        document.getElementById('under-construction').textContent = 'Strona w budowie';
        document.getElementById('invite').innerHTML = 'W międzyczasie zapraszam na <a href="https://discord.gg/ymA3fKJNVb">discorda</a>';
        document.getElementById('test-invite').textContent = 'Jeżeli jednak chcesz przetestować stronę to zapraszam do zarejestrowania się.';
        document.getElementById('login-btn').textContent = 'Zaloguj się';
        document.getElementById('signup-btn').textContent = 'Zarejestruj się';
        document.getElementById('logout-btn').textContent = 'Wyloguj się';
        if (username) {
            document.getElementById('username-display').textContent = `Zalogowany jako: ${username}`;
        }
        languageBtn.textContent = 'Język';
    } else if (lang === 'de') {
        document.getElementById('title').textContent = 'Willkommen bei MipBox.eu';
        document.getElementById('under-construction').textContent = 'Seite im Aufbau';
        document.getElementById('invite').innerHTML = 'In der Zwischenzeit, treten Sie uns auf <a href="https://discord.gg/ymA3fKJNVb">Discord</a> bei';
        document.getElementById('test-invite').textContent = 'Wenn Sie die Seite testen möchten, registrieren Sie sich bitte.';
        document.getElementById('login-btn').textContent = 'Einloggen';
        document.getElementById('signup-btn').textContent = 'Registrieren';
        document.getElementById('logout-btn').textContent = 'Ausloggen';
        if (username) {
            document.getElementById('username-display').textContent = `Eingeloggt als: ${username}`;
        }
        languageBtn.textContent = 'Sprache';
    } else if (lang === 'es') {
        document.getElementById('title').textContent = 'Bienvenido a MipBox.eu';
        document.getElementById('under-construction').textContent = 'Sitio en construcción';
        document.getElementById('invite').innerHTML = 'Mientras tanto, únete a nosotros en <a href="https://discord.gg/ymA3fKJNVb">Discord</a>';
        document.getElementById('test-invite').textContent = 'Si deseas probar el sitio, por favor regístrate.';
        document.getElementById('login-btn').textContent = 'Iniciar sesión';
        document.getElementById('signup-btn').textContent = 'Registrarse';
        document.getElementById('logout-btn').textContent = 'Cerrar sesión';
        if (username) {
            document.getElementById('username-display').textContent = `Conectado como: ${username}`;
        }
        languageBtn.textContent = 'Idioma';
    } else {
        document.getElementById('title').textContent = 'Welcome to MipBox.eu';
        document.getElementById('under-construction').textContent = 'Site under construction';
        document.getElementById('invite').innerHTML = 'In the meantime, join us on <a href="https://discord.gg/ymA3fKJNVb">Discord</a>';
        document.getElementById('test-invite').textContent = 'If you want to test the site, please register.';
        document.getElementById('login-btn').textContent = 'Log in';
        document.getElementById('signup-btn').textContent = 'Sign up';
        document.getElementById('logout-btn').textContent = 'Log out';
        if (username) {
            document.getElementById('username-display').textContent = `Logged in as: ${username}`;
        }
        languageBtn.textContent = 'Language';
    }
}

const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
applyLanguage(preferredLanguage);
