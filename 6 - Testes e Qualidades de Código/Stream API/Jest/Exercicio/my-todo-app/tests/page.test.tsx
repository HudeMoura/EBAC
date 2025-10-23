// tests/page.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';
import { fetchTarefasSimuladas } from '../lib/tarefas';

describe('app/page', () => {
  it('renderiza a página com as tarefas carregadas do servidor', async () => {
    // Page é async Server Component — chamamos e renderizamos o JSX retornado.
    const jsx = await Page();
    render(<>{jsx}</>); // garante um ReactElement válido para render()

    const tarefas = await fetchTarefasSimuladas();

    // Verifica título e as tarefas previstas
    expect(screen.getByText('Minhas Tarefas')).toBeInTheDocument();
    for (const t of tarefas) {
      expect(screen.getByText(t.titulo)).toBeInTheDocument();
    }

    // Também podemos verificar se o contador inicial foi passado corretamente
    const contador = screen.getByLabelText('contador-tarefas');
    expect(contador).toHaveTextContent(String(tarefas.length));
  });
});
