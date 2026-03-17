import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'

export default function ThemeButton() {
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
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="size-10 rounded-full"
    >
      {isDark ? <Moon className="size-6" /> : <Sun className="size-6" />}
    </Button>
  )
}
