import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    /* padding: 2px 12px 2px 2px; */
    width: ${({ width }) => (width ? `${width}px` : '0px')};
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.theme.lightAliceBlue};
    border-radius: 8px;
`;

const ToggleWrap = styled.div`
    /* display: ${(props) => (props.checked ? 'block' : 'none')}; */
    display: flex;
    align-items: center;
    height: 24px;
    border-radius: 8px;
    background-color: ${(props) => (props.checked ? props.theme.white : props.theme.lightAliceBlue)};
`;

const ToggleText = styled.span`
    padding: 2px 10px 1px;
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => (props.checked ? props.theme.summerSky : props.theme.nightRider)};
`;

const ToggleSwitch = () => {
    return (
        <Container width={120}>
            <ToggleWrap checked>
                <ToggleText checked>Best</ToggleText>
            </ToggleWrap>
            <ToggleWrap>
                <ToggleText>Worst</ToggleText>
            </ToggleWrap>
        </Container>
    );
};

export default ToggleSwitch;
