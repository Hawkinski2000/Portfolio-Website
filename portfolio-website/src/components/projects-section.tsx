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
    <section className="bg-background relative flex w-full items-center justify-center">
      <div className="flex max-w-2xl flex-col sm:max-w-4xl">
        <h2 className="bg-background sticky top-0 px-2 py-4 text-6xl font-bold sm:px-4 sm:py-8 sm:text-9xl">
          Projects
        </h2>

        <div className="flex flex-col gap-4 px-2 py-4 sm:gap-8 sm:px-4 sm:py-8">
          {projects.map((project: Project) => {
            return (
              <Card key={project.name} className="px-2 py-4 sm:px-4">
                <CardHeader className="flex items-center justify-between px-0 sm:px-2">
                  <CardTitle className="text-xl font-bold sm:text-4xl">{project.name}</CardTitle>

                  <CardAction>
                    <GitHubButton href={project.githubLink} />
                  </CardAction>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  <ul className="flex list-disc flex-col gap-2 px-2 sm:px-4">
                    {project.bullets.map((bullet, i) => (
                      <CardDescription className="text-foreground text-sm sm:text-base">
                        <li key={i}>{bullet}</li>
                      </CardDescription>
                    ))}
                  </ul>

                  {project.images.map((image: ProjectImage, index) => (
                    <div className="flex flex-col items-center justify-center" key={index}>
                      <CardDescription className="pb-2 text-center text-xs sm:text-sm">
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
      </div>
    </section>
  )
}
