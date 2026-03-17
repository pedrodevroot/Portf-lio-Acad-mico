function inicializarProjetos() {
    let projetos = carregarDados("projetos");
    const janosysIndex = projetos.findIndex(p => p.nome === "Janosys Project");

    if (janosysIndex === -1) {
        projetos.unshift({
            nome: "Janosys Project",
            imagem: "imagens/janosys.jpg",
            link: "https://github.com/pedrodevroot/Janosys-Project",
            descricao: "Projeto desenvolvido para a prefeitura de São José dos Campos."
        });
    } else {
        projetos[janosysIndex].imagem = "imagens/janosys.jpg";
    }

    salvarDados("projetos", projetos);
}

inicializarProjetos();

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
                <p>Sou estudante de Desenvolvimento Back-End e Cybersecurity.</p>
                <p>Buscando evoluir na área de segurança ofensiva.</p>
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
                            <img src="${p.imagem}" alt="${p.nome}" onerror="this.src='imagens/capa1.jpg'">
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
            let skills = ["HTML", "CSS", "JavaScript", "Python", "Linux", "Cybersecurity"];
            feed.innerHTML = "<h3>Competências</h3>";
            skills.forEach(s => { feed.innerHTML += `<p class="item-lista">▹ ${s}</p>`; });
            break;

        default:
            feed.innerHTML = "<p>Selecione uma opção no menu.</p>";
    }
}

// PAINEL ADMIN 
function renderizarPainelAdmin(feed) {
    feed.innerHTML = `
        <h3>⚙️ Painel Admin</h3>
        <div class="admin-tabs">
            <button class="admin-tab ativo" onclick="mostrarAba('projetos-aba', this)">🗂️ Projetos</button>
            <button class="admin-tab" onclick="mostrarAba('formacao-aba', this)">🎓 Formação</button>
            <button class="admin-tab" onclick="mostrarAba('cursos-aba', this)">📘 Cursos</button>
            <button class="admin-tab" onclick="mostrarAba('lista-aba', this)">📋 Gerenciar</button>
        </div>

        <div id="projetos-aba" class="admin-aba ativo">
            <div class="admin-card">
                <h4>Adicionar Projeto</h4>
                <div class="campo-admin"><label>Nome do projeto</label><input type="text" id="novoProjeto" placeholder="Ex: Meu App"></div>
                <div class="campo-admin">
                    <label>Imagem do projeto</label>
                    <div class="upload-area" id="uploadAreaImagem" onclick="document.getElementById('inputImagemProjeto').click()">
                        <div class="upload-icone">🖼️</div>
                        <p>Clique para selecionar imagem</p>
                        <span>PNG, JPG, WEBP</span>
                        <input type="file" id="inputImagemProjeto" accept="image/*" style="display:none" onchange="previewImagem(this)">
                    </div>
                    <div id="previewImagem" class="preview-img" style="display:none">
                        <img id="imgPreview" src="" alt="preview">
                        <button onclick="limparImagem()" class="btn-remover">✕ Remover</button>
                    </div>
                    <input type="hidden" id="imagemBase64">
                </div>
                <div class="campo-admin"><label>Link do GitHub</label><input type="text" id="novoLink" placeholder="https://github.com/..."></div>
                <div class="campo-admin"><label>Descrição (opcional)</label><textarea id="novaDescricao" placeholder="Breve descrição..." rows="2"></textarea></div>
                <button onclick="addProjeto()" class="btn-salvar">+ Adicionar Projeto</button>
            </div>
        </div>

        <div id="formacao-aba" class="admin-aba">
            <div class="admin-card">
                <h4>Adicionar Formação</h4>
                <div class="campo-admin"><label>Nome do curso / graduação</label><input type="text" id="nomeFormacao" placeholder="Ex: Análise e Desenvolvimento de Sistemas"></div>
                <div class="campo-admin"><label>Instituição</label><input type="text" id="instituicaoFormacao" placeholder="Ex: FATEC, UNICAMP..."></div>
                <div class="campo-admin">
                    <label>Certificado / Diploma (PDF)</label>
                    <div class="upload-area" id="uploadAreaPdf" onclick="document.getElementById('inputPdfFormacao').click()">
                        <div class="upload-icone">📄</div>
                        <p>Clique para selecionar PDF</p>
                        <span>Somente arquivos .pdf</span>
                        <input type="file" id="inputPdfFormacao" accept=".pdf" style="display:none" onchange="previewPdf(this)">
                    </div>
                    <div id="previewPdf" class="preview-pdf" style="display:none">
                        <span id="nomePdf"></span>
                        <button onclick="limparPdf()" class="btn-remover">✕ Remover</button>
                    </div>
                    <input type="hidden" id="pdfBase64">
                </div>
                <button onclick="addFormacao()" class="btn-salvar">+ Adicionar Formação</button>
            </div>
        </div>

        <div id="cursos-aba" class="admin-aba">
            <div class="admin-card">
                <h4>Adicionar Curso Complementar</h4>
                <div class="campo-admin"><label>Nome do curso</label><input type="text" id="novoCurso" placeholder="Ex: Ethical Hacking - DIO"></div>
                <button onclick="addCurso()" class="btn-salvar">+ Adicionar Curso</button>
            </div>
        </div>

        <div id="lista-aba" class="admin-aba">
            <div id="listaAdmin"></div>
        </div>
    `;
    atualizarListaAdmin();
}

