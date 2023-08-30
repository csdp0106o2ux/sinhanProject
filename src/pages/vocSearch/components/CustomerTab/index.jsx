import React from 'react';
import { styled } from 'styled-components';

import UnderImg from '../../../../assets/images/dUnderArrow.png';

const Container = styled.div`
    margin-left: 80px;
    padding-top: 20px;
    padding-left: 60px;
    width: 1839px;
    height: 105px;
    position: fixed;
    top: 69px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0 2px 2px 0 var(--black-4);
    background-color: #fdfdfd;
    z-index: 97;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;

const TableMain = styled.table`
    width: 1498px;
    height: 54px;
    tbody {
        border: solid 1px #ebebeb;
        background-color: #fff;
        border-radius: 8px;
        td {
            padding: 10px 0 10px 30px;
            height: 41px;
            font-family: NanumSquareOTFB;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: #333;
            word-break: keep-all;
            text-align: left;
            display: '';
        }
    }
    thead {
        th {
            padding-left: 30px;
            padding-bottom: 6px;
            font-family: NanumSquareOTFR;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: #333;
            word-break: keep-all;
            text-align: left;
        }
    }
`;

const UnderBtn = styled.button`
    margin-left: 10px;
    width: 41px;
    height: 41px;
    background: url(${UnderImg}) no-repeat 50% 50%;
    border-radius: 8px;
    box-shadow: 0 1px 1px 0 rgba(27, 131, 242, 0.2), inset 0 0 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 4px -1px rgba(255, 255, 255, 0.35);
    background-color: #fff;
`;

const BlueBtn = styled.button`
    margin-left: 40px;
    padding: 10px 40px;
    border-radius: 8px;
    box-shadow: 0 6px 8px 0 rgba(52, 149, 223, 0.2);
    background-color: #3495df;
    font-family: NanumSquareOTFEB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
`;

const CustomerTab = (props) => {
    return (
        <Container>
            <Wrapper>
                <TableMain>
                    <thead>
                        <th>고객명</th>
                        <th>고객번호</th>
                        <th>고객등급</th>
                        <th>생년월일</th>
                        <th>직업</th>
                        <th>성별</th>
                        <th>연락처</th>
                        <th>이메일</th>
                        <th>주소</th>
                    </thead>
                    <tbody>
                        <td>전푸르름해</td>
                        <td>495878303</td>
                        <td>Tops Club</td>
                        <td>1975.02.28</td>
                        <td>이비인후과 의사</td>
                        <td>여자</td>
                        <td>010-1234-5678</td>
                        <td>wabcdefghijklmnopqrstu@gmail.com</td>
                        <td>서울 강남구 언주로 514</td>
                    </tbody>
                </TableMain>
                <UnderBtn />
                <BlueBtn onClick={props.onClick}>고객조회</BlueBtn>
            </Wrapper>
        </Container>
    );
};

export default CustomerTab;
