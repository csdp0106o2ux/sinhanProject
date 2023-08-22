import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    width: 560px;
    height: 277px;
    margin: 20px 31px 10px 20px;
    padding: 20px 20px 20px 20px;
    border-radius: 16px;
    background-color: #f3faff;
`;

const SpaceWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TitleWrap = styled.div`
    display: flex;
`;

const Title = styled.span`
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: ${(props) => props.theme.nero};
`;

const StaffCard = () => {
    return (
        <Container>
            <SpaceWrap>
                <TitleWrap>Good / 소비자보호 우수직원</TitleWrap>
                {/* 이전 / 다음 버튼 추가자리 */}
            </SpaceWrap>
        </Container>
    );
};

export default StaffCard;
