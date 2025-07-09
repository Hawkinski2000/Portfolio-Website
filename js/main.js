let theme = localStorage.getItem('theme');

if (!theme) {
  localStorage.setItem('theme', 'light');
}

if (theme === 'dark') {
  document.body.classList.add('dark-theme');
} 

// Function to toggle the theme of the website (light or dark).
function changeTheme() {
  document.body.classList.toggle('dark-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  }
  else {
    localStorage.setItem('theme', 'light');
  }
}
