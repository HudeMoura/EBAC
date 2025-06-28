class Parquimetro {
    constructor() {
    this.valorInput = document.getElementById("valor");
    this.tempoInput = document.getElementById("tempo");
    this.resultadoDiv = document.getElementById("resultado");
    }

    obterPreco(tempo) {
    if (tempo <= 30) return 1.00;
    if (tempo <= 60) return 1.75;
    if (tempo <= 120) return 3.00;
    return null;
    }

    calcular() {
    const valorInserido = parseFloat(this.valorInput.value);
    const tempoDesejado = parseInt(this.tempoInput.value);

    if (isNaN(valorInserido) || isNaN(tempoDesejado)) {
        this.exibirResultado("Preencha corretamente os campos de valor e tempo.");
        return;
    }

    if (tempoDesejado > 120) {
        this.exibirResultado("Tempo máximo permitido é de 120 minutos.");
        return;
    }

    const precoCobrado = this.obterPreco(tempoDesejado);

    if (valorInserido < precoCobrado) {
        this.exibirResultado(`Valor insuficiente. Para ${tempoDesejado} minutos, é necessário R$${precoCobrado.toFixed(2)}.`);
        return;
    }

    const troco = (valorInserido - precoCobrado).toFixed(2);

    this.exibirResultado(`
        <strong>Tempo solicitado:</strong> ${tempoDesejado} minutos<br>
        <strong>Valor cobrado:</strong> R$${precoCobrado.toFixed(2)}<br>
        <strong>Troco:</strong> R$${troco}
    `);
    }

    limpar() {
    this.valorInput.value = "";
    this.tempoInput.value = "";
    this.resultadoDiv.innerHTML = "";
    }

    exibirResultado(mensagem) {
    this.resultadoDiv.innerHTML = mensagem;
    }
}

const parquimetro = new Parquimetro();