import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import GitHubButton from '@/components/github-button.tsx'
import { projects, type Project, type ProjectImage } from '@/projects'

export default function ProjectsSection() {
  return (
    <section className="flex w-full flex-col gap-8 py-4">
      <h2 className="text-2xl">Projects</h2>

      {projects.map((project: Project) => {
        return (
          <Card key={project.name} className="p-4">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>

              <CardAction>
                <GitHubButton />
              </CardAction>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <ul className="flex list-disc flex-col gap-2 pl-4">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>
                    <CardDescription className="text-foreground">{bullet}</CardDescription>
                  </li>
                ))}
              </ul>

              {project.images.map((image: ProjectImage, index) => (
                <div className="flex flex-col items-center justify-center" key={index}>
                  <p className="pb-2 text-sm">
                    {(project.captions && project.captions[index]) || ''}
                  </p>

                  <img
                    src={image.src}
                    style={image.scale ? { maxWidth: `${image.scale * 100}%` } : undefined}
                    alt={`${project.name} screenshot`}
                    className="h-auto rounded-xl"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        )
      })}
    </section>
  )
}
