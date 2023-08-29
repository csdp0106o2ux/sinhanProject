import { styled } from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 1920px;
    height: 100%;
    background-color: #f6f7fb;
`;

const Wrapper = styled.div`
    padding: 30px 60px 0 140px;
`;

const FlexWrap = styled.div`
    display: flex;
    align-items: flex-end;
`;

const CheckBoxWrap = styled.div`
    display: flex;
    align-items: center;
`;

const CheckBoxText = styled.label`
    font-family: NanumSquareOTFR;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    color: #555;
`;

const CheckBox = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
`;

const TableWrap = styled.div`
    margin-bottom: 40px;
`;

export { Container, Wrapper, FlexWrap, CheckBoxWrap, CheckBox, CheckBoxText, TableWrap };
