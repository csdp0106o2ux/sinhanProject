import React from 'react';
import { styled } from 'styled-components';

const Container = styled.button`
    padding: 6px 49px;
    border-radius: 8px;
    box-shadow: inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1), inset 0 13px 6px -10px rgba(255, 255, 255, 0.35);
    background-color: #3495df;
`;

const Title = styled.p`
    font-family: NanumSquareOTFEB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: #fff;
`;

const BlueBtn = (props) => {
    return (
        <Container>
            <Title>{props.title}</Title>
        </Container>
    );
};

export default BlueBtn;
