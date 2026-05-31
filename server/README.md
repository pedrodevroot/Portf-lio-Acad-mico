# API REST - Portfólio Acadêmico

API em **Node.js + Express + Prisma** com banco de dados SQLite.

---

## Como rodar

```bash
cd server
npm install
npx prisma migrate dev
npm run seed
npm run dev
```

Servidor em: **http://localhost:3000**

---

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor com hot-reload |
| `npm run seed` | Popula o banco com dados iniciais |
| `npm run db:migrate` | Nova migration após alterar o schema |
| `npm run db:studio` | Interface visual do banco |

---

## Endpoints

Base URL: `http://localhost:3000`

### Projetos
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/projetos` | Lista todos |
| GET | `/api/projetos/:id` | Busca por ID |
| POST | `/api/projetos` | Cria novo |
| PUT | `/api/projetos/:id` | Atualiza |
| DELETE | `/api/projetos/:id` | Remove |

### Cursos
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/cursos` | Lista todos |
| GET | `/api/cursos/:id` | Busca por ID |
| POST | `/api/cursos` | Cria novo |
| PUT | `/api/cursos/:id` | Atualiza |
| DELETE | `/api/cursos/:id` | Remove |

### Formações
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/formacoes` | Lista todas |
| GET | `/api/formacoes/:id` | Busca por ID |
| POST | `/api/formacoes` | Cria nova |
| PUT | `/api/formacoes/:id` | Atualiza |
| DELETE | `/api/formacoes/:id` | Remove |

---

## Estrutura

```
server/
 ├── server.js
 ├── package.json
 ├── prisma/
 │    ├── schema.prisma
 │    ├── migrations/
 │    └── seed.js
 └── portfolio.postman_collection.json
```
