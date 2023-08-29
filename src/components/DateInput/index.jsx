import React from 'react';
import { styled } from 'styled-components';

import Calender from '../../assets/images/calender.png';

const Wrap = styled.div`
    position: relative;
`;

const Input = styled.input`
    appearance: none;
    padding: 4px 0 5px 10px;
    width: ${(props) => (props.width ? `${props.width}` : '140px')};
    height: 30px;
    border-radius: 8px;
    border: solid 1px rgba(153, 153, 153, 0.2);
    background-color: ${(props) => (props.disabled ? props.theme.whiteSmoke : props.theme.white)};
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const IconWrap = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    top: 0.6px;
    right: 0.2px;
    background: url(${Calender}) no-repeat 100% 50%;
    z-index: 2;
`;

const DateInput = (props) => {
    return (
        <Wrap>
            <Input disabled={props.disabled} width={props.width} type="date" id="date" max="2077-06-20" min="2021-11-17" value="2021-11-17" />
            {props.disabled && <IconWrap />}
        </Wrap>
    );
};

export default DateInput;
