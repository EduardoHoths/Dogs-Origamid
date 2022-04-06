import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import LoginCreate from "../LoginCreate/LoginCreate";
import LoginPasswordLost from "../LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "../LoginPasswordReset/LoginPasswordReset";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import {Section, Div} from './Style'
import NotFound from "../../NotFound/NotFound";

const Login = () => {
    const { login } = React.useContext(UserContext);

    if (login) return <Navigate to="/conta" />;

    return (
        <Section>
            <Div>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="cadastro" element={<LoginCreate />} />
                    <Route path="perdeu" element={<LoginPasswordLost />} />
                    <Route path="resetar" element={<LoginPasswordReset />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Div>
        </Section>
    );
};

export default Login;
