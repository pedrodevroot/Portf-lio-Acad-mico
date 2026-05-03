# API REST - Portfólio Acadêmico

API simples em **Node.js + Express** para testar requisições **GET, POST, PUT e DELETE** no Postman.
Os dados são persistidos no arquivo `db.json` (sem necessidade de banco de dados).

---

## ⚙️ Como rodar

```bash
cd server
npm install
npm start
```

Servidor inicia em: **http://localhost:3000**

---

## 📌 Endpoints disponíveis

Base URL: `http://localhost:3000`

### Projetos
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | `/api/projetos`        | Lista todos os projetos |
| GET    | `/api/projetos/:id`    | Busca um projeto por ID |
| POST   | `/api/projetos`        | Cria um novo projeto |
| PUT    | `/api/projetos/:id`    | Atualiza um projeto |
| DELETE | `/api/projetos/:id`    | Remove um projeto |

### Cursos
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | `/api/cursos`        | Lista todos os cursos |
| GET    | `/api/cursos/:id`    | Busca um curso por ID |
| POST   | `/api/cursos`        | Cria um novo curso |
| PUT    | `/api/cursos/:id`    | Atualiza um curso |
| DELETE | `/api/cursos/:id`    | Remove um curso |

### Formações
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | `/api/formacoes`        | Lista todas as formações |
| GET    | `/api/formacoes/:id`    | Busca uma formação por ID |
| POST   | `/api/formacoes`        | Cria uma nova formação |
| PUT    | `/api/formacoes/:id`    | Atualiza uma formação |
| DELETE | `/api/formacoes/:id`    | Remove uma formação |

---

## 🧪 Testando no Postman

### Opção 1 — Importar a collection pronta
1. Abra o Postman
2. Clique em **Import** → arraste o arquivo `portfolio.postman_collection.json`
3. Todas as requisições já vão estar prontas para uso

### Opção 2 — Criar manualmente
Abra o Postman e crie requisições com os exemplos abaixo:

#### POST - Criar projeto
- Método: `POST`
- URL: `http://localhost:3000/api/projetos`
- Body → raw → JSON:
```json
{
  "nome": "Meu Projeto",
  "link": "https://github.com/pedrodevroot/meu-projeto",
  "imagem": "assets/img/exemplo.png",
  "descricao": "Projeto de exemplo"
}
```

#### PUT - Atualizar projeto
- Método: `PUT`
- URL: `http://localhost:3000/api/projetos/1`
- Body → raw → JSON:
```json
{
  "nome": "Nome atualizado",
  "descricao": "Nova descrição"
}
```

#### DELETE - Remover projeto
- Método: `DELETE`
- URL: `http://localhost:3000/api/projetos/1`

---

## 📁 Estrutura

```
server/
 ├── server.js                          → API Express
 ├── db.json                            → "banco" em arquivo JSON
 ├── package.json                       → dependências
 ├── portfolio.postman_collection.json  → coleção pronta para importar no Postman
 └── README.md                          → este arquivo
```
