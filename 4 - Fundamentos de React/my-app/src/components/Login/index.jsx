import { useContext } from "react";
import { useInput } from "../../hooks/useInput";
import { UserContext } from "../../contexts/UserContext";
import { Form, Input, Botao } from "./styles"


function Login() {
    const nomeDoUsuario = useInput();
    const {setUsuario} = useContext(UserContext);

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