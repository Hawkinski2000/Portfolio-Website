import { Separator } from '@/components/ui/separator'
import GitHubButton from '@/components/github-button'
import LinkedInButton from '@/components/linkedin-button'
import ThemeButton from '@/components/theme-button'
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
      <div className="absolute top-0 right-0 z-100 flex sm:fixed sm:gap-2 sm:px-2 sm:pt-2">
        <GitHubButton />
        <Separator orientation="vertical" />
        <LinkedInButton />
        <Separator orientation="vertical" />
        <ThemeButton />
      </div>

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
