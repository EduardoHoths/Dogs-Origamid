import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../../Hooks/useFetch";
import { PHOTOS_GET } from "../../../api";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading/Loading";
import { Ul } from "./Style";

const FeedPhotos = ({setInfinite, page, user, setModalPhoto }) => {
    const { data, loading, error, request } = useFetch();
    const total = 6

    React.useEffect(async () => {
        const { url, options } = PHOTOS_GET({ page, total, user });
        const { response, json } = await request(url, options);

        if(response && response.ok && json.length < total){
            setInfinite(false);
        }
    }, [request, user, page]);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (data) {
        return (
            <Ul classname="animeLeft">
                {data.map((photo) => (
                    <FeedPhotosItem
                        setModalPhoto={setModalPhoto}
                        photo={photo}
                        key={photo.id}
                    />
                ))}
            </Ul>
        );
    } else return null;
};

export default FeedPhotos;
