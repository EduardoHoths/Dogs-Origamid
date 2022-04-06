import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        margin: 0;
        padding-top: 4rem;
        color: #333;
        --type-first: Helvetica, Arial, sans-serif;
        --type-second: 'Spectral', georgia;
        font-family: var(--type-first);
    }
    
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: #333;
    }

    img{
        display: block;
        width: 100%;
    }
    button, input{
        display: block;
        font-size: 1rem;
        font-family: var(--type-first);
        color: #333;
    }
    .container{
        max-width: 50rem;
        padding: 0 1rem;
        margin: 0 auto;
    }
    .mainContainer{
        margin-top: 2rem;
    }
    .title{
        font-family: var(--type-second);
        line-height: 1;
        font-size: 3rem;
        margin: 1rem 0;
        position: relative;
        z-index: 1;

        &::after{
            content: "";
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            background-color: #Fb1;
            position: absolute;
            bottom: 5px;
            left: -5px;
            border-radius: 0.2rem;
            z-index: -1;
        }
    }
    .animeLeft{
        opacity: 0;
        transform: translateX(-20px);
        animation: animeLeft 0.5s forwards;
    }
    @keyframes animeLeft {
        to{
            opacity: 1;
            transform: initial;
        }
    }
`;
