
const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || !savedTheme) {
    document.documentElement.classList.add('dark');
  }