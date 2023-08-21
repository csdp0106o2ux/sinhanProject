import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    width: 175px;
    height: 89px;
    margin: 0 10px 10px;
    padding: 16px 0 16px 20px;
    border-radius: 16px;
    ${({ checked }) => (checked ? 'box-shadow: 0 6px 8px 0 rgba(27, 131, 242, 0.2), inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1), inset 0 13px 6px -10px rgba(255, 255, 255, 0.35);  background-image: linear-gradient(304deg, #a0d0f4 100%, #a0d0f4 100%, #5cb8ff 13%, #3495df -9%);' : 'background-color: rgba(255, 255, 255, 0.9);')};
`;

const Title = styled.span`
    margin-bottom: 4px;
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => (props.checked ? props.theme.white : props.theme.nightRider)};
`;

const TextWrap = styled.div`
    display: flex;
    align-items: end;
`;

const NumText = styled.span`
    font-family: NanumSquareOTFB;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: normal;
    color: ${(props) => (props.checked ? props.theme.white : props.theme.nero)};
`;

const UnitText = styled.span`
    font-family: NanumSquareOTFL;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: normal;
    color: ${(props) => (props.checked ? props.theme.white : props.theme.nero)};
`;

const ScoreCard = (props) => {
    return (
        <Container checked={props.checked} onClick={props.onClick}>
            <Title checked={props.checked}>{props.title}</Title>
            <TextWrap>
                <NumText checked={props.checked}>{props.score}</NumText>
                <UnitText checked={props.checked}>{props.unit}</UnitText>
            </TextWrap>
        </Container>
    );
};

export default ScoreCard;
