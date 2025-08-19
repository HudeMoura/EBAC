export class Usuario {
  constructor(nome, email, id = null) {
    this.nome = nome;
    this.email = email;
    this.id = id;
  }

  static fromJson(data) {
    return new Usuario(data.nome, data.email, data._id);
  }

  render() {
    const li = document.createElement('li');
    li.innerHTML = `${this.nome} = ${this.email} <button class="remover">X</button>`;
    li.querySelector('.remover').addEventListener('click', () => this.remove(li));
    return li;
  }

  remove(elemento) {
    if (!this.id) return;
    fetch(`https://crudcrud.com/api/080c40759c9f4fe6853c258c0b96f7b3/usuarios/${this.id}`, {
      method: 'DELETE'
    }).then(() => elemento.remove());
  }
}