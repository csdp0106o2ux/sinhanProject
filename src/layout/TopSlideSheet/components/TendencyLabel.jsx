import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    padding: 10px 30px;
    width: 256px;
    height: 44px;
    display: flex;
    border-radius: 12px;
    background-color: ${(props) => props.theme.white};
`;

const Title = styled.p`
    font-family: OneShinhan;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nero};
`;

const SubTitle = styled.p`
    margin-right: 10px;
    font-family: NanumSquareOTFR;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.dimGray};
`;

const TendencyLabel = (props) => {
    return (
        <Container>
            <SubTitle>{props.subTitle}</SubTitle>
            <Title>"{props.title}"</Title>
        </Container>
    );
};

export default TendencyLabel;
