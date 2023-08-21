import React from 'react';
import { styled } from 'styled-components';

import GraphImage from '../../../../assets/images/goodExperienceGraph.png';

const Container = styled.div`
    margin-right: 10px;
    padding: 20px;
    width: 685px;
    height: 521px;
    border-radius: 21px;
    box-shadow: 0 6px 8px 0 rgba(27, 131, 242, 0.2), inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.white};
`;

const SpaceWrap = styled.div`
    margin-bottom: 20px;
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
    color: #1f1f1f;
`;

const FlexWrap = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
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

const Graph = styled.img`
    width: 645px;
    height: 402px;
    object-fit: contain;
`;

const ExperienceCard = () => {
    return (
        <Container>
            <SpaceWrap>
                <Title>Good 경험률</Title>
                <Title>토글버튼위치</Title>
            </SpaceWrap>
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
            <Graph src={GraphImage} />
        </Container>
    );
};

export default ExperienceCard;
