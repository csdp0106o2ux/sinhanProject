import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 41px;
    display: flex;
`;

const StatusTitle = styled.span`
    font-family: NanumSquareOTFEB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.pacificBlue};
`;

const BoardList = (props) => {
    return (
        <Container>
            <StatusTitle>임시보류</StatusTitle>
        </Container>
    );
};

export default BoardList;
