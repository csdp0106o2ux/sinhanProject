import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as UnderArrow } from '../../assets/icons/dropDownUnderArrow.svg';
import { ReactComponent as Calender } from '../../assets/icons/dropDownCalender.svg';

const Container = styled.div`
    padding: 6px 0 6px 10px;
    width: ${(props) => props.width}px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px rgba(52, 149, 223, 0.2);
    border-radius: 8px;
`;

const Title = styled.span`
    font-family: NanumSquareOTFB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.lightDimGray};
`;

const DropDown = (props) => {
    return (
        <Container width={props.width}>
            <Title>{props.title}</Title>
            {props.calender ? <Calender /> : <UnderArrow />}
        </Container>
    );
};

export default DropDown;
