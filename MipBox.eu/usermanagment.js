document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const userTableBody = document.getElementById('user-table').querySelector('tbody');
    const accessDenied = document.getElementById('access-denied');
    const homeBtn = document.getElementById('home-btn');
    const adminPanelBtn = document.getElementById('adminpanel-btn');
    const userManagementBtn = document.getElementById('usermanagement-btn');
    const backHomeBtn = document.getElementById('back-home-btn');

    if (loggedInUser === 'ADMIN') {
        document.getElementById('user-management').classList.remove('hidden');
        accessDenied.classList.add('hidden');

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Populate the table with user data
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            const usernameCell = document.createElement('td');

            idCell.textContent = index + 1; // User ID
            usernameCell.textContent = user.username; // Username

            row.appendChild(idCell);
            row.appendChild(usernameCell);
            userTableBody.appendChild(row);
        });
    } else {
        document.getElementById('user-management').classList.add('hidden');
        accessDenied.classList.remove('hidden');
    }

    homeBtn.addEventListener('click', () => {
        window.location.href = 'Home.html';
    });

    adminPanelBtn.addEventListener('click', () => {
        window.location.href = 'adminpanel.html';
    });

    userManagementBtn.addEventListener('click', () => {
        window.location.href = 'usermanagment.html';
    });

    backHomeBtn.addEventListener('click', () => {
        window.location.href = 'Home.html';
    });

    applyLanguage(localStorage.getItem('preferredLanguage') || 'en');

    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);
});

function applyLanguage(lang) {
    if (lang === 'pl') {
        document.querySelector('title').textContent = 'Zarządzanie Użytkownikami';
        document.querySelector('.content h2').textContent = 'Zarządzanie Użytkownikami';
        document.getElementById('adminpanel-btn').textContent = 'Panel Administratora';
        document.getElementById('usermanagement-btn').textContent = 'Zarządzanie Użytkownikami';
        document.getElementById('access-denied h1').textContent = 'Brak Dostępu';
        document.getElementById('access-denied p').textContent = 'Nie masz dostępu do tej strony.';
        document.getElementById('home-btn').textContent = 'Wróć do strony głównej';
        document.getElementById('back-home-btn').textContent = 'Wróć do strony głównej';
    } else if (lang === 'de') {
        document.querySelector('title').textContent = 'Benutzerverwaltung';
        document.querySelector('.content h2').textContent = 'Benutzerverwaltung';
        document.getElementById('adminpanel-btn').textContent = 'Admin-Panel';
        document.getElementById('usermanagement-btn').textContent = 'Benutzerverwaltung';
        document.getElementById('access-denied h1').textContent = 'Zugriff Verweigert';
        document.getElementById('access-denied p').textContent = 'Sie haben keinen Zugriff auf diese Seite.';
        document.getElementById('home-btn').textContent = 'Zurück zur Startseite';
        document.getElementById('back-home-btn').textContent = 'Zurück zur Startseite';
    } else if (lang === 'es') {
        document.querySelector('title').textContent = 'Gestión de Usuarios';
        document.querySelector('.content h2').textContent = 'Gestión de Usuarios';
        document.getElementById('adminpanel-btn').textContent = 'Panel de Administración';
        document.getElementById('usermanagement-btn').textContent = 'Gestión de Usuarios';
        document.getElementById('access-denied h1').textContent = 'Acceso Denegado';
        document.getElementById('access-denied p').textContent = 'No tienes acceso a esta página.';
        document.getElementById('home-btn').textContent = 'Volver a la página principal';
        document.getElementById('back-home-btn').textContent = 'Volver a la página principal';
    } else {
        document.querySelector('title').textContent = 'User Management';
        document.querySelector('.content h2').textContent = 'User Management';
        document.getElementById('adminpanel-btn').textContent = 'Admin Panel';
        document.getElementById('usermanagement-btn').textContent = 'User Management';
        document.getElementById('access-denied h1').textContent = 'Access Denied';
        document.getElementById('access-denied p').textContent = 'You do not have access to this site.';
        document.getElementById('home-btn').textContent = 'Go back home';
        document.getElementById('back-home-btn').textContent = 'Go back home';
    }
}