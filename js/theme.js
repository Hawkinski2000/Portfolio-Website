// ---- Toggle the theme (light or dark) if the js-theme-button is pressed

let theme = localStorage.getItem('theme') || 'light';
localStorage.setItem('theme', theme);

if (theme === 'dark') {
  document.body.classList.add('dark-theme');
}

const themeButton = document.querySelector('.js-theme-button');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  }
  else {
    localStorage.setItem('theme', 'light');
  }
});
