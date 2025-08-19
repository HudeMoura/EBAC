// Definir classe ContaBancária

class ContaBancaria {
    // Propriedades
    #saldo // Novo metodo para atributo privado
    constructor(){
        this.#saldo = 0;
    }

    // Métodos
    depositar(valor){
        this.#saldo += valor;
    }

    sacar(valor){
        this.#saldo -= valor;
    }

    temSaldoParaSacar(valor){
        return valor <= this.#saldo;
    }

    get saldo (){
        return this.#saldo;
    }
}

class CaixaEletronico {
    constructor(){
        this.conta = this.conta;
    }

    // Métodos

    depositar(){
        // Pegar o valor do depósito
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        // Fazer o depósito na conta
        this.conta.depositar(valorDeposito);
        // Exibir saldo atualizado
        this.mostrarSaldo(this.conta.saldo);
    }

    sacar(){
        // Pegar valor do saque
        const valorSaque = parseFloat(document.getElementById("valorSaque").value);
        // Fazer o saque na conta
        if (this.conta.temSaldoParaSacar(valorSaque)){
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo);
        } else {
            // Mostrar saldo insuficiente
            this.mostrarSaldo("Insuficiente!")
        }
    }

    mostrarSaldo(saldo) {
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo}`;
        document.getElementById("valorDeposito").value = '';
        document.getElementById("valorSaque").value = '';
    }
}

// Criar instâncias
const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);