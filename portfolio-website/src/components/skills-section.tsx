import { Card, CardContent, CardDescription } from '@/components/ui/card'

export default function SkillsSection() {
  return (
    <section className="flex w-full flex-col py-4">
      <h2 className="pb-2 text-2xl">Skills</h2>

      <Card>
        <CardContent>
          <CardDescription className="text-foreground">
            <b>Languages:</b> Python, SQL, JavaScript/TypeScript, C/C++, HTML/CSS
          </CardDescription>
          <CardDescription className="text-foreground">
            <b>Databases:</b> PostgreSQL, Redis
          </CardDescription>
          <CardDescription className="text-foreground">
            <b>Frameworks:</b> PyTorch, FastAPI, React, pytest, Alembic
          </CardDescription>
          <CardDescription className="text-foreground">
            <b>Developer Tools:</b> Git, Docker, Amazon Web Services, GitHub Actions
          </CardDescription>
          <CardDescription className="text-foreground">
            <b>Libraries:</b> SQLAlchemy, pandas, NumPy, Matplotlib
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  )
}
