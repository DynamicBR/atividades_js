// Função que verifica se o acesso é permitido
function verificarAcesso(nome, senha) {
    const nomeValido = "usuario123"; // Nome válido de exemplo
    const senhaCorreta = "senha456";  // Senha correta de exemplo

    // Condições para acesso
    const nomeEhValido = (nome === nomeValido);
    const senhaEhCorreta = (senha === senhaCorreta);

    // Retorna se o acesso é permitido
    if (nomeEhValido && senhaEhCorreta) {
        return "Acesso Permitido";
    } else {
        return "Acesso Negado";
    }
}

// Função para coletar os dados do usuário e verificar o acesso
function checarAcesso() {
    const nome = prompt("Digite seu nome: ");
    const senha = prompt("Digite sua senha: ");

    const resultado = verificarAcesso(nome, senha);
    alert(resultado);
}

// Chama a função para checar o acesso
checarAcesso();
