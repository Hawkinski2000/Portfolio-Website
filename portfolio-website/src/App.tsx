import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { projects, type Project, type ProjectImage } from './projects'
import Header from './components/header.tsx'
import GitHubButton from './components/github-button.tsx'

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
        <section className="flex flex-col gap-8 py-4">
          <h2 className="text-2xl">Projects</h2>

          {projects.map((project: Project) => {
            return (
              <Card key={project.name} className="p-4">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>

                  <CardAction>
                    <GitHubButton />
                  </CardAction>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  <ul className="flex list-disc flex-col gap-2 pl-4">
                    {project.bullets.map((bullet, i) => (
                      <li key={i}>
                        <CardDescription className="text-foreground">{bullet}</CardDescription>
                      </li>
                    ))}
                  </ul>

                  {project.images.map((image: ProjectImage, index) => (
                    <div className="flex flex-col items-center justify-center" key={index}>
                      <p className="pb-2 text-sm">
                        {(project.captions && project.captions[index]) || ''}
                      </p>

                      <img
                        src={image.src}
                        style={image.scale ? { maxWidth: `${image.scale * 100}%` } : undefined}
                        alt={`${project.name} screenshot`}
                        className="h-auto rounded-xl"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </section>

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
