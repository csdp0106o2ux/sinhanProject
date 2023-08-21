import React, { useEffect, useState } from 'react';

import { ReactComponent as BlueSideArrow } from '../../assets/icons/blueSideArrow.svg';
import { ReactComponent as Notification } from '../../assets/icons/combinedShape.svg';
import { Container, BoardTitleWrap, FlexWrap, BoardTitle, BannerWrap, BannerText, IconWrap, DropDownWrap, DropDownText, ScoreWrap, NoticeWrap } from './components/style';
import ScoreCard from './components/scoreCard/ScoreCard';
import { DropDown, GoodCard, ScoreGraphCard } from '../../components';
import RadarCard from './components/radarCard/RadarCard';
import KeywordCard from '../../components/keywordCard/KeywordCard';
import KeywordList from '../../components/keywordList/KeywordList';
import ComplimentCard from './components/complimentCard/ComplimentCard';

const GoodTab1 = () => {
    const [dropDown, setDropDown] = useState([]);
    const [score, setScore] = useState([]);
    const [ComplimentToggle, setComplimentToggle] = useState(false);
    const [keywordToggle, setKeywordToggle] = useState(false);
    const [goodToggle, setGoodToggle] = useState(false);

    const dummyData = [
        {
            id: 0,
            width: 100,
            title: '리테일',
        },
        {
            id: 1,
            width: 100,
            title: '월별',
        },
        {
            id: 2,
            width: 110,
            title: '2022.02',
        },
    ];

    const scoreDummyData = [
        {
            id: 0,
            title: 'Good Score',
            score: '84.1',
            unit: '점',
            checked: true,
        },
        {
            id: 1,
            title: 'Good 경험률',
            score: '84.1',
            unit: '%',
            checked: false,
        },
        {
            id: 2,
            title: 'Good 경험지수',
            score: '84.1',
            unit: '점',
            checked: false,
        },
        {
            id: 3,
            title: '충성도',
            score: '84.1',
            unit: '점',
            checked: false,
        },
        {
            id: 4,
            title: 'Good 응답수',
            score: '15',
            unit: '건',
            checked: false,
        },
        {
            id: 5,
            title: '칭찬VOC',
            score: '5',
            unit: '건',
            checked: false,
        },
    ];

    useEffect(() => {
        setDropDown(dummyData);
        setScore(scoreDummyData);
    }, []);

    return (
        <Container>
            <BoardTitleWrap>
                <FlexWrap>
                    <BoardTitle>My Good</BoardTitle>
                    <BoardTitle right>Our Good</BoardTitle>
                </FlexWrap>
                <BannerWrap>
                    <IconWrap>
                        <Notification />
                    </IconWrap>
                    <BannerText>김오투님, 새로운 고객 칭찬이 도착했어요! 확인해주세요.</BannerText>
                    <div style={{ flex: 1 }} />
                    <BlueSideArrow />
                </BannerWrap>
            </BoardTitleWrap>
            <DropDownWrap>
                <DropDownText>서울권역. 서초 커뮤니티/ 남부터미널 기업금융센터 (출장소 포함)</DropDownText>
                {dropDown?.map((item) => (
                    <DropDown key={item.id} width={item.width} title={item.title} calender={item.id === 2} margin={item.id !== 2} />
                ))}
            </DropDownWrap>
            <FlexWrap>
                <ScoreWrap>
                    <FlexWrap>
                        {score?.map((item) => (
                            <ScoreCard key={item.id} checked={item.checked} title={item.title} score={item.score} unit={item.unit} />
                        ))}
                    </FlexWrap>
                    <FlexWrap>
                        <ScoreGraphCard />
                        <RadarCard />
                    </FlexWrap>
                </ScoreWrap>
                <NoticeWrap>
                    <ComplimentCard toggle={ComplimentToggle} setToggle={setComplimentToggle} />
                    <KeywordCard toggle={keywordToggle} setToggle={setKeywordToggle} />
                    <GoodCard toggle={goodToggle} setToggle={setGoodToggle} />
                </NoticeWrap>
            </FlexWrap>
        </Container>
    );
};

export default GoodTab1;
