import { useInput } from "../../hooks/useInput";
import { Form, Input, Botao } from "./styles"
import { useResetRecoilState } from "recoil";
import userState from "../../state/user";


function Login() {
    const nomeDoUsuario = useInput();

    const setUsuario = useResetRecoilState(userState);

    const handleLogin = (e) => {
        e.preventDefault();
        setUsuario({nome: nomeDoUsuario.valor, estaLogado: true})
    }
    return (
        <Form onSubmit={handleLogin}>
            <Input type="text" 
            placeholder="Digite seu nome"
            value={nomeDoUsuario.value}
            onChange={nomeDoUsuario.onChange}/>
            <Botao type="submit">Entrar</Botao>
        </Form>
    )
}

export default Login;