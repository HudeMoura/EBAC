// Definir classe Parquimetro

class Parquimetro {
  constructor(valorPago) {
    this.valorPago = valorPago;
    this.tempo = 0;
    this.troco = 0;
    this.valorInsuficiente = false;
  }

  calcular() {

    if (this.valorPago >= 1 && this.valorPago < 1.75) {
      this.tempo = 30;
      this.troco = this.subtrai(this.valorPago, 1);
    } else if (this.valorPago >= 1.75 && this.valorPago < 3.00) {
      this.tempo = 60;
      this.troco = this.subtrai(this.valorPago, 1.75);
    } else if (this.valorPago >= 3) {
      this.tempo = 120;
      this.troco = this.subtrai(this.valorPago, 3);
    } else {
      this.valorInsuficiente = true;
    }

    if (this.valorInsuficiente) {
      document.getElementById('resultado').textContent = "Valor insuficiente";
    } else {
      document.getElementById('resultado').textContent = `O tempo de permanência foi ${this.tempo} minutos e o troco foi ${this.troco}`;
    }


  }

  subtrai(valorPago, valorTempo) {
    return valorPago - valorTempo;
  }


}








function calcular() {
  let valorInserido = document.getElementById('valor').value;
  const parquimetroNovo = new Parquimetro(valorInserido);
  parquimetroNovo.calcular();
}

function limpar() {
  document.getElementById('valor').value = '';
}