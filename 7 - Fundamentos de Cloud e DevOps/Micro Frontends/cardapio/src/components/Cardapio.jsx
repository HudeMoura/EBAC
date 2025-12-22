export default function Cardapio() {

  const produtos = ["Hamburguer", "Cachorro Quente", "Coxinha"];
  return(
    <>
      <h2>Cardápio</h2>
      <ul>
        {
          produtos.map((p) => (
            <li key={p}>{p}
            <button onClick={() => {
              window.dispatchEvent(new CustomEvent("adicionarPedido", {detail: p}))
            }}>Adicionar</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}