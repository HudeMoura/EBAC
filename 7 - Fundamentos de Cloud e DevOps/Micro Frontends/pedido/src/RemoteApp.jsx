import React, { useEffect, useState } from 'react';

export default function RemoteApp() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    function onAdd(event) {
      const prato = event.detail;
      setItens((prev) => [...prev, prato]);
    }

    window.addEventListener('pedido:add', onAdd);
    return () => window.removeEventListener('pedido:add', onAdd);
  }, []);

  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8 }}>
      <h2>🧾 Micro Pedido</h2>

      {itens.length === 0 ? (
        <p>Nenhum item no pedido ainda.</p>
      ) : (
        <ul>
          {itens.map((item, idx) => (
            <li key={`${item.id}-${idx}`}>{item.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
