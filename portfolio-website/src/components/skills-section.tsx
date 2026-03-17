import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { skillCategories, type SkillCategory } from '@/skills'

export default function SkillsSection() {
  const SECTION_HEADING_HEIGHT = 192
  const CARD_HEADER_HEIGHT = 60 + 16 + 16 // heading height + card top padding + card gap

  return (
    <section className="flex w-full max-w-4xl flex-col">
      <h2
        className="bg-accent sticky top-0 px-4 py-8 text-9xl font-bold"
        style={{ zIndex: skillCategories.length * 10 }}
      >
        Skills
      </h2>

      <div className="flex flex-col px-4 py-8">
        {skillCategories.map((skillCategory: SkillCategory, i) => (
          <Card
            className="sticky h-[50vh] p-4"
            style={{
              top: `calc(${i * CARD_HEADER_HEIGHT + SECTION_HEADING_HEIGHT}px)`,
              zIndex: i * 5 + 1,
              marginBottom: `${(skillCategories.length - 1 - i) * CARD_HEADER_HEIGHT}px`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-6xl font-bold">{skillCategory.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex list-disc flex-col gap-2 px-8">
                {skillCategory.skills.map((skill) => (
                  <CardDescription className="text-foreground text-3xl">
                    <li>{skill}</li>
                  </CardDescription>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
