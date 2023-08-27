import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { ReactComponent as SideArrow } from '../../../assets/icons/graySideArrow.svg';
import { ToggleSwitch } from '../../../components';
import ScrapList from './ScrapList';

const Container = styled.div`
  padding: 20px;
  width: 560px;
  height: 332px;
  border-radius: 16px;
  background-color: #f3faff;
`;

const TitleWrap = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleButton = styled.button`
  display: flex;
`;

const Title = styled.p`
  font-family: NanumSquareOTFEB;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #1f1f1f;
`;

const ToggleWrap = styled.div`
  display: flex;
`;

const ScrapCard = () => {
  const [toggle, setToggle] = useState(false);
  const [scrap, setScrap] = useState([]);

  const dummyData = [
    {
      id: 0,
      title: '전국장애인표준사업장연합회와 금융 서비스 업무협약',
      contents: '신한은행은 장애인의 안정된 일자리 창출과 작업환경을 지원하는 ㈔전국장애인표준사업장연합회와 소속 회원사블라블라',
    },
    {
      id: 1,
      title: '고객과 사회의 가치를 높이는 ESG를 목표로',
      contents: '신한은행은 장애인의 안정된 일자리 창출과 작업환경을 지원하는 ㈔전국장애인표준사업장연합회와 소속 회원사블라블라',
    },
  ];

  useEffect(() => {
    setScrap(dummyData);
  }, []);

  return (
    <Container>
      <TitleWrap>
        <TitleButton>
          <Title>스크랩</Title>
          <SideArrow />
        </TitleButton>
        <ToggleSwitch checked={toggle} width={152} leftTitle={'나만보기'} rightTitle={'공유하기'} setToggle={setToggle} />
      </TitleWrap>
      {scrap.map((item) => (
        <ScrapList key={item.id} title={item.title} contents={item.contents} />
      ))}
    </Container>
  );
};

export default ScrapCard;
