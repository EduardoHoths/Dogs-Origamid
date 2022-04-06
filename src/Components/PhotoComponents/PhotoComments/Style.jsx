import styled from "styled-components";

export const Comments = styled.ul`
    padding: ${props => props.single ? "0" : "0 2rem"};
    overflow-y: auto;
    word-break: break-word;

    li{
        margin-bottom: .5rem;
        line-height: 1.2;
    }
`