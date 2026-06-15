import type { CategoriaCompetencia } from '@/types'

// Dashboard de competências — migrado do portfólio atual.
// 'valor' (0-100) alimenta o gráfico radar; 'nivel' usa a rubrica da Fatec.
export const competencias: CategoriaCompetencia[] = [
  {
    titulo: 'Back-End',
    skills: [
      { nome: 'Node.js', nivel: 'Com autonomia', valor: 80 },
      { nome: 'Python', nivel: 'Com autonomia', valor: 85 },
      { nome: 'Express', nivel: 'Com autonomia', valor: 78 },
      { nome: 'TypeScript', nivel: 'Com ajuda', valor: 65 },
    ],
  },
  {
    titulo: 'Front-End',
    skills: [
      { nome: 'HTML', nivel: 'Posso ensinar', valor: 90 },
      { nome: 'CSS', nivel: 'Com autonomia', valor: 70 },
      { nome: 'JavaScript', nivel: 'Com autonomia', valor: 80 },
    ],
  },
  {
    titulo: 'Banco de Dados',
    skills: [
      { nome: 'Prisma', nivel: 'Com autonomia', valor: 75 },
      { nome: 'SQLite', nivel: 'Com autonomia', valor: 72 },
      { nome: 'PostgreSQL', nivel: 'Com ajuda', valor: 55 },
    ],
  },
  {
    titulo: 'DevOps & Ferramentas',
    skills: [
      { nome: 'Git', nivel: 'Com autonomia', valor: 75 },
      { nome: 'Linux', nivel: 'Com autonomia', valor: 80 },
      { nome: 'Docker', nivel: 'Com ajuda', valor: 50 },
    ],
  },
  {
    titulo: 'Segurança',
    skills: [
      { nome: 'Cybersecurity', nivel: 'Com ajuda', valor: 60 },
      { nome: 'Pentest', nivel: 'Ouvi falar', valor: 40 },
    ],
  },
]

// Resumo para o radar da home (média por categoria)
export const radarResumo = competencias.map((c) => ({
  area: c.titulo,
  valor: Math.round(c.skills.reduce((s, k) => s + k.valor, 0) / c.skills.length),
}))
