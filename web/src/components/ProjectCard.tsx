import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ProjetoAPI } from '@/types'
import { Chip } from '@/components/ui'

export function ProjectCard({ projeto }: { projeto: ProjetoAPI }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300 }}>
      <Link
        to={`/projetos/${projeto.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50"
      >
        <div className="relative aspect-video overflow-hidden bg-surface-2">
          <img
            src={projeto.capa}
            alt={projeto.nome}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-md bg-bg/80 px-2 py-1 font-mono text-xs text-accent backdrop-blur">
            {projeto.empresaParceira === 'Projeto pessoal'
              ? 'Pessoal'
              : `${projeto.semestre}º sem · ${projeto.ano}`}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center gap-2">
            <Chip>{projeto.tipo}</Chip>
            {projeto.papeis.map((p) => (
              <Chip key={p}>{p}</Chip>
            ))}
          </div>
          <h3 className="font-display text-xl font-bold">{projeto.nome}</h3>
          <p className="text-sm text-muted">{projeto.resumo}</p>
          <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Ver case
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
