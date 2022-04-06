import styled from 'styled-components';

export const Button = styled.button`
    background-color: #ddd;
    padding: 0.3rem .6rem;
    line-height: 1;
    border: 1px solid transparent;
    font-size: .875rem;
    font-family: var(--tyoe-first);
    border-radius: 0.4rem;
    transition: .1s;
    cursor: pointer;

    &:hover{
        outline: none;
        background-color: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
    }
`