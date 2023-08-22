import React, { useEffect, useState } from 'react';

import CategoryLabel from './components/categoryLabel/CategoryLabel';
import { Header, TabBar } from '../../components';
import { Container, PaddingWrap, CategoryWrap, ResetText } from './components/style';

const GoodTab3 = () => {
    const [data, setData] = useState([]);

    const dummyData = [
        {
            id: 0,
            title: '전체',
            num: 147,
            checked: true,
        },
        {
            id: 1,
            title: '접수',
            num: 25,
            checked: false,
        },
        {
            id: 2,
            title: '배정',
            num: 20,
            checked: false,
        },
        {
            id: 3,
            title: '조사',
            num: 24,
            checked: false,
        },
        {
            id: 4,
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
            <TabBar />
            <PaddingWrap>
                <CategoryWrap>
                    {data?.map((item) => (
                        <CategoryLabel
                            key={item.id}
                            checked={item.checked}
                            title={item.title}
                            num={item.num}
                            onClick={() => {
                                setData(
                                    data.map((list) => {
                                        if (item.id === list.id) {
                                            return {
                                                ...list,
                                                checked: true,
                                            };
                                        }

                                        return {
                                            ...list,
                                            checked: false,
                                        };
                                    })
                                );
                            }}
                        />
                    ))}
                </CategoryWrap>
            </PaddingWrap>
        </Container>
    );
};

export default GoodTab3;
