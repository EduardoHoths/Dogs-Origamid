import React from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "./api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const userLogout = React.useCallback(
        async function () {
            setData(null);
            setError(null);
            setLoading(false);
            setLogin(false);
            localStorage.removeItem("token");
            navigate("login");
        },
        [navigate]
    );

    async function getUser(token) {
        const { url, options } = USER_GET(token);

        const response = await fetch(url, options);
        const json = await response.json();

        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);

            const { url, options } = TOKEN_POST({ username, password });
            const response = await fetch(url, options);
            
            if (!response.ok) throw new Error("Usuário ou senha inválidos");

            const { token } = await response.json();
            localStorage.setItem("token", token);

            await getUser(token);
            navigate("login/conta");
        } catch (err) {
            setError(err.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                setError(null);
                setLoading(true);

                const { url, options } = TOKEN_VALIDATE_POST(token);
                const response = await fetch(url, options);

                if (!response.ok) throw new Error("Token inválido");

                const json = await response.json();
                await getUser(token);
            } catch (err) {
                userLogout();
            } finally {
                setLoading(true);
            }
        } else {
            setLogin(false);
        }
    }, [userLogout]);

    return (
        <UserContext.Provider
            value={{ userLogin, data, userLogout, error, loading, login }}
        >
            {children}
        </UserContext.Provider>
    );
};
