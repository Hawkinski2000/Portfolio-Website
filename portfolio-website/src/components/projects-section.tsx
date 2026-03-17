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
    <section className="flex max-w-4xl flex-col">
      <h2 className="bg-background sticky top-0 px-4 py-8 text-9xl font-bold">Projects</h2>

      <div className="flex flex-col gap-8 px-4 py-8">
        {projects.map((project: Project) => {
          return (
            <Card key={project.name} className="p-4">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">{project.name}</CardTitle>

                <CardAction>
                  <GitHubButton href={project.githubLink} />
                </CardAction>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <ul className="flex list-disc flex-col gap-2 px-4">
                  {project.bullets.map((bullet, i) => (
                    <CardDescription className="text-foreground text-base">
                      <li key={i}>{bullet}</li>
                    </CardDescription>
                  ))}
                </ul>

                {project.images.map((image: ProjectImage, index) => (
                  <div className="flex flex-col items-center justify-center" key={index}>
                    <CardDescription className="pb-2 text-sm">
                      {(project.captions && project.captions[index]) || ''}
                    </CardDescription>

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
      </div>
    </section>
  )
}
