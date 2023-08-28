import React from 'react';
import { styled } from 'styled-components';

const Container = styled.button`
    height: 30px;
    padding: 6px 20px;
    border-radius: 8px;
    background-color: #1b3b54;
`;

const Title = styled.p`
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
`;

const DefaultButton = (props) => {
    return (
        <Container>
            <Title>{props.title}</Title>
        </Container>
    );
};

export default DefaultButton;
