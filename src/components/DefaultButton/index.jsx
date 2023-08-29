import React from 'react';
import { styled } from 'styled-components';

const Container = styled.button`
  margin-right: ${(props) => props.marginRight && `${props.marginRight}px`};
  padding: 6px 20px;
  width: ${(props) => props.width && `${props.width}px`};
  height: ${(props) => (props.height ? `${props.height}px` : '30px')};
  border-radius: 8px;
  background-color: ${(props) => (props.gray ? props.theme.gray : props.theme.darkBlue)};
`;

const Title = styled.p`
  font-family: NanumSquareOTFB;
  font-size: ${(props) => (props.save ? '16px' : '14px')};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

const DefaultButton = (props) => {
  return (
    <Container width={props.width} height={props.height} marginRight={props.marginRight} gray={props.gray}>
      <Title save={props.save}>{props.title}</Title>
    </Container>
  );
};

export default DefaultButton;
