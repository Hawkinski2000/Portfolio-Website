import { Card, CardContent, CardDescription } from '@/components/ui/card'

export default function EducationSection() {
  return (
    <section className="flex h-screen w-full max-w-2xl flex-col sm:max-w-4xl">
      <h2 className="bg-accent px-2 py-4 text-6xl font-bold sm:px-4 sm:py-8 sm:text-9xl">
        Education
      </h2>

      <div className="px-2 py-4 sm:px-4 sm:py-8">
        <Card>
          <CardContent>
            <CardDescription className="text-foreground text-xl font-bold sm:text-4xl">
              California State University San Marcos
            </CardDescription>
            <CardDescription className="text-foreground text-lg sm:text-xl">
              Bachelor of Science in Computer Science
            </CardDescription>
            <CardDescription className="text-muted-foreground text-sm sm:text-base">
              Graduated 5/17/2025
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
