import ActionButtons from './components/action-buttons'
import HeroSection from '@/components/hero-section'
import SkillsSection from '@/components/skills-section'
import ProjectsSection from '@/components/projects-section'
import EducationSection from '@/components/education-section'

function App() {
  const theme = localStorage.getItem('portfolio-theme')
  if (theme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }

  return (
    <>
      <ActionButtons />

      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
      </main>
    </>
  )
}

export default App
