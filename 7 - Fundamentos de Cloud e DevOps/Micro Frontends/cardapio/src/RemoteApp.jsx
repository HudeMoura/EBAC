import React from 'react';

const PRATOS = [
  { id: 1, nome: 'Hambúrguer', descricao: 'Pão, carne, queijo e molho' },
  { id: 2, nome: 'Pizza', descricao: 'Mussarela, tomate e manjericão' },
  { id: 3, nome: 'Salada', descricao: 'Folhas, legumes e molho da casa' },
];

export default function RemoteApp() {
  function adicionarAoPedido(prato) {
    window.dispatchEvent(new CustomEvent('pedido:add', { detail: prato }));
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8 }}>
      <h2>🍽️ Micro Cardápio</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {PRATOS.map((prato) => (
          <li key={prato.id} style={{ padding: 12, borderBottom: '1px solid #eee' }}>
            <strong>{prato.nome}</strong>
            <p style={{ margin: '6px 0' }}>{prato.descricao}</p>
            <button onClick={() => adicionarAoPedido(prato)}>
              Adicionar ao pedido
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

