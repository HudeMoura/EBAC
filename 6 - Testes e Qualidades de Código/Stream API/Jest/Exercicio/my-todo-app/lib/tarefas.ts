// lib/tarefas.ts
export type Tarefa = {
  id: string;
  titulo: string;
  criadaEm: string;
};

export async function fetchTarefasSimuladas(): Promise<Tarefa[]> {
  // Simula uma "API" (poderia ser Promise.resolve)
  return Promise.resolve([
    { id: '1', titulo: 'Comprar leite', criadaEm: new Date().toISOString() },
    { id: '2', titulo: 'Estudar React', criadaEm: new Date().toISOString() },
  ]);
}
