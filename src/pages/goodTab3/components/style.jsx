import { styled } from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const ResetText = styled.p`
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.dimGray};
`;

export { Container, ResetText };
