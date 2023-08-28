import React from 'react';
import { styled } from 'styled-components';

const Container = styled.textarea`
    padding: 4px 14px 4px 10px;
    width: 100%;
    height: ${(props) => props.height && `${height}px`};
    border-radius: 8px;
    border: solid 1px rgba(153, 153, 153, 0.2);
    background-color: #fff;
`;

const TextArea = (props) => {
    return <Container>{props.children}</Container>;
};

export default TextArea;
