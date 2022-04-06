import styled from "styled-components";

import ImageLogin from "../../../Assets/login.jpg";

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;

    &::before {
        content: "";
        display: block;
        background: url(${ImageLogin}) no-repeat center center;
        background-size: cover;
    }

    @media (max-width: 40rem) {
        grid-template-columns: 1fr;

        &::before {
            display: none;
        }
    }
`;

export const Div = styled.div`
    max-width: 30rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;    
`;

