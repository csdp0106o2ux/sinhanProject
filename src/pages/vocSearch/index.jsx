import React, { useEffect, useState } from 'react';

import { CheckBox, CheckBoxText, CheckBoxWrap, Container, FlexWrap, TableWrap, Wrapper, BottomTabWrap, BtnWrap, BtnText, SpaceWrap, LabelText, UnitText, Title, SearchWrap, LabelWrap, DataWrap, StepText, TableBtnWrap, TableBtn } from './components/style';
import { BlueBtn, DropDown, Header, TabBar } from '../../components';
import Table from '../../components/Table';
import TextInput from '../../components/textInput/TextInput';
import DefaultButton from '../../components/DefaultButton';
import { ReactComponent as CheckTrue } from '../../assets/icons/checkBoxTrue.svg';
import { ReactComponent as CheckFalse } from '../../assets/icons/checkBoxFalse.svg';
import SearchButton from '../../components/NoticeModal/SearchButton';
import Checkbox from '../../components/CheckBox';
import TextArea from '../../components/TextArea';
import DateInput from '../../components/DateInput';
import Radio from '../../components/Radio';
import SearchLabel from './components/SearchLabel';
import HistoryModal from '../../components/HistoryModal';
import BottomSlideSheet from '../../layout/BottomSlideSheet';
import NoticeModal from '../../components/NoticeModal';
import CustomerTab from './components/CustomerTab';

