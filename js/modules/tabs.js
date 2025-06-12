// === tabs.js ===
function handleTabClick(button, tabButtons, tabContents) {
    const targetId = button.dataset.tabTarget;
    const targetContent = document.getElementById(targetId);
    const activeClass = button.dataset.activeClass;

    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    tabButtons.forEach(btn => {
        btn.classList.remove('active-tech', 'active-tools', 'active-certs');
    });

    if (targetContent) {
        targetContent.style.display = 'grid';
    }

    if (activeClass) {
        button.classList.add(activeClass);
    }
}

export function initTabs () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabContents.forEach((content, index) => {
        if (index !== 0) {
            content.style.display = 'none';
        }
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleTabClick(button, tabButtons, tabContents);
        });
    });
};