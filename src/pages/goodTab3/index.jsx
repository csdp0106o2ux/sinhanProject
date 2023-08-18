import React, { useEffect, useState } from 'react';

import CategoryLabel from './components/categoryLabel/CategoryLabel';
import { Header } from '../../components';
import { Container, PaddingWrap, CategoryWrap, ResetText } from './components/style';

const GoodTab3 = () => {
    const [data, setData] = useState();

    const dummyData = [
        {
            id: 0,
            title: '전체',
            num: 147,
            checked: true,
        },
        {
            id: 0,
            title: '접수',
            num: 25,
            checked: false,
        },
        {
            id: 0,
            title: '배정',
            num: 20,
            checked: false,
        },
        {
            id: 0,
            title: '조사',
            num: 24,
            checked: false,
        },
        {
            id: 0,
            title: '종결',
            num: 20,
            checked: false,
        },
    ];

    useEffect(() => {
        setData(dummyData);
    }, []);

    return (
        <Container>
            <Header />
            <PaddingWrap>
                <CategoryWrap>
                    {data?.map((item, idx) => (
                        <CategoryLabel key={idx} checked={item.checked} title={item.title} num={item.num} />
                    ))}
                </CategoryWrap>
            </PaddingWrap>
            <ResetText>테스트</ResetText>
        </Container>
    );
};

export default GoodTab3;
