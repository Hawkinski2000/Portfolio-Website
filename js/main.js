import projects from './projects.js';

// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// ---- Generate HTML from list of projects in projects.js ----

let projectsHTML = '';

projects.forEach(project => {

  // Generate HTML for title and GitHub button
  projectsHTML += `
    <div class="project">
    <div class="project-header">
      <h2>
        ${project.name}:
      </h2>
      <a class="github-button"
      href="${project.githubLink}" target="_blank">
        <img class="github-logo" src="assets/github-logo.svg">
        <div class="tooltip">
          ${project.githubTooltipName}
        </div>
      </a>
    </div>
    <ul style="padding-left: 20px;">
  `;

  // Generate HTML for each bullet point
  project.bullets.forEach(bullet => {
    projectsHTML += `
      <li>
        <span>
          ${bullet}
        </span>
      </li>
    `;
  })
  projectsHTML += '</ul>';

  // Generate HTML for each caption and image
  project.images.forEach((image, index) => {
    projectsHTML += `
      <div class="project-image-container">
        <p class="caption">
          ${project.captions[index] || ''}
        </p>
        <img class="project-image" src="${image}">
        </div>
      </div>
    `;
  });

  projectsHTML += '</div>';
});

// Add all of the HTML generated the list of projects to the page
document.querySelector('.js-projects').innerHTML += projectsHTML; 
