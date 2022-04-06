import React from "react";
import { Button } from "./Style";
import { PHOTO_DELETE } from "../../../api";
import useFetch from "../../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();

    async function handleClick() {
        const confirm = window.confirm(
            "Tem certeza que deseja deletar essa foto?"
        );
        if (confirm) {
            const { url, options } = PHOTO_DELETE(id);
            const { response } = await request(url, options);

            if (response.ok) {
                window.location.reload();
            }
        }
    }

    return (
        <>
            {loading ? (
                <Button disabled>Deletar</Button>
            ) : (
                <Button onClick={handleClick}>Deletar</Button>
            )}
        </>
    );
};

export default PhotoDelete;
