let meses = ['Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'];
let mesAtual = 0; // Começa em Maio

function mostrarMeses() {
    // Esconde todos os meses
    for (let i = 0; i < meses.length; i++) {
        document.getElementById(meses[i]).style.display = 'none';
    }

    // Mostra apenas o mês atual
    document.getElementById(meses[mesAtual]).style.display = 'block';
}

function proximoMes() {
    if (mesAtual < meses.length - 1) {
        mesAtual++;
        mostrarMeses();
    }
}

function mesAnterior() {
    if (mesAtual > 0) {
        mesAtual--;
        mostrarMeses();
    }
}

// Chamar mostrarMeses() ao carregar a página para mostrar o primeiro mês
window.onload = mostrarMeses;