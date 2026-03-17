import { Button } from '@/components/ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export default function GitHubButton({ href }: { href?: string }) {
  return (
    <Button
      variant="ghost"
      size="icon-lg"
      asChild
      aria-label="GitHub"
      className="size-10 rounded-full"
    >
      <a href={href ?? 'https://github.com/Hawkinski2000'} target="_blank" rel="noreferrer">
        <GitHubLogoIcon className="size-6" />
      </a>
    </Button>
  )
}
