export const projects = [{
  name: 'AI Fitness Tracker (in progress)',
  githubTooltipName: 'AI Fitness Tracker',
  githubLink: 'https://github.com/Hawkinski2000/AI-Fitness-Tracker',
  bullets: [
    `A full-stack web app that leverages AI to generate personalized insights
    from users&apos; diet, exercise, sleep, and mood data.`,

    `Utilizes Retrieval-Augmented Generation (RAG) with API calls to ChatGPT,
    which acts as an intelligent agent that synthesizes insights by analyzing
    users' historical and current health data along with prior AI-generated
    feedback.`,

    `PostgreSQL on Amazon RDS will store all health/fitness metrics and memory
    of past insights.`,

    `Will be built with a FastAPI (Python) backend and a React + TypeScript
    frontend for responsive, modern UX.`
  ],
  images: [
    'assets/Dashboard.png'
  ],
  captions: [
    ``
  ]
},

// ---------------------------------------------------------------------------

{
  name: 'Deep Learning Framework',
  githubTooltipName: 'Deep Learning Framework',
  githubLink: 'https://github.com/Hawkinski2000/CNN-in-CPP',
  bullets: [
    `A deep learning framework inspired by PyTorch written in C++/CUDA.`,

    `With a familiar PyTorch-style syntax, you can train efficient neural
    networks that achieve over 99% test accuracy in just a few lines of C++.`,

    `The framework is optimized for performance and can run entirely on the
    GPU.`
  ],
  images: [
    'assets/model-code-image.png',
    'assets/training-code-image.png'
  ],
  captions: [
    `Create a CNN model for classifying handwritten digits from the MNIST
    dataset, inspired by LeNet-5, similar to
    <a href="https://docs.pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html#define-a-convolutional-neural-network">
    this example</a> in PyTorch.`,

    `Training is as simple as:`
  ]
},

// ---------------------------------------------------------------------------

{
  name: 'SpeechCommandsBERT',
  githubTooltipName: 'SpeechCommandsBERT',
  githubLink: 'https://github.com/Hawkinski2000/SpeechCommandsBERT',
  bullets: [
    `A transformer model from scratch for single-word speech classification
    for the Google Speech Commands dataset using a modified version of Andrej
    Karpathy&apos;s GPT-2 code.`,

    `Trained on an 8x A100 GPU instance from Lambda Labs.`,

    `95.2% test accuracy when classifying 4,074 new speech recordings from the
    first 10 command classes.`
  ],
  images: [
    'assets/loss-image.png',
    'assets/confusion-matrix-image.png'
  ],
  captions: [
    ``
  ]
},

// ---------------------------------------------------------------------------

{
  name: 'CookLit',
  githubTooltipName: 'CookLit',
  githubLink: 'https://github.com/AimanMadan/CookLit',
  bullets: [
    `AI-powered cooking assistant for Android that generates recipes from
    ingredient images.`,

    `Collaborated with mentors from Qualcomm to deploy a vision model from the
    Qualcomm AI Hub on the Snapdragon chip.`,

    `The app uses the CLIP and Llama models to classify ingredients and
    generate detailed recipes.`,

    `Worked on a team of 4 for about 10 weeks, focusing primarily on the
    OpenAI CLIP vision model.`
  ],
  images: [
    'assets/banana-image.png',
    'assets/recipes-image.png'
  ],
  captions: [
    ``
  ]
}];

// ---------------------------------------------------------------------------
// ---- Generate HTML from list of projects in projects.js ----

let projectsHTML = '';

projects.forEach(project => {

  // Generate HTML for title and GitHub button
  projectsHTML += `
    <article class="project">
    <div class="project-header">
      <h3>
        ${project.name}:
      </h3>
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
    `;
  });

  projectsHTML += '</article>';
});

// Add all of the HTML generated the list of projects to the page
document.querySelector('.js-projects').innerHTML += projectsHTML; 
