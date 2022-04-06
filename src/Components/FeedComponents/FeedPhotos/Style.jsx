import styled from "styled-components";
import Views from '../../../Assets/visualizacao.svg'

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
    justify-items: center;

    @media (max-width: 40rem) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Li = styled.li`
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;

    &:hover span {
        opacity: 1;
    }

    div {
        grid-area: 1/1;
    }
    span {
        grid-area: 1/1;
        background-color: rgba(0, 0, 0, 0.3);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
        opacity: 0;
        transition: 0.4s;

        &::before{
            content: "";
            width: 16px;
            height: 10px;
            display: inline-block;
            margin-right: 0.5rem;
            background: url(${Views}) no-repeat;
        }
    }

    &:nth-child(2) {
        grid-column: 2 / 4;
        grid-row: span 2;
    }
    @media (max-width: 40rem) {
        &:nth-child(2) {
            grid-column: initial;
            grid-row: initial;
        }
    }
`;
