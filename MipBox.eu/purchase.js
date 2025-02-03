document.addEventListener('DOMContentLoaded', () => {
    const statusMessage = document.getElementById('status-message');
    const homeBtn = document.getElementById('home-btn');
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    if (status === 'success') {
        statusMessage.textContent = 'Purchase successful!';
        statusMessage.style.color = 'green';
    } else {
        statusMessage.textContent = 'Purchase failed!';
        statusMessage.style.color = 'red';
    }

    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);

    homeBtn.addEventListener('click', () => {
        window.location.href = 'Home.html';
    });
});