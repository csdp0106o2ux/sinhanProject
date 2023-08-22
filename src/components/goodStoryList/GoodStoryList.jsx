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

const ListTitle = styled.span`
    flex: 1;
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nightRider};
`;

const ListTextWrap = styled.div`
    flex: 2;
    display: inline-block;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ListText = styled.span`
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nightRider};
`;

const GoodStoryList = (props) => {
    return (
        <Container>
            <ListTitle>{props.area}</ListTitle>
            <ListTextWrap>
                <ListText>{props.text}</ListText>
            </ListTextWrap>
        </Container>
    );
};

export default GoodStoryList;
