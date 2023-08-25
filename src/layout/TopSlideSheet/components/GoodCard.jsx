import React from 'react';
import { styled } from 'styled-components';

import GoodGraph from '../../../assets/images/goodCardGraph.png';

const Container = styled.div`
    padding: 20px;
    width: 560px;
    height: 332px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background-color: ${(props) => props.theme.aliceBlue};
`;

const Title = styled.p`
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #1f1f1f;
`;

const Wrapper = styled.div`
    margin-top: 12px;
    display: flex;
`;

const GraphWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Graph = styled.img`
    margin-bottom: 23px;
    width: 294px;
    height: 170px;
`;

const GraphTitleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GraphTitle = styled.p`
    margin-right: 40px;
    font-family: OneShinhan;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const RateText = styled.p`
    font-family: NanumSquareOTFB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: ${(props) => (props.blue ? props.theme.lightPacificBlue : props.theme.freeSpeechBlue)};
`;

const GoodCard = () => {
    return (
        <Container>
            <Title>Good 정보</Title>
            <Wrapper>
                <GraphWrap>
                    <Graph src={GoodGraph} />
                    <GraphTitleWrap>
                        <GraphTitle>나의 Good 경험률</GraphTitle>
                        <RateText blue>84.2%</RateText>
                    </GraphTitleWrap>
                    <GraphTitleWrap>
                        <GraphTitle>전행 Good 경험률</GraphTitle>
                        <RateText>90.5%</RateText>
                    </GraphTitleWrap>
                </GraphWrap>
            </Wrapper>
        </Container>
    );
};

export default GoodCard;
