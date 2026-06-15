import type { Experiencia, Formacao } from '@/types'

export const formacoes: Formacao[] = [
  {
    curso: 'Desenvolvimento de Software Multiplataforma (DSM)',
    instituicao: 'Fatec',
    periodo: 'Em andamento',
    status: 'Em andamento',
  },
  {
    curso: 'Técnico em Desenvolvimento de Sistemas',
    instituicao: 'ETEC Machado de Assis',
    periodo: '2018 - 2019',
    status: 'Concluído',
  },
  {
    curso: 'Técnico em Informática',
    instituicao: 'ETEC Machado de Assis',
    periodo: '2017 - 2018',
    status: 'Concluído',
  },
]

export const experiencias: Experiencia[] = [
  {
    empresa: 'Autaza',
    cargo: 'Desenvolvedor de Software',
    periodo: 'Abr 2026 - atual',
    atual: true,
    responsabilidades: [
      'Correção de bugs e refatoração de código em aplicações reais.',
      'Migração de projetos de JavaScript para TypeScript.',
      'Desenvolvimento e manutenção de funcionalidades back-end.',
    ],
    tecnologias: ['JavaScript', 'TypeScript', 'Node.js', 'Git'],
    resultados: [
      '[PREENCHER] Resultado mensurável (ex.: reduziu X% de bugs / cobertura de tipos).',
    ],
  },
]

export const idiomas = [
  { idioma: 'Português', nivel: 'Nativo' },
  { idioma: 'Inglês', nivel: 'Intermediário (técnico)' },
]

export const softSkillsGerais = [
  'Comunicação',
  'Trabalho em equipe',
  'Resolução de problemas',
  'Organização',
  'Aprendizado contínuo',
  'Atenção a detalhes',
]
