function calcularImc () {
    //Entrada de Dados
    let valorPeso = document.getElementById("peso").value;
    let valorAltura = document.getElementById("altura").value;

    //Processamento
    let valorImc = valorPeso / (valorAltura * valorAltura);

    //Saida
    document.getElementById("resultadoImc").textContent = "O seu IMC é: " + valorImc;

    let classificação = "";

    if (valorImc < 18.5) {
    classificação = "Abaixo do peso";
    } else if (valorImc >= 18.5 && valorImc < 24.9) {
        classificação = "Peso normal";
    } else if (valorImc >= 25 && valorImc < 29.9) {
        classificação = "Sobrepeso";
    } else if (valorImc >= 30 && valorImc < 34.9) {
        classificação = "Obesidade grau I";
    } else if (valorImc >= 35 && valorImc < 39.9) {
        classificação = "Obesidade grau II";
    } else {
        classificação = "Obesidade grau III";
    }

    document.getElementById("estadoFisico").textContent = "Você esta: " + classificação;
}

