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

const BottomTabWrap = styled.div`
    margin-left: 73px;
    padding: 10px 60px 10px 70px;
    width: 1850px;
    height: 64px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -6px 6px 0 rgba(0, 66, 136, 0.03);
    background-color: #fdfdfd;
`;

const BtnWrap = styled.button`
    margin-right: ${(props) => (props.marginRight ? `0px` : '6px')};
    padding: 6px 0;
    width: ${(props) => (props.width ? `${props.width}px` : '132px')};
    height: 44px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    border: solid 1.5px ${(props) => (props.notification ? '#3495df' : '#dbdbdb')};
    background-color: ${(props) => (props.notification ? 'rgba(52, 149, 223, 0.1);' : '#fdfdfd')};
`;

const BtnText = styled.p`
    font-family: NanumSquareOTFEB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: ${(props) => (props.gray ? '#555' : '#3495df')};
`;

const SpaceWrap = styled.div`
    display: flex;
`;

const LabelText = styled.label`
    margin-right: ${(props) => props.marginRight && `${props.marginRight}px`};
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const UnitText = styled.p`
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const Title = styled.p`
    margin-bottom: 10px;
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #1f1f1f;
`;

const SearchWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const LabelWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DataWrap = styled.div`
    margin-bottom: 40px;
    padding: 20px 20px 0;
    height: 597px;
    border-radius: 8px;
    box-shadow: 0 -1px 0 0 #ededed;
    background-color: #fdfdfd;
`;

const StepText = styled.p`
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #555;
`;

export { Container, Wrapper, FlexWrap, CheckBoxWrap, CheckBox, CheckBoxText, TableWrap, BottomTabWrap, BtnWrap, BtnText, SpaceWrap, LabelText, UnitText, Title, SearchWrap, LabelWrap, DataWrap, StepText };
