import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import ConsumerToggle from '../../components/ConsumerToggle';
import SideBarAccodion from '../../components/SideBarAccodion';
import Symbol from '../../assets/images/shinhanSymbol.png';
import { ReactComponent as DeskTopOn } from '../../assets/icons/desktopOn.svg';
import { ReactComponent as PersonOn } from '../../assets/icons/personOn.svg';
import { ReactComponent as ToggleOn } from '../../assets/icons/toggleOn.svg';
import { ReactComponent as ToggleOff } from '../../assets/icons/toggleOff.svg';
import { ReactComponent as SearchOn } from '../../assets/icons/searchOn.svg';

const Container = styled.div`
    width: 80px;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    box-shadow: 6px 0 6px 0 rgba(0, 66, 136, 0.03);
    background-color: #fff;
    white-space: nowrap;
    overflow: hidden;
    transition: width 0.35s ease;
    z-index: 99;

    &:hover {
        width: 280px;
    }
`;

const SymbolWrap = styled.div`
    padding: 14px 69px 0 24px;
    display: flex;
    align-items: center;
`;

const SymbolImage = styled.img`
    margin-right: 24px;
    width: 32px;
    height: 32px;
`;

const Title = styled.p`
    font-family: OneShinhan;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: #1f1f1f;
`;

const TopWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const TopList = styled.div`
    margin-top: 14px;
    padding-left: 28px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 38px;
    overflow: hidden;
    white-space: nowrap;
    background-color: ${(props) => props.theme.white};

    &:hover {
        background-color: ${(props) => props.theme.grayAliceBlue};
        border-left-width: 2px;
        border-left-color: ${(props) => props.theme.lightPictonBlue};
        border-left-style: solid;
    }
`;

const ListText = styled.span`
    display: none;
    font-family: NanumSquareOTFR;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.dimGray};

    ${Container}:hover & {
        display: block;
    }

    ${TopList}:hover & {
        color: ${(props) => props.theme.lightPictonBlue};
    }
`;

const DeskTop = styled(DeskTopOn)`
    margin-right: 13px;
    opacity: 0.4;

    ${TopList}:hover & {
        opacity: 1;
    }
`;

const Person = styled(PersonOn)`
    margin-right: 13px;
    opacity: 0.4;

    ${TopList}:hover & {
        opacity: 1;
    }
`;

const ToggleWrap = styled.div`
    margin-top: 30px;
    margin-bottom: 6px;
    display: flex;
    justify-content: center;
`;

const ToggleButton = styled.button`
    margin-top: 34px;
    display: flex;
    justify-content: center;
`;

const SideBar = () => {
    const [hover, setHover] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [accodion, setAccodion] = useState([]);

    const accodionDummy = [
        {
            id: 0,
            title: '조회',
            icon: <SearchOn />,
            checked: false,
        },
        {
            id: 0,
            title: '조회',
            icon: <SearchOn />,
            checked: false,
        },
        {
            id: 0,
            title: '조회',
            icon: <SearchOn />,
            checked: false,
        },
    ];

    useEffect(() => {
        setAccodion(accodionDummy);
    }, []);

    const handlerHover = () => {
        setHover(true);
    };

    const handlerOutHover = () => {
        setHover(false);
    };

    return (
        <Container onMouseOver={handlerHover} onMouseOut={handlerOutHover}>
            <TopWrap>
                <SymbolWrap>
                    <SymbolImage src={Symbol} />
                    <div>
                        <Title>신한은행 금융소비자</Title>
                        <Title>보호 지원 플랫폼</Title>
                    </div>
                </SymbolWrap>
                <TopList>
                    <div>
                        <DeskTop />
                    </div>
                    <ListText>대시보드</ListText>
                </TopList>
                <TopList>
                    <div>
                        <Person />
                    </div>
                    <ListText>고객 경험 분석 TOOl</ListText>
                </TopList>
                <ToggleWrap>
                    <ToggleButton style={{ display: hover ? 'none' : 'flex' }}>{toggle ? <ToggleOn /> : <ToggleOff />}</ToggleButton>
                    <ConsumerToggle style={{ display: hover ? 'flex' : 'none' }} checked={toggle} onLeftClick={() => setToggle(false)} onRightClick={() => setToggle(true)} />
                </ToggleWrap>
                {accodion.map((item) => (
                    <SideBarAccodion hover={hover} key={item.id} title={item.title} icon={item.icon} checked={item.checked} />
                ))}
            </TopWrap>
        </Container>
    );
};

export default SideBar;
