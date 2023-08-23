import React, { useCallback, useRef, useState } from 'react';
import { styled } from 'styled-components';

import TextInput from '../../../../components/textInput/TextInput';
import { DropDown } from '../../../../components';
import { ReactComponent as Refresh } from '../../../../assets/icons/refresh.svg';
import { ReactComponent as UnderArrow } from '../../../../assets/icons/collapseArrow.svg';

const Container = styled.div`
    position: relative;
    display: flex;
`;

const ContentsWrapper = styled.div`
    padding: 20px 40px;
    width: 1720px;
    height: 94px;
    border-radius: 12px;
    box-shadow: 0 4px 12px 0 rgba(27, 131, 242, 0.1);
    background-color: #f3faff;
    overflow: hidden;
    transition: height 0.35s ease;
`;

const DefaultWrap = styled.div`
    display: flex;
    align-items: end;
`;

const DefaultButtonWrap = styled.div`
    position: absolute;
    right: 40px;
    bottom: 22px;
    display: flex;
    align-items: center;
`;

const RefreshWrap = styled.div`
    display: flex;
    align-items: center;
`;

const RefreshButton = styled.button`
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #555;
`;

const GreyLine = styled.div`
    width: 1px;
    height: 17px;
    margin: 10px 10px 9px;
    background-color: #dbdbdb;
`;

const SearchButton = styled.button`
    margin-right: 6px;
    width: 70px;
    height: 36px;
    border-radius: 8px;
    box-shadow: 0 6px 8px 0 rgba(27, 131, 242, 0.2), inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1), inset 0 13px 6px -10px rgba(255, 255, 255, 0.35);
    background-image: linear-gradient(304deg, #a0d0f4 100%, #a0d0f4 100%, #5cb8ff 13%, #3495df -9%);
    font-family: NanumSquareOTFEB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #fff;
`;

const CollapseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    box-shadow: 0 1px 1px 0 rgba(27, 131, 242, 0.2), inset 0 0 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 4px -1px rgba(255, 255, 255, 0.35);
    background-color: #fff;
`;

const Contents = styled.div`
    height: 242px;
`;

const MiddleWrap = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: end;
`;

const LastWrap = styled.div`
    display: flex;
    align-items: end;
`;

const UnderArrowIcon = styled(UnderArrow)`
    ${({ checked }) => checked && 'transform: rotate(180deg)'}
`;

const SearchAccodion = () => {
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const [isCollapse, setIsCollapse] = useState(false);

    const handlerCollapse = useCallback(
        (event) => {
            event.stopPropagation();
            if (parentRef.current === null || childRef.current === null) {
                return;
            }
            if (parentRef.current.clientHeight > 94) {
                parentRef.current.style.height = '94px';
            } else {
                parentRef.current.style.height = `${childRef.current.clientHeight}px`;
            }
            setIsCollapse(!isCollapse);
        },
        [isCollapse]
    );

    //   const parentRefHeight = parentRef.current?.style.height ?? "0px";
    //   const buttonText = parentRefHeight === "0px" ? "열기" : "닫기";

    return (
        <Container>
            <ContentsWrapper ref={parentRef}>
                <DefaultWrap>
                    <TextInput marginRight={40} label={'접수번호'} />
                    <DropDown marginRight={4} width={118} label={'업무구분'} title={'전체'} />
                    <DropDown marginRight={40} width={118} title={'전체'} />
                    <TextInput marginRight={40} label={'고객명'} />
                    <TextInput marginRight={40} label={'제목'} />
                    <DropDown marginRight={4} width={118} calender label={'등록일'} title={'2022.02.01'} />
                    <DropDown width={118} calender title={'2022.02.01'} />
                </DefaultWrap>
                <DefaultButtonWrap>
                    <RefreshWrap>
                        <Refresh />
                        <RefreshButton>초기화</RefreshButton>
                        <GreyLine />
                    </RefreshWrap>
                    <SearchButton>조회</SearchButton>
                    <CollapseButton onClick={handlerCollapse}>
                        <UnderArrowIcon checked={isCollapse} />
                    </CollapseButton>
                </DefaultButtonWrap>
                <Contents ref={childRef}>
                    <MiddleWrap>
                        <DropDown marginRight={162} width={118} label={'전이/중복'} title={'전체'} />
                        <DropDown marginRight={162} width={118} label={'접수채널'} title={'전체'} />
                        <DropDown marginRight={162} width={118} label={'접수경로'} title={'전체'} />
                        <TextInput marginRight={40} label={'발생점명'} />
                        <DropDown marginRight={4} width={118} calender label={'완료예정일'} title={'2022.02.01'} />
                        <DropDown marginRight={40} width={118} calender title={'2022.02.01'} />
                        <TextInput label={'담당자'} />
                    </MiddleWrap>
                    <LastWrap>
                        <DropDown marginRight={4} width={118} label={'업무유형'} title={'전체'} />
                        <DropDown marginRight={4} width={118} title={'전체'} />
                        <DropDown marginRight={4} width={118} title={'전체'} />
                        <DropDown marginRight={76} width={118} title={'전체'} />
                        <DropDown marginRight={4} width={118} label={'감정유형'} title={'전체'} />
                        <DropDown marginRight={4} width={118} title={'전체'} />
                        <DropDown marginRight={4} width={118} title={'전체'} />
                        <DropDown marginRight={76} width={118} title={'전체'} />
                        <TextInput label={'키워드'} />
                    </LastWrap>
                </Contents>
            </ContentsWrapper>
        </Container>
    );
};

export default SearchAccodion;
