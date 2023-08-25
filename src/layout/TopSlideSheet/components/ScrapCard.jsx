import React, { useState } from 'react';
import { styled } from 'styled-components';

import { ReactComponent as SideArrow } from '../../../assets/icons/graySideArrow.svg';
import { ToggleSwitch } from '../../../components';

const Container = styled.div`
    padding: 20px;
    width: 560px;
    height: 332px;
    border-radius: 16px;
    background-color: #f3faff;
`;

const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TitleButton = styled.button`
    display: flex;
    align-items: center;
`;

const Title = styled.p`
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #1f1f1f;
`;

const ToggleWrap = styled.div`
    display: flex;
`;

const ScrapCard = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <Container>
            <TitleWrap>
                <TitleButton>
                    <Title>스크랩</Title>
                    <SideArrow />
                </TitleButton>
                <ToggleSwitch checked={toggle} width={152} leftTitle={'나만보기'} rightTitle={'공유하기'} setToggle={setToggle} />
            </TitleWrap>
        </Container>
    );
};

export default ScrapCard;
