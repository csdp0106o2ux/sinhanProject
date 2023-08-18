import { styled } from 'styled-components';

const Container = styled.div`
    padding: 98px 60px 20px 140px;
    width: 100%;
    height: 100%;
`;

const BoardTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FlexWrap = styled.div`
    display: flex;
`;

const BoardTitle = styled.span`
    ${(props) => props.right && 'margin-left: 20px'};
    font-family: 'OneShinhan';
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.54;
    letter-spacing: normal;
    color: ${(props) => (props.checked ? props.theme.lightPacificBlue : props.theme.blackPearl)};
`;

const BannerWrap = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 560px;
    height: 40px;
    padding: 10px 20px 9px 50px;
    border-radius: 50px;
    box-shadow: 0 0 5px 0 rgba(27, 131, 242, 0.2);
    background-color: ${(props) => props.theme.white};
`;

const BannerText = styled.span`
    font-family: 'NanumSquareOTFR';
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.blackPearl};
`;

const IconWrap = styled.div`
    position: absolute;
    left: -5px;
`;

export { Container, BoardTitleWrap, FlexWrap, BoardTitle, BannerWrap, BannerText, IconWrap };
