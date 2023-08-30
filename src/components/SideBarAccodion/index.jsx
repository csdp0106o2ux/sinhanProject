import React, { useCallback, useRef, useState } from 'react';
import { styled } from 'styled-components';

import { ReactComponent as UnderArrow } from '../../assets/icons/dropDownUnderArrow.svg';

const Container = styled.div`
    padding: 7px 0px;
    margin-bottom: 6px;
    width: 280px;
    height: 38px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.white};
    overflow: hidden;
    transition: height 0.35s ease;

    &:hover {
        background-color: ${(props) => props.theme.whiteSmoke};
    }
`;

const PaddingWrap = styled.div`
    padding: 0 16px 0 28px;
`;

const MiddleWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const IconWrap = styled.div`
    display: flex;
`;

const Icon = styled.div`
    opacity: 0.4;

    ${Container}:hover & {
        opacity: 1;
    }
`;

const Title = styled.span`
    margin-left: 13px;
    font-family: NanumSquareOTFEB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => (props.checked ? props.theme.lightPacificBlue : props.theme.dimGray)};

    ${Container}:hover & {
        color: ${(props) => props.theme.lightPacificBlue};
    }
`;

const ArrowIcon = styled(UnderArrow)`
    ${({ checked }) => checked && 'transform: rotate(180deg)'}
    color: ${(props) => (props.checked ? props.theme.lightPacificBlue : props.theme.lightDimGray)};
`;

const ContentsWrap = styled.div`
    padding-left: 40px;
    background-color: #fff;
`;

const ContentsText = styled.p`
    padding-left: 24px;
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #555;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: ${(props) => props.theme.whisper};
`;

// ArrowIcon 원 색상은 #727272

const SideBarAccodion = (props) => {
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const [isCollapse, setIsCollapse] = useState();

    const handlerCollapse = useCallback(
        (event) => {
            event.stopPropagation();
            if (parentRef.current === null || childRef.current === null) {
                return;
            }
            if (parentRef.current.clientHeight > 38) {
                parentRef.current.style.height = '38px';
            } else {
                parentRef.current.style.height = `${childRef.current.clientHeight}px`;
            }
            setIsCollapse(!isCollapse);
        },
        [isCollapse]
    );

    return (
        <Container ref={parentRef} onClick={handlerCollapse}>
            <PaddingWrap>
                <MiddleWrap>
                    <IconWrap>
                        <Icon>{props.icon}</Icon>
                        <Title checked={props.checked} style={{ display: props.hover ? 'block' : 'none' }}>
                            {props.title}
                        </Title>
                    </IconWrap>
                    <ArrowIcon checked={props.checked} />
                </MiddleWrap>
            </PaddingWrap>
            <ContentsWrap ref={childRef}>
                <ContentsText>test</ContentsText>
                <ContentsText>test</ContentsText>
                <ContentsText>test</ContentsText>
                <ContentsText>test</ContentsText>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
            </ContentsWrap>
        </Container>
    );
};

export default SideBarAccodion;
