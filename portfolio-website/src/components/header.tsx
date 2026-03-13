import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import GitHubButton from '@/components/github-button'

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })

  const toggleTheme = () => {
    const root = document.documentElement
    const next = !isDark

    root.classList.add('no-transition')
    root.classList.toggle('dark', next)
    setIsDark(next)
    localStorage.setItem('portfolio-theme', next ? 'dark' : 'light')

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.remove('no-transition')
      })
    })
  }

  return (
    <header className="relative flex w-full items-center justify-center border-b py-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Kieran Hawkins</h1>

        <h3 className="text-lg">
          I'm a recent Computer Science graduate from CSUSM.
          <br />
          I'm passionate about AI and Machine Learning.
        </h3>

        <nav>
          <GitHubButton />

          <Button
            variant="ghost"
            size="icon-lg"
            asChild
            aria-label="LinkedIn"
            className="size-10 rounded-full"
          >
            <a
              href="https://www.linkedin.com/in/kieran-hawkins-b5558130b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInLogoIcon className="size-6" />
            </a>
          </Button>
        </nav>
      </div>

      <Button
        variant="ghost"
        size="icon-lg"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="absolute right-4 size-10 rounded-full"
      >
        {isDark ? <Moon className="size-6" /> : <Sun className="size-6" />}
      </Button>
    </header>
  )
}
