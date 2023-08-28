import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as CloseButton } from '../../assets/icons/closeModalBtn.svg';

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
            </Container>
        </BackView>
    );
};

export default NoticeModal;
