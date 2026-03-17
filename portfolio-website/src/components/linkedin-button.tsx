import { Button } from '@/components/ui/button'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

export default function LinkedInButton() {
  return (
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
  )
}
