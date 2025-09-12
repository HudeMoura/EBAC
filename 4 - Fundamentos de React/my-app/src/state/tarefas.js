import { atom, selector } from 'recoil';

export const tarefasState = atom({
    key: "tarefasState",
    deaful: []
});

export const tarefasCountSelector = selector({
    key: "tarefasCount",
    get: ({get}) => {
        const tarefas = get(tarefasState)
        return tarefas.length;
    }
})