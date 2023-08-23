import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as CheckFalse } from '../../../../assets/icons/checkBoxFalse.svg';
import { ReactComponent as CheckTrue } from '../../../../assets/icons/checkBoxTrue.svg';
import { ReactComponent as SideArrow } from '../../../../assets/icons/checkSideArrow.svg';

const Container = styled.div`
    padding: 0 6px;
    width: 1720px;
    height: 41px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 0 0 rgba(219, 219, 219, 0.5);
    background-color: ${(props) => (props.checked ? props.theme.aliceBlue : ' rgba(216, 216, 216, 0)')};
`;

const StatusTitle = styled.span`
    font-family: NanumSquareOTFEB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => (props.status === '접수' ? props.theme.pacificBlue : props.status === '배정' ? props.theme.fruitSalad : props.status === '조사' ? props.theme.lightningYellow : props.status === '종결' && props.theme.mirage)};
`;

const ContentsText = styled.span`
    ${({ flex }) => flex && `flex: ${flex}`};
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #555;
`;

const BoardList = (props) => {
    return (
        <Container checked={props.checked}>
            {props.checked ? <CheckTrue /> : <CheckFalse />}
            <StatusTitle status={props.status}>접수</StatusTitle>
            <ContentsText flex={1}>V202110234</ContentsText>
            <ContentsText flex={1}>불만 {'>'} 사전예고</ContentsText>
            <ContentsText flex={1}>2021-12-20</ContentsText>
            <ContentsText flex={1}>판교테크노벨리</ContentsText>
            <ContentsText flex={1}>김오투</ContentsText>
            <ContentsText flex={1}>유동성거래내역조회 발급에 대한 수수료 징수건 처리요</ContentsText>
            <ContentsText flex={1}>
                여신{'>'}대출신청{'>'}상이
            </ContentsText>
            <ContentsText flex={1}>최저생계비, 개인회생, 대출부결, 추심요</ContentsText>
            <ContentsText flex={1}>중/반복</ContentsText>
            <ContentsText flex={1}>0</ContentsText>
            <ContentsText flex={1}>김오투</ContentsText>
            <SideArrow />
        </Container>
    );
};

export default BoardList;
