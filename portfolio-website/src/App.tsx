// import Header from '@/components/header.tsx'
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
      <main className="relative">
        <section className="bg-background sticky top-0 flex h-screen w-full items-center justify-center">
          <div className="w-full max-w-4xl">
            <h1 className="max-w-4xl px-4 text-left text-4xl font-bold">Kieran Hawkins</h1>
          </div>
        </section>

        <section className="bg-accent relative flex w-full items-center justify-center rounded-4xl">
          <ProjectsSection />
        </section>

        <section className="bg-background sticky top-0 flex h-screen w-full items-center justify-center">
          <EducationSection />
        </section>

        <section className="bg-accent sticky top-0 flex h-screen w-full items-center justify-center rounded-4xl">
          <SkillsSection />
        </section>
      </main>
    </div>
  )
}

export default App
