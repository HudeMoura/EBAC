// app/page.tsx
import React from 'react';
import NovaTarefa from '../components/NovaTarefa';
import { fetchTarefasSimuladas } from '../lib/tarefas';

export default async function Page() {
  const tarefas = await fetchTarefasSimuladas();

  return (
    <main>
      <header>
        <h1>Minhas Tarefas</h1>
        <p>Lista carregada do servidor (simulada)</p>
      </header>

      {/* Passa a lista inicial para o Client Component */}
      <NovaTarefa initialTasks={tarefas} />
    </main>
  );
}
