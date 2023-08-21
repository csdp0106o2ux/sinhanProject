import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as SideArrow } from '../../assets/icons/graySideArrow.svg';

const Container = styled.div`
    width: 560px;
    height: 181px;
    padding: 20px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.aliceBlue};
`;

const SpaceWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TitleWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.span`
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: ${(props) => props.theme.nero};
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
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nightRider};
`;

const KeywordCard = () => {
    return (
        <Container>
            <SpaceWrap>
                <TitleWrap>
                    <Title>My 키워드</Title>
                    <SideArrow />
                </TitleWrap>
            </SpaceWrap>
        </Container>
    );
};

export default KeywordCard;
