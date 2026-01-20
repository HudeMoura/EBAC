import dynamic from 'next/dynamic';

const Cardapio = dynamic(() => import('cardapio/Cardapio'), {
  ssr: false,
});

const Pedido = dynamic(() => import('pedido/Pedido'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>Container App</h1>

      <Cardapio />
      <hr />
      <Pedido />
    </div>
  );
}
