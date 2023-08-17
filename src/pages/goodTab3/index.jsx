import React from 'react';
import { Container, ResetText } from './components/style';
import CategoryLabel from './components/CategoryLabel';

const GoodTab3 = () => {
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

    return (
        <Container>
            <ResetText>테스트</ResetText>
            <CategoryLabel />
        </Container>
    );
};

export default GoodTab3;
