// === mobileMenu.js ===

// Fungsi untuk toggle menu saat tombol diklik
function toggleMobileMenu(menuButton, mobileMenu, burgerIcon, closeIcon) {
    const isOpen = mobileMenu.style.display === 'block';
    mobileMenu.style.display = isOpen ? 'none' : 'block';
    burgerIcon.style.display = isOpen ? 'block' : 'none';
    closeIcon.style.display = isOpen ? 'none' : 'block';
    menuButton.setAttribute('aria-expanded', !isOpen);
}

// Fungsi untuk inisialisasi dan pasang event listener
export function initMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');
    const burgerIcon = document.querySelector('.icon-burger');
    const closeIcon = document.querySelector('.icon-close');

    if (menuButton) {
        menuButton.addEventListener('click', function () {
            toggleMobileMenu(menuButton, mobileMenu, burgerIcon, closeIcon);
        });
    }
}
