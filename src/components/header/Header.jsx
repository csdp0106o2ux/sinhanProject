import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    padding: 0 275px 0 135px;
    width: 100%;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
`;

const Title = styled.span`
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: ${(props) => props.theme.lightPacificBlue};
`;

const SubTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SubTitle = styled.span`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nightRider};
    ${({ border }) => border && 'padding: 0 10px; margin: 0 10px; border-left: 1px; border-right: 1px; border-style: solid; border-color: #EDEDED'};
`;

const Header = () => {
    return (
        <Container>
            <Title>조회{'>'}민원/ VOC 조회</Title>
            <SubTitleWrap>
                <SubTitle>소비자지원부</SubTitle>
                <SubTitle border>선임</SubTitle>
                <SubTitle>김오투 님</SubTitle>
            </SubTitleWrap>
        </Container>
    );
};

export default Header;