function mostrarAba(id, btn) {
    document.querySelectorAll('.admin-aba').forEach(a => a.classList.remove('ativo'));
    document.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('ativo'));
    document.getElementById(id).classList.add('ativo');
    btn.classList.add('ativo');
    if (id === 'lista-aba') atualizarListaAdmin();
}

function previewImagem(input) {
    let file = input.files[0];
    if (!file) return;
    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("imgPreview").src = e.target.result;
        document.getElementById("imagemBase64").value = e.target.result;
        document.getElementById("previewImagem").style.display = "flex";
        document.getElementById("uploadAreaImagem").style.display = "none";
    };
    reader.readAsDataURL(file);
}

function limparImagem() {
    document.getElementById("imagemBase64").value = "";
    document.getElementById("inputImagemProjeto").value = "";
    document.getElementById("previewImagem").style.display = "none";
    document.getElementById("uploadAreaImagem").style.display = "flex";
}

function previewPdf(input) {
    let file = input.files[0];
    if (!file) return;
    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("pdfBase64").value = e.target.result;
        document.getElementById("nomePdf").textContent = "📄 " + file.name;
        document.getElementById("previewPdf").style.display = "flex";
        document.getElementById("uploadAreaPdf").style.display = "none";
    };
    reader.readAsDataURL(file);
}

function limparPdf() {
    document.getElementById("pdfBase64").value = "";
    document.getElementById("inputPdfFormacao").value = "";
    document.getElementById("previewPdf").style.display = "none";
    document.getElementById("uploadAreaPdf").style.display = "flex";
}

function addProjeto() {
    let projetos = carregarDados("projetos");
    let nome = document.getElementById("novoProjeto").value.trim();
    let imagem = document.getElementById("imagemBase64").value;
    let link = document.getElementById("novoLink").value.trim();
    let descricao = document.getElementById("novaDescricao").value.trim();

    if (!nome || !link) { mostrarToast("Preencha o nome e o link!", "erro"); return; }
    if (!imagem) imagem = `https://opengraph.githubassets.com/1/${link.replace("https://github.com/", "")}`;

    projetos.push({ nome, imagem, link, descricao });
    salvarDados("projetos", projetos);
    document.getElementById("novoProjeto").value = "";
    document.getElementById("novoLink").value = "";
    document.getElementById("novaDescricao").value = "";
    limparImagem();
    mostrarToast("Projeto adicionado!", "ok");
    atualizarListaAdmin();
}

