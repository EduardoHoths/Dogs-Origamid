import React from "react";
import {
    Author,
    Attributes,
    Views,
    PhotoImg,
    PhotoContainer,
    PhotoDetails,
} from "./Style";
import { Link } from "react-router-dom";
import PhotoComments from "../PhotoComments/PhotoComments";
import { UserContext } from "../../../UserContext";
import PhotoDelete from "../PhotoDelete/PhotoDelete";
import Image from "../../Helper/Image/Image";


const PhotoContent = ({ data, single }) => {
    const { photo, comments } = data;
    const user = React.useContext(UserContext);

    return (
        <PhotoContainer single={single}>
            <PhotoImg single={single}>
                <Image src={photo.src} alt={photo.title}/>
            </PhotoImg>
            <PhotoDetails single={single}>
                <div>
                    <Author>
                        {user.data && user.data.username === photo.author ? (
                            <PhotoDelete id={photo.id} />
                        ) : (
                            <Link to={`/perfil/${photo.author}`}>
                                @{photo.author}
                            </Link>
                        )}

                        <Views>{photo.acessos}</Views>
                    </Author>
                    <h1 className="title">
                        <Link to={`foto/${photo.id}`}>{photo.title}</Link>
                    </h1>
                    <Attributes>
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade} anos</li>
                    </Attributes>
                </div>
            </PhotoDetails>
            <PhotoComments single={single} id={photo.id} comments={comments} />
        </PhotoContainer>
    );
};

export default PhotoContent;
