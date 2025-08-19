document.getElementById('cep').addEventListener('blur', (evento) => {
    const elemento = evento.target;
    const cepDigitado = elemento.value;


    if(!(cepDigitado.length === 8))
        alert('Gentileza informar um CEP válido.')

    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
    .then(resposta => resposta.json())
    .then(data => {
        if(!data.erro){
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

const cadastroFormulario = document.getElementById('formulario');

cadastroFormulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const cepInformado = document.getElementById('cep').value;
    const logradouroInformado = document.getElementById('logradouro').value;
    const bairroInformado = document.getElementById('bairro').value;
    const cidadeInformado = document.getElementById('cidade').value;
    const estadoInformado = document.getElementById('estado').value;
    const numeroInformado = document.getElementById('numero').value;

    const dadosEndereco = {
        cepInformado, 
        logradouroInformado, 
        bairroInformado, 
        cidadeInformado, 
        estadoInformado, 
        numeroInformado
    }

    localStorage.setItem('residencia', JSON.stringify(dadosEndereco));
})

window.addEventListener('DOMContentLoaded', () => {
  const dadosSalvos = localStorage.getItem('residencia');

  if (dadosSalvos) {
    const residencia = JSON.parse(dadosSalvos);

    document.getElementById('cep').value = residencia.cepInformado || '';
    document.getElementById('logradouro').value = residencia.logradouroInformado || '';
    document.getElementById('bairro').value = residencia.bairroInformado || '';
    document.getElementById('cidade').value = residencia.cidadeInformado || '';
    document.getElementById('estado').value = residencia.estadoInformado || '';
    document.getElementById('numero').value = residencia.numeroInformado || '';
  }
});