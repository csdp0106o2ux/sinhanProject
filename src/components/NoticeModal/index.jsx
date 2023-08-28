import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as CloseButton } from '../../assets/icons/closeModalBtn.svg';
import Table from '../Table';
import DropDown from '../dropDown/DropDown';

const BackView = styled.div`
    padding: 108px 60px 40px 140px;
    width: 1920px;
    height: 100vh;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
`;

const Container = styled.div`
    width: 1720px;
    height: 910px;
    border-radius: 8px;
    background-color: #fff;
`;

const Header = styled.div`
    padding: 15px 20px 14px;
    width: 1720px;
    height: 53px;
    display: flex;
    justify-content: space-between;
    background-color: #3495df;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const HeaderTitle = styled.p`
    font-family: NanumSquareOTFEB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    color: #fff;
`;

const IconButton = styled.button``;

const ContnetsWrap = styled.div`
    width: 1680px;
    height: 364px;
    display: flex;
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: #1f1f1f;
`;

const NoticeModal = () => {
    return (
        <BackView>
            <Container>
                <Header>
                    <HeaderTitle>통지등록</HeaderTitle>
                    <IconButton>
                        <CloseButton />
                    </IconButton>
                </Header>
                <Table redDot title={'통지정보'}>
                    <caption>통지유형</caption>
                    <colgroup>
                        <col width="140px" />
                        <col width="" />
                        <col width="140px" />
                        <col width="" />
                    </colgroup>

                    <tbody>
                        <tr>
                            <th>통지유형</th>
                            <td></td>
                            <th>보고기한</th>
                            <td>
                                <DropDown width={140} title={'2021.11.17'} calender />
                            </td>
                        </tr>
                        <tr>
                            <th>통지의견</th>
                            <td colSpan={3}>
                                <br />
                                <br />
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <th>유의사항</th>
                            <td colSpan={3}>
                                <br />
                                <br />
                                <br />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Table>
                    <caption>통지유형</caption>
                    <colgroup>
                        <col width="86px" />
                        <col width="86px" />
                        <col width="125px" />
                        <col width="" />
                        <col width="131px" />
                        <col width="131px" />
                        <col width="131px" />
                        <col width="131px" />
                        <col width="131px" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>상태</th>
                            <th>상태</th>
                            <th>상태</th>
                            <th>상태</th>
                            <th>상태</th>
                            <th>상태</th>
                            <th>상태</th>
                            <th>상태</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </BackView>
    );
};

export default NoticeModal;
