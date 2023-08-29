import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as UnderArrow } from '../../assets/icons/dropDownUnderArrow.svg';
import { ReactComponent as Calender } from '../../assets/icons/dropDownCalender.svg';

const Container = styled.div`
    margin-right: ${({ marginRight }) => (marginRight ? `${marginRight}px` : '0px')};
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 6px;
    font-family: NanumSquareOTFB;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const Wrapper = styled.select`
    margin-right: ${(props) => (props.margin ? '4px' : '0px')};
    padding: 6px 0 6px 10px;
    width: ${(props) => props.width}px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px rgba(52, 149, 223, 0.2);
    border-radius: 8px;
    background-color: ${(props) => props.theme.white};
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
        <Container marginRight={props.marginRight}>
            {props.label && <Label>{props.label}</Label>}
            <Wrapper width={props.width} margin={props.margin}>
                {props.children}
                {props.calender ? <Calender /> : <UnderArrow />}
            </Wrapper>
        </Container>
    );
};

export default DropDown;
