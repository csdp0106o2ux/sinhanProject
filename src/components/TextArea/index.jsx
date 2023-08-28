import React from 'react';
import { styled } from 'styled-components';

const Container = styled.textarea`
    padding: 4px 14px 4px 10px;
    width: 100%;
    height: ${(props) => props.height && `${props.height}px`};
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
    border-radius: 8px;
    border: solid 1px rgba(153, 153, 153, 0.2);
    background-color: #fff;
    resize: none;
`;

const TextArea = (props) => {
    return (
        <Container className="scrollbar" height={props.height}>
            {props.children}
        </Container>
    );
};

export default TextArea;
