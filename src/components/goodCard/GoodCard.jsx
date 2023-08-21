import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import { ReactComponent as SideArrow } from '../../assets/icons/graySideArrow.svg';
import GoodList from '../goodList/GoodList';

const Container = styled.div`
    padding: 20px;
    width: 560px;
    height: 182px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.aliceBlue};
`;

const SpaceWrap = styled.div`
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
`;

const TitleWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.span`
    font-family: NanumSquareOTFEB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: ${(props) => props.theme.nero};
`;

const GoodCard = (props) => {
    const [listData, setListData] = useState([]);

    const goodData = [
        {
            id: 0,
            text: '빠른 업무처리에 대한 고객들의 반응이 좋아요~!',
        },
        {
            id: 1,
            text: '2년 연속 최우수 직원 축하합니다. 앞으로도 잘 부탁드립니다.',
        },
        {
            id: 2,
            text: '2년 연속 최우수 직원 축하합니다. 앞으로도 잘 부탁드립니다.',
        },
    ];

    const worstData = [
        {
            id: 0,
            text: '업무처리가 늦어요',
        },
        {
            id: 1,
            text: '실내가 더워요.',
        },
        {
            id: 2,
            text: '일찍 닫아요.',
        },
    ];

    useEffect(() => {
        if (props.toggle === false) {
            setListData(goodData);
        } else {
            setListData(worstData);
        }
    }, [props.toggle]);

    return (
        <Container>
            <SpaceWrap>
                <TitleWrap>
                    <Title>Good AI 코칭</Title>
                    <SideArrow />
                </TitleWrap>
                <ToggleSwitch width={152} leftTitle={'좋았어요'} rightTitle={'아쉬워요'} checked={props.toggle} setToggle={props.setToggle} />
            </SpaceWrap>
            {listData.map((item) => (
                <GoodList key={item.id} text={item.text} />
            ))}
        </Container>
    );
};

export default GoodCard;
