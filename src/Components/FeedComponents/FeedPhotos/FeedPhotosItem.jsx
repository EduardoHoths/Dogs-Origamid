import React from "react";
import { Li } from "./Style";
import Image from "../../Helper/Image/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
    function handleClick(){
        setModalPhoto(photo);
    }
    return (
        <Li onClick={handleClick}>
            <Image src={photo.src} alt={photo.title} />
            <span>{photo.acessos}</span>
        </Li>
    );
};

export default FeedPhotosItem;
