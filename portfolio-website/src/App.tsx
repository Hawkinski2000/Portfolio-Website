import { projects, type Project } from "./projects.ts";

function App() {
  return (
    <>
      <button className="theme-button js-theme-button">
        <img className="theme-icon" src="assets/theme-icon.svg" />
        <div className="tooltip">Theme</div>
      </button>

      <header className="header">
        <div className="header-content">
          <h1>Kieran Hawkins</h1>

          <h3>
            I'm a recent Computer Science graduate from CSUSM.
            <br />
            I'm passionate about AI and Machine Learning.
          </h3>

          <nav className="links">
            <a
              className="github-button"
              href="https://github.com/Hawkinski2000"
              target="_blank"
            >
              <img className="github-logo" src="assets/github-logo.svg" />
              <div className="tooltip">GitHub</div>
            </a>

            <a
              className="linkedin-button"
              href="https://www.linkedin.com/in/kieran-hawkins-b5558130b/"
              target="_blank"
            >
              <img className="linkedin-logo" src="assets/linkedin-logo.png" />
              <div className="tooltip">LinkedIn</div>
            </a>
          </nav>
        </div>
      </header>

      <div className="background">
        <main>
          <section className="projects js-projects">
            <h2>Projects</h2>

            {projects.map((project: Project) => {
              return (
                <article className="project" key={project.name}>
                  <div className="project-header">
                    <h3>{project.name}:</h3>

                    <a
                      className="github-button"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="github-logo"
                        src="/assets/github-logo.svg"
                        alt="GitHub"
                      />

                      <div className="tooltip">{project.githubTooltipName}</div>
                    </a>
                  </div>

                  <ul style={{ paddingLeft: "20px" }}>
                    {project.bullets.map((bullet, i) => (
                      <li key={i}>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {project.images.map((image, index) => (
                    <div className="project-image-container" key={index}>
                      <p className="caption">{project.captions[index] || ""}</p>

                      <img
                        className="project-image"
                        src={image}
                        alt={`${project.name} screenshot`}
                      />
                    </div>
                  ))}
                </article>
              );
            })}
          </section>

          <section>
            <h2>Education</h2>
            <p>California State University San Marcos</p>
            <p>Bachelor of Science in Computer Science</p>
            <p>
              <b>Graduated:</b> 5/17/2025
            </p>
          </section>

          <section>
            <h2>Skills</h2>

            <p>
              <b>Languages:</b> Python, SQL, JavaScript/TypeScript, C/C++,
              HTML/CSS
            </p>
            <p>
              <b>Databases:</b> PostgreSQL, Redis
            </p>
            <p>
              <b>Frameworks:</b> PyTorch, FastAPI, React, pytest, Alembic
            </p>
            <p>
              <b>Developer Tools:</b> Git, Docker, Amazon Web Services, GitHub
              Actions
            </p>
            <p>
              <b>Libraries:</b> SQLAlchemy, pandas, NumPy, Matplotlib
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
