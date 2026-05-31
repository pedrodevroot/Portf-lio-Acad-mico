import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

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
app.get("/api/projetos", async (req, res) => {
    const projetos = await prisma.projeto.findMany();
    res.json(projetos);
});

app.get("/api/projetos/:id", async (req, res) => {
    const projeto = await prisma.projeto.findUnique({ where: { id: parseInt(req.params.id) } });
    if (!projeto) return res.status(404).json({ erro: "Projeto não encontrado" });
    res.json(projeto);
});

app.post("/api/projetos", async (req, res) => {
    const { nome, link, imagem, descricao } = req.body;
    if (!nome || !link) return res.status(400).json({ erro: "Campos 'nome' e 'link' são obrigatórios" });

    const novo = await prisma.projeto.create({
        data: { nome, link, imagem: imagem || "", descricao: descricao || "" }
    });
    res.status(201).json(novo);
});

app.put("/api/projetos/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const existe = await prisma.projeto.findUnique({ where: { id } });
    if (!existe) return res.status(404).json({ erro: "Projeto não encontrado" });

    const { nome, link, imagem, descricao } = req.body;
    const atualizado = await prisma.projeto.update({
        where: { id },
        data: {
            ...(nome !== undefined && { nome }),
            ...(link !== undefined && { link }),
            ...(imagem !== undefined && { imagem }),
            ...(descricao !== undefined && { descricao })
        }
    });
    res.json(atualizado);
});

app.delete("/api/projetos/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const existe = await prisma.projeto.findUnique({ where: { id } });
    if (!existe) return res.status(404).json({ erro: "Projeto não encontrado" });

    const removido = await prisma.projeto.delete({ where: { id } });
    res.json({ mensagem: "Projeto removido", projeto: removido });
});

// ========== CURSOS ==========
app.get("/api/cursos", async (req, res) => {
    const cursos = await prisma.curso.findMany();
    res.json(cursos);
});

app.get("/api/cursos/:id", async (req, res) => {
    const curso = await prisma.curso.findUnique({ where: { id: parseInt(req.params.id) } });
    if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
    res.json(curso);
});

app.post("/api/cursos", async (req, res) => {
    const { nome, instituicao, periodo } = req.body;
    if (!nome) return res.status(400).json({ erro: "Campo 'nome' é obrigatório" });

    const novo = await prisma.curso.create({
        data: { nome, instituicao: instituicao || "", periodo: periodo || "" }
    });
    res.status(201).json(novo);
});

app.put("/api/cursos/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const existe = await prisma.curso.findUnique({ where: { id } });
    if (!existe) return res.status(404).json({ erro: "Curso não encontrado" });

    const { nome, instituicao, periodo } = req.body;
    const atualizado = await prisma.curso.update({
        where: { id },
        data: {
            ...(nome !== undefined && { nome }),
            ...(instituicao !== undefined && { instituicao }),
            ...(periodo !== undefined && { periodo })
        }
    });
    res.json(atualizado);
});

app.delete("/api/cursos/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const existe = await prisma.curso.findUnique({ where: { id } });
    if (!existe) return res.status(404).json({ erro: "Curso não encontrado" });

    const removido = await prisma.curso.delete({ where: { id } });
    res.json({ mensagem: "Curso removido", curso: removido });
});

// ========== FORMAÇÕES ==========
app.get("/api/formacoes", async (req, res) => {
    const formacoes = await prisma.formacao.findMany();
    res.json(formacoes);
});

app.get("/api/formacoes/:id", async (req, res) => {
    const formacao = await prisma.formacao.findUnique({ where: { id: parseInt(req.params.id) } });
    if (!formacao) return res.status(404).json({ erro: "Formação não encontrada" });
    res.json(formacao);
});

app.post("/api/formacoes", async (req, res) => {
    const { nome, instituicao, pdf } = req.body;
    if (!nome) return res.status(400).json({ erro: "Campo 'nome' é obrigatório" });

    const nova = await prisma.formacao.create({
        data: { nome, instituicao: instituicao || "", pdf: pdf || "" }
    });
    res.status(201).json(nova);
});

app.put("/api/formacoes/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const existe = await prisma.formacao.findUnique({ where: { id } });
    if (!existe) return res.status(404).json({ erro: "Formação não encontrada" });

    const { nome, instituicao, pdf } = req.body;
    const atualizada = await prisma.formacao.update({
        where: { id },
        data: {
            ...(nome !== undefined && { nome }),
            ...(instituicao !== undefined && { instituicao }),
            ...(pdf !== undefined && { pdf })
        }
    });
    res.json(atualizada);
});

app.delete("/api/formacoes/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const existe = await prisma.formacao.findUnique({ where: { id } });
    if (!existe) return res.status(404).json({ erro: "Formação não encontrada" });

    const removida = await prisma.formacao.delete({ where: { id } });
    res.json({ mensagem: "Formação removida", formacao: removida });
});

app.listen(PORT, () => {
    console.log(`✅ API rodando em http://localhost:${PORT}`);
    console.log(`📌 Endpoints:`);
    console.log(`   GET/POST/PUT/DELETE  /api/projetos[/:id]`);
    console.log(`   GET/POST/PUT/DELETE  /api/cursos[/:id]`);
    console.log(`   GET/POST/PUT/DELETE  /api/formacoes[/:id]`);
});
