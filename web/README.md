# Portfólio — Pedro Lucas (versão React)

Reformulação do portfólio em **React + TypeScript + Vite + TailwindCSS + Framer Motion**.
Site estático (conteúdo em arquivos tipados) — rápido, com SEO e zero servidor para manter.
A API Express/Prisma (`../server`) segue como projeto-vitrine documentado.

## Stack

- React 19 + TypeScript + Vite
- TailwindCSS v4 (`@tailwindcss/vite`)
- Framer Motion (animações), Recharts (radar de competências)
- React Router (navegação), react-helmet-async (SEO por página)
- lucide-react (ícones)

## Como rodar

```bash
cd web
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

```
web/src/
├── data/          → CONTEÚDO (edite aqui — sem mexer em componentes)
│   ├── perfil.ts        Nome, cargo, bio, stack, links
│   ├── projetos.ts      Projetos API (Problema→Solução→Contribuições→STAR)
│   ├── competencias.ts  Dashboard de competências (níveis Fatec)
│   ├── curriculo.ts     Formação, experiência, idiomas, soft skills
│   └── trajetoria.ts    Certificados, eventos, produções acadêmicas
├── components/    → UI reutilizável (ui.tsx, Navbar, Footer, cards, radar)
├── pages/         → uma por rota
└── types.ts       → contratos de dados
```

## Onde preencher (importante)

Procure por `[PREENCHER]` nos arquivos de `src/data/` — são os pontos que
precisam dos seus dados reais. Prioridade:

1. **`projetos.ts`** — o PROBLEMA (contexto de negócio, sem citar a solução) e
   as CONTRIBUIÇÕES individuais de cada projeto (Janosys, Andrafer).
2. **`curriculo.ts`** — empresa/período da experiência atual.
3. **`trajetoria.ts`** — certificados, eventos e produções reais.
4. Coloque o currículo em **`public/cv.pdf`** (o botão "Baixar CV" aponta para `/cv.pdf`).
5. Certificados em PDF/imagem em `public/certificados/` e referencie no campo `arquivo`.

## Rotas

`/` Home · `/sobre` · `/projetos` + `/projetos/:slug` · `/curriculo` ·
`/trajetoria` · `/contato`

## Deploy (Vercel)

1. Suba o repositório no GitHub.
2. Na Vercel, importe o projeto e defina **Root Directory = `web`**.
3. Build: `npm run build` · Output: `dist`.
4. O arquivo `web/vercel.json` já contém o rewrite de SPA para as rotas
   funcionarem ao recarregar a página.
