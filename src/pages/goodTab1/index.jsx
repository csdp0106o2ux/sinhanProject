import React from 'react';

import { ReactComponent as BlueSideArrow } from '../../assets/icons/blueSideArrow.svg';
import { ReactComponent as Notification } from '../../assets/icons/combinedShape.svg';
import { Container, BoardTitleWrap, FlexWrap, BoardTitle, BannerWrap, BannerText, IconWrap } from './components/style';

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
        </Container>
    );
};

export default GoodTab1;
