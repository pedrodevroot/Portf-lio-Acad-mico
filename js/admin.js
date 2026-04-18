var adminLogado = false;

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
