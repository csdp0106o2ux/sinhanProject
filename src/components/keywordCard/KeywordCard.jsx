import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { ReactComponent as SideArrow } from '../../assets/icons/graySideArrow.svg';
import KeywordList from '../keywordList/KeywordList';
import ToggleSwitch from '../switchToggle/ToggleSwitch';

const Container = styled.div`
    padding: 20px;
    width: 560px;
    height: 181px;
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

const KeywordListWrap = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const KeywordCard = () => {
    const [keyword, setKeyword] = useState([]);

    const keywordData = [
        {
            id: 0,
            num: 1,
            title: '미소',
            score: 50,
        },
        {
            id: 1,
            num: 2,
            title: '책임감',
            score: 32,
        },
        {
            id: 2,
            num: 3,
            title: '전문지식',
            score: 26,
        },
        {
            id: 3,
            num: 4,
            title: '배려',
            score: 20,
        },
        {
            id: 4,
            num: 5,
            title: '신뢰',
            score: 19,
        },
    ];

    useEffect(() => {
        setKeyword(keywordData);
    }, []);

    return (
        <Container>
            <SpaceWrap>
                <TitleWrap>
                    <Title>My 키워드</Title>
                    <SideArrow />
                </TitleWrap>
                <ToggleSwitch />
            </SpaceWrap>
            <KeywordListWrap>
                {keyword.map((item, idx) => (
                    <KeywordList num={item.num} title={item.title} score={item.score} four={idx > 2} />
                ))}
            </KeywordListWrap>
        </Container>
    );
};

export default KeywordCard;
