import React from 'react';
import { styled } from 'styled-components';

import GoodGraph from '../../../assets/images/goodCardGraph.png';

const Container = styled.div`
    padding: 20px;
    width: 560px;
    height: 332px;
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

const ScoreWrap = styled.div`
    padding: 16px;
    width: 206px;
    height: 252px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;
    background-color: #fff;
`;

const ScoreTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UnitWrap = styled.div`
    display: flex;
    align-items: center;
`;

const ScoreTitle = styled.p`
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;
const ScoreText = styled.p`
    font-family: ${(props) => (props.unit ? 'NanumSquareOTFR' : 'NanumSquareOTFB')};
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: right;
    color: #1f1f1f;
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
                <ScoreWrap>
                    <ScoreTitleWrap>
                        <ScoreTitle>Good Score</ScoreTitle>
                        <UnitWrap>
                            <UnitWrap>
                                <ScoreText>84.1</ScoreText>
                                <ScoreText>점</ScoreText>
                            </UnitWrap>
                        </UnitWrap>
                    </ScoreTitleWrap>
                    <ScoreTitleWrap>
                        <ScoreTitle>Good 경험지수</ScoreTitle>
                        <UnitWrap>
                            <UnitWrap>
                                <ScoreText>84.1</ScoreText>
                                <ScoreText>점</ScoreText>
                            </UnitWrap>
                        </UnitWrap>
                    </ScoreTitleWrap>
                    <ScoreTitleWrap>
                        <ScoreTitle>충성도</ScoreTitle>
                        <UnitWrap>
                            <UnitWrap>
                                <ScoreText>84.1</ScoreText>
                                <ScoreText>점</ScoreText>
                            </UnitWrap>
                        </UnitWrap>
                    </ScoreTitleWrap>
                    <ScoreTitleWrap>
                        <ScoreTitle>Good 응답수</ScoreTitle>
                        <UnitWrap>
                            <UnitWrap>
                                <ScoreText>15</ScoreText>
                                <ScoreText>건</ScoreText>
                            </UnitWrap>
                        </UnitWrap>
                    </ScoreTitleWrap>
                    <ScoreTitleWrap>
                        <ScoreTitle>칭찬VOC</ScoreTitle>
                        <UnitWrap>
                            <UnitWrap>
                                <ScoreText>5</ScoreText>
                                <ScoreText>건</ScoreText>
                            </UnitWrap>
                        </UnitWrap>
                    </ScoreTitleWrap>
                </ScoreWrap>
            </Wrapper>
        </Container>
    );
};

export default GoodCard;
