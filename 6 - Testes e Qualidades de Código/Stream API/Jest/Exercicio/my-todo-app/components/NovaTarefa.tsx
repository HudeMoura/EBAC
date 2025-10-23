// components/NovaTarefa.tsx
'use client';

import React, { useState, FormEvent } from 'react';
import useContadorDeTarefas from '../hooks/useContadorDeTarefas';
import { Tarefa } from '../lib/tarefas';

type Props = {
  initialTasks?: Tarefa[];
};

export default function NovaTarefa({ initialTasks = [] }: Props) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(initialTasks);
  const [titulo, setTitulo] = useState('');
  const contador = useContadorDeTarefas(tarefas);

  function adicionarTarefa(e?: FormEvent) {
    e?.preventDefault();
    const trimmed = titulo.trim();
    if (!trimmed) return;
    const nova: Tarefa = {
      id: String(Date.now()),
      titulo: trimmed,
      criadaEm: new Date().toISOString(),
    };
    setTarefas(prev => [nova, ...prev]);
    setTitulo('');
  }

  return (
    <section aria-label="nova-tarefa-section">
      <h2>Adicionar Tarefa</h2>
      <form onSubmit={adicionarTarefa}>
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          aria-label="input-titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Descreva a tarefa..."
        />
        <button
          type="submit"
          aria-label="botao-adicionar"
          disabled={titulo.trim().length === 0}
        >
          Adicionar
        </button>
      </form>

      <div style={{ marginTop: 16 }}>
        <strong aria-label="contador-tarefas">Quantidade de tarefas: {contador}</strong>
      </div>

      <ul aria-label="lista-tarefas">
        {tarefas.map(t => (
          <li key={t.id} data-testid="tarefa-item">
            {t.titulo}
          </li>
        ))}
      </ul>
    </section>
  );
}
