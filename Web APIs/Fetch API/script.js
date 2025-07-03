
//1. Ouvir o evento qde quando o usuário sair do campo de CEP

document.getElementById('cep').addEventListener('blur', (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    //2. Validar CEP
    if(!(cepInformado.length === 8)) // Se o CEP nao tiver 8 digitos ele já retorna
        return;

    //3. Fazer a busca no ViaCEP
    //3.1 Promessa de que o Fetch vai buscar esse recurso
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`) // Colocar em crase para deixar ele dinamico, e então informar o cep que foi carregado
        .then(response => response.json()) // Tentativa para converter em JSON
        .then(data => { 
            //3.2 Processamento da página
            if(!data.erro){ // Se nao tiver erro no data
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.cidade;
                document.getElementById('estado').value = data.estado;
            }else{
                alert('CEP não encontrado.')
            }
        })
        .catch(error => console.error('Erro ao buscar o CEP: ', error));
})
