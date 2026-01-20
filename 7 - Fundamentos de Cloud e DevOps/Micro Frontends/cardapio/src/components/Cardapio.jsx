export default function Cardapio() {
  const pratos = [
    { id: 1, nome: 'Hambúrguer Artesanal' },
    { id: 2, nome: 'Pizza Margherita' },
    { id: 3, nome: 'Lasanha' },
    { id: 4, nome: 'Salada Caesar' },
    { id: 5, nome: 'Strogonoff' },
    { id: 6, nome: 'Batata Frita' },
  ];

  function adicionarAoPedido(prato) {
    window.dispatchEvent(
      new CustomEvent('add-to-cart', { detail: prato })
    );
  }

  return (
    <div>
      <h2>Cardápio</h2>

      <ul>
        {pratos.map((prato) => (
          <li key={prato.id}>
            {prato.nome}
            <button onClick={() => adicionarAoPedido(prato)}>
              Adicionar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
