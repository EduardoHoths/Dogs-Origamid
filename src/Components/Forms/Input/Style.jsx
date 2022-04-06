import styled from 'styled-components';


export const InputStyle = styled.input`
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .8rem;
    border-radius: 0.4rem;
    background-color: #eee;
    transition: 0.3s;

    &:hover, &:focus{
        outline: none;
        border-color: #fb1;
        background-color: #fff;
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }
`

export const LabelStyle = styled.label`
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
`

export const WrapperStyle = styled.div`
    margin-bottom: 1rem;
`

export const Error = styled.p`
    color: #f31;
    font-size: .875rem;
    margin-top: 0.25rem;
`