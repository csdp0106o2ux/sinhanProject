import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as SideArrow } from '../../../../assets/icons/graySideArrow.svg';

const Container = styled.div`
    margin-bottom: 10px;
    width: 250px;
    height: 86px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 20px;
    border-radius: 12px;
    ${(props) => (props.checked && !props.disabled ? 'box-shadow: 0 6px 8px 0 rgba(27, 131, 242, 0.2), inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1), inset 0 13px 6px -10px rgba(255, 255, 255, 0.35); background-image: linear-gradient(294deg, #a0d0f4 100%, #a0d0f4 100%, #5cb8ff 16%, #3495df -5%);' : !props.checked && !props.disabled && 'background-color: rgba(255, 255, 255, 0.9);')}
    ${(props) => props.disabled && ' background-color: #d5e9f7;'}
`;

const FlexWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleWrap = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.span`
    font-family: OneShinhan;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => (props.checked && !props.disabled ? 'color: #fff;' : !props.checked && !props.disabled ? 'color: #333;' : !props.checked && props.disabled && '#8c8c8c')};
`;

const SubText = styled.p`
    opacity: ${(props) => (props.checked ? '0.8' : '0.9')};
    font-family: NanumSquareOTFR;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${(props) => (props.checked ? '#333' : '#fff')};
`;

const RateWrap = styled.div`
    display: flex;
    align-items: center;
`;

const RateText = styled.span`
    font-family: NanumSquareOTFB;
    font-size: ${(props) => (props.rate ? '16px' : '21px')};
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.52;
    letter-spacing: normal;
    text-align: right;
    color: ${(props) => (props.checked && !props.disabled ? 'color: #fff' : !props.checked && !props.disabled ? 'color: #1f1f1f' : !props.checked && props.disabled && '#8c8c8c')};
`;

const AreaCard = (props) => {
    return (
        <Container checked={props.checked} disabled={props.disabled}>
            <FlexWrap>
                <TitleWrap>
                    <Title checked={props.checked} disabled={props.disabled}>
                        {props.title}
                    </Title>
                    {!props.disabled && <SideArrow color={props.checked ? '#fff' : '#333'} />}
                </TitleWrap>
                {props.id === 0 && <SubText checked={props.checked}>비교 기간 대비</SubText>}
                {props.id === 0 && <SubText checked={props.checked}>-11.2%</SubText>}
            </FlexWrap>
            <RateWrap>
                <RateText disabled={props.disabled} checked={props.checked}>
                    96.0
                </RateText>
                <RateText rate checked={props.checked} disabled={props.disabled}>
                    %
                </RateText>
            </RateWrap>
        </Container>
    );
};

export default AreaCard;
