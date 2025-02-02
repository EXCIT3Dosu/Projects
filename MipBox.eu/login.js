const loggedInUser = localStorage.getItem('loggedInUser');
if (loggedInUser) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('logged-in-message').style.display = 'block';
} else {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('logged-in-message').style.display = 'none';
}

document.getElementById('home-btn').addEventListener('click', () => {
    window.location.href = 'Home.html';
});

document.getElementById('signup-link').addEventListener('click', () => {
    window.location.href = 'signup.html';
});

document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'Home.html';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});

function applyLanguage(lang) {
    if (lang === 'pl') {
        document.getElementById('form-title').textContent = 'Logowanie';
        document.getElementById('username').placeholder = 'Nazwa użytkownika';
        document.getElementById('password').placeholder = 'Hasło';
        document.getElementById('login-btn').textContent = 'Zaloguj się';
        document.getElementById('signup-link').textContent = 'Nie masz konta? Zarejestruj się';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'Jesteś już zalogowany.';
        document.getElementById('home-btn').textContent = 'Wróć do strony głównej';
    } else {
        document.getElementById('form-title').textContent = 'Login';
        document.getElementById('username').placeholder = 'Username';
        document.getElementById('password').placeholder = 'Password';
        document.getElementById('login-btn').textContent = 'Log in';
        document.getElementById('signup-link').textContent = 'Don\'t have an account? Sign up';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'You are already logged in.';
        document.getElementById('home-btn').textContent = 'Go back home';
    }
}

const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
applyLanguage(preferredLanguage);
