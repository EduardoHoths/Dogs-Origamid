import styled from "styled-components";

export const ButtonStyle = styled.button`
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background-color: #fb1;
    color: #764701;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    transition: 0.4s;
    min-width: 8rem;

    &:hover{
        outline: none;
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }
    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }
`;