function addFormacao() {
    let formacoes = carregarDados("formacoes");
    let nome = document.getElementById("nomeFormacao").value.trim();
    let instituicao = document.getElementById("instituicaoFormacao").value.trim();
    let pdf = document.getElementById("pdfBase64").value;

    if (!nome) { mostrarToast("Preencha o nome da formação!", "erro"); return; }
    formacoes.push({ nome, instituicao, pdf });
    salvarDados("formacoes", formacoes);
    document.getElementById("nomeFormacao").value = "";
    document.getElementById("instituicaoFormacao").value = "";
    limparPdf();
    mostrarToast("Formação adicionada!", "ok");
    atualizarListaAdmin();
}

function addCurso() {
    let cursos = carregarDados("cursos");
    let input = document.getElementById("novoCurso");
    let novo = input.value.trim();
    if (!novo) { mostrarToast("Digite um curso válido!", "erro"); return; }
    cursos.push(novo);
    salvarDados("cursos", cursos);
    input.value = "";
    mostrarToast("Curso adicionado!", "ok");
    atualizarListaAdmin();
}

function removerItem(tipo, index) {
    if (!confirm("Remover este item?")) return;
    let lista = carregarDados(tipo);
    lista.splice(index, 1);
    salvarDados(tipo, lista);
    atualizarListaAdmin();
}

function atualizarListaAdmin() {
    let div = document.getElementById("listaAdmin");
    if (!div) return;
    let projetos = carregarDados("projetos");
    let cursos = carregarDados("cursos");
    let formacoes = carregarDados("formacoes");

    div.innerHTML = `
        <div class="admin-card">
            <h4>Projetos (${projetos.length})</h4>
            ${projetos.map((p, i) => `<div class="item-lista-admin"><span>🗂️ ${p.nome}</span><button onclick="removerItem('projetos', ${i})" class="btn-remover-item">✕</button></div>`).join("") || "<p class='vazio'>Nenhum projeto.</p>"}
        </div>
        <div class="admin-card">
            <h4>Formações (${formacoes.length})</h4>
            ${formacoes.map((f, i) => `<div class="item-lista-admin"><span>🎓 ${f.nome}</span><button onclick="removerItem('formacoes', ${i})" class="btn-remover-item">✕</button></div>`).join("") || "<p class='vazio'>Nenhuma formação.</p>"}
        </div>
        <div class="admin-card">
            <h4>Cursos (${cursos.length})</h4>
            ${cursos.map((c, i) => `<div class="item-lista-admin"><span>📘 ${c}</span><button onclick="removerItem('cursos', ${i})" class="btn-remover-item">✕</button></div>`).join("") || "<p class='vazio'>Nenhum curso.</p>"}
        </div>
    `;
}

function mostrarToast(msg, tipo) {
    let toast = document.createElement("div");
    toast.className = `toast toast-${tipo}`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("toast-visivel"), 10);
    setTimeout(() => { toast.classList.remove("toast-visivel"); setTimeout(() => toast.remove(), 400); }, 3000);
}

function ativarAdmin() {
    let senha = prompt("🔐 Senha de admin:");
    if (senha === "1234") {
        adminLogado = true;
        mostrarToast("Modo admin ativado!", "ok");
        carregarConteudo("admin");
    } else {
        mostrarToast("Senha incorreta!", "erro");
    }
}

function salvarDados(chave, dados) { localStorage.setItem(chave, JSON.stringify(dados)); }
function carregarDados(chave) { return JSON.parse(localStorage.getItem(chave)) || []; }

function abrirImagem(imagem) {
    let modal = document.getElementById("modalImagem");
    document.getElementById("imagemExpandida").src = imagem.src;
    modal.classList.add("ativo");
}

function fecharImagem(event) {
    if (event.target.id === "modalImagem") document.getElementById("modalImagem").classList.remove("ativo");
}
