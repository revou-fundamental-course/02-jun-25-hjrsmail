import { initMobileMenu } from './modules/mobileMenu.js';
import { initTabs } from './modules/tabs.js';
import { initThemeToggle } from './modules/themeToggle.js';
import { initContactForm } from './modules/contactForm.js';
import { initAosConfig } from './modules/aosConfig.js';
import { initScrollSpy } from './modules/scrollSpy.js';
import { initTextAnimation } from './modules/textAnimation.js';
import { initSlider } from './modules/sliderBanner.js';

// === script.js ===
// Main script to initialize all components and functionalities
document.addEventListener('DOMContentLoaded', () => {

    // Initialize all components
    initSlider();
    initAosConfig();
    initScrollSpy();
    initTextAnimation();
    initMobileMenu();
    initTabs();
    initThemeToggle();
    initContactForm();
});












