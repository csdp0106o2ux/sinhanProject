import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 336px;
    height: 64px;
    padding: 12px 20px;
    opacity: 0.64;
    border-radius: 12px;
    background-color: ${(props) => (props.checked ? props.theme.white : props.theme.pattensBlue)};
    ${({ checked }) => checked && 'box-shadow: 0 6px 8px 0 rgba(27, 131, 242, 0.2), inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1)'};
`;

const LabelWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.div`
    width: 4px;
    height: 15px;
    margin: 13px 6px 12px 0;
    border-radius: 12px;
    background-color: ${(props) => (props.title === '전체' ? props.theme.dodgerBlue : props.title === '접수' ? props.theme.pacificBlue : props.title === '배정' ? props.theme.fruitSalad : props.title === '조사' ? props.theme.lightningYellow : props.theme.mirage)};
`;

const LabelText = styled.span`
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nero};
`;

const CountWrap = styled.div`
    width: 215px;
    height: 40px;
    margin: 0 0 0 39px;
    padding: 6px 20px 6px 172px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.aliceBlue};
`;

const CountText = styled.span`
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: right;
    color: ${(props) => props.theme.nero};
`;

const CategoryLabel = (props) => {
    return (
        <Container checked={props.checked} onClick={props.onClick}>
            <LabelWrap>
                <Label title={props.title} />
                <LabelText>{props.title}</LabelText>
            </LabelWrap>
            <CountWrap>
                <CountText>{props.num}</CountText>
            </CountWrap>
        </Container>
    );
};

export default CategoryLabel;
