import { useState, memo } from "react";
import styled from 'styled-components';

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid #eee;
`;

const Botao = styled.button`
    padding: 10px 16px;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    

`;

const BotaoAlerta = styled(Botao)`
    background-color: #f44336;

    &:hover {
        background-color: #d32f2f;
    }
`;

const TextoItem = styled.span`
    text-decoration:  ${({$concluida}) => ($concluida ? "line-through" : "none")};
    color: ${({$concluida}) => ($concluida ? "#999" : "#000")};
`;


function Tarefa({texto}) {

    const [concluida, setConcluida] = useState(false);

    const alternarConcluida = () => {
        setConcluida(!concluida);
    }

    return(
        <Item>
            <input type="checkbox" onChange={alternarConcluida}/> 
            <TextoItem $concluida={concluida}>{texto}</TextoItem>
            <BotaoAlerta>Remover</BotaoAlerta>
        </Item>
    )
}

export default Tarefa;