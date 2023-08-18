import React from 'react';
import { styled } from 'styled-components';

import GraphImage from '../../../../assets/images/radarGraph.png';
import { ReactComponent as SideArrow } from '../../../../assets/icons/graySideArrow.svg';

const Container = styled.div`
    width: 395px;
    height: 521px;
    padding: 20px;
    border-radius: 21px;
    box-shadow: 0 6px 8px 0 rgba(27, 131, 242, 0.2), inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.white};
`;

const BetweenWrap = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`;

const TitleWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.span`
    margin-right: 2px;
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: ${(props) => props.theme.nero};
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
    background-color: ${(props) => (props.light ? props.theme.summerSky : props.theme.solitude)};
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
    width: 355px;
    height: 433px;
    object-fit: contain;
`;

const RadarCard = () => {
    return (
        <Container>
            <BetweenWrap>
                <TitleWrap>
                    <Title>Good 서비스 중점관리 항목</Title>
                    <SideArrow />
                </TitleWrap>
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
            </BetweenWrap>
            <Graph src={GraphImage} />
        </Container>
    );
};

export default RadarCard;
