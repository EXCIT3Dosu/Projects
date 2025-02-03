document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const adminPanel = document.getElementById('admin-panel');
    const accessDenied = document.getElementById('access-denied');
    const homeBtn = document.getElementById('home-btn');
    const adminPanelBtn = document.getElementById('adminpanel-btn');
    const userManagementBtn = document.getElementById('usermanagement-btn');
    const backHomeBtn = document.getElementById('back-home-btn');

    if (loggedInUser === 'ADMIN') {
        adminPanel.style.display = 'flex';
        accessDenied.style.display = 'none';
    } else {
        adminPanel.style.display = 'none';
        accessDenied.style.display = 'block';
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
        document.querySelector('title').textContent = 'Panel Administratora';
        document.querySelector('.content h2').textContent = 'Witamy w Panelu Administratora';
        document.querySelector('.content p').textContent = 'Wybierz opcję z paska bocznego.';
        document.getElementById('adminpanel-btn').textContent = 'Panel Administratora';
        document.getElementById('usermanagement-btn').textContent = 'Zarządzanie Użytkownikami';
        document.getElementById('access-denied h1').textContent = 'Brak Dostępu';
        document.getElementById('access-denied p').textContent = 'Nie masz dostępu do tej strony.';
        document.getElementById('home-btn').textContent = 'Wróć do strony głównej';
        document.getElementById('back-home-btn').textContent = 'Wróć do strony głównej';
    } else if (lang === 'de') {
        document.querySelector('title').textContent = 'Admin-Panel';
        document.querySelector('.content h2').textContent = 'Willkommen im Admin-Panel';
        document.querySelector('.content p').textContent = 'Wählen Sie eine Option aus der Seitenleiste.';
        document.getElementById('adminpanel-btn').textContent = 'Admin-Panel';
        document.getElementById('usermanagement-btn').textContent = 'Benutzerverwaltung';
        document.getElementById('access-denied h1').textContent = 'Zugriff Verweigert';
        document.getElementById('access-denied p').textContent = 'Sie haben keinen Zugriff auf diese Seite.';
        document.getElementById('home-btn').textContent = 'Zurück zur Startseite';
        document.getElementById('back-home-btn').textContent = 'Zurück zur Startseite';
    } else if (lang === 'es') {
        document.querySelector('title').textContent = 'Panel de Administración';
        document.querySelector('.content h2').textContent = 'Bienvenido al Panel de Administración';
        document.querySelector('.content p').textContent = 'Seleccione una opción de la barra lateral.';
        document.getElementById('adminpanel-btn').textContent = 'Panel de Administración';
        document.getElementById('usermanagement-btn').textContent = 'Gestión de Usuarios';
        document.getElementById('access-denied h1').textContent = 'Acceso Denegado';
        document.getElementById('access-denied p').textContent = 'No tienes acceso a esta página.';
        document.getElementById('home-btn').textContent = 'Volver a la página principal';
        document.getElementById('back-home-btn').textContent = 'Volver a la página principal';
    } else {
        document.querySelector('title').textContent = 'Admin Panel';
        document.querySelector('.content h2').textContent = 'Welcome to the Admin Panel';
        document.querySelector('.content p').textContent = 'Select an option from the sidebar.';
        document.getElementById('adminpanel-btn').textContent = 'Admin Panel';
        document.getElementById('usermanagement-btn').textContent = 'User Management';
        document.getElementById('access-denied h1').textContent = 'Access Denied';
        document.getElementById('access-denied p').textContent = 'You do not have access to this site.';
        document.getElementById('home-btn').textContent = 'Go back home';
        document.getElementById('back-home-btn').textContent = 'Go back home';
    }
}