import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    width: 1839px;
    height: 105px;
    padding: 20px 59px 20px 60px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 2px 2px 0 var(--black-4);
    background-color: #fdfdfd;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const RowWrap = styled.div`
    display: flex;
`;

const Title = styled.p`
    font-family: NanumSquareOTFR;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const InfoWrap = styled.div`
    width: 1498px;
    height: 41px;
    margin: 24px 10px 0 0;
    border-radius: 8px;
    border: solid 1px #ebebeb;
    background-color: #fff;
`;

const InfoText = styled.p`
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const CustomerHeader = () => {
    return (
        <Container>
            <Wrapper></Wrapper>
        </Container>
    );
};

export default CustomerHeader;
