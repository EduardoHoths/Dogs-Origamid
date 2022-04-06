import React from "react";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import useFetch from "../../../Hooks/useFetch";
import useForm from "../../../Hooks/useForm";
import { PASSWORD_RESET } from "../../../api";
import Error from "../../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../../Helper/Head";

const LoginPasswordReset = () => {
    const [login, setLogin] = React.useState("");
    const [key, setKey] = React.useState("");
    const password = useForm();
    const { loading, error, request } = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const login = urlParams.get("login");
        const key = urlParams.get("key");
        setKey(key);
        setLogin(login);
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(password.value);
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value,
            });
            const { response } = await request(url, options);
            if (response.ok) navigate("/login");
        }
    }

    return (
        <section className="animeLeft">
          <Head title='Resete a senha'/>
            <h1 className="title">Resete a Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    {...password}
                    label="Nova Senha"
                    type="password"
                    name="password"
                />
                {loading ? (
                    <Button disabled>Resetando...</Button>
                ) : (
                    <Button>Resetar</Button>
                )}
            </form>
            <Error error={error} />
        </section>
    );
};

export default LoginPasswordReset;
