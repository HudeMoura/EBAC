// hooks/useContadorDeTarefas.tsx
'use client';

import { useMemo } from 'react';
import { Tarefa } from '../lib/tarefas';

export default function useContadorDeTarefas(tarefas: Tarefa[] | readonly Tarefa[]) {
  // Usa useMemo para ser um "hook" (e testável via renderHook)
  const count = useMemo(() => {
    return Array.isArray(tarefas) ? tarefas.length : 0;
  }, [tarefas]);

  return count;
}
