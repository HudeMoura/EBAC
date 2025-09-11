import React from 'react';
import styled from 'styled-components';


// Container do card
const ContainerCard = styled.article`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.06);
    background: linear-gradient(180deg, #ffffff 0%, #fbfbfb 100%);
    min-height: 160px;
`;


// Área de informações (nome + preco)
const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;


const NomeProduto = styled.h2`
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
    color: #222;
`;


const Preco = styled.span`
    display: inline-block;
    font-weight: 700;
    font-size: 1rem;
    color: #444;
`;


// Botão com estilização dinâmica baseada em prop `adicionado`
const BotaoAdicionar = styled.button`
    margin-top: auto; /* empurra o botão pro final do card */
    padding: 10px 14px;
    border: none;
    border-radius: 8px;
    background-color: ${props => (props.adicionado ? '#198754' : '#6c757d')};
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease;


    &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
    }


    &:active {
    transform: translateY(0);
    }
`;


// Componente CardProduto
export default function CardProduto({ nome, preco, adicionado = false, onToggle }) {
    return (
        <ContainerCard>
            <Info>
                <NomeProduto>{nome}</NomeProduto>
                <Preco>{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Preco>
            </Info>


            <BotaoAdicionar adicionado={adicionado} onClick={onToggle} aria-pressed={adicionado}>
                {adicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
            </BotaoAdicionar>
        </ContainerCard>
    );
}