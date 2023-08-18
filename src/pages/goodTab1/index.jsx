import React from 'react';

import { ReactComponent as BlueSideArrow } from '../../assets/icons/blueSideArrow.svg';
import { ReactComponent as Notification } from '../../assets/icons/combinedShape.svg';
import { Container, BoardTitleWrap, FlexWrap, BoardTitle, BannerWrap, BannerText, IconWrap, DropDownText } from './components/style';
import DropDown from '../../components/dropDown/DropDown';

const GoodTab1 = () => {
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
            <DropDownText>서울권역. 서초 커뮤니티/ 남부터미널 기업금융센터 (출장소 포함)</DropDownText>
            <DropDown width="100" title="테스트" calender />
        </Container>
    );
};

export default GoodTab1;
