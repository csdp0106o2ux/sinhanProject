import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.span`
    margin-bottom: 6px;
    font-family: NanumSquareOTFB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nightRider};
`;

const Input = styled.input`
    width: 240px;
    height: 30px;
    border-radius: 8px;
    border: solid 1px rgba(52, 149, 223, 0.2);
    background-color: ${(props) => props.theme.white};
`;

const TextInput = (props) => {
    return (
        <Container>
            <Label>{props.label}</Label>
            <Input placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        </Container>
    );
};

export default TextInput;
