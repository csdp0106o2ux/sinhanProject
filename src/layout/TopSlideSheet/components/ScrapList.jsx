import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  width: 520px;
  height: 89px;
  margin: 0 0 10px;
  padding: 10px 20px 10px;
  border-radius: 8px;
  background-color: #fff;
`;

const Title = styled.p`
  margin-bottom: 6px;
  font-family: NanumSquareOTFB;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #333;
`;

const Contents = styled.p`
  font-family: NanumSquareOTFR;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #333;
`;

const ScrapList = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Contents>{props.contents}</Contents>
    </Container>
  );
};

export default ScrapList;
