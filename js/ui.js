function mostrarToast(msg, tipo) {
    let toast = document.createElement("div");
    toast.className = `toast toast-${tipo}`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("toast-visivel"), 10);
    setTimeout(() => { toast.classList.remove("toast-visivel"); setTimeout(() => toast.remove(), 400); }, 3000);
}

function abrirImagem(imagem) {
    let modal = document.getElementById("modalImagem");
    document.getElementById("imagemExpandida").src = imagem.src;
    modal.classList.add("ativo");
}

function fecharImagem(event) {
    if (event.target.id === "modalImagem") document.getElementById("modalImagem").classList.remove("ativo");
}
