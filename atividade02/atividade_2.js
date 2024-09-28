const elementHtml = document.getElementById("elemento")

let nomeEscrita = "usuario123"
let senhaEscrita = "456"

function verificarAcesso(nome, senha) {
    const nomeValido = "usuario123"; 
    const senhaCorreta = "senha456";  

    const nomeEhValido = (nome === nomeValido);
    const senhaEhCorreta = (senha === senhaCorreta);

    if (nomeEhValido && senhaEhCorreta) {
        return "Acesso Permitido";
    } else {
        return "Acesso Negado";
    }
}

elementHtml.innerHTML = verificarAcesso(nomeEscrita, senhaEscrita)