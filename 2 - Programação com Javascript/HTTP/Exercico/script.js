const usuarios = document.getElementById('listaUsuarios');

fetch('https://crudcrud.com/api/080c40759c9f4fe6853c258c0b96f7b3/usuarios')
.then(resposta => resposta.json())
.then((listaDeUsuarios) => {
    listaDeUsuarios.forEach(usuario => {
        const item = document.createElement('li');
        item.innerHTML = `${usuario.nome} - ${usuario.email} <button onclick="removeUsuario('${usuario._id}', this)">X</button>`
        usuarios.appendChild(item);
    });
})

document.getElementById('add').addEventListener('click', () => {
    event.preventDefault();

    const nome = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;

    const descricao = {
        nome: nome,
        email: email
    }

    fetch('https://crudcrud.com/api/080c40759c9f4fe6853c258c0b96f7b3/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(descricao)
    })
    .then(resposta => resposta.json())
    .then((usuario) => {
        const item = document.createElement('li');
        item.innerHTML = `${usuario.nome} - ${usuario.email} <button onclick="removeUsuario('${usuario._id}', this)">X</button>`
        usuarios.appendChild(item);
    })
})

function removeUsuario(id, botao) {
    fetch(`https://crudcrud.com/api/080c40759c9f4fe6853c258c0b96f7b3/usuarios/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        botao.parentElement.remove();
    });
}
