import React from 'react';
import { styled } from 'styled-components';

import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import { ReactComponent as SideArrow } from '../../assets/icons/graySideArrow.svg';

const Container = styled.div`
    padding: 20px;
    width: 560px;
    height: 182px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.aliceBlue};
`;

const SpaceWrap = styled.div`
    margin-bottom: 12px;
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

const GoodCard = () => {
    return (
        <Container>
            <SpaceWrap>
                <TitleWrap>
                    <Title>Good AI 코칭</Title>
                    <SideArrow />
                </TitleWrap>
                <ToggleSwitch />
            </SpaceWrap>
        </Container>
    );
};

export default GoodCard;
