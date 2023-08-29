import React from 'react';
import { styled } from 'styled-components';

import { CheckBox, CheckBoxText, CheckBoxWrap, Container, FlexWrap, TableWrap, Wrapper, BottomTabWrap, BtnWrap, BtnText, SpaceWrap } from './components/style';
import { BlueBtn, Header, TabBar } from '../../components';
import Table from '../../components/Table';
import TextInput from '../../components/textInput/TextInput';
import DefaultButton from '../../components/DefaultButton';
import { ReactComponent as CheckTrue } from '../../assets/icons/checkBoxTrue.svg';
import { ReactComponent as CheckFalse } from '../../assets/icons/checkBoxFalse.svg';
import SearchButton from '../../components/NoticeModal/SearchButton';
import Checkbox from '../../components/CheckBox';

const VOCSearch = () => {
    const introEx = {
        1: `1. 귀 은행의 일익번창하심을 기원합니다.
2. 귀 은행에 불만사항을 제기하오니 검토하신 후 처리하여 주시기 바랍니다.


3. 본인은 영세한 개인사업자로서 보험사고차량에 정비용품을 공급하고 그 대금을 보험사로부터 받을 시 신한은행 계좌로 입금토록 약정하였습니다.
4. 보험사와 장기미결금 문제와 관련하여 다소 분쟁이 있어 반증자료용으로 보험사별 입금내역자료를 2013년부터 2018년까지 발급을 요청하였습니다.`,
    };

    return (
        <Container>
            <Header />
            <TabBar />
            <Wrapper>
                <TableWrap>
                    <Table title={'신청인 정보'}>
                        <caption>신청인 정보</caption>
                        <colgroup>
                            <col width="140px" />
                            <col width="" />
                            <col width="140px" />
                            <col width="290px" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th rowSpan={2}>주소</th>
                                <td rowSpan={2}>
                                    <FlexWrap>
                                        <TextInput width={120} marginRight={10} gray disabled />
                                        <DefaultButton title={'우편번호 찾기'} />
                                    </FlexWrap>
                                    <FlexWrap>
                                        <TextInput width={550} marginRight={10} gray />
                                        <TextInput width={550} gray />
                                    </FlexWrap>
                                </td>
                                <th>신청인명</th>
                                <td>
                                    <CheckBoxWrap>
                                        <TextInput width={120} gray marginRight={20} />
                                        <CheckBox>
                                            <CheckFalse />
                                        </CheckBox>
                                        <CheckBoxText for="customer">고객정보와 동일</CheckBoxText>
                                    </CheckBoxWrap>
                                </td>
                            </tr>
                            <tr>
                                <th>신청인연락처</th>
                                <td>
                                    <TextInput width={250} gray />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrap>
                <TableWrap>
                    <Table redDot title={'민원내용'}>
                        <caption>민원내용</caption>
                        <colgroup>
                            <col width="140px" />
                            <col width="" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>제목</th>
                                <td>
                                    <TextInput width={1540} gray value={'유동성 거래내역조회 발급에 대한 수수료 징수'} />
                                </td>
                            </tr>
                            <tr>
                                <th>내용</th>
                                <td>
                                    <TextInput width={1540} height={92} gray value={introEx[1]} />
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
                            <col width="290px" />
                            <col width="140px" />
                            <col width="290px" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>업무 구분</th>
                                <td></td>
                                <th>접수 채널</th>
                                <td></td>
                                <th>회신방법</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>관련계좌등록</th>
                                <td></td>
                                <th>서비스</th>
                                <td colSpan={3}></td>
                            </tr>
                            <tr>
                                <th>유형분류</th>
                                <td colSpan={5}></td>
                            </tr>
                            <tr>
                                <th>관련부서</th>
                                <td></td>
                                <th>발생점</th>
                                <td colSpan={3}></td>
                            </tr>
                            <tr>
                                <th>민원사전예고</th>
                                <td></td>
                                <th>완료예정일</th>
                                <td colSpan={3}></td>
                            </tr>
                            <tr>
                                <th>관련 민원/VOC</th>
                                <td colSpan={5}></td>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrap>
                <TableWrap>
                    <Table title="접수내용">
                        <caption>접수내용</caption>
                        <colgroup>
                            <col width="140px" />
                            <col width="" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>접수의견</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>첨부파일</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrap>
                <TableWrap>
                    <Table title="통지정보">
                        <caption>통지정보</caption>
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
                        </tbody>
                    </Table>
                </TableWrap>
                <Checkbox />
                <TableWrap>
                    <Table title="처리정보">
                        <caption>처리정보</caption>
                        <colgroup>
                            <col width="140px" />
                            <col width="" />
                            <col width="140px" />
                            <col width="290px" />
                            <col width="140px" />
                            <col width="290px" />
                        </colgroup>

                        <tbody>
                            <tr>
                                <th>발생원인</th>
                                <td></td>
                                <th>현장방문여부</th>
                                <td></td>
                                <th>고객취하여부</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>처리방법</th>
                                <td></td>
                                <th>고객의 소리</th>
                                <td></td>
                                <th>처리결과</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>처리자</th>
                                <td colSpan={5}></td>
                            </tr>
                            <tr>
                                <th>처리내용</th>
                                <td colSpan={5}></td>
                            </tr>
                            <tr>
                                <th>공시제외 대상</th>
                                <td></td>
                                <th>민원유발 개수</th>
                                <td colSpan={3}></td>
                            </tr>
                            <tr>
                                <th>금감원회신일</th>
                                <td></td>
                                <th>고객회신일</th>
                                <td colSpan={3}></td>
                            </tr>
                            <tr>
                                <th>상품 판매자</th>
                                <td></td>
                                <th>세부유형</th>
                                <td colSpan={3}></td>
                            </tr>
                            <tr>
                                <th>분쟁대상금액</th>
                                <td></td>
                                <th>분쟁확정금액</th>
                                <td colSpan={3}></td>
                            </tr>
                            <tr>
                                <th>가입금액</th>
                                <td></td>
                                <th>상품가입일</th>
                                <td colSpan={3}></td>
                            </tr>
                            <tr>
                                <th>첨부파일</th>
                                <td colSpan={5}></td>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrap>
            </Wrapper>
            <BottomTabWrap>
                <SpaceWrap>
                    <BtnWrap width={190} notification>
                        <BtnText>민원/VOC 이력 2건</BtnText>
                    </BtnWrap>
                    <BtnWrap width={238}>
                        <BtnText>이관/반려/처리기한 연장 요청</BtnText>
                    </BtnWrap>
                    <BtnWrap>
                        <BtnText>제도개선 등록</BtnText>
                    </BtnWrap>
                    <BtnWrap marginRight>
                        <BtnText>접수내용</BtnText>
                    </BtnWrap>
                </SpaceWrap>
                <SpaceWrap>
                    <BtnWrap width={128}>
                        <BtnText gray>삭제</BtnText>
                    </BtnWrap>
                    <DefaultButton save width={128} height={44} title={'저장'} />
                    <BlueBtn marginLeft={20} title={'결제'} />
                </SpaceWrap>
            </BottomTabWrap>
        </Container>
    );
};

export default VOCSearch;
