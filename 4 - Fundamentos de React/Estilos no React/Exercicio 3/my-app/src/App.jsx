import React, { useState } from 'react';
import CardProduto from './components/CardProduto';


export default function App() {
  const produtosIniciais = [
    { id: 1, nome: 'Fone Redragon', preco: 249.9 },
    { id: 2, nome: 'Teclado Mecânico Redragon', preco: 399.0 },
    { id: 3, nome: 'Mouse Wireless Redragon', preco: 129.5 },
];


const [carrinho, setCarrinho] = useState([]); // array de ids


function handleToggleCarrinho(produtoId) {
  setCarrinho(prev =>
    prev.includes(produtoId) ? prev.filter(id => id !== produtoId) : [...prev, produtoId]
  );
}


return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, Arial, sans-serif' }}>
      <header style={{ marginBottom: 24 }}>
        <h1>Loja Mundo Nerd - Produtos Eletrônicos </h1>
        <p>Produtos estáticos — clique em "Adicionar ao carrinho" para alternar.</p>
      </header>


      <main style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {produtosIniciais.map(p => (
          <CardProduto
            key={p.id}
            nome={p.nome}
            preco={p.preco}
            adicionado={carrinho.includes(p.id)}
            onToggle={() => handleToggleCarrinho(p.id)}
          />
        ))}
      </main>


      <footer style={{ marginTop: 32 }}>
        <strong>Itens no carrinho: {carrinho.length}</strong>
      </footer>
    </div>
  );
}