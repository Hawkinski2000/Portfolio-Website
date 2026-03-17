import { Card, CardContent, CardDescription } from '@/components/ui/card'

export default function EducationSection() {
  return (
    <section className="flex h-screen w-full max-w-4xl flex-col">
      <h2 className="bg-accent px-4 py-8 text-9xl font-bold">Education</h2>

      <div className="px-4 py-8">
        <Card>
          <CardContent>
            <CardDescription className="text-foreground text-4xl font-bold">
              California State University San Marcos
            </CardDescription>
            <CardDescription className="text-foreground text-xl">
              Bachelor of Science in Computer Science
            </CardDescription>
            <CardDescription className="text-muted-foreground text-base">
              Graduated 5/17/2025
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
