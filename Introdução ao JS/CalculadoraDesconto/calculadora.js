function calcularDesconto (){
    //Entrada de Dados
    let valorOriginal = document.getElementById("valor").value;
    let desconto = document.getElementById("desconto").value;

    //Processamento
    let  valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto;

    //Saida
    document.getElementById("resultado").textContent = "Valor final: " + valorFinal;

}