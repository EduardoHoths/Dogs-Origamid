import styled, {keyframes} from 'styled-components';

const bark = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: ${props => props.single ? "1rem 0" : "1rem"};

    textarea{
        display: block;
        width: 100%;
        font-size: 1rem;
        font-family: var(--type-first);
        resize: none;
        border: 1px solid #eee;
        padding: .5rem;
        border-radius: 0.2rem;
        background-color: #eee;
        transition: 0.2s;

        &:focus, &:hover{
            outline: none;
            border-color: #fb1;
            background-color: white;
            box-shadow: 0 0 0 3px #fea;

        }
    }
    button{
        cursor: pointer;
        border: none;
        color: #333;
        background-color: transparent;
        font-size: 1rem;
        padding: 0 1rem;
        overflow: hidden;

        &:hover svg path{
            fill: #fea;
            stroke: #fb1;
        }
        &:hover svg g{
            animation: ${bark} 0.9s infinite;
        }
    }
`

