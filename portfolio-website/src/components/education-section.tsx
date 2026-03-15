import { Card, CardContent, CardDescription } from '@/components/ui/card'

export default function EducationSection() {
  return (
    <section className="flex w-full max-w-4xl flex-col py-4">
      <h2 className="px-4 pb-2 text-2xl">Education</h2>

      <Card>
        <CardContent>
          <CardDescription className="text-foreground">
            California State University San Marcos
          </CardDescription>
          <CardDescription className="text-foreground">
            Bachelor of Science in Computer Science
          </CardDescription>
          <CardDescription className="text-foreground">
            <b>Graduated:</b> 5/17/2025
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  )
}
