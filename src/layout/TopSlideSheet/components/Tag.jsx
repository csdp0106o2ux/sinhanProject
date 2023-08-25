import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    width: 124px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: ${(props) => props.theme.lightGreyAliceBlue};
`;

const Title = styled.p`
    font-family: NanumSquareOTFR;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nightRider};
`;

const Tag = (props) => {
    return (
        <Container>
            <Title>#{props.title}</Title>
        </Container>
    );
};

export default Tag;
