import { Award, CalendarDays, BookOpen, ExternalLink, FileText } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { Section, Card, Chip, FadeUp } from '@/components/ui'
import { certificados, eventos, producoes } from '@/data/trajetoria'

export function Trajetoria() {
  return (
    <>
      <Seo
        title="Trajetória"
        description="Produções acadêmicas, certificados e eventos de Pedro Lucas."
      />

      {/* Produções acadêmicas — estilo Scholar */}
      <Section eyebrow="// trajetória" title="Produções acadêmicas">
        <div className="space-y-4">
          {producoes.map((p) => (
            <FadeUp key={p.titulo}>
              <Card>
                <div className="flex items-start gap-3">
                  <BookOpen size={18} className="mt-1 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold text-text">
                      {p.link ? (
                        <a href={p.link} target="_blank" rel="noopener" className="hover:text-accent">
                          {p.titulo} <ExternalLink size={13} className="inline" />
                        </a>
                      ) : (
                        p.titulo
                      )}
                    </h3>
                    <p className="text-sm text-accent">
                      {p.tipo} · {p.ano}
                    </p>
                    <p className="mt-1 text-sm text-muted">{p.resumo}</p>
                  </div>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* Certificados */}
      <Section eyebrow="// certificados" title="Certificados" className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificados.map((c) => (
            <FadeUp key={c.nome}>
              <Card className="flex h-full flex-col">
                <Award size={22} className="text-accent" />
                <h3 className="mt-3 font-semibold">{c.nome}</h3>
                <p className="text-sm text-muted">{c.instituicao}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Chip>{c.ano}</Chip>
                  {c.cargaHoraria && <Chip>{c.cargaHoraria}</Chip>}
                </div>
                {c.arquivo && (
                  <a
                    href={c.arquivo}
                    target="_blank"
                    rel="noopener"
                    className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                  >
                    <FileText size={14} /> Ver certificado
                  </a>
                )}
              </Card>
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* Eventos — timeline */}
      <Section eyebrow="// eventos" title="Eventos & participações" className="pt-0">
        <div className="relative space-y-6 border-l border-border pl-6">
          {eventos.map((e) => (
            <FadeUp key={e.nome}>
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                <div className="flex flex-wrap items-center gap-2">
                  <CalendarDays size={16} className="text-accent" />
                  <h3 className="font-display font-semibold">{e.nome}</h3>
                  <Chip>{e.tipo}</Chip>
                  <span className="text-sm text-muted">{e.ano}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{e.descricao}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Section>
    </>
  )
}
