import React, { useEffect } from 'react';
import { styled } from 'styled-components';

import Table from '../Table';
import TextInput from '../textInput/TextInput';
import DefaultButton from '../DefaultButton';
import CloseBtn from '../../assets/images/closeModalBtn.png';
import Checkbox from '../CheckBox';
import TextArea from '../TextArea';

const BackView = styled.div`
    padding: 108px 60px 40px 140px;
    width: 1920px;
    height: 100%;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
`;

const Container = styled.div`
    width: 1720px;
    height: 977px;
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

const IconButton = styled.button`
    width: 24px;
    height: 24px;
    background: url(${CloseBtn}) no-repeat 100% 50%;
`;

const Wrapper = styled.div`
    padding: 20px;
    height: 100%;
    background-color: white;
`;

const TableWrap = styled.div`
    margin-bottom: 20px;
`;

const FlexWrap = styled.div`
    margin-bottom: ${(props) => props.marginBottom && `${props.marginBottom}px`};
    display: flex;
`;

const InputWrap = styled.div`
    margin-right: ${(props) => (props.marginRight ? '20px' : '0px')};
    display: flex;
    align-items: center;
`;

const InputTitle = styled.p`
    margin-right: ${(props) => (props.keyword ? '37px' : '10px')};
    margin-left: ${(props) => (props.keyword ? '100px' : '0')};
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #333;
`;

const HighLightText = styled.p`
    font-family: NanumSquareOTFB;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: right;
    color: #ee9300;
`;

const HistoryModal = () => {
    const introEx = {
        0: `1. 귀 은행의 일익번창하심을 기원합니다.
