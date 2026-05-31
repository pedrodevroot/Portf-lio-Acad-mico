# Portfólio Acadêmico - Pedro Lucas

Portfólio pessoal desenvolvido para apresentar projetos, formação e habilidades na área de desenvolvimento web. Conta com uma API REST integrada ao banco de dados e painel administrativo.

---

## Tecnologias utilizadas

**Frontend**
- HTML5, CSS3, JavaScript

**Backend**
- Node.js
- Express
- Prisma ORM
- SQLite

---

## Estrutura do projeto

```
portfolio/
 ├── index.html          → frontend do portfólio
 ├── css/                → estilos
 ├── js/                 → scripts do frontend
 ├── assets/             → imagens e recursos
 └── server/             → API REST
      ├── server.js
      ├── package.json
      ├── prisma/
      │    ├── schema.prisma   → modelos do banco
      │    ├── migrations/     → histórico de migrações
      │    └── seed.js         → dados iniciais
      └── portfolio.postman_collection.json
```

---

## Como executar

### Pré-requisitos
- Node.js instalado

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/pedrodevroot/Portf-lio-Acad-mico.git

# 2. Entre na pasta do servidor
cd Portf-lio-Acad-mico/server

# 3. Instale as dependências
npm install

# 4. Crie o banco de dados e rode as migrações
npx prisma migrate dev

# 5. Popule o banco com os dados iniciais
npm run seed

# 6. Inicie o servidor
npm run dev
```

Servidor disponível em: **http://localhost:3000**

Para o frontend, basta abrir o `index.html` no navegador.

---

## Scripts disponíveis (dentro de `server/`)

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor com hot-reload |
| `npm run seed` | Popula o banco com os dados iniciais |
| `npm run db:migrate` | Cria uma nova migration após alterar o schema |
| `npm run db:studio` | Abre interface visual do banco no navegador |

---

## API REST

Base URL: `http://localhost:3000`

### Projetos

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/projetos` | Lista todos os projetos |
| GET | `/api/projetos/:id` | Busca um projeto por ID |
| POST | `/api/projetos` | Cria um novo projeto |
| PUT | `/api/projetos/:id` | Atualiza um projeto |
| DELETE | `/api/projetos/:id` | Remove um projeto |

**Campos:** `nome` (obrigatório), `link` (obrigatório), `imagem`, `descricao`

### Cursos

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/cursos` | Lista todos os cursos |
| GET | `/api/cursos/:id` | Busca um curso por ID |
| POST | `/api/cursos` | Cria um novo curso |
| PUT | `/api/cursos/:id` | Atualiza um curso |
| DELETE | `/api/cursos/:id` | Remove um curso |

**Campos:** `nome` (obrigatório), `instituicao`, `periodo`

### Formações

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/formacoes` | Lista todas as formações |
| GET | `/api/formacoes/:id` | Busca uma formação por ID |
| POST | `/api/formacoes` | Cria uma nova formação |
| PUT | `/api/formacoes/:id` | Atualiza uma formação |
| DELETE | `/api/formacoes/:id` | Remove uma formação |

**Campos:** `nome` (obrigatório), `instituicao`, `pdf`

---

## Testando no Postman

Importe o arquivo `server/portfolio.postman_collection.json` no Postman — todas as requisições já estão prontas.

---

## Contato

- GitHub: [pedrodevroot](https://github.com/pedrodevroot)
