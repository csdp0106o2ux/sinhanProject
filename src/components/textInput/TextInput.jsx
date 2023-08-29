import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    margin-right: ${({ marginRight }) => (marginRight ? `${marginRight}px` : '0px')};
    display: flex;
    flex-direction: column;
`;

const Label = styled.span`
    /* margin-bottom: 6px; */
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
    width: ${(props) => (props.width ? `${props.width}px` : '240px')};
    height: ${(props) => (props.height ? `${props.height}px` : '30px')};
    border-radius: 8px;
    border: solid 1px ${(props) => (props.gray ? 'rgba(153, 153, 153, 0.2)' : 'rgba(52, 149, 223, 0.2)')};
    background-color: ${(props) => (props.disabled ? props.theme.whiteSmoke : props.theme.white)};
`;

const TextInput = (props) => {
    return (
        <Container marginRight={props.marginRight}>
            <Label>{props.label}</Label>
            <Input type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange} disabled={props.disabled} width={props.width} height={props.height} gray={props.gray} />
        </Container>
    );
};

export default TextInput;
