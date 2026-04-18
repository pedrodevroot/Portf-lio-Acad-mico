function inicializarProjetos() {
    let projetos = carregarDados("projetos");

    const janosysIndex = projetos.findIndex(p => p.nome === "Janosys Project");
    if (janosysIndex === -1) {
        projetos.unshift({
            nome: "Janosys Project",
            imagem: "assets/img/janosys.jpg",
            link: "https://github.com/pedrodevroot/Janosys-Project",
            descricao: "Projeto desenvolvido para a prefeitura de São José dos Campos."
        });
    } else {
        projetos[janosysIndex].imagem = "assets/img/janosys.jpg";
    }

    const andraferIndex = projetos.findIndex(p => p.nome === "Andrafer");
    if (andraferIndex === -1) {
        projetos.unshift({
            nome: "Andrafer",
            imagem: "assets/img/andrafer.png",
            link: "https://github.com/pedrodevroot/AndraFer-project",
            descricao: "Projeto AndraFer desenvolvido para gerenciamento e automação."
        });
    } else {
        projetos[andraferIndex].imagem = "assets/img/andrafer.png";
    }

    salvarDados("projetos", projetos);
}

function inicializarCursos() {
    let cursos = carregarDados("cursos");

    const cursosDefault = [
        "Técnico em Informática — ETEC Machado de Assis (2017 - 2018)",
        "Desenvolvimento de Sistemas — ETEC Machado de Assis (2018 - 2019)"
    ];

    cursosDefault.forEach(curso => {
        if (!cursos.includes(curso)) {
            cursos.push(curso);
        }
    });

    salvarDados("cursos", cursos);
}

inicializarProjetos();
inicializarCursos();
carregarConteudo('sobre');

function carregarConteudo(secao) {
    let feed = document.getElementById("feed");
    feed.innerHTML = "";

    switch (secao) {
        case "admin":
            if (!adminLogado) { feed.innerHTML = "<p>Acesso negado</p>"; break; }
            renderizarPainelAdmin(feed);
            break;

        case "sobre":
            feed.innerHTML = `
                <h3>Sobre mim</h3>
                <p>Desenvolvedor Back-End com foco em evolução constante e boas práticas de desenvolvimento. Tenho experiência com aplicações reais, atuando na correção de bugs, refatoração de código e migração de projetos de JavaScript para TypeScript.</p>
                <p>Busco escrever código limpo, escalável e bem tipado, sempre priorizando qualidade e manutenção a longo prazo.</p>
            `;
            break;

        case "projetos":
            let projetos = carregarDados("projetos");
            feed.innerHTML = "<h3>Projetos</h3><div class='grid-projetos'></div>";
            let grid = feed.querySelector('.grid-projetos');
            projetos.forEach(p => {
                grid.innerHTML += `
                    <div class="card-projeto">
                        <div class="card-projeto-img">
                            <img src="${p.imagem}" alt="${p.nome}" onerror="this.src='assets/img/capa1.jpg'">
                        </div>
                        <div class="card-projeto-info">
                            <h4>${p.nome}</h4>
                            ${p.descricao ? `<p>${p.descricao}</p>` : ""}
                            <a href="${p.link}" target="_blank" class="btn-github">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                                Ver no GitHub
                            </a>
                        </div>
                    </div>
                `;
            });
            break;

        case "formacao":
            let formacoes = carregarDados("formacoes");
            feed.innerHTML = `<h3>Formação Acadêmica</h3>`;
            if (formacoes.length === 0) {
                feed.innerHTML += `
                    <div class="card-formacao">
                        <div class="formacao-icone">🎓</div>
                        <div class="formacao-info">
                            <h4>Desenvolvimento de Software Multiplataforma</h4>
                            <p class="formacao-inst">Graduação em andamento</p>
                        </div>
                    </div>
                `;
            } else {
                formacoes.forEach(f => {
                    feed.innerHTML += `
                        <div class="card-formacao">
                            <div class="formacao-icone">🎓</div>
                            <div class="formacao-info">
                                <h4>${f.nome}</h4>
                                <p class="formacao-inst">${f.instituicao || ""}</p>
                                ${f.pdf ? `<a href="${f.pdf}" target="_blank" class="btn-pdf">📄 Ver certificado / diploma</a>` : ""}
                            </div>
                        </div>
                    `;
                });
            }
            break;

        case "cursos":
            let cursos = carregarDados("cursos");
            feed.innerHTML = "<h3>Cursos Complementares</h3>";
            cursos.forEach(c => { feed.innerHTML += `<p class="item-lista">▹ ${c}</p>`; });
            break;

        case "competencias":
            let categorias = [
                {
                    titulo: "Back-End",
                    icone: "&#128425;",
                    skills: [
                        { nome: "Python", nivel: 85, tag: "Avançado" },
                        { nome: "JavaScript", nivel: 80, tag: "Avançado" },
                        { nome: "TypeScript", nivel: 65, tag: "Intermediário" }
                    ]
                },
                {
                    titulo: "Front-End",
                    icone: "&#127912;",
                    skills: [
                        { nome: "HTML", nivel: 90, tag: "Avançado" },
                        { nome: "CSS", nivel: 70, tag: "Intermediário" }
                    ]
                },
                {
                    titulo: "Ferramentas & SO",
                    icone: "&#128736;",
                    skills: [
                        { nome: "Linux", nivel: 80, tag: "Avançado" },
                        { nome: "Git", nivel: 75, tag: "Intermediário" }
                    ]
                },
                {
                    titulo: "Segurança",
                    icone: "&#128274;",
                    skills: [
                        { nome: "Cybersecurity", nivel: 65, tag: "Intermediário" },
                        { nome: "Pentest", nivel: 50, tag: "Básico" }
                    ]
                }
            ];

            feed.innerHTML = "<h3>Competências</h3><div class='grid-competencias'></div>";
            let gridComp = feed.querySelector('.grid-competencias');

            categorias.forEach(cat => {
                let skillsHtml = cat.skills.map(s => `
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-nome">${s.nome}</span>
                            <span class="skill-tag skill-tag-${s.tag.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}">${s.tag}</span>
                        </div>
                        <div class="skill-barra">
                            <div class="skill-progresso" style="width: 0%" data-nivel="${s.nivel}"></div>
                        </div>
                    </div>
                `).join("");

                gridComp.innerHTML += `
                    <div class="card-competencia">
                        <div class="competencia-titulo">
                            <span class="competencia-icone">${cat.icone}</span>
                            <h4>${cat.titulo}</h4>
                        </div>
                        ${skillsHtml}
                    </div>
                `;
            });

            setTimeout(() => {
                document.querySelectorAll('.skill-progresso').forEach(bar => {
                    bar.style.width = bar.dataset.nivel + "%";
                });
            }, 50);
            break;

        case "links":
            feed.innerHTML = `
                <h3>Links Profissionais</h3>
                <a href="https://www.linkedin.com/in/pedro-lucas-76870237b/" target="_blank" class="card-link">
                    <div class="link-icone">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </div>
                    <div class="link-info">
                        <h4>LinkedIn</h4>
                        <p>linkedin.com/in/pedro-lucas-76870237b</p>
                    </div>
                </a>
                <a href="https://github.com/pedrodevroot" target="_blank" class="card-link">
                    <div class="link-icone">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    </div>
                    <div class="link-info">
                        <h4>GitHub</h4>
                        <p>github.com/pedrodevroot</p>
                    </div>
                </a>
            `;
            break;

        default:
            feed.innerHTML = "<p>Selecione uma opção no menu.</p>";
    }
}
