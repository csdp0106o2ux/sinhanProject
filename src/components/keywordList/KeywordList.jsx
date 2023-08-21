import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    margin-left: ${({ four }) => (four ? '20px' : '0px')};
    width: ${({ four }) => (four ? '245px' : '255px')};
    height: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 0 0 #ededed;
`;

const TitleWrap = styled.div`
    display: flex;
`;

const NumberText = styled.span`
    font-family: OneShinhan;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nero};
`;

const KeywordText = styled.span`
    margin-left: ${({ title }) => (title ? '20px' : '0px')};
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nightRider};
`;

const KeywordList = ({ num, title, score, four }) => {
    return (
        <Container four={four}>
            <TitleWrap>
                <NumberText>{num}</NumberText>
                <KeywordText title>{title}</KeywordText>
            </TitleWrap>
            <KeywordText>{score}건</KeywordText>
        </Container>
    );
};

export default KeywordList;
