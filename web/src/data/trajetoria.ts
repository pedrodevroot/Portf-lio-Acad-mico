import type { Certificado, Evento, Producao } from '@/types'

export const producoes: Producao[] = [
  {
    titulo: 'Papiro Militar',
    tipo: 'TCC',
    ano: 2019,
    resumo:
      'Plataforma web para auxiliar nos estudos para a prova da ESA (Escola de Sargentos das Armas), ' +
      'centralizando conteúdos e apoiando a preparação dos candidatos.',
  },
  {
    titulo: 'Soulcity',
    tipo: 'TCC',
    ano: 2018,
    resumo:
      'Plataforma web para agendamento de quadras esportivas, facilitando a reserva de horários e a ' +
      'organização da prática de esportes.',
  },
]

export const certificados: Certificado[] = [
  {
    nome: 'Escola de Inovadores',
    instituicao: 'INOVA',
    ano: 2025,
    arquivo: '/certificados/certificado-inova.pdf',
  },
]

export const eventos: Evento[] = [
  {
    nome: 'PyDay SJC',
    tipo: 'Palestra',
    ano: 2025,
    descricao:
      'Evento de Python em São José dos Campos, com palestras da comunidade. Participei no 2º semestre de 2025.',
  },
  {
    nome: 'PyDay SJC (2ª participação)',
    tipo: 'Palestra',
    ano: 2026,
    descricao: 'Nova edição do PyDay em São José dos Campos, em outra data.',
  },
]
