import styled, { keyframes } from "styled-components";
import ViewsIcon from "../../../Assets/visualizacao-black.svg";

const scaleUp = keyframes`
    to{
        opacity: initial;
        transform: initial;
    }
`;

export const PhotoContainer = styled.div`
    margin: auto;
    height: ${props => props.single ? "auto" : "36rem"};
    border: 0.2rem;
    background-color: white;
    display: grid;
    grid-template-columns: ${props => props.single ? "1fr" : "36rem 20rem"};
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.8);
    animation: ${scaleUp} 0.3s forwards;

    @media (max-width: 64rem) {
        height: auto;
        max-height: calc(100vh - 2rem);
        overflow-y: auto;
        grid-template-columns: minmax(20rem, 40rem);
    }

    
`;

export const PhotoImg = styled.div`
    grid-row: ${props => props.single ? "1" : "1 / 4"};
    border-radius: ${props => props.single ? "0.4rem" : "0"};
    overflow: hidden;

    @media (max-width: 64rem) {
        grid-row: 1;
    }
`;

export const PhotoDetails = styled.div`
    padding: ${props => props.single ? "1rem 0 0 0" : "2rem 2rem 0 2rem"};
`;

export const Views = styled.span`
    &:before {
        content: " ";
        width: 16px;
        height: 16px;
        margin-right: 0.5rem;
        background: url(${ViewsIcon}) no-repeat center;
        display: inline-block;
    }
`

export const Attributes = styled.ul`
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    li{
        margin-right: 2rem;

        &:before{
            display: inline-block;
            content: " ";
            height: 20px;
            margin-right: .5rem;
            margin-top: 5px;
            position: relative;
            top: 3px;
            width: 2px;
            background-color: #333;
        }
    }
`;

export const Author = styled.p`
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a:hover {
        text-decoration: underline;
    }
`;
