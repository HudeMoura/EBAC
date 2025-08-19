import { Usuario } from './classes.js';
import { criarUsuarioObj, limparCampos } from './util.js';

const listaUsuarios = document.getElementById('listaUsuarios');
const btnAdd = document.getElementById('add');

document.addEventListener('DOMContentLoaded', carregarUsuarios);

btnAdd.addEventListener('click', event => {
  event.preventDefault();
  const nome = document.getElementById('usuario').value;
  const email = document.getElementById('email').value;

  const novoUsuario = criarUsuarioObj(nome, email);

  fetch('https://crudcrud.com/api/080c40759c9f4fe6853c258c0b96f7b3/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoUsuario)
  })
    .then(res => res.json())
    .then(data => {
      const usuario = Usuario.fromJson(data);
      listaUsuarios.appendChild(usuario.render());
      limparCampos(document.getElementById('usuario'), document.getElementById('email'));
    });
});

function carregarUsuarios() {
  fetch('https://crudcrud.com/api/080c40759c9f4fe6853c258c0b96f7b3/usuarios')
    .then(res => res.json())
    .then(lista => {
      const usuarios = lista.map(Usuario.fromJson);

      usuarios.forEach(usuario => listaUsuarios.appendChild(usuario.render()));

      const porDominio = usuarios.reduce((acc, u) => {
        const dominio = u.email.split('@')[1];
        acc[dominio] = (acc[dominio] || 0) + 1;
        return acc;
      }, {});

      console.log("Usuários por domínio:", porDominio);
    });
}