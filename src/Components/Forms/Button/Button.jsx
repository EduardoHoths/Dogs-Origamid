import React from "react";
import { ButtonStyle } from "./Style";

const Button = ({ children, ...props }) => {
    return <ButtonStyle {...props} >{children}</ButtonStyle>;
};

export default Button;
