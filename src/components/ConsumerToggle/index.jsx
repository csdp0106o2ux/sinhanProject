import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    width: 248px;
    height: 38px;
    display: flex;
    padding: 4px 28px 4px 4px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.grayAliceBlue};
`;

const LabelWrap = styled.div`
    width: 115px;
    height: 30px;
    padding: 7px 23px 7px 24px;
    border-radius: 8px;
    ${(props) => props.checked && `box-shadow: 0 2px 7px 0 rgba(27, 131, 242, 0.3), inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1), inset 0 13px 6px -10px rgba(255, 255, 255, 0.35);`}
    ${(props) => props.checked && `background-image: linear-gradient(284deg, #a0d0f4 114%, #5cb8ff 72%, #5bb4f8 0%), radial-gradient(circle at 79% 65%, #3da0f0, #2d90f9 59%, #1e54b3 193%);`}
`;

const LabelText = styled.span`
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${(props) => (props.checked ? props.theme.white : props.theme.dimGray)};
`;

const ConsumerToggle = (props) => {
    return (
        <Container>
            <LabelWrap checked={props.checked}>
                <LabelText checked={props.checked}>소비자 보호</LabelText>
            </LabelWrap>
            <LabelWrap checked={props.checked}>
                <LabelText checked={props.checked}>소비자 지원</LabelText>
            </LabelWrap>
        </Container>
    );
};

export default ConsumerToggle;
