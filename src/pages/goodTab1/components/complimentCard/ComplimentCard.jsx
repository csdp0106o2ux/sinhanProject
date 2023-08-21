import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as SideArrow } from '../../../../assets/icons/graySideArrow.svg';
import { ToggleSwitch } from '../../../../components';
import ComplimentList from '../complimentList/ComplimentList';

const Container = styled.div`
    margin-bottom: 10px;
    width: 560px;
    height: 277px;
    padding: 20px 20px 21px 20px;
    border-radius: 16px;
    background-color: #f3faff;
`;

const SpaceWrap = styled.div`
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
`;

const TitleWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #1f1f1f;
`;

const DateText = styled.span`
    margin-bottom: 12px;
    display: inline-block;
    opacity: 0.9;
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #555;
`;

const ComplimentCard = () => {
    return (
        <Container>
            <SpaceWrap>
                <TitleWrap>
                    <Title>고객/직원 칭찬 (응원) 의견</Title>
                    <SideArrow />
                </TitleWrap>
                <ToggleSwitch />
            </SpaceWrap>
            <DateText>12.13. 기준/월</DateText>
            <ComplimentList />
            <ComplimentList />
        </Container>
    );
};

export default ComplimentCard;
