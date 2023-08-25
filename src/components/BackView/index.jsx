import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    width: 1920px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
`;

const BackView = (props) => {
    return <Container>{props.children}</Container>;
};

export default BackView;
