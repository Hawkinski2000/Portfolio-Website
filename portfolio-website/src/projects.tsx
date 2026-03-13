import { type ReactNode } from 'react'

export interface ProjectImage {
  src: string
  scale?: number
}

export interface Project {
  name: string
  githubLink: string
  bullets: ReactNode[]
  images: ProjectImage[]
  captions?: ReactNode[]
}

export const projects: Project[] = [
  {
    name: 'FastNotes',
    githubLink: 'https://github.com/Hawkinski2000/FastNotes',
    bullets: [
      'Engineered a high-performance note-taking API and web app to study database and caching performance under load.',

      'Seeded database with 100k notes and conducted sustained load testing with Locust (20 concurrent users, 5-minute runs).',

      'Reduced average GET /notes latency from 396ms to 81ms (∼5× speedup) and p95 from 560ms to 170ms through database indexing, raw SQL optimization, and Redis caching.',
    ],
    images: [
      { src: 'assets/landing-page.png' },
      { src: 'assets/notes-page.png' },
      { src: 'assets/benchmark-results-chart.svg' },
    ],
  },

  // ---------------------------------------------------------------------------

  {
    name: 'AI Fitness Tracker',
    githubLink: 'https://github.com/Hawkinski2000/AI-Fitness-Tracker',
    bullets: [
      'Built a full-stack web app integrating a GPT-5 agent to call tools for analyzing health/fitness data and generate personalized recommendations.',

      'Designed a secure backend with FastAPI, PostgreSQL, SQLAlchemy, and JWT/refresh tokens.',

      'Built a React + TypeScript frontend with custom components, hooks, reCAPTCHA, and JWT/refresh-token authentication.',

      'Deployed to AWS EC2 using Docker and Nginx.',

      'Implemented CI/CD pipeline with GitHub Actions for running automated tests and push-to-deploy workflow.',
    ],
    images: [{ src: 'assets/chat-page.png' }, { src: 'assets/view-food-menu.png' }],
  },

  // ---------------------------------------------------------------------------

  {
    name: 'Deep Learning Framework',
    githubLink: 'https://github.com/Hawkinski2000/CNN-in-CPP',
    bullets: [
      'A deep learning framework inspired by PyTorch written in C++/CUDA.',

      'With a familiar PyTorch-style syntax, you can train efficient neural networks that achieve over 99% test accuracy in just a few lines of C++.',

      'The framework is optimized for performance and can run entirely on the GPU.',
    ],
    images: [{ src: 'assets/model-code-image.png' }, { src: 'assets/training-code-image.png' }],
    captions: [
      <>
        Create a CNN model for classifying handwritten digits similar to{' '}
        <a
          href="https://docs.pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html#define-a-convolutional-neural-network"
          target="_blank"
          rel="noreferrer"
          className="text-chart-2 underline-offset-4 hover:underline"
        >
          this example
        </a>{' '}
        in PyTorch.
      </>,

      'Training is as simple as:',
    ],
  },

  // ---------------------------------------------------------------------------

  {
    name: 'SpeechCommandsBERT',
    githubLink: 'https://github.com/Hawkinski2000/SpeechCommandsBERT',
    bullets: [
      'A transformer model from scratch for single-word speech classification for the Google Speech Commands dataset using a modified version of Andrej Karpathy&apos;s GPT-2 code.',

      'Trained on an 8x A100 GPU instance from Lambda Labs.',

      '95.2% test accuracy when classifying 4,074 new speech recordings from the first 10 command classes.',
    ],
    images: [{ src: 'assets/loss-image.png' }, { src: 'assets/confusion-matrix-image.png' }],
  },

  // ---------------------------------------------------------------------------

  {
    name: 'CookLit',
    githubLink: 'https://github.com/AimanMadan/CookLit',
    bullets: [
      'AI-powered cooking assistant for Android that generates recipes from ingredient images.',

      'Collaborated with mentors from Qualcomm to deploy a vision model from the Qualcomm AI Hub on the Snapdragon chip.',

      'The app uses the CLIP and Llama models to classify ingredients and generate detailed recipes.',

      'Worked on a team of 4 for about 10 weeks, focusing primarily on the OpenAI CLIP vision model.',
    ],
    images: [
      { src: 'assets/banana-image.png', scale: 0.25 },
      { src: 'assets/recipes-image.png', scale: 0.25 },
    ],
  },
]
