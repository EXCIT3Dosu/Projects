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

function applyLanguage(lang) {
    if (lang === 'pl') {
        document.getElementById('form-title').textContent = 'Rejestracja';
        document.getElementById('username').placeholder = 'Nazwa użytkownika';
        document.getElementById('password').placeholder = 'Hasło';
        document.getElementById('signup-btn').textContent = 'Zarejestruj się';
        document.getElementById('login-link').textContent = 'Masz już konto? Zaloguj się';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'Jesteś już zalogowany.';
        document.getElementById('home-btn').textContent = 'Wróć do strony głównej';
    } else {
        document.getElementById('form-title').textContent = 'Sign Up';
        document.getElementById('username').placeholder = 'Username';
        document.getElementById('password').placeholder = 'Password';
        document.getElementById('signup-btn').textContent = 'Sign Up';
        document.getElementById('login-link').textContent = 'Already have an account? Log in';
        document.getElementById('logged-in-message').querySelector('p').textContent = 'You are already logged in.';
        document.getElementById('home-btn').textContent = 'Go back home';
    }
}

const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
applyLanguage(preferredLanguage);
