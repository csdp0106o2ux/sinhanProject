import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as CloseButton } from '../../assets/icons/closeBlueBtn.svg';

const Container = styled.div`
    padding: 4px 11px 5px 10px;
    width: 184px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    border: solid 1px rgba(153, 153, 153, 0.2);
    background-color: #fff;
`;

const Title = styled.p`
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const CancelBtn = styled.button``;

const CenterLabel = (props) => {
    return (
        <Container>
            <Title>{props.title}</Title>
            <CancelBtn>
                <CloseButton />
            </CancelBtn>
        </Container>
    );
};

export default CenterLabel;
