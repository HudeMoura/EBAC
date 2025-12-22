
import dynamic from "next/dynamic";

const Cardapio = dynamic(() => import("cardapio/Cardapio"), {ssr:false});
const Pedido = dynamic(() => import("pedido/Pedido"), {ssr:false});
export default function Home() {
  return (
    <>
    <h1>Micro Frontends - Container</h1>
    <Cardapio/>
    <Pedido/>
    </>
  )
}