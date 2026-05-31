-- CreateTable
CREATE TABLE "Projeto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "imagem" TEXT NOT NULL DEFAULT '',
    "descricao" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "instituicao" TEXT NOT NULL DEFAULT '',
    "periodo" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Formacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "instituicao" TEXT NOT NULL DEFAULT '',
    "pdf" TEXT NOT NULL DEFAULT ''
);
