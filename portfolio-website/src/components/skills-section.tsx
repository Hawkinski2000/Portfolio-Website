import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { skillCategories, type SkillCategory } from '@/skills'

export default function SkillsSection() {
  return (
    <section className="flex w-full max-w-2xl flex-col [--card-header-height:64px] [--section-heading-height:92px] sm:max-w-4xl sm:[--card-header-height:92px] sm:[--section-heading-height:192px]">
      <h2
        className="bg-accent sticky top-0 px-2 py-4 text-6xl font-bold sm:px-4 sm:py-8 sm:text-9xl"
        style={{ zIndex: skillCategories.length * 10 }}
      >
        Skills
      </h2>

      <div className="flex flex-col px-2 py-8 sm:px-4">
        {skillCategories.map((skillCategory: SkillCategory, i) => (
          <Card
            className="sticky h-[50vh] p-2 sm:p-4"
            style={{
              top: `calc(${i} * var(--card-header-height) + var(--section-heading-height))`,
              zIndex: i * 5 + 1,
              marginBottom: `calc(${skillCategories.length - 1 - i} * var(--card-header-height))`,
            }}
          >
            <CardHeader>
              <CardTitle className="text-4xl font-bold sm:text-6xl">
                {skillCategory.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex list-disc flex-col gap-2 px-8">
                {skillCategory.skills.map((skill) => (
                  <CardDescription className="text-foreground text-xl sm:text-3xl">
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
