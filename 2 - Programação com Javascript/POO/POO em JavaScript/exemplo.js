// Objeto Literal
const pessoa = { nome: "Carlos", idade: 20}

// Criar uma classe
class Veiculo {

    // Método Construtor
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano; 

        // Atributo privado para indicar se o veículo está ligado
        this._ligado = false;
    }

    // Metodos
    ligar() {
        this._ligado = true;
        console.log('O veículo foi ligado.')
    }
    desligar() {
        this._ligado = false;
        console.log('O veículo foi desligado.')
    }

    // Método getter para obter valor do atribudo privado
    get ligado() {
        return this._ligado;
    }
}

const veiculoNovo = new Veiculo("Honda", "Civic", 2025);

console.log(veiculoNovo);
veiculoNovo.ligar();
veiculoNovo.desligar();
console.log('O carro está ligado?', veiculoNovo.ligado);

// Herança
class Moto extends Veiculo {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano); // Para que seja ligado ao veiculo devemos utilizar o: super
    }
}

const motoNova = new Moto("Yamaha", "MT-07", 2025)
console.log(motoNova);
motoNova.ligar();

class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroPortas) {
        super(marca, modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    abrirPortas() {
        console.log("As portas do carro foram abertas.");
    }
}

const carro = new Carro("Honda", "Civic", 2025, 4);
const moto = new Moto("Yamaha", "MT-07", 2025);

carro.ligar();
carro.desligar();
carro.abrirPortas();

console.log("O carro está ligado?", carro.ligado);