import { Separator } from '@/components/ui/separator'
import GitHubButton from './components/github-button'
import LinkedInButton from './components/linkedin-button'
import ThemeButton from './components/theme-button'
import ProjectsSection from './components/projects-section'
import EducationSection from './components/education-section'
import SkillsSection from './components/skills-section'

function App() {
  const theme = localStorage.getItem('portfolio-theme')
  if (theme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }

  return (
    <div className="flex flex-col">
      <div className="absolute top-0 right-0 z-100 flex sm:fixed sm:gap-2 sm:px-2 sm:pt-2">
        <GitHubButton />
        <Separator orientation="vertical" />
        <LinkedInButton />
        <Separator orientation="vertical" />
        <ThemeButton />
      </div>

      <main className="relative">
        <section className="bg-background sticky top-0 flex h-screen w-full items-center justify-center">
          <div className="w-full max-w-2xl sm:max-w-4xl">
            <h1 className="max-w-2xl px-4 text-left text-6xl font-bold sm:max-w-4xl sm:text-9xl">
              Kieran Hawkins
            </h1>
          </div>
        </section>

        <section className="bg-accent relative flex w-full items-center justify-center rounded-4xl">
          <SkillsSection />
        </section>

        <section className="bg-background relative flex w-full items-center justify-center">
          <ProjectsSection />
        </section>

        <section className="bg-accent relative flex w-full items-center justify-center rounded-4xl">
          <EducationSection />
        </section>
      </main>
    </div>
  )
}

export default App
