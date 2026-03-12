export interface Project {
  name: string;
  githubTooltipName: string;
  githubLink: string;
  bullets: string[];
  images: string[];
  captions: string[];
}

export const projects: Project[] = [
  {
    name: "FastNotes",
    githubTooltipName: "FastNotes",
    githubLink: "https://github.com/Hawkinski2000/FastNotes",
    bullets: [
      "Engineered a high-performance note-taking API and web app to study database and caching performance under load.",

      "Seeded database with 100k notes and conducted sustained load testing with Locust (20 concurrent users, 5-minute runs).",

      "Reduced average GET /notes latency from 396ms to 81ms (∼5× speedup) and p95 from 560ms to 170ms through database indexing, raw SQL optimization, and Redis caching.",
    ],
    images: [
      "assets/landing-page.png",
      "assets/notes-page.png",
      "assets/benchmark-results-chart.svg",
    ],
    captions: [``],
  },

  // ---------------------------------------------------------------------------

  {
    name: "AI Fitness Tracker",
    githubTooltipName: "AI Fitness Tracker",
    githubLink: "https://github.com/Hawkinski2000/AI-Fitness-Tracker",
    bullets: [
      "Built a full-stack web app integrating a GPT-5 agent to call tools for analyzing health/fitness data and generate personalized recommendations.",

      "Designed a secure backend with FastAPI, PostgreSQL, SQLAlchemy, and JWT/refresh tokens.",

      "Built a React + TypeScript frontend with custom components, hooks, reCAPTCHA, and JWT/refresh-token authentication.",

      "Deployed to AWS EC2 using Docker and Nginx.",

      "Implemented CI/CD pipeline with GitHub Actions for running automated tests and push-to-deploy workflow.",
    ],
    images: ["assets/chat-page.png", "assets/view-food-menu.png"],
    captions: [``],
  },

  // ---------------------------------------------------------------------------

  {
    name: "Deep Learning Framework",
    githubTooltipName: "Deep Learning Framework",
    githubLink: "https://github.com/Hawkinski2000/CNN-in-CPP",
    bullets: [
      "A deep learning framework inspired by PyTorch written in C++/CUDA.",

      "With a familiar PyTorch-style syntax, you can train efficient neural networks that achieve over 99% test accuracy in just a few lines of C++.",

      "The framework is optimized for performance and can run entirely on the GPU.",
    ],
    images: ["assets/model-code-image.png", "assets/training-code-image.png"],
    captions: [
      "Create a CNN model for classifying handwritten digits from the MNIST dataset, inspired by LeNet-5, similar to <a href='https://docs.pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html#define-a-convolutional-neural-network'>this example</a> in PyTorch.",

      "Training is as simple as:",
    ],
  },

  // ---------------------------------------------------------------------------

  {
    name: "SpeechCommandsBERT",
    githubTooltipName: "SpeechCommandsBERT",
    githubLink: "https://github.com/Hawkinski2000/SpeechCommandsBERT",
    bullets: [
      "A transformer model from scratch for single-word speech classification for the Google Speech Commands dataset using a modified version of Andrej Karpathy&apos;s GPT-2 code.",

      "Trained on an 8x A100 GPU instance from Lambda Labs.",

      "95.2% test accuracy when classifying 4,074 new speech recordings from the first 10 command classes.",
    ],
    images: ["assets/loss-image.png", "assets/confusion-matrix-image.png"],
    captions: [``],
  },

  // ---------------------------------------------------------------------------

  {
    name: "CookLit",
    githubTooltipName: "CookLit",
    githubLink: "https://github.com/AimanMadan/CookLit",
    bullets: [
      "AI-powered cooking assistant for Android that generates recipes from ingredient images.",

      "Collaborated with mentors from Qualcomm to deploy a vision model from the Qualcomm AI Hub on the Snapdragon chip.",

      "The app uses the CLIP and Llama models to classify ingredients and generate detailed recipes.",

      "Worked on a team of 4 for about 10 weeks, focusing primarily on the OpenAI CLIP vision model.",
    ],
    images: ["assets/banana-image.png", "assets/recipes-image.png"],
    captions: [``],
  },
];
