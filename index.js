// MENU BTN MENU JAVASCRIPT
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    if (nav.style.display === 'block') {
        btn.classList.remove('open');
        nav.style.display = 'none';
    } else {
        btn.classList.add('open');
        nav.style.display = 'block';
    }
});
