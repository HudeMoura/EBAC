const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0],
]
//Funções utilitários
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';

//Obter valores do formulário
const obterValorInformado = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada = () => obterElemento('categoria').value;

//Obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

//Atualizar valores da matriz
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) => {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R${valor}`
    })
}

function adiconarGasto() {
    const valorInformado = obterValorInformado();
    const categoraInformada = obterCategoriaInformada();

    if (valorNegativo(valorInformado)){
        alert("Valor nválido. O valor não pode ser negativo.");
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoraInformada);
    const total = obterCategoria(matrizGastos, "Total");

    atualizaValorCategoria(categoria, valorInformado);
    atualizaValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();
}