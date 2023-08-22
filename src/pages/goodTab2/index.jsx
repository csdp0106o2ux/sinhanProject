import React, { useState, useEffect } from 'react';

import { DropDown, GoodCard, IndexBar, KeywordCard, ScoreGraphCard, TabBar } from '../../components';
import { Container, BoardTitleWrap, FlexWrap, BoardTitle, BannerWrap, BannerText, IconWrap, DropDownWrap, DropDownText, ScoreWrap, NoticeWrap, ScoreAreaWrap, ScoreTitle, DateText, OpacityWrap, GoodScoreWrap, ScoreCardWrap, Wrapper } from './components/style';
import { ReactComponent as BlueSideArrow } from '../../assets/icons/blueSideArrow.svg';
import { ReactComponent as Notification } from '../../assets/icons/combinedShape.svg';
import AreaCard from './components/areaCard/AreaCard';
import ScoreCard from '../goodTab1/components/scoreCard/ScoreCard';
import StaffCard from './components/staffCard/StaffCard';
import { useNavigate } from 'react-router-dom';

const GoodTab2 = () => {
    const navigate = useNavigate();
    const [dropDown, setDropDown] = useState([]);
    const [areaData, setAreaData] = useState([]);
    const [score, setScore] = useState([]);
    const [keywordToggle, setKeywordToggle] = useState(false);
    const [selectTab, setSelectTab] = useState('진행');

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

    const areaDummyData = [
        {
            id: 0,
            title: '진행',
            checked: true,
            disabled: false,
        },
        {
            id: 1,
            title: '서울지역본부',
            checked: false,
            disabled: false,
        },
        {
            id: 2,
            title: '경기지역본부',
            checked: false,
            disabled: true,
        },
        {
            id: 3,
            title: '인천지역본부',
            checked: false,
            disabled: true,
        },
        {
            id: 4,
            title: '강원지역본부',
            checked: false,
            disabled: true,
        },
        {
            id: 5,
            title: '충청북지역',
            checked: false,
            disabled: true,
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
            title: '팀워크',
            score: '84.1',
            unit: '점',
            checked: false,
        },
        {
            id: 4,
            title: '칭찬VOC',
            score: '5',
            unit: '건',
            checked: false,
        },
    ];

    useEffect(() => {
        setDropDown(dummyData);
        setAreaData(areaDummyData);
        setScore(scoreDummyData);
    }, []);

    return (
        <Container>
            <IndexBar experience />
            <TabBar />
            <Wrapper>
                <BoardTitleWrap>
                    <FlexWrap>
                        <BoardTitle onClick={() => navigate('/goodTab1')}>My Good</BoardTitle>
                        <BoardTitle right checked>
                            Our Good
                        </BoardTitle>
                    </FlexWrap>
                    <BannerWrap>
                        <IconWrap>
                            <Notification />
                        </IconWrap>
                        <BannerText>금일 현 시간의 Good 경험 15건 (▲+2), 칭찬 VOC 32건 (▲+12) 입니다.</BannerText>
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
                        <ScoreAreaWrap>
                            <ScoreTitle>Good 종합</ScoreTitle>
                            <DateText>12.13. 기준/월</DateText>
                            {areaData.map((item) => (
                                <AreaCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    disabled={item.disabled}
                                    checked={item.checked}
                                    onClick={() => {
                                        setAreaData(
                                            areaData.map((list) => {
                                                if (item.disabled === false && item.id === list.id) {
                                                    setSelectTab(list.title);
                                                    return {
                                                        ...list,
                                                        checked: true,
                                                    };
                                                }
                                                if (item.disabled === false && item.id !== list.id) {
                                                    return {
                                                        ...list,
                                                        checked: false,
                                                    };
                                                }
                                                return {
                                                    ...list,
                                                };
                                            })
                                        );
                                    }}
                                />
                            ))}
                            <OpacityWrap />
                        </ScoreAreaWrap>
                        <GoodScoreWrap>
                            <ScoreCardWrap>
                                {score?.map((item) => (
                                    <ScoreCard
                                        goodTab2
                                        key={item.id}
                                        checked={item.checked}
                                        title={item.title}
                                        score={item.score}
                                        unit={item.unit}
                                        margin={item.id === 4}
                                        onClick={() => {
                                            setScore(
                                                score.map((list) => {
                                                    if (item.id === list.id) {
                                                        return {
                                                            ...list,
                                                            checked: true,
                                                        };
                                                    }

                                                    return {
                                                        ...list,
                                                        checked: false,
                                                    };
                                                })
                                            );
                                        }}
                                    />
                                ))}
                            </ScoreCardWrap>
                            <ScoreGraphCard status={selectTab} goodTab2 />
                        </GoodScoreWrap>
                    </ScoreWrap>
                    <NoticeWrap>
                        <StaffCard />
                        {/* 키워드카드 good1 페이지 good2 페이지 조건 부여 */}
                        <KeywordCard cardTitle={'우리지점 키워드'} toggle={keywordToggle} setToggle={setKeywordToggle} />
                        <GoodCard cardTitle={'월간 Good 스토리'} goodTab2 />
                        {/* 월간굿스토리 good1 페이지 good2 페이지 조건 부여 */}
                    </NoticeWrap>
                </FlexWrap>
            </Wrapper>
        </Container>
    );
};

export default GoodTab2;
