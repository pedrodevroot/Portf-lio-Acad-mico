import { motion } from 'framer-motion'
import { GraduationCap, Languages, FileText, Heart } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Section, Card, Button, NivelBadge, FadeUp, Chip } from '@/components/ui'
import { asset } from '@/lib/utils'
import { perfil } from '@/data/perfil'
import { formacoes, idiomas, softSkillsGerais } from '@/data/curriculo'
import { competencias } from '@/data/competencias'

export function Curriculo() {
  return (
    <>
      <Seo title="Currículo" description="Formação, competências técnicas e soft skills de Pedro Lucas." />

      <Section eyebrow="// currículo" title="Currículo">
        <Button href={asset(perfil.cv)} target="_blank" rel="noopener" download>
          <FileText size={16} /> Baixar currículo em PDF
        </Button>

        <div className="mt-10">
          <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold">
            <GraduationCap size={20} className="text-accent" /> Formação acadêmica
          </h3>
          <div className="space-y-3">
            {formacoes.map((f) => (
              <FadeUp key={f.curso}>
                <Card className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 className="font-semibold">{f.curso}</h4>
                    <p className="text-sm text-muted">{f.instituicao}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={
                        f.status === 'Em andamento'
                          ? 'rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent'
                          : 'text-xs text-muted'
                      }
                    >
                      {f.status}
                    </span>
                    <p className="text-sm text-muted">{f.periodo}</p>
                  </div>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="mb-3 flex items-center gap-2 font-display font-semibold">
              <Languages size={18} className="text-accent" /> Idiomas
            </h3>
            <ul className="space-y-2 text-sm">
              {idiomas.map((i) => (
                <li key={i.idioma} className="flex justify-between">
                  <span>{i.idioma}</span>
                  <span className="text-muted">{i.nivel}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="mb-3 flex items-center gap-2 font-display font-semibold">
              <Heart size={18} className="text-accent" /> Soft skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkillsGerais.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="// dashboard"
        title="Dashboard de competências"
        subtitle="Hard skills agrupadas por área, com nível de proficiência segundo a rubrica da Fatec."
        className="pt-0"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {competencias.map((cat) => (
            <FadeUp key={cat.titulo}>
              <Card>
                <h3 className="mb-4 font-display text-lg font-bold">{cat.titulo}</h3>
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div key={s.nome}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm font-medium">{s.nome}</span>
                        <NivelBadge nivel={s.nivel} />
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                        <motion.div
                          className="h-full rounded-full bg-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.valor}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Section>
    </>
  )
}
