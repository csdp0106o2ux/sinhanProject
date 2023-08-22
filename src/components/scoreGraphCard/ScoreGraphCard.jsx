import React from 'react';
import { styled } from 'styled-components';

import GraphImage from '../../assets/images/goodScoreGraph.png';

const Container = styled.div`
    margin-right: 10px;
    padding: 20px;
    width: ${(props) => (props.goodTab2 ? '810px' : '685px')};
    height: 521px;
    border-radius: 21px;
    box-shadow: 0 6px 8px 0 rgba(27, 131, 242, 0.2), inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.white};
`;

const TitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
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

const SubTextWrap = styled.div`
    margin-bottom: 17px;
    display: flex;
`;

const SubText = styled.span`
    font-family: NanumSquareOTFR;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => (props.pictonBlue ? props.theme.pictonBlue : props.theme.dimGray)};
`;

const Graph = styled.img`
    width: 645px;
    height: 406px;
    object-fit: contain;
`;

const FlexWrap = styled.div`
    display: flex;
`;

const LabelWrap = styled.div`
    ${({ margin }) => margin && 'margin-right: 10px'};
    display: flex;
    align-items: center;
`;

const Label = styled.div`
    margin-right: 6px;
    width: 8px;
    height: 8px;
    background-color: ${(props) => (props.light ? props.theme.summerSky : props.theme.freeSpeechBlue)};
    border-radius: 20px;
`;

const LabelText = styled.span`
    opacity: 0.9;
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.dimGray};
`;

const ScoreGraphCard = (props) => {
    return (
        <Container goodTab2={props.goodTab2}>
            <TitleWrap>
                <Title>Good Score</Title>
                <FlexWrap>
                    <LabelWrap margin>
                        <Label light />
                        <LabelText>My</LabelText>
                    </LabelWrap>
                    <LabelWrap>
                        <Label />
                        <LabelText>Our</LabelText>
                    </LabelWrap>
                </FlexWrap>
            </TitleWrap>
            <SubTextWrap>
                <SubText>31명의 고객중</SubText>
                <SubText pictonBlue>26</SubText>
                <SubText>명이 Good을 주셨습니다.</SubText>
            </SubTextWrap>
            <Graph src={GraphImage} />
        </Container>
    );
};

export default ScoreGraphCard;
