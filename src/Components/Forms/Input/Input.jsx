import React from "react";
import { InputStyle, LabelStyle, WrapperStyle, Error } from "./Style";

const Input = ({ label, type, value, onChange, name, error, onBlur }) => {
    return (
        <WrapperStyle>
            <LabelStyle htmlFor={name}>{label}</LabelStyle>
            <InputStyle
                name={name}
                id={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete='off'
            />
            {error && <Error>{error}</Error>}
        </WrapperStyle>
    );
};

export default Input;
