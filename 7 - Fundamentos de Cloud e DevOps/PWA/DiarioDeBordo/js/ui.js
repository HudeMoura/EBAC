const lista = document.getElementById('lista-atividades');

export function renderizarEntradas(entradas, onRemove) {
  lista.innerHTML = '';

  entradas.forEach((entrada, index) => {
    const li = document.createElement('li');
    li.className = 'atividade';

    li.innerHTML = `
      <div>
        <strong>${entrada.titulo}</strong>
        <p>${entrada.descricao}</p>
        <small>${new Date(entrada.data).toLocaleDateString()}</small>
      </div>
      <button>Excluir</button>
    `;

    li.querySelector('button')
      .addEventListener('click', () => onRemove(index));

    lista.appendChild(li);
  });
}
