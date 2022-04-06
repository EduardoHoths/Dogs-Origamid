import styled from "styled-components";

export const Section = styled.section`
    .passwordLost {
        display: inline-block;
        color: #666;
        padding: 0.5rem 0;
        line-height: 1;

        &::after {
            content: "";
            height: 2px;
            width: 100%;
            background: currentColor;
            display: block;
        }
    }
`;

export const Form = styled.form`
    margin-bottom: 2rem;
`;

export const Subtitle = styled.h2`
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;

    &::after {
        content: "";
        display: block;
        height: 0.5rem;
        width: 3rem;
        background-color: #ddd;
        border-radius: 0.2rem;
    }
`;

export const Register = styled.div`
    margin-top: 4rem;

    p {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    a {
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

        &:hover,
        &:focus {
            outline: none;
            box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
        }
        &:disabled {
            opacity: 0.5;
            cursor: wait;
        }
    }
`;
