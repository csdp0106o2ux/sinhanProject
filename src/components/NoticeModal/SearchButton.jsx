import React from 'react';
import { styled } from 'styled-components';

const Container = styled.button`
    padding: 8px 20px;
    height: 34px;
    border-radius: 8px;
    border: solid 1.5px #dbdbdb;
    background-color: #fdfdfd;
`;

const Title = styled.p`
    font-family: NanumSquareOTFEB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #3495df;
`;

const SearchButton = (props) => {
    return (
        <Container>
            <Title>{props.title}</Title>
        </Container>
    );
};

export default SearchButton;
