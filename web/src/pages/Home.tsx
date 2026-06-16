import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Mail, FileText, ArrowRight } from 'lucide-react'
import { Github, Linkedin } from '@/components/BrandIcons'
import { Seo } from '@/components/Seo'
import { Container, Section, Button, Chip } from '@/components/ui'
import { ProjectCard } from '@/components/ProjectCard'
import { asset } from '@/lib/utils'
import { perfil } from '@/data/perfil'
import { projetos } from '@/data/projetos'

const SkillRadar = lazy(() =>
  import('@/components/SkillRadar').then((m) => ({ default: m.SkillRadar })),
)

export function Home() {
  const destaques = projetos.filter((p) => p.destaque)

  return (
    <>
      <Seo title="Início" description={perfil.resumoCurto} />

      <Container className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-sm text-accent">Olá, eu sou</p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
            {perfil.nome}
          </h1>
          <p className="mt-2 text-xl text-muted sm:text-2xl">{perfil.cargo}</p>
          <p className="mt-5 max-w-xl text-muted">{perfil.resumoCurto}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/projetos">
              Ver projetos <ArrowRight size={16} />
            </Button>
            <Button href={asset(perfil.cv)} variant="ghost" target="_blank" rel="noopener" download>
              <FileText size={16} /> Baixar CV
            </Button>
          </div>

          <div className="mt-6 flex gap-4 text-muted">
            <a href={perfil.github} target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-accent">
              <Github size={22} />
            </a>
            <a href={perfil.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-accent">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${perfil.email}`} aria-label="E-mail" className="hover:text-accent">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-accent/20 blur-2xl" />
            <img
              src={asset(perfil.foto)}
              alt={`Foto de ${perfil.nome}`}
              className="relative h-52 w-52 rounded-full border-4 border-surface object-cover sm:h-64 sm:w-64"
            />
          </div>
        </motion.div>
      </Container>

      <Container>
        <div className="flex flex-wrap items-center gap-2 border-y border-border py-5">
          <span className="mr-2 font-mono text-xs text-muted">STACK</span>
          {perfil.stack.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </Container>

      <Section eyebrow="// projetos" title="Projetos em destaque">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destaques.map((p) => (
            <ProjectCard key={p.slug} projeto={p} />
          ))}
        </div>
        <div className="mt-8">
          <Button to="/projetos" variant="ghost">
            Ver todos os projetos <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      <Section eyebrow="// competências" title="Panorama técnico">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Suspense fallback={<div className="h-72 w-full animate-pulse rounded-2xl bg-surface" />}>
            <SkillRadar />
          </Suspense>
          <div>
            <p className="text-muted">
              Visão geral das áreas em que atuo. O dashboard completo, com níveis de proficiência por
              tecnologia, está na página de currículo.
            </p>
            <div className="mt-5">
              <Button to="/curriculo" variant="ghost">
                Ver dashboard completo <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
