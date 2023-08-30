import React, { useEffect, useState } from 'react';
import { css, keyframes, styled } from 'styled-components';

import Table from '../../components/Table';
import CloseBtn from '../../assets/images/closeModalBtn.png';
import Radio from '../../components/Radio';
import { BlueBtn } from '../../components';

const fadeIn = keyframes`
        0% {
            transform: translateY(400px);
        }
        100% {
            transform: translateY(0px);
        }
`;

const fadeOut = keyframes`
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(600px);
        }
`;

const modalSettings = (openBottomSlide) => css`
    animation: slide 1s ease;
    visibility: ${openBottomSlide ? 'visible' : 'hidden'};
    z-index: 15;
    animation: ${openBottomSlide ? fadeIn : fadeOut} 0.7s ease;
    transition: visibility 0.7s ease;
`;

const BackView = styled.div`
    /* padding: 108px 60px 40px 140px; */
    width: 1920px;
    height: 100%;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
`;

const Container = styled.div`
    margin-left: 80px;
    position: fixed;
    bottom: 0;
    width: 1840px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #fff;

    ${(props) => modalSettings(props.openBottomSlide)}
`;

const Header = styled.div`
    padding: 13px 60px 12px;
    width: 1839px;
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

const IconButton = styled.button`
    width: 24px;
    height: 24px;
    background: url(${CloseBtn}) no-repeat 100% 50%;
`;

const Wrapper = styled.div`
    padding: 20px 60px;
`;

const TableText = styled.p`
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #555;
`;

const BottomWrap = styled.div`
    padding: 10px 60px 10px 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 -6px 6px 0 rgba(0, 66, 136, 0.03);
    background-color: #fdfdfd;
`;

const BottomSlideSheet = ({ openBottomSlide, setOpenBottomSlide }) => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = (e) => {
        document.body.style.overflow = 'hidden';
    };

    const hideModal = (e) => {
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        let timeoutId;
        if (openBottomSlide) {
            setIsOpen(true);
            showModal();
        } else {
            timeoutId = setTimeout(() => {
                hideModal();
                setIsOpen(false);
            }, 400);
        }

        return () => {
            if (timeoutId !== undefined) {
                clearTimeout(timeoutId);
            }
        };
    }, [openBottomSlide]);

    if (!isOpen) {
        return null;
    }

    return (
        <BackView>
            <Container openBottomSlide={openBottomSlide}>
                <Header>
                    <HeaderTitle>민원/ VOC 이력</HeaderTitle>
                    <IconButton
                        onClick={() => {
                            setOpenBottomSlide(!openBottomSlide);
                        }}
                    />
                </Header>
                <Wrapper>
                    <Table center>
                        <caption>민원/ VOC 이력</caption>
                        <colgroup>
                            <col width="44px" />
                            <col width="125px" />
                            <col width="80px" />
                            <col width="" />
                            <col width="116px" />
                            <col width="116px" />
                            <col width="290px" />
                            <col width="105px" />
                        </colgroup>

                        <thead>
                            <tr>
                                <th></th>
                                <th>접수번호</th>
                                <th>고객명</th>
                                <th>제목</th>
                                <th>접수일시</th>
                                <th>처리일시</th>
                                <th>통지부서</th>
                                <th>처리담당자</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="center">
                                    <Radio id={'check01'} name={'check'} width={24} height={24} />
                                </td>
                                <td className="center">
                                    <TableText>V202110234</TableText>
                                </td>
                                <td className="center">
                                    <TableText>김신한</TableText>
                                </td>
                                <td>
                                    <TableText>유동성 거래내역조회 발급에 대한 수수료 징수</TableText>
                                </td>
                                <td className="center">
                                    <TableText>2021.12.20</TableText>
                                </td>
                                <td className="center">
                                    <TableText>2021.12.25</TableText>
                                </td>
                                <td></td>
                                <td className="center">
                                    <TableText>홍길동</TableText>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Radio id={'check02'} name={'check'} width={24} height={24} />
                                </td>
                                <td className="center">
                                    <TableText>V202110234</TableText>
                                </td>
                                <td className="center">
                                    <TableText>김신한</TableText>
                                </td>
                                <td>
                                    <TableText>퇴직금연금 매수매도 문의</TableText>
                                </td>
                                <td className="center">
                                    <TableText>2021.11.05</TableText>
                                </td>
                                <td className="center">
                                    <TableText>2021.11.18</TableText>
                                </td>
                                <td></td>
                                <td className="center">
                                    <TableText>홍길동</TableText>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Radio id={'check03'} name={'check'} width={24} height={24} />
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <Radio id={'check04'} name={'check'} width={24} height={24} />
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <Radio id={'check05'} name={'check'} width={24} height={24} />
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <Radio id={'check06'} name={'check'} width={24} height={24} />
                                </td>
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
                </Wrapper>
                <BottomWrap>
                    <BlueBtn paddingSide={20} title="민원/VOC이력 조회" />
                </BottomWrap>
            </Container>
        </BackView>
    );
};

export default BottomSlideSheet;
