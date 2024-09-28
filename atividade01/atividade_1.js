function verificarAprovacao(nota, faltas) {
    // Verifica se o aluno foi aprovado
    if (nota >= 7.0 && faltas <= 20) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Função para coletar os dados do aluno e verificar a aprovação
function checarAluno() {
    const nota = parseFloat(prompt("Digite a nota do aluno: "));
    const faltas = parseInt(prompt("Digite o número de faltas do aluno: "), 10);

    const resultado = verificarAprovacao(nota, faltas);
    alert(resultado);
}

// Chama a função para checar o aluno
checarAluno();
