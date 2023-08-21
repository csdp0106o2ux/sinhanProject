import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as NewNotice } from '../../../../assets/icons/newNotice.svg';

const Container = styled.div`
    width: 520px;
    height: 33px;
    display: flex;
    box-shadow: 0 1px 0 0 #ededed;
    background-color: rgba(255, 255, 255, 0);
`;

const FlexWrap = styled.div`
    display: flex;
    align-items: center;
`;

const StatusText = styled.span`
    margin-right: ${(props) => (props.good ? '39px' : '20px')};
    font-family: NanumSquareOTFEB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => (props.good ? props.theme.lightningYellow : props.theme.nightDodgerBlue)};
`;

const ListText = styled.span`
    margin-right: 6px;
    font-family: NanumSquareOTFR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => props.theme.nightRider};
`;

const ComplimentList = (props) => {
    return (
        <Container>
            <FlexWrap>
                <StatusText good={props.status === 'good'}>{props.status}</StatusText>
                <ListText>{props.text}</ListText>
                {props.new && <NewNotice />}
            </FlexWrap>
        </Container>
    );
};

export default ComplimentList;
