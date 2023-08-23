import React, { useCallback, useRef, useState } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const ContentsWrapper = styled.div`
    width: 1720px;
    height: 94px;
    margin: 20px 31px 53px 60px;
    padding: 20px 40px;
    border-radius: 12px;
    box-shadow: 0 4px 12px 0 rgba(27, 131, 242, 0.1);
    background-color: #f3faff;
    overflow: hidden;
    transition: height 0.35s ease;
`;

const Contents = styled.div`
    font-size: 14px;
    color: red;
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
            if (parentRef.current.clientHeight > 0) {
                parentRef.current.style.height = '0';
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
                <Contents ref={childRef}>sdafasdfsdf</Contents>
            </ContentsWrapper>
        </Container>
    );
};

export default SearchAccodion;
