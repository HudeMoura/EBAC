/* 
    Elaborar um programa para um Cinema, onde o Usuário possa digitar o titulo e a duração de um filme em minuto.
    Ebixa o título do filme e converta a duração para horas e minutos.

    1. Obter o nome do filme
    2. Obter a duração em minuto
    3. Converter a duração de minutos em horas.
     3.1 Fazer a divisão da duração em minutos por 60 para pegar a quantidade em horas
     3.2 arredondar a quantidade de horas para pegar só as horas cheias
     3.3 Pegar o resultado da duração em minutos e remover as horas cheias (horas * 60)
    4. Exibir o nomne do filme
    5. Exibir a duração em horas e minutos
*/
function algoritimo () {
    const titulo = document.getElementById("titulo").value;
    const duracao  = document.getElementById("duracao").value;

    const horas = Math.floor(duracao / 60);
    const minutos = duracao - horas * 60;

    document.getElementById("tituloSaida").textContent = titulo.toUpperCase();
    document.getElementById("duracaoSaida").textContent = horas + "hora(s) e " + minutos + "minuto(s)!";
}

