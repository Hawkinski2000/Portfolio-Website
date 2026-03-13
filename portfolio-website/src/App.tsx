import Header from '@/components/header.tsx'
import ProjectsSection from './components/projects-section'

function App() {
  const theme = localStorage.getItem('portfolio-theme')
  if (theme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }

  return (
    <div className="flex flex-col items-center">
      <Header />

      <main className="flex w-[50vw] items-center">
        <ProjectsSection />

        {/* <section>
            <h2>Education</h2>
            <p>California State University San Marcos</p>
            <p>Bachelor of Science in Computer Science</p>
            <p>
              <b>Graduated:</b> 5/17/2025
            </p>
          </section> */}

        {/* <section>
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
          </section> */}
      </main>
    </div>
  )
}

export default App
