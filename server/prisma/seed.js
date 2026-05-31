import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.projeto.createMany({
        data: [
            {
                nome: "Janosys Project",
                imagem: "assets/img/janosys.jpg",
                link: "https://github.com/pedrodevroot/Janosys-Project",
                descricao: "Projeto desenvolvido para a prefeitura de São José dos Campos."
            },
            {
                nome: "Andrafer",
                imagem: "assets/img/andrafer.png",
                link: "https://github.com/pedrodevroot/AndraFer-project",
                descricao: "Projeto AndraFer desenvolvido para gerenciamento e automação."
            }
        ]
    });

    await prisma.curso.createMany({
        data: [
            { nome: "Técnico em Informática", instituicao: "ETEC Machado de Assis", periodo: "2017 - 2018" },
            { nome: "Desenvolvimento de Sistemas", instituicao: "ETEC Machado de Assis", periodo: "2018 - 2019" }
        ]
    });

    await prisma.formacao.createMany({
        data: [
            { nome: "Desenvolvimento de Software Multiplataforma", instituicao: "FATEC", pdf: "" }
        ]
    });

    console.log("✅ Seed concluído!");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
