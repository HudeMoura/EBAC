var numeroEncontrado = 0;
var tentativas = 3;

function recarregar() {
    numeroEncontrado = parseInt(Math.random() * 100);

    console.log(numeroEncontrado);
}

    
function verificarNumero() {
    const comparar = document.getElementById("numero").value;

    while( tentativas <= 0){
        alert('Você excedeu suas tentativas'); 
        tentativas--;
        return;                              
    }

    if (comparar > 100 || comparar < 0) 
        {
        alert('Digite um numero valido!');
        return;
    }

    if (comparar > numeroEncontrado) {
        tentativas--;
        document.getElementById("numeroGerado").textContent = 'O número parar ser encontrato é MENOR';
    } else if (comparar < numeroEncontrado) {
        tentativas--;
        document.getElementById("numeroGerado").textContent = 'O número parar ser encontrato é MAIOR';
    } else {
        document.getElementById("numeroGerado").textContent = 'Você acertou!';
    }

    document.getElementById("tentativasRestantes").textContent = 'Você tem ' + tentativas +  ' tentativas.';
}



recarregar();