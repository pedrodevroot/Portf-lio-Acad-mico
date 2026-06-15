import { Briefcase, Target, Compass } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Section, Card, FadeUp, Chip } from '@/components/ui'
import { perfil } from '@/data/perfil'
import { experiencias } from '@/data/curriculo'

export function Sobre() {
  return (
    <>
      <Seo title="Sobre" description="Trajetória, objetivos e experiência de Pedro Lucas." />

      <Section eyebrow="// sobre mim" title="Quem sou">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {perfil.sobre.map((p, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <p>{p}</p>
              </FadeUp>
            ))}
          </div>

          <div className="space-y-4">
            <Card>
              <h3 className="mb-3 flex items-center gap-2 font-display font-semibold">
                <Target size={18} className="text-accent" /> Objetivos
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                {perfil.objetivos.map((o) => (
                  <li key={o} className="flex gap-2">
                    <span className="text-accent">▹</span> {o}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="mb-3 flex items-center gap-2 font-display font-semibold">
                <Compass size={18} className="text-accent" /> Áreas de interesse
              </h3>
              <div className="flex flex-wrap gap-2">
                {perfil.areasInteresse.map((a) => (
                  <Chip key={a}>{a}</Chip>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* EXPERIÊNCIA — timeline */}
      <Section eyebrow="// experiência" title="Experiência profissional" className="pt-0">
        <div className="relative space-y-8 border-l border-border pl-6">
          {experiencias.map((exp, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                <div className="flex flex-wrap items-center gap-2">
                  <Briefcase size={16} className="text-accent" />
                  <h3 className="font-display text-lg font-semibold">{exp.cargo}</h3>
                  {exp.atual && (
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent">
                      Atual
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted">
                  {exp.empresa} · {exp.periodo}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {exp.responsabilidades.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-accent">▹</span> {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tecnologias.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>
    </>
  )
}
