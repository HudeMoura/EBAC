import React, { Suspense } from 'react';

const CardapioApp = React.lazy(() => import('cardapio/App'));
const PedidoApp = React.lazy(() => import('pedido/App'));

export default function MicrosClientOnly() {
  return (
    <div style={{ padding: 16 }}>
      <h1>🍔 Container App</h1>

      <Suspense fallback={<p>Carregando micros...</p>}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <CardapioApp />
          <PedidoApp />
        </div>
      </Suspense>
    </div>
  );
}
