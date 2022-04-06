import styled from "styled-components";

import Usuario from "../../Assets/usuario.svg";

export const HeaderStyle = styled.header`
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: #fff;
    top: 0;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;

    .headerLogo {
        padding: 0.5rem 0;
    }
    .headerLogin {
        color: #333;
        display: flex;
        align-items: center;

        &:after {
            content: "";
            display: inline-block;
            width: 14px;
            height: 17px;
            background: url(${Usuario}) no-repeat center center;
            margin-left: 0.5rem;
            position: relative;
            top: -2px;
        }
    }
`;
