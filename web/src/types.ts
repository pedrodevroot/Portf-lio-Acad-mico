// Níveis de proficiência usados pela rubrica da Fatec (Projeto Integrador / API)
export type NivelProf =
  | 'Ouvi falar'
  | 'Com ajuda'
  | 'Com autonomia'
  | 'Posso ensinar';

export type PapelProjeto = 'Desenvolvedor' | 'Scrum Master' | 'Product Owner';

export interface Tecnologia {
  nome: string;
  finalidade: string; // o que faz no projeto
  onde: string; // em que camada/parte foi usada
}

export interface SoftSkillStar {
  competencia: string;
  situacao: string;
  acao: string;
  resultado: string;
}

export interface ProjetoAPI {
  slug: string;
  nome: string;
  resumo: string; // 1 linha para o card
  semestre: number; // 1..6
  ano: number;
  empresaParceira: string;
  tipo: 'Web' | 'Mobile' | 'Desktop';
  papeis: PapelProjeto[];
  capa: string;
  destaque?: boolean; // aparece na home
  problema: string; // contexto + dor, SEM citar a solução
  solucao: string;
  tecnologias: Tecnologia[];
  contribuicoes: string[];
  hardSkills: { tech: string; nivel: NivelProf }[];
  softSkills: SoftSkillStar[];
  links: { github?: string; docs?: string; demo?: string };
}

export interface CategoriaCompetencia {
  titulo: string;
  skills: { nome: string; nivel: NivelProf; valor: number }[]; // valor 0-100 p/ gráfico
}

export interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
  atual?: boolean;
  responsabilidades: string[];
  tecnologias: string[];
  resultados: string[];
}

export interface Formacao {
  curso: string;
  instituicao: string;
  periodo: string;
  status: 'Em andamento' | 'Concluído';
}

export interface Certificado {
  nome: string;
  instituicao: string;
  ano: number;
  cargaHoraria?: string;
  arquivo?: string; // pdf ou imagem
}

export interface Evento {
  nome: string;
  tipo: 'Hackathon' | 'Maratona' | 'Palestra' | 'Workshop' | 'Feira' | 'Congresso';
  ano: number;
  descricao: string;
}

export interface Producao {
  titulo: string;
  tipo: 'TCC' | 'Artigo' | 'Relatório Técnico' | 'Pesquisa';
  ano: number;
  resumo: string;
  link?: string;
}
