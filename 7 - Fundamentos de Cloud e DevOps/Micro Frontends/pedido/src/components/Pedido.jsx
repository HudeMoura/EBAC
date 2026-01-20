import { useEffect, useState } from 'react';

export default function Pedido() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function handleAdd(event) {
      setItems(prev => [...prev, event.detail]);
    }

    window.addEventListener('add-to-cart', handleAdd);

    return () => {
      window.removeEventListener('add-to-cart', handleAdd);
    };
  }, []);

  return (
    <div>
      <h2>Pedido</h2>

      {items.length === 0 && <p>Nenhum item selecionado</p>}

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
}
