import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Botao = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: #4caf50;
    color: white;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;