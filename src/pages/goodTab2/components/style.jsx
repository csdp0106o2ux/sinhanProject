import { styled } from 'styled-components';

const Container = styled.div`
    position: relative;
    padding: 98px 60px 20px 140px;
    width: 1920px;
    height: 100vh;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.2);
    background-image: linear-gradient(to bottom, rgba(202, 237, 250, 0) 0%, #caedfa 100%);
`;

const BoardTitleWrap = styled.div`
    margin-bottom: 24px;
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
    width: 1140px;
    height: 660px;
    display: flex;
    justify-content: space-between;
    border-radius: 16px;
    background-color: #e8f5fe;
`;

const ScoreAreaWrap = styled.div`
    padding: 20px 0 0 20px;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const ScoreTitle = styled.span`
    margin-bottom: 6px;
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #1f1f1f;
`;

const DateText = styled.span`
    margin-bottom: 12px;
    opacity: 0.9;
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555;
`;

const OpacityWrap = styled.div`
    position: absolute;
    bottom: 0;
    width: 250px;
    height: 57px;
    background-image: linear-gradient(to bottom, rgba(232, 245, 254, 0) 0%, #e8f5fe 50%);
`;

const GoodScoreWrap = styled.div`
    width: 850px;
    height: 660px;
    padding: 20px;
    border-radius: 16px;
    box-shadow: -4px 0 12px 0 rgba(27, 131, 242, 0.1);
    background-color: #f3faff;
`;

const ScoreCardWrap = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const NoticeWrap = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

export { Container, BoardTitleWrap, FlexWrap, BoardTitle, BannerWrap, BannerText, IconWrap, DropDownWrap, DropDownText, ScoreWrap, ScoreAreaWrap, ScoreTitle, DateText, OpacityWrap, GoodScoreWrap, ScoreCardWrap, NoticeWrap };
