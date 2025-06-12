// === contactForm.js ===
function handleContactSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById('UserName');
    const emailInput = document.getElementById('UserEmail');
    const messageInput = document.getElementById('UserMessage');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === '' || emailValue === '' || messageValue === '') {
        alert('Harap isi semua kolom: Nama, Email, dan Pesan.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        alert('Format email yang Anda masukkan tidak valid.');
        return;
    }

    alert(`Terima kasih, ${nameValue}! Pesan Anda telah berhasil dikirim.`);
    document.getElementById('contact-form').reset();
}

export function initContactForm () {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
};