import Header from '@/components/header.tsx'
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
    <div className="flex flex-col items-center">
      <Header />

      <main className="flex max-w-3xl flex-col items-center pb-20">
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
      </main>
    </div>
  )
}

export default App
