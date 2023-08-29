import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    width: 163px;
    height: 61px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${(props) => (props.checked ? props.theme.summerSky : props.theme.solitude)};
`;

const Title = styled.p`
    font-family: NanumSquareOTFEB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    text-align: center;
    color: ${(props) => (props.checked ? props.theme.white : props.theme.nightRider)};
`;

const SearchLabel = (props) => {
    return (
        <Container checked={props.checked} onClick={props.onClick}>
            <Title checked={props.checked}>{props.title}</Title>
        </Container>
    );
};

export default SearchLabel;
