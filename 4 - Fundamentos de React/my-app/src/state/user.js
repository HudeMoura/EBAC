import { atom } from 'recoil';

const userState = atom({
    key: "userState",
    deafult: {nome: null, estaLogado: false}
});

export default userState;