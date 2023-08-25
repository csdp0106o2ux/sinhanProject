import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { ReactComponent as GaugeStar } from '../../assets/icons/gaugeStar.svg';
import { ReactComponent as BlueSideArrow } from '../../assets/icons/blueSideArrow.svg';
import { ReactComponent as SideArrow } from '../../assets/icons/graySideArrow.svg';
import Person from '../../assets/images/userImage.png';
import TendencyLabel from './components/TendencyLabel';

const Container = styled.div`
    margin-left: 80px;
    padding: 98px 0 20px 60px;
    width: 1840px;
    height: 450px;
    display: flex;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: 0 0 12px 0 rgba(0, 22, 46, 0.2);
    background-color: #e8f5fe;
`;

const InfomationCard = styled.div`
    display: flex;
    flex-direction: column;
`;

const BadgeWrap = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const BlueBadge = styled.div`
    margin-right: 10px;
    width: 42px;
    height: 18px;
    padding: 0 4px;
    border-radius: 4px;
    background-color: #0094de;
`;

const BadgeText = styled.p`
    font-family: NanumSquareOTFB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #e8f3fa;
`;

const DateText = styled.span`
    font-family: NanumSquareOTFB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const UserTitleWrap = styled.div`
    width: 560px;
    height: 110px;
    display: flex;
    flex-direction: column;
`;

const LabelWrap = styled.div`
    display: flex;
`;

const Label = styled.div`
    margin-left: ${(props) => (props.green ? '6px' : '0')};
    height: 33px;
    padding: 6px 20px;
    display: flex;
    border-radius: 12px;
    box-shadow: ${(props) => (props.green ? '0 4px 12px 0 rgba(54, 201, 175, 0.2);' : '0 4px 12px 0 rgba(249, 168, 36, 0.2)')};
    background-color: ${(props) => (props.green ? props.theme.shamrock : props.theme.lightningYellow)};
`;

const LabelText = styled.p`
    font-family: OneShinhan;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #fdfdfd;
`;

const SpaceWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const UserImage = styled.img`
    width: 92px;
    height: 92px;
`;

const GaugeWrap = styled.div`
    margin-top: 28px;
    margin-bottom: 10px;
    width: 560px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 50px;
    background-color: ${(props) => props.theme.white};
`;

const IconWrap = styled.div`
    position: absolute;
    left: -5px;
`;

const StautsBarWrap = styled.div`
    margin-left: 50px;
    position: relative;
    width: 307px;
    height: 8px;
    border-radius: 15px;
    background-color: #e8f5fe;
`;

const StatusBar = styled.div`
    width: 250px;
    height: 8px;
    position: absolute;
    border-radius: 15px;
    box-shadow: 0 0 5px 0 rgba(27, 131, 242, 0.2), inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1), inset 0 13px 6px -10px rgba(255, 255, 255, 0.35);
    background-image: linear-gradient(272deg, #a0d0f4 100%, #a0d0f4 99%, #5cb8ff 20%, #5bb4f8 0%);
`;

const NumWrap = styled.div`
    margin-left: 19px;
    display: flex;
`;

const MaxNumText = styled.p`
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #1d292e;
`;

const NumText = styled(MaxNumText)`
    font-family: OneShinhan;
    font-weight: bold;
    color: #0094de;
`;

const GreyLine = styled.div`
    margin: 0 10px;
    width: 1px;
    height: 16px;
    background-color: #dbdbdb;
`;

const ArrowWrap = styled(BlueSideArrow)`
    margin-left: 2px;
    align-items: center;
`;

const GoodWrap = styled.div`
    padding: 20px;
    width: 560px;
    height: 162px;
    border-radius: 16px;
    background-color: #f3faff;
`;

const GoodTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const GoodTitle = styled.p`
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #1f1f1f;
`;

const RefreshButton = styled.button`
    width: 109px;
    height: 28px;
    border-radius: 8px;
    box-shadow: 0 1px 1px 0 rgba(27, 131, 242, 0.2), inset 0 0 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 4px -1px rgba(255, 255, 255, 0.35);
    background-color: #fff;
`;

const RefreshButtonText = styled.p`
    font-family: NanumSquareOTFEB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    color: #3495df;
`;

const FlexWrap = styled.div`
    display: flex;
    align-items: center;
`;

const TendencyLabelWrap = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
`;

const TopSlideSheet = () => {
    const [tendency, setTendency] = useState([]);

    const tendencyDummy = [
        {
            id: 0,
            title: '자기주도적 개척형',
            subTitle: '감정성향',
        },
        {
            id: 1,
            title: '기다림의 미학형',
            subTitle: '소통성향',
        },
    ];

    useEffect(() => {
        setTendency(tendencyDummy);
    }, []);

    return (
        <Container>
            <InfomationCard>
                <UserTitleWrap>
                    <BadgeWrap>
                        <BlueBadge>
                            <BadgeText>Today</BadgeText>
                        </BlueBadge>
                        <DateText>2021.12.13 10:28:52</DateText>
                    </BadgeWrap>
                    <SpaceWrap>
                        <LabelWrap>
                            <Label>
                                <LabelText>21 S매니저</LabelText>
                            </Label>
                            <Label green>
                                <LabelText>12월 최우수직원</LabelText>
                            </Label>
                        </LabelWrap>
                        <UserImage src={Person} />
                    </SpaceWrap>
                </UserTitleWrap>
                <GaugeWrap>
                    <IconWrap>
                        <GaugeStar />
                    </IconWrap>
                    <StautsBarWrap>
                        <StatusBar />
                    </StautsBarWrap>
                    <NumWrap>
                        <NumText>8</NumText>
                        <MaxNumText>/10개</MaxNumText>
                    </NumWrap>
                    <GreyLine />
                    <MaxNumText>Reword{'\u00A0'}</MaxNumText>
                    <NumText>3</NumText>
                    <MaxNumText>개</MaxNumText>
                    <ArrowWrap />
                </GaugeWrap>
                <GoodWrap>
                    <GoodTitleWrap>
                        <FlexWrap>
                            <GoodTitle>나의 굿밸런스 성향</GoodTitle>
                            <SideArrow />
                        </FlexWrap>
                        <RefreshButton>
                            <RefreshButtonText>다시 분석하기</RefreshButtonText>
                        </RefreshButton>
                    </GoodTitleWrap>
                    <TendencyLabelWrap>
                        {tendency.map((item) => (
                            <TendencyLabel key={item.id} title={item.title} subTitle={item.subTitle} />
                        ))}
                    </TendencyLabelWrap>
                </GoodWrap>
            </InfomationCard>
        </Container>
    );
};

export default TopSlideSheet;
