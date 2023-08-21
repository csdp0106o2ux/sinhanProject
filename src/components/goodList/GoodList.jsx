import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    width: 520px;
    height: 33px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 0 0 #ededed;
    background-color: rgba(255, 255, 255, 0);
`;

const ListText = styled.span`
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const GoodList = () => {
    return (
        <Container>
            <ListText>빠른 업무처리에 대한 고객들의 반응이 좋아요~!</ListText>
        </Container>
    );
};

export default GoodList;
