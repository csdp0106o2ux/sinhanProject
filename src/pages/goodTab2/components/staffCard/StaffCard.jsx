import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import StaffImageCard from '../staffImageCard/StaffImageCard';
import Human1 from '../../../../assets/images/human1.png';
import Human2 from '../../../../assets/images/human2.png';
import Human3 from '../../../../assets/images/human3.png';

const Container = styled.div`
    width: 560px;
    height: 277px;
    margin: 20px 31px 10px 20px;
    padding: 20px 20px 20px 20px;
    border-radius: 16px;
    background-color: #f3faff;
`;

const SpaceWrap = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
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

const StaffCardWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StaffCard = () => {
    const [staff, setStaff] = useState([]);

    const staffDummyData = [
        {
            id: 0,
            title: '우수사원',
            img: Human1,
            name: '선임 김시한',
            area: '남부터미널영업점',
        },
        {
            id: 1,
            title: '우수고객중심리더',
            img: Human2,
            name: '수석 서열정',
            area: '남부터미널영업점',
        },
        {
            id: 2,
            title: '숨은HERO',
            img: Human3,
            name: '수석 김영웅',
            area: '남부터미널영업점',
        },
        {
            id: 3,
            title: '우수사원',
            img: Human1,
            name: '선임 김시한',
            area: '남부터미널영업점',
        },
    ];

    useEffect(() => {
        setStaff(staffDummyData);
    }, []);

    return (
        <Container>
            <SpaceWrap>
                <Title>Good / 소비자보호 우수직원</Title>
                {/* 이전 / 다음 버튼 추가자리 */}
            </SpaceWrap>
            <StaffCardWrap>
                {staff.map((item) => (
                    <StaffImageCard key={item.id} img={item.img} title={item.title} name={item.name} area={item.area} />
                ))}
            </StaffCardWrap>
        </Container>
    );
};

export default StaffCard;
