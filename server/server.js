const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, "db.json");

app.use(cors());
app.use(express.json({ limit: "10mb" }));

function lerDB() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify({ projetos: [], cursos: [], formacoes: [] }, null, 2));
    }
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function salvarDB(db) {
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

function proximoId(lista) {
    return lista.length === 0 ? 1 : Math.max(...lista.map(i => i.id || 0)) + 1;
}

app.get("/", (req, res) => {
    res.json({
        nome: "API Portfólio Acadêmico",
        autor: "Pedro Lucas",
        rotas: {
            projetos: "/api/projetos",
            cursos: "/api/cursos",
            formacoes: "/api/formacoes"
        }
    });
});

// ========== PROJETOS ==========
app.get("/api/projetos", (req, res) => {
    const db = lerDB();
    res.json(db.projetos);
});

app.get("/api/projetos/:id", (req, res) => {
    const db = lerDB();
    const projeto = db.projetos.find(p => p.id === parseInt(req.params.id));
    if (!projeto) return res.status(404).json({ erro: "Projeto não encontrado" });
    res.json(projeto);
});

app.post("/api/projetos", (req, res) => {
    const { nome, link, imagem, descricao } = req.body;
    if (!nome || !link) return res.status(400).json({ erro: "Campos 'nome' e 'link' são obrigatórios" });

    const db = lerDB();
    const novo = {
        id: proximoId(db.projetos),
        nome,
        link,
        imagem: imagem || "",
        descricao: descricao || ""
    };
    db.projetos.push(novo);
    salvarDB(db);
    res.status(201).json(novo);
});

app.put("/api/projetos/:id", (req, res) => {
    const db = lerDB();
    const idx = db.projetos.findIndex(p => p.id === parseInt(req.params.id));
    if (idx === -1) return res.status(404).json({ erro: "Projeto não encontrado" });

    const { nome, link, imagem, descricao } = req.body;
    db.projetos[idx] = {
        ...db.projetos[idx],
        ...(nome !== undefined && { nome }),
        ...(link !== undefined && { link }),
        ...(imagem !== undefined && { imagem }),
        ...(descricao !== undefined && { descricao })
    };
    salvarDB(db);
    res.json(db.projetos[idx]);
});

app.delete("/api/projetos/:id", (req, res) => {
    const db = lerDB();
    const idx = db.projetos.findIndex(p => p.id === parseInt(req.params.id));
    if (idx === -1) return res.status(404).json({ erro: "Projeto não encontrado" });

    const removido = db.projetos.splice(idx, 1)[0];
    salvarDB(db);
    res.json({ mensagem: "Projeto removido", projeto: removido });
});

// ========== CURSOS ==========
app.get("/api/cursos", (req, res) => {
    const db = lerDB();
    res.json(db.cursos);
});

app.get("/api/cursos/:id", (req, res) => {
    const db = lerDB();
    const curso = db.cursos.find(c => c.id === parseInt(req.params.id));
    if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
    res.json(curso);
});

app.post("/api/cursos", (req, res) => {
    const { nome, instituicao, periodo } = req.body;
    if (!nome) return res.status(400).json({ erro: "Campo 'nome' é obrigatório" });

    const db = lerDB();
    const novo = {
        id: proximoId(db.cursos),
        nome,
        instituicao: instituicao || "",
        periodo: periodo || ""
    };
    db.cursos.push(novo);
    salvarDB(db);
    res.status(201).json(novo);
});

app.put("/api/cursos/:id", (req, res) => {
    const db = lerDB();
    const idx = db.cursos.findIndex(c => c.id === parseInt(req.params.id));
    if (idx === -1) return res.status(404).json({ erro: "Curso não encontrado" });

    const { nome, instituicao, periodo } = req.body;
    db.cursos[idx] = {
        ...db.cursos[idx],
        ...(nome !== undefined && { nome }),
        ...(instituicao !== undefined && { instituicao }),
        ...(periodo !== undefined && { periodo })
    };
    salvarDB(db);
    res.json(db.cursos[idx]);
});

app.delete("/api/cursos/:id", (req, res) => {
    const db = lerDB();
    const idx = db.cursos.findIndex(c => c.id === parseInt(req.params.id));
    if (idx === -1) return res.status(404).json({ erro: "Curso não encontrado" });

    const removido = db.cursos.splice(idx, 1)[0];
    salvarDB(db);
    res.json({ mensagem: "Curso removido", curso: removido });
});

// ========== FORMAÇÕES ==========
app.get("/api/formacoes", (req, res) => {
    const db = lerDB();
    res.json(db.formacoes);
});

app.get("/api/formacoes/:id", (req, res) => {
    const db = lerDB();
    const formacao = db.formacoes.find(f => f.id === parseInt(req.params.id));
    if (!formacao) return res.status(404).json({ erro: "Formação não encontrada" });
    res.json(formacao);
});

app.post("/api/formacoes", (req, res) => {
    const { nome, instituicao, pdf } = req.body;
    if (!nome) return res.status(400).json({ erro: "Campo 'nome' é obrigatório" });

    const db = lerDB();
    const nova = {
        id: proximoId(db.formacoes),
        nome,
        instituicao: instituicao || "",
        pdf: pdf || ""
    };
    db.formacoes.push(nova);
    salvarDB(db);
    res.status(201).json(nova);
});

app.put("/api/formacoes/:id", (req, res) => {
    const db = lerDB();
    const idx = db.formacoes.findIndex(f => f.id === parseInt(req.params.id));
    if (idx === -1) return res.status(404).json({ erro: "Formação não encontrada" });

    const { nome, instituicao, pdf } = req.body;
    db.formacoes[idx] = {
        ...db.formacoes[idx],
        ...(nome !== undefined && { nome }),
        ...(instituicao !== undefined && { instituicao }),
        ...(pdf !== undefined && { pdf })
    };
    salvarDB(db);
    res.json(db.formacoes[idx]);
});

app.delete("/api/formacoes/:id", (req, res) => {
    const db = lerDB();
    const idx = db.formacoes.findIndex(f => f.id === parseInt(req.params.id));
    if (idx === -1) return res.status(404).json({ erro: "Formação não encontrada" });

    const removida = db.formacoes.splice(idx, 1)[0];
    salvarDB(db);
    res.json({ mensagem: "Formação removida", formacao: removida });
});

app.listen(PORT, () => {
    console.log(`✅ API rodando em http://localhost:${PORT}`);
    console.log(`📌 Endpoints:`);
    console.log(`   GET/POST/PUT/DELETE  /api/projetos[/:id]`);
    console.log(`   GET/POST/PUT/DELETE  /api/cursos[/:id]`);
    console.log(`   GET/POST/PUT/DELETE  /api/formacoes[/:id]`);
});
