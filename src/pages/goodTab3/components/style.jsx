import { styled } from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 1920px;
    height: 100vh;
    background-image: linear-gradient(to bottom, rgba(202, 237, 250, 0) 0%, #caedfa 100%);
`;

const PaddingWrap = styled.div`
    padding: 0 60px 0 140px;
`;

const CategoryWrap = styled.div`
    margin: 30px 0 20px;
    display: flex;
    justify-content: space-between;
`;

const ResetText = styled.span`
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.dimGray};
`;

export { Container, PaddingWrap, CategoryWrap, ResetText };
