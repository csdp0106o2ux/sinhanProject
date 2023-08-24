import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as UnderArrow } from '../../assets/icons/dropDownUnderArrow.svg';

const Container = styled.div`
    padding: 0 16px 0 21px;
    width: 280px;
    height: 38px;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.white};
    overflow: hidden;
    transition: height 0.35s ease;

    &:hover {
        background-color: ${(props) => props.theme.whiteSmoke};
    }
`;

const IconWrap = styled.div`
    display: flex;
`;

const Title = styled.span`
    font-family: NanumSquareOTFEB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #0094de;
`;

const ArrowIcon = styled(UnderArrow)`
    ${({ checked }) => checked && 'transform: rotate(180deg)'}
`;

const SideBarAccodion = () => {
    return (
        <Container>
            <IconWrap>
                {props.icon}
                <Title>{props.title}</Title>
            </IconWrap>
            <ArrowIcon />
        </Container>
    );
};

export default SideBarAccodion;
