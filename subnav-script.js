document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('show');
});

// Menangani klik pada item dengan submenu di mobile
document.querySelectorAll('.has-submenu > a').forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 700) {
            e.preventDefault();
            const submenu = item.nextElementSibling;
            submenu.classList.toggle('show');
        }
    });
});