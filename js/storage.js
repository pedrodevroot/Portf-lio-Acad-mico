function salvarDados(chave, dados) { localStorage.setItem(chave, JSON.stringify(dados)); }
function carregarDados(chave) { return JSON.parse(localStorage.getItem(chave)) || []; }
