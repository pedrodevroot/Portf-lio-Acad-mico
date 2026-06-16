import { useParams, Navigate, Link } from 'react-router-dom'
import {
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Wrench,
  Star,
  Users,
  FileText,
  ExternalLink,
} from 'lucide-react'
import { Github } from '@/components/BrandIcons'
import { Seo } from '@/components/Seo'
import { Container, Card, Chip, NivelBadge, Button, FadeUp } from '@/components/ui'
import { getProjeto, projetos } from '@/data/projetos'

export function ProjetoDetalhe() {
  const { slug } = useParams()
  const projeto = slug ? getProjeto(slug) : undefined

  if (!projeto) return <Navigate to="/projetos" replace />

  const idx = projetos.findIndex((p) => p.slug === projeto.slug)
  const prox = projetos[idx + 1]

  return (
    <>
      <Seo title={projeto.nome} description={projeto.resumo} />

      <Container className="py-10">
        <Link
          to="/projetos"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
        >
          <ArrowLeft size={15} /> Projetos / {projeto.nome}
        </Link>

        <FadeUp>
          <h1 className="font-display text-3xl font-bold sm:text-5xl">{projeto.nome}</h1>
          <p className="mt-2 font-mono text-sm text-accent">
            {projeto.empresaParceira === 'Projeto pessoal'
              ? 'Projeto pessoal'
              : `${projeto.semestre}º Semestre · ${projeto.ano} · ${projeto.empresaParceira}`}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip>Tipo: {projeto.tipo}</Chip>
            {projeto.papeis.map((p) => (
              <Chip key={p}>Papel: {p}</Chip>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {projeto.links.github && (
              <Button href={projeto.links.github} target="_blank" rel="noopener">
                <Github size={16} /> GitHub
              </Button>
            )}
            {projeto.links.docs && (
              <Button href={projeto.links.docs} variant="ghost" target="_blank" rel="noopener">
                <FileText size={16} /> Documentação
              </Button>
            )}
            {projeto.links.demo && (
              <Button href={projeto.links.demo} variant="ghost" target="_blank" rel="noopener">
                <ExternalLink size={16} /> Demo
              </Button>
            )}
          </div>
        </FadeUp>

        <FadeUp className="mt-10">
          <Card className="border-danger/40 bg-danger/5">
            <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold text-danger">
              <AlertCircle size={20} /> O Problema
            </h2>
            <p className="leading-relaxed text-muted">{projeto.problema}</p>
          </Card>
        </FadeUp>

        <FadeUp className="mt-6">
          <Card className="border-accent/40 bg-accent/5">
            <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-bold text-accent">
              <CheckCircle2 size={20} /> A Solução
            </h2>
            <p className="leading-relaxed text-muted">{projeto.solucao}</p>
          </Card>
        </FadeUp>

        <FadeUp className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold">
            <Wrench size={22} className="text-accent" /> Tecnologias utilizadas
          </h2>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface text-muted">
                <tr>
                  <th className="p-3 font-semibold">Tecnologia</th>
                  <th className="p-3 font-semibold">Finalidade</th>
                  <th className="hidden p-3 font-semibold sm:table-cell">Onde foi usada</th>
                </tr>
              </thead>
              <tbody>
                {projeto.tecnologias.map((t) => (
                  <tr key={t.nome} className="border-t border-border">
                    <td className="p-3 font-mono font-semibold text-accent">{t.nome}</td>
                    <td className="p-3 text-muted">
                      {t.finalidade}
                      <span className="block text-xs text-muted/70 sm:hidden">{t.onde}</span>
                    </td>
                    <td className="hidden p-3 text-muted sm:table-cell">{t.onde}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>

        <FadeUp className="mt-10">
          <Card className="border-accent/50 bg-gradient-to-br from-accent/10 to-transparent">
            <h2 className="mb-2 flex items-center gap-2 font-display text-2xl font-bold">
              <Star size={22} className="text-accent" /> Minhas contribuições
            </h2>
            <p className="mb-4 text-sm text-muted">
              Papel: <strong className="text-text">{projeto.papeis.join(' + ')}</strong>
            </p>
            <ul className="space-y-3">
              {projeto.contribuicoes.map((c) => (
                <li key={c} className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-muted">{c}</span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeUp>

        <FadeUp className="mt-10">
          <h2 className="mb-4 font-display text-2xl font-bold">Hard skills do projeto</h2>
          <div className="flex flex-wrap gap-3">
            {projeto.hardSkills.map((h) => (
              <div
                key={h.tech}
                className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2"
              >
                <span className="font-mono text-sm">{h.tech}</span>
                <NivelBadge nivel={h.nivel} />
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold">
            <Users size={22} className="text-accent" /> Soft skills (Situação → Ação → Resultado)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projeto.softSkills.map((s) => (
              <Card key={s.competencia}>
                <h3 className="mb-3 font-display font-semibold">{s.competencia}</h3>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="font-mono text-xs text-muted">SITUAÇÃO</dt>
                    <dd className="text-muted">{s.situacao}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-muted">AÇÃO</dt>
                    <dd className="text-muted">{s.acao}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-accent">RESULTADO</dt>
                    <dd className="text-text">{s.resultado}</dd>
                  </div>
                </dl>
              </Card>
            ))}
          </div>
        </FadeUp>

        {prox && (
          <div className="mt-12 border-t border-border pt-6">
            <Link
              to={`/projetos/${prox.slug}`}
              className="flex items-center justify-between rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
            >
              <div>
                <p className="text-xs text-muted">Próximo projeto</p>
                <p className="font-display font-semibold">{prox.nome}</p>
              </div>
              <ArrowLeft size={18} className="rotate-180 text-accent" />
            </Link>
          </div>
        )}
      </Container>
    </>
  )
}
