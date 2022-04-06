import React from "react";
import { Section, Preview } from "./Style";
import Input from "../../Forms/Input/Input";
import Button from "../../Forms/Button/Button";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { PHOTO_POST } from "../../../api";
import Error from "../../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../../Helper/Head";

const UserPhotoPost = () => {
    const name = useForm();
    const weight = useForm("number");
    const age = useForm("number");
    const [img, setImg] = React.useState({});
    const { data, error, loading, request } = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
      if(data) navigate("/conta");
    }, [data, navigate]);

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("nome", name.value);
        formData.append("peso", weight.value);
        formData.append("idade", age.value);
        formData.append("img", img.raw);

        const token = localStorage.getItem("token");
        const { url, options } = PHOTO_POST(formData, token);
        request(url, options);
    }

    function handleImgChange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    }

    return (
        <Section className="animeLeft">
            <Head title='Poste Sua Foto'/>
            <form onSubmit={handleSubmit}>
                <Input {...name} label="Nome" type="text" name="nome" />
                <Input {...weight} label="Peso" type="number" name="peso" />
                <Input {...age} label="Idade" type="number" name="idade" />
                <input
                    type="file"
                    name="img"
                    id="img"
                    onChange={handleImgChange}
                />
                <Error error={error} />
                {loading ? (
                    <Button disabled>Postando...</Button>
                ) : (
                    <Button>Enviar</Button>
                )}
            </form>
            <div>
                {img.preview && (
                    <Preview
                        style={{ backgroundImage: `url(${img.preview})` }}
                    ></Preview>
                )}
            </div>
        </Section>
    );
};

export default UserPhotoPost;
