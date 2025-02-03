document.addEventListener('DOMContentLoaded', () => {
    const purchaseButtons = document.querySelectorAll('.purchase-btn');
    const loggedInUser = localStorage.getItem('loggedInUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === loggedInUser);

    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);

    purchaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!loggedInUser) {
                window.location.href = 'login.html';
                return;
            }
            const plan = button.getAttribute('data-plan');
            if (plan === 'free') {
                if (user && user.plan === 'free') {
                    window.location.href = 'purchase.html?status=failed';
                } else {
                    user.plan = 'free';
                    localStorage.setItem('users', JSON.stringify(users));
                    window.location.href = 'purchase.html?status=success';
                }
            } else {
                window.location.href = 'purchase.html?status=failed';
            }
        });
    });

    if (user && user.plan) {
        const ownedPlan = document.getElementById(`${user.plan}-plan`);
        ownedPlan.classList.add('owned-plan');
        ownedPlan.querySelector('.purchase-btn').style.display = 'none';
    }

    document.getElementById('home-btn').addEventListener('click', () => {
        window.location.href = 'Home.html';
    });

    document.getElementById('plans-btn').addEventListener('click', () => {
        window.location.href = 'plans.html';
    });

    document.getElementById('settings-btn').addEventListener('click', () => {
        window.location.href = 'settings.html';
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.reload();
    });

    document.getElementById('admin-btn').addEventListener('click', () => {
        window.location.href = 'adminpanel.html';
    });
});