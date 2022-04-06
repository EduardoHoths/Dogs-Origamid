import React from "react";
import { NavLink, useLocation} from "react-router-dom";
import { UserContext } from "../../../UserContext";
import { Nav, MobileButton } from "./Style";

import { ReactComponent as Feed } from "../../../Assets/feed.svg";
import { ReactComponent as Stats } from "../../../Assets/estatisticas.svg";
import { ReactComponent as AddPhoto } from "../../../Assets/adicionar.svg";
import { ReactComponent as Logout } from "../../../Assets/sair.svg";
import useMedia from "../../../Hooks/useMedia";

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const mobile = useMedia("(max-width: 40rem)");
    const [mobileMenu, setMobileMenu] = React.useState(false);
    
    const { pathname } = useLocation();
    
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && (
                <MobileButton
                    className={mobileMenu && "menuMobileActive"}
                    aria-label="Menu"
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></MobileButton>
            )}

            <Nav mobile={mobile} mobileMenu={mobileMenu}>
                <NavLink end to="/conta">
                    <Feed />
                    {mobile && "Minhas Fotos"}
                </NavLink>
                <NavLink to="/conta/stats">
                    <Stats />
                    {mobile && "Estatísticas"}
                </NavLink>
                <NavLink to="/conta/post">
                    <AddPhoto />
                    {mobile && "Adicionar Foto"}
                </NavLink>
                <button onClick={userLogout}>
                    <Logout />
                    {mobile && "Sair"}
                </button>
            </Nav>
        </>
    );
};

export default UserHeaderNav;
