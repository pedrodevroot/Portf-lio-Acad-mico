import { Seo } from '@/components/Seo'
import { Section } from '@/components/ui'
import { ProjectCard } from '@/components/ProjectCard'
import { projetos } from '@/data/projetos'

export function Projetos() {
  return (
    <>
      <Seo
        title="Projetos API"
        description="Projetos API desenvolvidos na Fatec e projetos pessoais, com problema, solução e contribuições."
      />
      <Section
        eyebrow="// projetos api"
        title="Projetos"
        subtitle="Cada case segue o método da Fatec: o problema de negócio, a solução, as tecnologias e — em destaque — minhas contribuições individuais."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p) => (
            <ProjectCard key={p.slug} projeto={p} />
          ))}
        </div>
      </Section>
    </>
  )
}
