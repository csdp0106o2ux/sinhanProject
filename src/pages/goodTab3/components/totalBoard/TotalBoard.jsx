import React from 'react';
import { styled } from 'styled-components';
import BoardList from '../boardList/BoardList';

import { ReactComponent as CheckFalse } from '../../../../assets/icons/checkBoxFalse.svg';
import { ReactComponent as CheckTrue } from '../../../../assets/icons/checkBoxTrue.svg';

const Container = styled.div`
    width: 1720px;
    height: 423px;
    border-radius: 12px;
    box-shadow: 0 -4px 12px 0 rgba(27, 131, 242, 0.1);
    background-color: #fff;
`;

const TitleWrap = styled.div`
    padding: 0 6px;
    width: 100%;
    height: 41px;
    display: flex;
    align-items: center;
    background-color: #f7f8fa;
`;

const ContentsText = styled.p`
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #555;
    ${({ marginLeft }) => marginLeft && 'margin-top: 3px;'}
`;

const TotalBoard = (props) => {
    return (
        <Container>
            <TitleWrap>
                {props.checked ? <CheckTrue /> : <CheckFalse />}
                <ContentsText marginLeft>진행상태</ContentsText>
            </TitleWrap>
            <BoardList />
        </Container>
    );
};

export default TotalBoard;
