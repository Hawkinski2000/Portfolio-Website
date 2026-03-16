export interface SkillCategory {
  title: string
  skills: string
}

export const skillCategories: SkillCategory[] = [
  { title: 'Languages', skills: 'Python, SQL, JavaScript/TypeScript, C/C++, HTML/CSS' },
  { title: 'Databases', skills: 'PostgreSQL, Redis' },
  { title: 'Frameworks', skills: 'PyTorch, FastAPI, React, pytest, Alembic' },
  { title: 'Developer Tools', skills: 'Git, Docker, Amazon Web Services, GitHub Actions' },
  { title: 'Libraries', skills: 'SQLAlchemy, pandas, NumPy, Matplotlib' },
]
