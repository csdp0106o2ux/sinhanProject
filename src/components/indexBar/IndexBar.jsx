import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    padding-left: 140px;
    padding-right: 55px;
    width: 1015px;
    height: 68px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom-right-radius: 30px;
    background-image: linear-gradient(to bottom, #fdfdfd, #fdfdfd), linear-gradient(275deg, #a0d0f4 100%, #a0d0f4 99%, #9bd4ff 58%, #47a9f4 19%, #4ba1e3 -1%);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.04);
`;

const Tabs = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.span`
    font-family: OneShinhan;
    font-size: 18px;
    font-weight: ${(props) => (props.action ? 'bold' : '300')};
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: ${(props) => (props.action ? props.theme.lightPacificBlue : props.theme.nightRider)};
`;

const IndexBar = (props) => {
    return (
        <Container>
            <Tabs>
                <Title action={props.synthesis}>종합 Index</Title>
            </Tabs>
            <Tabs>
                <Title action={props.our}>Our Index</Title>
            </Tabs>
            <Tabs>
                <Title action={props.finance}>금융소비자보호</Title>
            </Tabs>
            <Tabs>
                <Title action={props.experience}>Good경험현황</Title>
            </Tabs>
            <Tabs>
                <Title action={props.complaint}>민원/불만경험 현황</Title>
            </Tabs>
            <Tabs>
                <Title action={props.complaint}>고객자산보호</Title>
            </Tabs>
        </Container>
    );
};

export default IndexBar;
