import React from "react";
import { Link } from "react-router-dom";
import { Section } from "./Style";
import Input from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import Error from '../../Helper/Error'
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { USER_POST } from "../../../api";
import {UserContext} from "../../../UserContext";
import Head from "../../Helper/Head";

const LoginCreate = () => {
    const username = useForm();
    const email = useForm("email");
    const password = useForm("password");
    const {userLogin} = React.useContext(UserContext)
    const {loading, error, request} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        const {response} = await request(url, options);
        if(response.ok) userLogin(username.value, password.value)
    }

    return (
        <Section className="animeLeft">
            <Head title='Crie a sua conta'/>
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />
                <Input label="Email" type="email" name="email" {...email} />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                <Error error={error} />
                {loading ? <Button disabled>Cadastrando...</Button> :<Button>Cadastrar</Button>}
                
            </form>
        </Section>
    );
};

export default LoginCreate
