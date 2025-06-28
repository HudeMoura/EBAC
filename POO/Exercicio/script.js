// Definir classe Parquimetro

class Parquimetro {
  constructor(valor, tempo){
    this.valor = valor;
    this.tempo = tempo;
  }
}

function calcular() {
  let valorInserido = document.getElementById('valor').value;
  let tempoInserido = document.getElementById('tempo').value;

  
  let tabela = ""

  if (tempoInserido > 120) {
    tabela = "O tempo de permanencia máxima é de 120 minutos."
  } else if (tempoInserido <= 30 && valorInserido == 1.00) {
    tabela = "Pagamento realizado."
  } else if (tempoInserido <= 60 && valorInserido == 1.75) {
    tabela = "Pagamento realizado."
  } else if (tempoInserido <= 120 && valorInserido == 3.00) {
    tabela = "Pagamento realizado."
  } else if (valorInserido = 0) {
    tabela = "Valor insuficiente!"
  }

  document.getElementById('resultado').textContent = tabela;
}

function limpar() {
  this.valor.value = "";
  this.tempo.value = "";
}

const parquimetroNovo = new Parquimetro();