import { Separator } from '@/components/ui/separator'
import GitHubButton from '@/components/github-button'
import LinkedInButton from '@/components/linkedin-button'
import ThemeButton from '@/components/theme-button'

export default function ActionButtons() {
  return (
    <div className="absolute top-0 right-0 z-100 flex sm:fixed sm:gap-2 sm:px-2 sm:pt-2">
      <GitHubButton />
      <Separator orientation="vertical" />
      <LinkedInButton />
      <Separator orientation="vertical" />
      <ThemeButton />
    </div>
  )
}
