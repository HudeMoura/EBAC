// tests/NovaTarefa.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NovaTarefa from '../components/NovaTarefa';
import { Tarefa } from '../lib/tarefas';

describe('<NovaTarefa />', () => {
  const initial: Tarefa[] = [
    { id: '1', titulo: 'Existente', criadaEm: new Date().toISOString() },
  ];

  it('renderiza elementos iniciais corretamente', () => {
    render(<NovaTarefa initialTasks={initial} />);
    expect(screen.getByRole('heading', { name: /Adicionar Tarefa/i })).toBeInTheDocument();
    expect(screen.getByLabelText('input-titulo')).toBeInTheDocument();
    expect(screen.getByLabelText('botao-adicionar')).toBeDisabled();
    expect(screen.getByLabelText('contador-tarefas')).toHaveTextContent('Quantidade de tarefas: 1');
    expect(screen.getByText('Existente')).toBeInTheDocument();
  });

  it('habilita botão quando há texto e adiciona ao submeter', async () => {
    render(<NovaTarefa initialTasks={[]} />);
    const input = screen.getByLabelText('input-titulo') as HTMLInputElement;
    const botao = screen.getByLabelText('botao-adicionar') as HTMLButtonElement;
    const user = userEvent.setup();

    await user.type(input, 'Nova Tarefa');
    expect(botao).toBeEnabled();

    await user.click(botao);

    // aguarda o item aparecer na lista
    const novoItem = await screen.findByText('Nova Tarefa');
    expect(novoItem).toBeInTheDocument();

    // input deve estar limpo
    expect(input.value).toBe('');
    // contador atualizado (pode usar findBy if async)
    expect(screen.getByLabelText('contador-tarefas')).toHaveTextContent('Quantidade de tarefas: 1');
  });

  it('não adiciona tarefas vazias (trim)', async () => {
    render(<NovaTarefa initialTasks={[]} />);
    const input = screen.getByLabelText('input-titulo') as HTMLInputElement;
    const botao = screen.getByLabelText('botao-adicionar') as HTMLButtonElement;
    const user = userEvent.setup();

    await user.type(input, '   ');
    // botão continua desabilitado
    expect(botao).toBeDisabled();

    // tentar submeter via Enter (garantir que nada muda)
    await user.keyboard('{Enter}');
    // não deve haver itens na lista
    expect(screen.queryAllByTestId('tarefa-item')).toHaveLength(0);
  });
});
