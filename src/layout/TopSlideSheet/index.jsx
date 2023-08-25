import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    padding: 0 0 20px 60px;
    width: 1840px;
    height: 450px;
    display: flex;
    border-radius: 16px;
    box-shadow: 0 0 12px 0 rgba(0, 22, 46, 0.2);
    background-color: #e8f5fe;
`;

const InfomationCard = styled.div`
    display: flex;
    flex-direction: column;
`;

const FlexWrap = styled.div`
    display: flex;
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

const TopSlideSheet = () => {
    return (
        <Container>
            <InfomationCard>
                <FlexWrap>
                    <BlueBadge>
                        <BadgeText>Today</BadgeText>
                    </BlueBadge>
                    <DateText>2021.12.13 10:28:52</DateText>
                </FlexWrap>
            </InfomationCard>
        </Container>
    );
};

export default TopSlideSheet;
