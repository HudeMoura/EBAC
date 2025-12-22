import { useEffect, useState } from "react";

export default function Cardapio(){
  const [itens, setItens] = useState([]);

  useEffect(() => {
    window.addEventListener("adicionarPedido", (e) => 
    setItens((prev) => [...prev, e.detail]))
  });
  
  return(
    <>
      <h2>Pedido</h2>
      {itens.length === 0 ? (<p>Nenhum pedido adicionado.</p>) : (
        <ul>
          {itens.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      )}
    </>
  )
}