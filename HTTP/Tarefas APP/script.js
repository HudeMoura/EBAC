//Seleciona a nossa ul com a lista de tarefas no HTML
const tarefas = document.getElementById('lstaTarefas');

//Faz uma requisição GET para a API externa para buscar todas as tarefas
fetch('https://crudcrud.com/api/080c40759c9f4fe6853c258c0b96f7b3/tarefas')
.then(resposta => resposta.json()) // Converte o corpo da resposta em JSON
.then((listaDeTarefas) => {
    // Intera sobre cada tarefa do array
    listaDeTarefas.forEach(tarefa => {
        //Cria um novo elemento da lista (<li>) para cada tarefa
        const item = document.createElement('li');
        //Define o conteúdo HTML do item, incluindo descrição e botão
        item.innerHTML = `${tarefa.descricao} <button>X</button>`;
        //Adiciona o novo item à lista de tarefas no HTML
        tarefas.appendChild(item);
        
    });
})

// Adiciona um ouvinte de evento de click no botão "Adicionar"
document.getElementById('add').addEventListener('click', () => {
    //Pega a descrição que o usuário adicionou no input com ID tarefa
    const descricao = document.getElementById('tarefa').value;
    //Faz uma requisição POST para a API externa para criar a tarefa
    fetch('https://crudcrud.com/api/080c40759c9f4fe6853c258c0b96f7b3/tarefas', {
        //Definido como POST, mas podemos usar GET, POSRT, PUT e DELETE
        method: 'POST',
        //Definimos o cabeçalhos da requisição, com o tipo do conteúdo JSON
        headers: {
            'Content-Type': 'application/json'
        },
        //Convertemos um objeto JS para uma string JSON e passamos no corpo
        body: JSON.stringify({descricao: descricao})
    })
    .then(resposta => resposta.json())
    .then((tarefa) => {
        //Cria um novo elemento da lista (<li>) para cada tarefa
        const item = document.createElement('li');
        //Define o conteúdo HTML do item, incluindo descrição e botão
        item.innerHTML = `${tarefa.descricao} <button>X</button>`;
        //Adiciona o novo item à lista de tarefas no HTML
        tarefas.appendChild(item);
    })
})