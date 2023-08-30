import React from 'react';
import { styled } from 'styled-components';

import RadioOff from '../../assets/images/radioOff.png';
import RadioOn from '../../assets/images/radioOn.png';

const Wrap = styled.div`
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    /* margin-left: 2px; */
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #555;
`;

const RadioInput = styled.input`
    appearance: none;
    width: ${(props) => (props.width ? `${props.width}px` : '24px')};
    height: ${(props) => (props.height ? `${props.height}px` : '24px')};
    background: url(${RadioOff}) no-repeat 50% 50%;
    &:checked {
        background: url(${RadioOn}) no-repeat 50% 50%;
        & + ${Label} {
            font-weight: 700;
        }
    }
`;

const Radio = (props) => {
    return (
        <Wrap>
            <RadioInput type="radio" name={props.name} id={props.id} checked={props.checked} width={props.width} height={props.height}></RadioInput>
            <Label htmlFor={props.id}>{props.label}</Label>
        </Wrap>
    );
};

export default Radio;
