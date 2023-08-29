import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as Calender } from '../../assets/icons/dropDownCalender.svg';

const Wrap = styled.div`
    position: relative;
`;

const Input = styled.input`
    appearance: none;
    padding: 4px 0 5px 10px;
    width: 140px;
    height: 30px;
    border-radius: 8px;
    border: solid 1px rgba(153, 153, 153, 0.2);
    background-color: #fff;
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const DateInput = () => {
    return (
        <Wrap>
            <Input type="date" id="date" max="2077-06-20" min="2021-11-17" value="2021-11-17" />
        </Wrap>
    );
};

export default DateInput;
