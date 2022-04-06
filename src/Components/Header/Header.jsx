import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyle, Nav } from "./Style";
import { ReactComponent as Dog } from "../../Assets/dogs.svg";
import { UserContext } from "../../UserContext";



const Header = () => {
    const { data, userLogout } = React.useContext(UserContext);

    return (
        <HeaderStyle>
            <Nav className="container">
                <Link aria-label="Dogs - Home" className="headerLogo" to="/">
                    <Dog />
                </Link>
                {data ? (
                    <Link className="headerLogin" to="/conta">
                        {data.username}
                    </Link>
                ) : (
                    <Link className="headerLogin" to="/login">
                        Login / Criar
                    </Link>
                )}
            </Nav>
        </HeaderStyle>
    );
};

export default Header;
