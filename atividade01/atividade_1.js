const elemenHtml = document.getElementById("elemento")

let notaEscrita = 7

let faltaEscrita = 20

function verificarAprovacao(nota, faltas) {
    // Verifica se o aluno foi aprovado
    if (nota >= 7.0 && faltas <= 20) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

elemenHtml.innerHTML = verificarAprovacao(notaEscrita, faltaEscrita)
