import React from 'react';
import { styled } from 'styled-components';
import CheckOn from '../../assets/images/checkBoxOn.png';
import CheckOff from '../../assets/images/checkBoxOff.png';

const Wrap = styled.div``;

const Label = styled.label`
    /* font-style: normal !important;
    font-variant-ligatures: normal !important;
    font-variant-caps: normal !important;
    line-height: 0 !important;
    color: transparent !important;
    text-shadow: none !important;
    background-color: transparent !important;
    border: 0 !important;
    z-index: -1;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    position: absolute; */
`;

const CheckInput = styled.input`
    appearance: none;
    width: 24px;
    height: 24px;
    background: url(${CheckOff}) no-repeat 100% 100% / cover;
    &:checked {
        background: url(${CheckOn}) no-repeat 100% 100% / cover;
        & + ${Label} {
            color: red;
            font-weight: 700;
        }
    }
`;

const Checkbox = (props) => {
    return (
        <Wrap>
            <CheckInput type="checkbox" name={props.name} id={props.id}></CheckInput>
            <Label htmlFor={props.id}>asdasd</Label>
        </Wrap>
    );
};

export default Checkbox;
