import React from 'react';
import { styled } from 'styled-components';

import { ReactComponent as CloseButton } from '../../assets/icons/closeModalBtn.svg';
import Table from '../Table';
import DropDown from '../dropDown/DropDown';
import SearchButton from './SearchButton';
import TextArea from '../TextArea';
import TextInput from '../textInput/TextInput';
import DefaultButton from '../DefaultButton';
import CenterLabel from './CenterLabel';

const BackView = styled.div`
    padding: 108px 60px 40px 140px;
    width: 1920px;
    height: 100vh;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
`;

const Container = styled.div`
    width: 1720px;
    height: 910px;
    border-radius: 8px;
    background-color: #fff;
`;

const Header = styled.div`
    padding: 15px 20px 14px;
    width: 1720px;
    height: 53px;
    display: flex;
    justify-content: space-between;
    background-color: #3495df;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const HeaderTitle = styled.p`
    font-family: NanumSquareOTFEB;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    color: #fff;
`;

const IconButton = styled.button``;

const TableWrap = styled.div`
    padding: 20px 20px 10px 20px;
`;

const BottomTableWrap = styled.div`
    margin-top: 20px;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LabelWrap = styled.div`
    padding: 10px 0 4px 10px;
    width: 1680px;
    /* height: 86px; */
    display: flex;
    border: solid 1px #ededed;
    background-color: #f5f5f5;
    flex-wrap: wrap;
`;

const BottomWrap = styled.div`
    width: 1720px;
    height: 64px;
    display: flex;
    border-radius: 8px;
    box-shadow: 0 -6px 6px 0 rgba(0, 66, 136, 0.03);
    background-color: #fdfdfd;
`;

const NoticeModal = () => {
    const introEx = {
        0: `※ 업무기준 참조 : 규정 지침 (5.내부통제 – 민원사무처리지침)
1. 보상금처리는 해당 주관 부서 및 영업점의 계정에서 처리한다.
2. 민원보상금 손실은(수익비용)과목 영업외 손실한 잡손으로 처리한다. 다만, 귀책사유가 직원의 과실로 인정되는 경우에는 변상여부 및 변상금액 판정시까지 가지급금 처리한다.
3. 보상금지급은 민원인명의계좌에 대체 처리를 원칙으로한다.
2. 민원보상금 손실은(수익비용)과목 영업외 손실한 잡손으로 처리한다. 다만, 귀책사유가 직원의 과실로 인정되는 경우에는 변상여부 및 변상금액 판정시까지 가지급금 처리한다.
3. 보상금지급은 민원인명의계좌에 대체 처리를 원칙으로한다.
3. 보상금지급은 민원인명의계좌에 대체 처리를 원칙으로한다.
2. 민원보상금 손실은(수익비용)과목 영업외 손실한 잡손으로 처리한다. 다만, 귀책사유가 직원의 과실로 인정되는 경우에는 변상여부 및 변상금액 판정시까지 가지급금 처리한다.
3. 보상금지급은 민원인명의계좌에 대체 처리를 원칙으로한다.`,
    };

    const dummyData = [
        {
            id: 0,
            title: '1756, 경기광주금융센터',
        },
        {
            id: 1,
            title: '1756, 경기광주금융센터',
        },
        {
            id: 2,
            title: '1756, 경기광주금융센터',
        },
        {
            id: 3,
            title: '1756, 경기광주금융센터',
        },
        {
            id: 4,
            title: '1756, 경기광주금융센터',
        },
        {
            id: 5,
            title: '1756, 경기광주금융센터',
        },
        {
            id: 6,
            title: '1756, 경기광주금융센터',
        },
        {
            id: 7,
            title: '1756, 경기광주금융센터',
        },
        {
            id: 8,
            title: '1756, 경기광주금융센터',
        },
    ];

    return (
        <BackView>
            <Container>
                <Header>
                    <HeaderTitle>통지등록</HeaderTitle>
                    <IconButton>
                        <CloseButton />
                    </IconButton>
                </Header>
                <TableWrap>
                    <Table redDot title={'통지정보'}>
                        <caption>통지유형</caption>
                        <colgroup>
                            <col width="140px" />
                            <col width="" />
                            <col width="140px" />
                            <col width="" />
                        </colgroup>

                        <tbody>
                            <tr>
                                <th>통지유형</th>
                                <td></td>
                                <th>보고기한</th>
                                <td>
                                    <DropDown width={140} title={'2021.11.17'} calender />
                                </td>
                            </tr>
                            <tr>
                                <th>통지의견</th>
                                <td colSpan={3}>
                                    <SearchButton marginBottom={10} title={'상용구 검색'} />
                                    <TextArea height={92}>{introEx[0]}</TextArea>
                                </td>
                            </tr>
                            <tr>
                                <th>유의사항</th>
                                <td colSpan={3}>
                                    <SearchButton marginBottom={10} title={'상용구 검색'} />
                                    <TextArea height={92}>{introEx[0]}</TextArea>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <BottomTableWrap>
                        <Table title={'부점정보'}>
                            <caption>부점정보</caption>
                            <colgroup>
                                <col width={'140px'} />
                                <col width={''} />
                            </colgroup>

                            <tbody>
                                <tr>
                                    <th>수신부점 (Main)</th>
                                    <td>
                                        <InputWrapper>
                                            <TextInput marginRight={10} />
                                            <TextInput marginRight={10} />
                                            <DefaultButton title={'지점검색'} />
                                        </InputWrapper>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{ padding: 0 }}>
                                        <LabelWrap>{dummyData.map((item) => item.id < 1 && <CenterLabel key={item.id} title={item.title} />)}</LabelWrap>
                                    </td>
                                </tr>
                                <tr>
                                    <th>수신부점 (Sub)</th>
                                    <td>
                                        <InputWrapper>
                                            <TextInput marginRight={10} />
                                            <TextInput marginRight={10} />
                                            <DefaultButton title={'지점검색'} />
                                        </InputWrapper>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{ padding: 0 }}>
                                        <LabelWrap>
                                            {dummyData.map((item) => (
                                                <CenterLabel key={item.id} title={item.title} />
                                            ))}
                                        </LabelWrap>
                                    </td>
                                </tr>
                                <tr>
                                    <th>참조부점 (Sub)</th>
                                    <td>
                                        <InputWrapper>
                                            <TextInput marginRight={10} />
                                            <TextInput marginRight={10} />
                                            <DefaultButton title={'지점검색'} />
                                        </InputWrapper>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </BottomTableWrap>
                </TableWrap>
                <BottomWrap></BottomWrap>
            </Container>
        </BackView>
    );
};

export default NoticeModal;

{
    /* <caption>통지유형</caption>
<colgroup>
    <col width="86px" />
    <col width="86px" />
    <col width="125px" />
    <col width="" />
    <col width="131px" />
    <col width="131px" />
    <col width="131px" />
    <col width="131px" />
    <col width="131px" />
</colgroup>
<thead>
    <tr>
        <th>상태</th>
        <th>상태</th>
        <th>상태</th>
        <th>상태</th>
        <th>상태</th>
        <th>상태</th>
        <th>상태</th>
        <th>상태</th>
        <th>상태</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</tbody> */
}