const VOCSearch = () => {
    const [label, setLabel] = useState([]);
    const [selectLabel, setSelectLabel] = useState();
    const [openSlideSheet, setOpenSlideSheet] = useState(null);
    const [openNoticeModal, setOpenNoticeModal] = useState(null);
    const [openBottomSlide, setOpenBottomSlide] = useState(null);
    const [openSearchModal, setOpenSearchModal] = useState(null);
    const introEx = {
        0: `1. 귀 은행의 일익번창하심을 기원합니다.
2. 귀 은행에 불만사항을 제기하오니 검토하신 후 처리하여 주시기 바랍니다.
3. 본인은 영세한 개인사업자로서 보험사고차량에 정비용품을 공급하고 그 대금을 보험사로부터 받을 시 신한은행 계좌로 입금토록 약정하였습니다.
4. 보험사와 장기미결금 문제와 관련하여 다소 분쟁이 있어 반증자료용으로 보험사별 입금내역자료를 2013년부터 2018년까지 발급을 요청하였습니다.`,
        1: `오늘 좀전에 신한은행이라고 하면서 한통의 문자를 받았습니다. 
        내용인즉,
        
        “안녕하세요? 신한은행입니다.
        계사년 새해를 맞아 2013년형 마이너스 통장을 발급해드립니다. “ 라는 내용입니다.
        ...`,
    };

    const labelDummy = [
        {
            id: 0,
            title: '처리이력',
            checked: false,
        },
        {
            id: 1,
            title: '알람이력',
            checked: false,
        },
        {
            id: 2,
            title: '평가',
            checked: false,
        },
        {
            id: 3,
            title: '사후처리',
            checked: false,
        },
        {
            id: 4,
            title: '보상',
            checked: false,
        },
        {
            id: 5,
            title: '문서수발신',
            checked: false,
        },
        {
            id: 6,
            title: '접속이력',
            checked: false,
        },
        {
            id: 7,
            title: '고객안내체크',
            checked: true,
        },
        {
            id: 8,
            title: '상품정보',
            checked: false,
        },
        {
            id: 9,
            title: '회신문',
            checked: false,
        },
    ];

    useEffect(() => {
        setLabel(labelDummy);
    }, []);

    return (
        <Container>
            <NoticeModal openNoticeModal={openNoticeModal} setOpenNoticeModal={setOpenNoticeModal} />
            <HistoryModal openSearchModal={openSearchModal} setOpenSearchModal={setOpenSearchModal} />
            <Header />
            <TabBar />
            <CustomerTab
                onClick={() => {
                    setOpenSearchModal(true);
                }}
            />
            <Wrapper>
                <TableWrap>
                    <Table notBorder title={'민원/ VOC 처리정보'}>
                        <caption>민원/ VOC 처리정보</caption>
                        <colgroup>
                            <col width="140px" />
                            <col width="290px" />
                            <col width="140px" />
                            <col width="290px" />
                            <col width="140px" />
                            <col width="290px" />
                            <col width="140px" />
                            <col width="290px" />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th className="yellow">진행상태</th>
                                <td className="yellow">조사: 통지</td>
                                <th>ID</th>
                                <td>V2021002124</td>
                                <th>등록일시</th>
                                <td>2021.11.15 16:57:57</td>
                                <th>민원처리 담당자</th>
                                <td className="gray">담당자 배정중</td>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrap>
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
                                    <FlexWrap marginBottom={10}>
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
                                <th className="redDot">제목</th>
                                <td>
                                    <TextArea height={30}>{'유동성 거래내역조회 발급에 대한 수수료 징수'}</TextArea>
                                </td>
                            </tr>
                            <tr>
                                <th className="redDot">내용</th>
                                <td>
                                    <TextArea height={92}>{introEx[0]}</TextArea>
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
                                <td>
                                    <SpaceWrap>
                                        <DropDown gray width={335} marginRight={10}>
                                            <option>불만</option>
                                            <option>불만</option>
                                            <option>불만</option>
                                        </DropDown>
                                        <DropDown gray width={335}>
                                            <option>VOC</option>
                                            <option>VOC</option>
                                            <option>VOC</option>
                                        </DropDown>
                                    </SpaceWrap>
                                </td>
                                <th className="redDot">접수 채널</th>
                                <td>
                                    <DropDown gray width={250}>
                                        <option>불만</option>
                                        <option>불만</option>
                                        <option>불만</option>
                                    </DropDown>
                                </td>
                                <th>회신방법</th>
                                <td>
                                    <DropDown gray width={250}>
                                        <option>불만</option>
                                        <option>불만</option>
                                        <option>불만</option>
                                    </DropDown>
                                </td>
                            </tr>
                            <tr>
                                <th>관련계좌등록</th>
                                <td>
                                    <SpaceWrap>
                                        <DropDown gray width={140} marginRight={10}>
                                            <option>직접입력</option>
                                            <option>계좌입력</option>
                                        </DropDown>
                                        <DropDown gray width={140} marginRight={10}>
                                            <option>본인</option>
                                            <option>본인 외(가족)</option>
                                        </DropDown>
                                        <TextInput gray width={290} marginRight={10} />
                                        <DefaultButton width={80} title="등록" />
                                    </SpaceWrap>
                                </td>
                                <th>서비스</th>
                                <td colSpan={3}>
                                    <SpaceWrap>
                                        <TextInput gray width={590} marginRight={10} disabled value="해당없음" />
                                        <DefaultButton width={80} title="조회" />
                                    </SpaceWrap>
                                </td>
                            </tr>
                            <tr>
                                <th>유형분류</th>
                                <td colSpan={5}>
                                    <CheckBoxWrap>
                                        <DefaultButton width={80} marginRight={20} title="조회" />
                                        <LabelText marginRight={10}>업무 분류표</LabelText>
                                        <TextInput gray width={632} marginRight={20} value={'수신 > 실명제 > 계좌개설'} />
                                        <LabelText marginRight={10}>감정 분류표</LabelText>
                                        <TextInput gray disabled width={632} value={'부정 > 상담사 > 산만함'} />
                                    </CheckBoxWrap>
                                </td>
                            </tr>
                            <tr>
                                <th>관련부서</th>
                                <td>
                                    <CheckBoxWrap>
                                        <TextInput gray width={450} marginRight={10} value={'개인고객부, 디지털마케팅부, 채널전략부'} />
                                        <DefaultButton width={80} title="조회" />
                                    </CheckBoxWrap>
                                </td>
                                <th className="redDot">발생점</th>
                                <td colSpan={3}>
                                    <CheckBoxWrap>
                                        <TextInput gray width={105} marginRight={10} value={'1766'} />
                                        <TextInput gray width={220} marginRight={10} value={'경기광주금융센터'} />
                                        <DefaultButton width={91} title="지점검색" />
                                    </CheckBoxWrap>
                                </td>
                            </tr>
                            <tr>
                                <th>민원사전예고</th>
                                <td>
                                    <CheckBoxWrap>
                                        <TextInput gray width={220} marginRight={10} value={'1766'} />
                                        <TextInput gray width={220} marginRight={10} value={'경기광주금융센터'} />
                                        <DefaultButton width={80} title="조회" />
                                    </CheckBoxWrap>
                                </td>
                                <th className="redDot">완료예정일</th>
                                <td colSpan={3}>
                                    <DateInput />
                                </td>
                            </tr>
                            <tr>
                                <th>관련 민원/VOC</th>
                                <td colSpan={5}>
                                    <CheckBoxWrap>
                                        <DropDown gray width={282} marginRight={10}>
                                            <option>관련민원 선택</option>
                                            <option>관련민원 선택</option>
                                        </DropDown>
                                        <TextInput gray width={574} marginRight={10} />
                                        <TextInput gray width={574} marginRight={10} />
                                        <DefaultButton width={80} title="조회" />
                                    </CheckBoxWrap>
                                </td>
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
                                <td>
                                    <TextArea disabled width={1540} height={134}>
                                        {'불만'}
                                    </TextArea>
                                </td>
                            </tr>
                            <tr>
                                <th>첨부파일</th>
                                <td>
                                    <CheckBoxWrap>
                                        <TextInput gray width={1439} marginRight={10} />
                                        <DefaultButton width={91} title="찾아보기" />
                                    </CheckBoxWrap>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrap>
                <TableWrap>
                    <Table
                        title="통지정보"
                        button
                        btnTitle={'통지등록'}
                        onClick={() => {
                            setOpenNoticeModal(true);
                        }}
                    >
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
                                <th>구분</th>
                                <th>구분COD</th>
                                <th>통지의견</th>
                                <th>통지부점</th>
                                <th>통지일시</th>
                                <th>보고기한</th>
                                <th>처리일시</th>
                                <th>부서의견서</th>
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
                                <td>
                                    <CheckBoxWrap>
                                        <DropDown gray width={335} marginRight={10}>
                                            <option> 선택</option>
                                            <option>선택</option>
                                        </DropDown>
                                        <DropDown gray width={335}>
                                            <option> 선택</option>
                                            <option>선택</option>
                                        </DropDown>
                                    </CheckBoxWrap>
                                </td>
                                <th>현장방문여부</th>
                                <td>
                                    <Checkbox />
                                </td>
                                <th>고객취하여부</th>
                                <td>
                                    <Checkbox />
                                </td>
                            </tr>
                            <tr>
                                <th>처리방법</th>
                                <td>
                                    <DropDown gray width={335}>
                                        <option> 선택</option>
                                        <option>선택</option>
                                    </DropDown>
                                </td>
                                <th>고객의 소리</th>
                                <td>
                                    <Checkbox />
                                </td>
                                <th>처리결과</th>
                                <td>
                                    <DropDown gray width={250}>
                                        <option> 선택</option>
                                        <option>선택</option>
                                    </DropDown>
                                </td>
                            </tr>
                            <tr>
                                <th>처리자</th>
                                <td colSpan={5}>
                                    <CheckBoxWrap>
                                        <TextInput gray disabled width={282} marginRight={10} value={'8888000070'} />
                                        <TextInput gray disabled width={282} marginRight={10} value={'소비자지원부'} />
                                        <TextInput gray disabled width={282} marginRight={10} value={'홍길동'} />
                                        <DefaultButton title="직원검색" />
                                    </CheckBoxWrap>
                                </td>
                            </tr>
                            <tr>
                                <th>처리내용</th>
                                <td colSpan={5}>
                                    <TextArea width={1540} height={134}>
                                        {introEx[1]}
                                    </TextArea>
                                </td>
                            </tr>
                            <tr>
                                <th>공시제외 대상</th>
                                <td>
                                    <CheckBoxWrap>
                                        <Radio id={'except1'} label={'대상'} name={'except'} checked />
                                        <Radio id={'except2'} label={'제외'} name={'except'} />
                                    </CheckBoxWrap>
                                </td>
                                <th>민원유발 개수</th>
                                <td colSpan={3}>
                                    <DropDown gray width={290}>
                                        <option> 선택</option>
                                        <option>선택</option>
                                    </DropDown>
                                </td>
                            </tr>
                            <tr>
                                <th>금감원회신일</th>
                                <td>
                                    <DateInput />
                                </td>
                                <th>고객회신일</th>
                                <td colSpan={3}>
                                    <DateInput />
                                </td>
                            </tr>
                            <tr>
                                <th>상품 판매자</th>
                                <td>
                                    <TextInput gray width={120} />
                                </td>
                                <th>세부유형</th>
                                <td colSpan={3}>
                                    <DropDown gray width={290}>
                                        <option> 선택</option>
                                        <option>선택</option>
                                    </DropDown>
                                </td>
                            </tr>
                            <tr>
                                <th>분쟁대상금액</th>
                                <td>
                                    <FlexWrap>
                                        <TextInput gray width={290} marginRight={10} />
                                        <UnitText>원</UnitText>
                                    </FlexWrap>
                                </td>
                                <th>분쟁확정금액</th>
                                <td colSpan={3}>
                                    <FlexWrap>
                                        <TextInput gray width={290} marginRight={10} />
                                        <UnitText>원</UnitText>
                                    </FlexWrap>
                                </td>
                            </tr>
                            <tr>
                                <th>가입금액</th>
                                <td>
                                    <FlexWrap>
                                        <TextInput gray width={290} marginRight={10} />
                                        <UnitText>원</UnitText>
                                    </FlexWrap>
                                </td>
                                <th>상품가입일</th>
                                <td colSpan={3}>
                                    <DateInput />
                                </td>
                            </tr>
                            <tr>
                                <th>첨부파일</th>
                                <td colSpan={5}>
                                    <CheckBoxWrap>
                                        <TextInput gray width={1451} marginRight={10} />
                                        <DefaultButton title={'찾아보기'} />
                                    </CheckBoxWrap>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrap>
                <SearchWrap>
                    <Title>이력조회</Title>
                    <LabelWrap>
                        {label.map((item) => (
                            <SearchLabel
                                key={item.id}
                                title={item.title}
                                checked={item.checked}
                                onClick={() =>
                                    setLabel(
                                        label.map((list) => {
                                            if (item.id === list.id) {
                                                setSelectLabel(list.title);
                                                return {
                                                    ...list,
                                                    checked: true,
                                                };
                                            }
                                            return {
                                                ...list,
                                                checked: false,
                                            };
                                        })
                                    )
                                }
                            />
                        ))}
                    </LabelWrap>
                    <DataWrap>
                        {selectLabel === '회신문' ? (
                            <>
                                <TableBtnWrap>
                                    <TableBtn marginRight>초기화</TableBtn>
                                    <TableBtn marginRight>저장</TableBtn>
                                    <TableBtn>출력</TableBtn>
                                </TableBtnWrap>
                                <Table>
                                    <caption>이력조회</caption>
                                    <colgroup>
                                        <col width="140px" />
                                        <col width="700px" />
                                        <col width="140px" />
                                        <col width="700px" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>회신구분</th>
                                            <td>
                                                <SpaceWrap>
                                                    <Radio checked label={'소비자'} />
                                                    <Radio label={'금융감독원'} />
                                                    <Radio label={'금감원2'} />
                                                </SpaceWrap>
                                            </td>
                                            <th>상용구사용</th>
                                            <td>
                                                <SpaceWrap>
                                                    <Radio checked label={'Y'} />
                                                    <Radio label={'N'} />
                                                </SpaceWrap>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>문서번호</th>
                                            <td>
                                                <TextInput gray width={660} value={'소비자지원 2022-0217'} />
                                            </td>
                                            <th>심의필</th>
                                            <td>
                                                <TextInput gray width={660} value={'2020-1543'} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>수신</th>
                                            <td>
                                                <TextInput gray width={660} value={'박동욱 고객님'} />
                                            </td>
                                            <th>참조</th>
                                            <td>
                                                <TextInput gray width={660} value={''} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>제목</th>
                                            <td colSpan={3}>
                                                <TextInput gray width={1500} value={''} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>내용</th>
                                            <td colSpan={3}>
                                                <TextArea height={92}></TextArea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>전자직인</th>
                                            <td colSpan={3}>
                                                <DropDown width={290} gray>
                                                    <option>은행장직인</option>
                                                    <option>은행장직인</option>
                                                    <option>은행장직인</option>
                                                    <option>은행장직인</option>
                                                </DropDown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>첨부파일</th>
                                            <td colSpan={3}>
                                                <SpaceWrap>
                                                    <TextInput gray width={1411} marginRight={10} />
                                                    <DefaultButton title={'찾아보기'} />
                                                </SpaceWrap>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th colSpan={4}>
                                                <LabelWrap>
                                                    <CheckBoxWrap>
                                                        <UnitText marginRight>결제상태</UnitText>
                                                        <TextInput gray width={729} value={'-'} />
                                                    </CheckBoxWrap>
                                                    <CheckBoxWrap>
                                                        <UnitText marginRight>출력일시</UnitText>
                                                        <TextInput gray width={729} value={'-'} />
                                                    </CheckBoxWrap>
                                                </LabelWrap>
                                            </th>
                                        </tr>
                                    </tbody>
                                </Table>
                            </>
                        ) : (
                            <>
                                <TableBtnWrap>
                                    <TableBtn>저장</TableBtn>
                                </TableBtnWrap>
                                <Table>
                                    <caption>이력조회</caption>
                                    <colgroup>
                                        <col width="336px" />
                                        <col width="336px" />
                                        <col width="336px" />
                                        <col width="336px" />
                                        <col width="336px" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>단계</th>
                                            <th>실시여부</th>
                                            <th>일시</th>
                                            <th>방법</th>
                                            <th>비고</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <StepText>처리기한 연장</StepText>
                                            </td>
                                            <td>
                                                <Checkbox id={'play01'} name={'play'} />
                                            </td>
                                            <td>
                                                <DateInput width={'100%'} />
                                            </td>
                                            <td>
                                                <DropDown gray>
                                                    <option>선택</option>
                                                    <option>전화</option>
                                                    <option>SMS</option>
                                                </DropDown>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <StepText>사실관계 확인(민원 처리 중)</StepText>
                                            </td>
                                            <td>
                                                <Checkbox id={'play02'} name={'play'} />
                                            </td>
                                            <td>
                                                <DateInput width={'100%'} />
                                            </td>
                                            <td>
                                                <DropDown gray>
                                                    <option>선택</option>
                                                    <option>전화</option>
                                                    <option>SMS</option>
                                                </DropDown>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <StepText>처리기한 연장</StepText>
                                            </td>
                                            <td>
                                                <Checkbox id={'play03'} name={'play'} />
                                            </td>
                                            <td>
                                                <DateInput disabled width={'100%'} />
                                            </td>
                                            <td>
                                                <DropDown gray disabled>
                                                    <option>선택</option>
                                                    <option>전화</option>
                                                    <option>SMS</option>
                                                </DropDown>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <StepText>민원종결(회신)</StepText>
                                            </td>
                                            <td>
                                                <Checkbox id={'play04'} name={'play'} />
                                            </td>
                                            <td>
                                                <DateInput width={'100%'} />
                                            </td>
                                            <td>
                                                <DropDown gray>
                                                    <option>선택</option>
                                                    <option>전화</option>
                                                    <option>SMS</option>
                                                </DropDown>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </>
                        )}
                    </DataWrap>
                </SearchWrap>
            </Wrapper>
            <BottomTabWrap>
                <SpaceWrap>
                    <BtnWrap
                        width={190}
                        notification
                        onClick={() => {
                            setOpenBottomSlide(true);
                        }}
                    >
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
            <BottomSlideSheet openBottomSlide={openBottomSlide} setOpenBottomSlide={setOpenBottomSlide} />
        </Container>
    );
};

export default VOCSearch;
