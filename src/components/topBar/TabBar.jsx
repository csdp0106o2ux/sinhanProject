import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as BagOnIcon } from '../../assets/icons/tabWorkOn.svg';
import { ReactComponent as BagOffIcon } from '../../assets/icons/tabWorkOff.svg';
import { ReactComponent as PaperOnIcon } from '../../assets/icons/tabPostaddOn.svg';
import { ReactComponent as PaperOffIcon } from '../../assets/icons/tabPostaddOff.svg';
import { ReactComponent as MenuOnIcon } from '../../assets/icons/tabEditOn.svg';
import { ReactComponent as MenuOffIcon } from '../../assets/icons/tabEditOff.svg';

const Container = styled.div`
    padding: 0 20px;
    width: 197px;
    height: 81px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: -1px;
    right: -1px;
    border-bottom-left-radius: 16px;
    box-shadow: 0 0 16px 0 rgba(27, 131, 242, 0.3), inset 0 -3px 8px 2px rgba(0, 0, 0, 0.1), inset 0 13px 6px -10px rgba(255, 255, 255, 0.35);
    background-image: linear-gradient(292deg, #a0d0f4 100%, #5cb8ff 26%, #66ade3 0%);
    z-index: 100;
`;

const IconWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const IconText = styled.span`
    margin-top: 4px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    font-family: ${({ slimFont }) => (slimFont ? 'NanumSquareOTFE' : 'NanumSquareOTFR')};
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${(props) => props.theme.white};
`;

const TabBar = (props) => {
    return (
        <Container>
            <IconWrap>
                <BagOnIcon />
                <IconText slimFont>My Job</IconText>
            </IconWrap>
            <IconWrap onClick={() => props.setOpenSlideSheet(!props.openSlideSheet)}>
                <PaperOnIcon />
                <IconText>나의정보</IconText>
            </IconWrap>
            <IconWrap>
                <MenuOnIcon />
                <IconText>열린창</IconText>
            </IconWrap>
        </Container>
    );
};

export default TabBar;
