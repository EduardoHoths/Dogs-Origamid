import React from "react";
import Input from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import useForm from "../../../Hooks/useForm";
import { UserContext } from "../../../UserContext";
import { Link } from "react-router-dom";
import Error from "../../Helper/Error";
import { Form, Section, Register, Subtitle } from "./Style";
import Head from "../../Helper/Head";

const LoginForm = () => {
    const username = useForm("");
    const password = useForm();

    const { userLogin, error, loading } = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }
    return (
        <Section className="animeLeft">
            <Head title='Login'/>
            <h1 className="title">Login</h1>
            <Form action="" onSubmit={handleSubmit}>
                <Input
                    {...username}
                    name="username"
                    label="Usuário"
                    type="text"
                />
                <Input
                    {...password}
                    name="password"
                    label="Senha"
                    type="password"
                />
                {loading ? (
                    <Button disabled>Carregando...</Button>
                ) : (
                    <Button>Entrar</Button>
                )}
                <Error error={error} />
            </Form>
            <Link className="passwordLost" to="perdeu">
                Perdeu a Senha?
            </Link>

            <Register>
                <Subtitle>Cadastre-se</Subtitle>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link to="/login/cadastro">Cadastre-se</Link>
            </Register>

           
        </Section>
    );
};

export default LoginForm;
