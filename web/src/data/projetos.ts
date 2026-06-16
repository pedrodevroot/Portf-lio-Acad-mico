import type { ProjetoAPI } from '@/types'

export const projetos: ProjetoAPI[] = [
  {
    slug: 'janosys',
    nome: 'Janosys — Censo SJC',
    resumo: 'Plataforma web de visualização dos dados do Censo 2022 de São José dos Campos.',
    semestre: 2,
    ano: 2025,
    empresaParceira: 'Prefeitura de São José dos Campos',
    tipo: 'Web',
    papeis: ['Desenvolvedor'],
    capa: '/assets/img/janosys.jpg',
    destaque: true,
    problema:
      'A Secretaria de Planejamento Urbano precisa distribuir os recursos financeiros entre as regiões ' +
      'da cidade, mas os dados do Censo 2022 de São José dos Campos chegam em formato bruto, dispersos e ' +
      'difíceis de interpretar. Sem uma forma de cruzar população por região e faixa etária, decisões ' +
      'como onde construir creches, UBS ou unidades de atendimento geriátrico ficavam apoiadas em dados ' +
      'pouco acessíveis — e a própria população não tinha como consultar essas informações.',
    solucao:
      'Aplicação web que consome os dados tratados do Censo 2022 e os apresenta em gráficos dinâmicos, ' +
      'com filtros por região e por faixa etária. Uma API em Flask serve os dados já processados em ' +
      'Pandas, e os painéis em Plotly dão suporte à tomada de decisão dos agentes públicos e permitem ' +
      'à sociedade civil consultar o panorama da cidade.',
    tecnologias: [
      { nome: 'Python', finalidade: 'processamento e análise dos dados do censo', onde: 'back-end / análise' },
      { nome: 'Pandas', finalidade: 'limpeza e agregação dos dados', onde: 'análise (Google Colab)' },
      { nome: 'Flask', finalidade: 'API que serve os dados já tratados', onde: 'back-end' },
      { nome: 'Plotly', finalidade: 'geração dos gráficos dinâmicos', onde: 'visualização' },
      { nome: 'JavaScript', finalidade: 'interatividade dos painéis', onde: 'front-end' },
      { nome: 'HTML & CSS', finalidade: 'interface dos dashboards', onde: 'front-end' },
      { nome: 'Docker', finalidade: 'containerização da aplicação', onde: 'infraestrutura' },
      { nome: 'AWS', finalidade: 'hospedagem do ambiente', onde: 'infraestrutura' },
    ],
    contribuicoes: [
      'Atuei no Dev Team desenvolvendo os painéis de dados e a interatividade dos gráficos no front-end.',
      'Implementei os filtros por região e por faixa etária sobre os dados do censo.',
      'Integrei o front-end à API Flask que serve os dados tratados em Pandas.',
      'Participei das cerimônias Scrum (planning poker, dailies) ao longo das 3 sprints, versionando via Git.',
    ],
    hardSkills: [
      { tech: 'Python', nivel: 'Com autonomia' },
      { tech: 'JavaScript', nivel: 'Com autonomia' },
      { tech: 'Pandas', nivel: 'Com ajuda' },
      { tech: 'Flask', nivel: 'Com autonomia' },
      { tech: 'Plotly', nivel: 'Com ajuda' },
      { tech: 'Docker', nivel: 'Com autonomia' },
    ],
    softSkills: [
      {
        competencia: 'Trabalho em equipe (Scrum)',
        situacao:
          'Primeiro Projeto Integrado da Fatec, com o time dividido entre front-end e back-end e entrega em 3 sprints.',
        acao:
          'Integrei minha parte do front-end com o trabalho do back-end via Git e alinhei as entregas nas cerimônias do Scrum.',
        resultado:
          'As 3 sprints foram concluídas no prazo e o produto foi apresentado na Feira de Soluções em dez/2025.',
      },
    ],
    links: {
      github: 'https://github.com/pedrodevroot/Janosys-Project',
      demo: 'https://janosys-project-api1.vercel.app',
    },
  },
  {
    slug: 'akaer',
    nome: 'Akaer — Normas Aeronáuticas',
    resumo: 'Plataforma web para centralizar, buscar e versionar requisitos normativos aeronáuticos.',
    semestre: 2,
    ano: 2026,
    empresaParceira: 'Akaer (engenharia aeroespacial e defesa)',
    tipo: 'Web',
    papeis: ['Product Owner'],
    capa: '/assets/img/akaer-api.png',
    destaque: true,
    problema:
      'A Akaer, empresa de engenharia aeroespacial e defesa, lida com um grande volume de requisitos ' +
      'normativos aeronáuticos vindos de diferentes órgãos. Essas normas ficavam dispersas e difíceis de ' +
      'buscar, sem histórico das versões nem registro de quem alterou o quê. Para os engenheiros, localizar ' +
      'a norma certa — pelo código, órgão, categoria ou palavra-chave — e ter certeza de qual versão valia ' +
      'era um processo lento, e a falta de níveis de acesso comprometia a rastreabilidade e a confiabilidade.',
    solucao:
      'Plataforma web com diferentes níveis de permissão (administrador, engenheiro, checker, operador) que ' +
      'centraliza, organiza e correlaciona os requisitos normativos. Permite filtrar e buscar normas por ' +
      'órgão, código, categoria e palavra-chave, gerenciar as peças relacionadas, solicitar e aprovar novas ' +
      'normas e manter o histórico de versões e de alterações, garantindo rastreabilidade.',
    tecnologias: [
      { nome: 'React', finalidade: 'interface e telas por perfil de acesso', onde: 'front-end' },
      { nome: 'Node.js', finalidade: 'API REST e regras de negócio', onde: 'back-end' },
      { nome: 'Prisma', finalidade: 'ORM e modelagem do banco', onde: 'acesso a dados' },
      { nome: 'MySQL', finalidade: 'persistência de normas, versões e histórico', onde: 'banco relacional' },
      { nome: 'Docker', finalidade: 'containerização da aplicação', onde: 'infraestrutura' },
      { nome: 'AWS', finalidade: 'hospedagem do ambiente', onde: 'infraestrutura' },
    ],
    contribuicoes: [
      'Como Product Owner, traduzi as necessidades da Akaer em um backlog de produto com 21 user stories priorizadas.',
      'Defini os critérios de aceitação (DoR/DoD) e priorizei as histórias por valor de negócio junto ao time.',
      'Conduzi o alinhamento com o cliente (Akaer) e validei as entregas ao final de cada sprint.',
      'Organizei o backlog em 3 sprints, equilibrando gestão de normas, busca/filtros e controle de acesso/histórico.',
    ],
    hardSkills: [
      { tech: 'Scrum / Product Owner', nivel: 'Com autonomia' },
      { tech: 'Node.js', nivel: 'Com autonomia' },
      { tech: 'Prisma', nivel: 'Com autonomia' },
      { tech: 'React', nivel: 'Com autonomia' },
      { tech: 'MySQL', nivel: 'Com autonomia' },
    ],
    softSkills: [
      {
        competencia: 'Gestão de produto & comunicação',
        situacao:
          'Como PO, precisava alinhar as expectativas da Akaer (cliente externo) com a capacidade do time em 3 sprints.',
        acao:
          'Priorizei o backlog por valor de negócio, defini critérios de aceitação e mediei as decisões entre cliente e time.',
        resultado:
          'As 3 sprints foram concluídas e o escopo essencial (gestão, busca e controle de acesso de normas) foi entregue.',
      },
    ],
    links: {
      github: 'https://github.com/pedrodevroot/Janosys-Project-1-Akaer',
      demo: 'https://janosys-aeroespacial.vercel.app',
    },
  },
  {
    slug: 'andrafer',
    nome: 'Andrafer — Captação de Leads',
    resumo: 'Landing page de captação de leads via WhatsApp e e-mail para uma empresa de ferragens.',
    semestre: 1,
    ano: 2026,
    empresaParceira: 'Freelance · empresa de ferragens',
    tipo: 'Web',
    papeis: ['Desenvolvedor'],
    capa: '/assets/img/andrafer.png',
    destaque: true,
    problema:
      'Uma empresa que vende ferragens não tinha uma forma eficiente de captar e centralizar os clientes ' +
      'interessados (leads) vindos da internet. Os contatos chegavam por canais dispersos e acabavam se ' +
      'perdendo, sem um caminho rápido para iniciar a conversa no WhatsApp ou dar sequência por e-mail — ' +
      'o que significava oportunidades de venda desperdiçadas.',
    solucao:
      'Landing page que captura os dados dos interessados por meio de um formulário e os direciona ' +
      'automaticamente para o WhatsApp e o e-mail da empresa, criando um canal de contato direto e ' +
      'centralizando os leads em um só fluxo.',
    tecnologias: [
      { nome: 'JavaScript', finalidade: 'lógica do formulário e validações', onde: 'front-end' },
      { nome: 'HTML & CSS', finalidade: 'estrutura e estilo da landing page', onde: 'front-end' },
      { nome: 'WhatsApp (wa.me)', finalidade: 'envio do lead direto para a conversa', onde: 'integração' },
      { nome: 'E-mail', finalidade: 'encaminhamento dos leads para a empresa', onde: 'integração' },
    ],
    contribuicoes: [
      'Projeto freelance desenvolvido de ponta a ponta, do levantamento de requisitos com o cliente à entrega.',
      'Desenvolvi a landing page e o formulário de captação de leads.',
      'Implementei a integração que direciona os leads automaticamente para o WhatsApp e o e-mail da empresa.',
    ],
    hardSkills: [
      { tech: 'JavaScript', nivel: 'Com autonomia' },
      { tech: 'HTML & CSS', nivel: 'Com autonomia' },
    ],
    softSkills: [
      {
        competencia: 'Autonomia & comunicação com o cliente',
        situacao:
          'Projeto freelance em que lidei diretamente com o cliente (empresa de ferragens), sem um time por trás.',
        acao:
          'Levantei os requisitos junto ao cliente e conduzi todo o desenvolvimento e a entrega de forma autônoma.',
        resultado:
          'A empresa passou a receber os leads de forma centralizada e com contato direto via WhatsApp e e-mail.',
      },
    ],
    links: { github: 'https://github.com/pedrodevroot/AndraFer-project' },
  },
  {
    slug: 'portfolio-astro',
    nome: 'Portfólio Astro',
    resumo: 'Portfólio pessoal minimalista feito com Astro e CSS puro, focado em performance.',
    semestre: 0,
    ano: 2025,
    empresaParceira: 'Projeto pessoal',
    tipo: 'Web',
    papeis: ['Desenvolvedor'],
    capa: '/assets/img/portifolio-astro.png',
    destaque: false,
    problema:
      'Eu precisava de uma presença online própria para apresentar quem sou, minhas habilidades e formas ' +
      'de contato — de forma rápida, leve e fácil de manter, sem depender de plataformas de terceiros.',
    solucao:
      'Portfólio pessoal estático feito com Astro e CSS puro, 100% responsivo, com componentes ' +
      'reutilizáveis, variáveis CSS globais e animações leves, pronto para deploy na Vercel.',
    tecnologias: [
      { nome: 'Astro', finalidade: 'framework de site estático e build', onde: 'estrutura' },
      { nome: 'TypeScript', finalidade: 'tipagem dos componentes', onde: 'front-end' },
      { nome: 'CSS puro', finalidade: 'estilo e variáveis globais de cores/espaçamento', onde: 'front-end' },
      { nome: 'Motion', finalidade: 'animações de entrada leves', onde: 'front-end' },
      { nome: 'Vercel', finalidade: 'hospedagem do site', onde: 'deploy' },
    ],
    contribuicoes: [
      'Desenvolvi todo o site do zero com Astro e CSS puro, sem frameworks de UI.',
      'Criei componentes reutilizáveis e um sistema de variáveis CSS para cores e espaçamentos.',
      'Implementei layout 100% responsivo e animações de entrada leves com Motion.',
      'Configurei o deploy contínuo na Vercel.',
    ],
    hardSkills: [
      { tech: 'Astro', nivel: 'Com autonomia' },
      { tech: 'CSS', nivel: 'Com autonomia' },
      { tech: 'TypeScript', nivel: 'Com ajuda' },
    ],
    softSkills: [
      {
        competencia: 'Iniciativa & aprendizado',
        situacao: 'Queria uma presença online própria e escolhi aprender um framework novo (Astro) para isso.',
        acao: 'Estudei o Astro e construí o portfólio do zero, priorizando performance e simplicidade.',
        resultado: 'Site leve, responsivo e publicado na Vercel, fácil de manter e atualizar.',
      },
    ],
    links: {
      github: 'https://github.com/pedrodevroot/meu-portifolio-astro',
      demo: 'https://meu-portifolio-astro.vercel.app',
    },
  },
  {
    slug: 'api-portfolio',
    nome: 'API do Portfólio',
    resumo: 'API REST própria com Express, Prisma e SQLite que alimenta este portfólio.',
    semestre: 0,
    ano: 2026,
    empresaParceira: 'Projeto pessoal',
    tipo: 'Web',
    papeis: ['Desenvolvedor'],
    capa: '/assets/img/capa2.jpg',
    destaque: false,
    problema:
      'O conteúdo do portfólio (projetos, cursos, formações) estava fixo no código, exigindo alterar ' +
      'arquivos manualmente a cada atualização — sem uma forma estruturada de gerenciar os dados.',
    solucao:
      'API REST com CRUD completo de Projetos, Cursos e Formações, persistindo em banco de dados e ' +
      'permitindo gerenciar o conteúdo de forma organizada por um painel administrativo.',
    tecnologias: [
      { nome: 'Node.js', finalidade: 'runtime do servidor', onde: 'back-end' },
      { nome: 'Express', finalidade: 'API REST e rotas CRUD', onde: 'camada HTTP' },
      { nome: 'Prisma', finalidade: 'ORM, migrations e seed', onde: 'acesso a dados' },
      { nome: 'SQLite', finalidade: 'persistência local', onde: 'banco de dados' },
    ],
    contribuicoes: [
      'Modelei o schema com Prisma (Projeto, Curso, Formacao) e configurei migrations.',
      'Implementei rotas REST GET/POST/PUT/DELETE para os três recursos.',
      'Criei script de seed e coleção Postman para testar todos os endpoints.',
    ],
    hardSkills: [
      { tech: 'Express', nivel: 'Com autonomia' },
      { tech: 'Prisma', nivel: 'Com autonomia' },
      { tech: 'SQLite', nivel: 'Com autonomia' },
      { tech: 'API REST', nivel: 'Posso ensinar' },
    ],
    softSkills: [
      {
        competencia: 'Organização',
        situacao: 'Conteúdo do portfólio fixo no código dificultava manutenção.',
        acao: 'Projetei uma API documentada com migrations, seed e coleção Postman.',
        resultado: 'Conteúdo passou a ser gerenciável e o projeto virou uma vitrine full-stack.',
      },
    ],
    links: { github: 'https://github.com/pedrodevroot/Portf-lio-Acad-mico' },
  },
]

export const getProjeto = (slug: string) => projetos.find((p) => p.slug === slug)
