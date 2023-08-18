import React, { useEffect, useState } from 'react';

import DropDown from '../../components/dropDown/DropDown';
import { ReactComponent as BlueSideArrow } from '../../assets/icons/blueSideArrow.svg';
import { ReactComponent as Notification } from '../../assets/icons/combinedShape.svg';
import { Container, BoardTitleWrap, FlexWrap, BoardTitle, BannerWrap, BannerText, IconWrap, DropDownWrap, DropDownText } from './components/style';

const GoodTab1 = () => {
    const [dropDown, setDropDown] = useState([]);

    useEffect(() => {
        setDropDown(dummyData);
    }, []);

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
        </Container>
    );
};

export default GoodTab1;
