import { styled } from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 1920px;
    height: 100vh;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.2);
    background-image: linear-gradient(to bottom, rgba(202, 237, 250, 0) 0%, #caedfa 100%);
`;

const Wrapper = styled.div`
    padding: 98px 60px 20px 140px;
`;

const BoardTitleWrap = styled.div`
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
`;

const FlexWrap = styled.div`
    display: flex;
`;

const GraphWrap = styled.div`
    margin-top: 10px;
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
    font-family: NanumSquareOTFR;
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

const DropDownWrap = styled.div`
    margin-bottom: 42px;
    display: flex;
    align-items: center;
`;

const DropDownText = styled.span`
    margin-right: 10px;
    font-family: NanumSquareOTFB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.dimGray};
`;

const ScoreWrap = styled.div`
    padding: 20px;
    border-radius: 16px;
    background-color: #f3faff;
    width: 1140px;
    height: 660px;
`;

const NoticeWrap = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

export { Container, Wrapper, BoardTitleWrap, FlexWrap, GraphWrap, BoardTitle, BannerWrap, BannerText, IconWrap, DropDownWrap, DropDownText, ScoreWrap, NoticeWrap };