2. 귀 은행에 불만사항을 제기하오니 검토하신 후 처리하여 주시기 바랍니다.
3. 본인은 영세한 개인사업자로서 보험사고차량에 정비용품을 공급하고 그 대금을 보험사로부터 받을 시 신한은행 계좌로 입금토록 약정하였습니다.
4. 보험사와 장기미결금 문제와 관련하여 다소 분쟁이 있어 반증자료용으로 보험사별 입금내역자료를 2013년부터 2018년까지 발급을 요청하였습니다.`,
    };

    const showModal = (e) => {
        document.body.style.overflow = 'hidden';
    };

    const hideModal = (e) => {
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        showModal();

        return () => hideModal();
    }, []);

    return (
        <BackView>
            <Container>
                <Header>
                    <HeaderTitle>민원/ VOC 이력 조회</HeaderTitle>
                    <IconButton />
                </Header>
                <Wrapper>
                    <TableWrap>
                        <Table title={'신청인 정보'}>
                            <caption>신청인 정보</caption>
                            <colgroup>
                                <col width="140px" />
                                <col width="" />
                                <col width="140px" />
                                <col width="280px" />
                            </colgroup>

                            <tbody>
                                <tr>
                                    <th rowSpan={2}>주소</th>
                                    <td rowSpan={2}>
                                        <FlexWrap marginBottom={10}>
                                            <TextInput disabled width={120} marginRight={10} value={'06147'} />
                                            <DefaultButton gray title={'우편번호 찾기'} />
                                        </FlexWrap>
                                        <FlexWrap>
                                            <TextInput disabled width={545} marginRight={10} value={'서울특별시 강남구 언주로 514 힐헤븐빌딩'} />
                                            <TextInput disabled width={545} marginRight={10} value={'서울특별시 강남구 언주로 514 힐헤븐빌딩'} />
                                        </FlexWrap>
                                    </td>
                                    <th>신청인명</th>
                                    <td>
                                        <FlexWrap>
                                            <TextInput disabled width={120} marginRight={20} value={'김신한'} />
                                            <Checkbox id={'customer'} name={'customer'} label={'고객정보와 동일'} />
                                        </FlexWrap>
                                    </td>
                                </tr>
                                <tr>
                                    <th>신청인연락처</th>
                                    <td>
                                        <TextInput disabled width={260} marginRight={20} value={'010-1234-5678'} />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </TableWrap>
                    <TableWrap>
                        <Table title={'민원내용'}>
                            <caption>민원내용</caption>
                            <colgroup>
                                <col width="140px" />
                                <col width="" />
                                <col width="140px" />
                                <col width="" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>제목</th>
                                    <td>
                                        <TextInput disabled width={1520} value={'유동성 거래내역조회 발급에 대한 수수료 징수'} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td>
                                        <TextArea disabled width={1520} height={92}>
                                            {introEx[0]}
                                        </TextArea>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </TableWrap>
                    <TableWrap>
                        <Table title={'접수정보'}>
                            <caption>접수정보</caption>
                            <colgroup>
                                <col width="140px" />
                                <col width="" />
                                <col width="140px" />
                                <col width="280px" />
                                <col width="140px" />
                                <col width="280px" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>업무 구분</th>
                                    <td>
                                        <FlexWrap>
                                            <TextInput disabled width={335} value={'불만'} marginRight={10} />
                                            <TextInput disabled width={335} value={'VOC'} />
                                        </FlexWrap>
                                    </td>
                                    <th>접수 채널</th>
                                    <td>
                                        <TextInput disabled width={260} value={'불만'} />
                                    </td>
                                    <th>회신방법</th>
                                    <td>
                                        <TextInput disabled width={260} value={'SMS'} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>관련계좌등록</th>
                                    <td>
                                        <FlexWrap>
                                            <TextInput disabled width={140} marginRight={10} value={'직접입력'} />
                                            <TextInput disabled width={140} marginRight={10} value={'본인'} />
                                            <TextInput width={290} marginRight={10} value={'230-006-100457'} />
                                            <DefaultButton width={80} gray title={'등록'} />
                                        </FlexWrap>
                                    </td>
                                    <th>서비스</th>
                                    <td colSpan={3}>
                                        <FlexWrap>
                                            <TextInput disabled width={590} marginRight={10} value={'직접입력'} />
                                            <DefaultButton width={80} gray title={'조회'} />
                                        </FlexWrap>
                                    </td>
                                </tr>
                                <tr>
                                    <th>유형분류</th>
                                    <td colSpan={5}>
                                        <FlexWrap>
                                            <DefaultButton width={80} marginRight={20} gray title={'조회'} />
                                            <InputWrap marginRight>
                                                <InputTitle>업무 분류표</InputTitle>
                                                <TextInput disabled width={622} value={'수신 > 실명제 > 계좌개설'} />
                                            </InputWrap>
                                            <InputWrap>
                                                <InputTitle>감정 분류표</InputTitle>
                                                <TextInput disabled width={622} value={'부정 > 상담사 > 산만함'} />
                                            </InputWrap>
                                        </FlexWrap>
                                        <InputWrap>
                                            <InputTitle keyword>키워드</InputTitle>
                                            <TextInput disabled width={1341} value={'#수신거래약관 #금융실명제 #실명확인'} />
                                        </InputWrap>
                                    </td>
                                </tr>
                                <tr>
                                    <th>관련부서</th>
                                    <td>
                                        <FlexWrap>
                                            <TextInput disabled width={450} value={'개인고객부, 디지털마케팅부, 채널전략부'} marginRight={10} />
                                            <DefaultButton width={80} gray title={'등록'} />
                                        </FlexWrap>
                                    </td>
                                    <th>발생점</th>
                                    <td colSpan={3}>
                                        <FlexWrap>
                                            <TextInput disabled width={105} value={'1766'} marginRight={10} />
                                            <TextInput disabled width={220} value={'경기광주금융센터'} marginRight={10} />
                                            <DefaultButton gray title={'지점검색'} />
                                        </FlexWrap>
                                    </td>
                                </tr>
                                <tr>
                                    <th>민원사전예고</th>
                                    <td>
                                        <InputWrap>
                                            <TextInput disabled width={220} value={''} marginRight={10} />
                                            <TextInput disabled width={220} value={''} marginRight={10} />
                                            <DefaultButton width={80} gray title={'조회'} marginRight={20} />
                                            <HighLightText>
                                                사전예고 예상{'\u00A0'}
                                                {'\u00A0'}
                                            </HighLightText>
                                            <HighLightText>0건</HighLightText>
                                        </InputWrap>
                                    </td>
                                    <th>완료예정일</th>
                                    <td colSpan={3}>
                                        <TextInput disabled width={120} value={'2021.11.17'} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>관련 민원/VOC</th>
                                    <td colSpan={5}>
                                        <FlexWrap>
                                            <TextInput disabled width={282} value={'관련민원 선택'} marginRight={10} />
                                            <TextInput disabled width={564} value={''} marginRight={10} />
                                            <TextInput disabled width={564} value={''} marginRight={10} />
                                            <DefaultButton width={80} gray title={'조회'} />
                                        </FlexWrap>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </TableWrap>
                </Wrapper>
            </Container>
        </BackView>
    );
};

export default HistoryModal;
