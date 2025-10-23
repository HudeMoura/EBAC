// tests/useContadorDeTarefas.test.tsx
import { renderHook } from '@testing-library/react-hooks';
import useContadorDeTarefas from '../hooks/useContadorDeTarefas';
import { Tarefa } from '../lib/tarefas';

describe('useContadorDeTarefas', () => {
  it('retorna a quantidade correta a partir do array', () => {
    const tasks: Tarefa[] = [
      { id: 'a', titulo: 't1', criadaEm: new Date().toISOString() },
      { id: 'b', titulo: 't2', criadaEm: new Date().toISOString() },
    ];
    const { result } = renderHook(() => useContadorDeTarefas(tasks));
    expect(result.current).toBe(2);
  });

  it('retorna 0 para arrays vazios', () => {
    const { result } = renderHook(() => useContadorDeTarefas([]));
    expect(result.current).toBe(0);
  });

  it('reage quando o array muda (se usado com novo array)', () => {
    // renderHook com props para testar mudanças
    const initial: Tarefa[] = [{ id: '1', titulo: 'x', criadaEm: new Date().toISOString() }];
    const { result, rerender } = renderHook(
      ({ tarefas }) => useContadorDeTarefas(tarefas),
      { initialProps: { tarefas: initial } }
    );

    expect(result.current).toBe(1);

    const novo = [...initial, { id: '2', titulo: 'y', criadaEm: new Date().toISOString() }];
    rerender({ tarefas: novo });
    expect(result.current).toBe(2);
  });
});
