import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageWrap = styled.div`
    margin-bottom: 10px;
    position: relative;
`;

const StaffImage = styled.img`
    width: 115px;
    height: 128px;
    margin: 0 0 10px;
    padding: 102px 30px 0 29px;
    object-fit: contain;
`;

const StaffTitleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 6px;
    border-radius: 2px;
    background-color: ${(props) => (props.title === '우수사원' ? props.theme.lightningYellow : props.title === '우수고객중심리더' ? props.theme.nightDodgerBlue : props.title === '숨은HERO' && props.theme.shamrock)};
`;

const StaffTitle = styled.span`
    font-family: NanumSquareOTFEB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
`;

const StaffName = styled.span`
    margin-bottom: 6px;
    font-family: OneShinhan;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: ${(props) => props.theme.nero};
`;

const StaffArea = styled.span`
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: ${(props) => props.theme.dimGray};
`;

const StaffImageCard = (props) => {
    return (
        <Container>
            <ImageWrap>
                <StaffImage />
                <StaffTitleWrap>
                    <StaffTitle>{props.title}</StaffTitle>
                </StaffTitleWrap>
            </ImageWrap>
            <StaffName>{props.name}</StaffName>
            <StaffArea>{props.area}</StaffArea>
        </Container>
    );
};

export default StaffImageCard;
