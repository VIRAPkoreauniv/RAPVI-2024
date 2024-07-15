import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import FoundCheck from "./2_found._check";

const TFound2 = () => {
  const navigate = useNavigate();

  // 토글 관리
  const [displayTable, setDisplayTable] = useState("inline-block");
  const [data, setData] = useState(false);

  const clickToggle = () => {
    displayTable === "inline-block" && setDisplayTable("none");
    displayTable === "none" && setDisplayTable("inline-block");
  };

  const toggleCtrl = () => {
    data === true && setDisplayTable("none");
    data === false && setDisplayTable("inline-block");
  };

  useEffect(() => {
    toggleCtrl();
  }, [data]);

  const [building, setBuilding] = useState(10);

  // 추가 데이터 변수 목록 (11~15)
  const [foundtype_11, setfoundType_11] = useState("User Defined 11");
  const [LB_11, setLB_11] = useState(0);
  const [Lf_11, setLf_11] = useState(0);
  const [eta_11, seteta_11] = useState(0);
  const [Abf_11, setAbf_11] = useState(0);
  const [Hb_11, setHb_11] = useState(0);
  const [ach_11, setach_11] = useState(0);
  const [Qsoil_Qb_11, setQsoil_Qb_11] = useState(0);
  const [Qb_11, setQb_11] = useState(0);
  const [Qsoil_11, setQsoil_11] = useState(0);

  const [foundtype_12, setfoundType_12] = useState("User Defined 12");
  const [LB_12, setLB_12] = useState(0);
  const [Lf_12, setLf_12] = useState(0);
  const [eta_12, seteta_12] = useState(0);
  const [Abf_12, setAbf_12] = useState(0);
  const [Hb_12, setHb_12] = useState(0);
  const [ach_12, setach_12] = useState(0);
  const [Qsoil_Qb_12, setQsoil_Qb_12] = useState(0);
  const [Qb_12, setQb_12] = useState(0);
  const [Qsoil_12, setQsoil_12] = useState(0);

  const [foundtype_13, setfoundType_13] = useState("User Defined 13");
  const [LB_13, setLB_13] = useState(0);
  const [Lf_13, setLf_13] = useState(0);
  const [eta_13, seteta_13] = useState(0);
  const [Abf_13, setAbf_13] = useState(0);
  const [Hb_13, setHb_13] = useState(0);
  const [ach_13, setach_13] = useState(0);
  const [Qsoil_Qb_13, setQsoil_Qb_13] = useState(0);
  const [Qb_13, setQb_13] = useState(0);
  const [Qsoil_13, setQsoil_13] = useState(0);

  const [foundtype_14, setfoundType_14] = useState("User Defined 14");
  const [LB_14, setLB_14] = useState(0);
  const [Lf_14, setLf_14] = useState(0);
  const [eta_14, seteta_14] = useState(0);
  const [Abf_14, setAbf_14] = useState(0);
  const [Hb_14, setHb_14] = useState(0);
  const [ach_14, setach_14] = useState(0);
  const [Qsoil_Qb_14, setQsoil_Qb_14] = useState(0);
  const [Qb_14, setQb_14] = useState(0);
  const [Qsoil_14, setQsoil_14] = useState(0);

  const [foundtype_15, setfoundType_15] = useState("User Defined 15");
  const [LB_15, setLB_15] = useState(0);
  const [Lf_15, setLf_15] = useState(0);
  const [eta_15, seteta_15] = useState(0);
  const [Abf_15, setAbf_15] = useState(0);
  const [Hb_15, setHb_15] = useState(0);
  const [ach_15, setach_15] = useState(0);
  const [Qsoil_Qb_15, setQsoil_Qb_15] = useState(0);
  const [Qb_15, setQb_15] = useState(0);
  const [Qsoil_15, setQsoil_15] = useState(0);

  // 다른 건물 기초 유형 추가하기
  const addRow = () => {
    building < 15 && setBuilding(building + 1);
  };

  // 세션 저장
  const saveData = () => {
    sessionStorage.setItem("check_found", true);
    navigate("/tutorial/2/exp");
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            튜토리얼 <BiChevronRight /> Input <BiChevronRight /> 경로{" "}
            <BiChevronRight /> 건물
          </S.PagePath>
          <S.PageTitle>건물</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h3>건물 기초 유형</h3>
                <FoundCheck setData={setData} building={building} />
                <hr />
                <h4 onClick={clickToggle}>
                  {displayTable === "inline-block" ? (
                    <BiChevronDown />
                  ) : (
                    <BiChevronUp />
                  )}
                  입력 가능한 건물 기초 유형
                </h4>
                <div style={{ display: displayTable }}>
                  <p>
                    ※ 그리드의 각 셀에 해당하는 건물 유형은 아래 표에서 제시한
                    번호로 표시해야 합니다.
                  </p>
                  <Table>
                    <thead>
                      <tr>
                        <Td>번호</Td>
                        <Td>건물기초 유형</Td>
                        <Td>LB</Td>
                        <Td>Lf</Td>
                        <Td>eta</Td>
                        <Td>Abf</Td>
                        <Td>Hb</Td>
                        <Td>ach</Td>
                        <Td>Qsoil_Qb</Td>
                        <Td>Qb</Td>
                        <Td>Qsoil</Td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <Td>1</Td>
                        <Td>Residential & Closed crawl space w/ slab</Td>
                        <Td>1</Td>
                        <Td>0.1</Td>
                        <Td>0.001</Td>
                        <Td>150</Td>
                        <Td>1.3</Td>
                        <Td>0.45</Td>
                        <Td>0.003</Td>
                        <Td>87.75</Td>
                        <Td>0.2632</Td>
                      </tr>
                      <tr>
                        <Td>2</Td>
                        <Td>Residential & Closed crawl space w/ dirt floor</Td>
                        <Td>1</Td>
                        <Td>0</Td>
                        <Td>1</Td>
                        <Td>150</Td>
                        <Td>1.3</Td>
                        <Td>0.45</Td>
                        <Td>0.003</Td>
                        <Td>87.75</Td>
                        <Td>0.2632</Td>
                      </tr>
                      <tr>
                        <Td>3</Td>
                        <Td>Residential & Basement w/ slab</Td>
                        <Td>2</Td>
                        <Td>0.1</Td>
                        <Td>0.001</Td>
                        <Td>150</Td>
                        <Td>3.66</Td>
                        <Td>0.45</Td>
                        <Td>0.003</Td>
                        <Td>247.05</Td>
                        <Td>0.7412</Td>
                      </tr>
                      <tr>
                        <Td>4</Td>
                        <Td>Residential & Basement w/ dirt floor</Td>
                        <Td>2</Td>
                        <Td>0</Td>
                        <Td>1</Td>
                        <Td>150</Td>
                        <Td>3.66</Td>
                        <Td>0.45</Td>
                        <Td>0.003</Td>
                        <Td>247.05</Td>
                        <Td>0.7412</Td>
                      </tr>
                      <tr>
                        <Td>5</Td>
                        <Td>Residential & Slab-on-grade</Td>
                        <Td>0.1</Td>
                        <Td>0.1</Td>
                        <Td>0.001</Td>
                        <Td>150</Td>
                        <Td>2.44</Td>
                        <Td>0.45</Td>
                        <Td>0.003</Td>
                        <Td>164.7</Td>
                        <Td>0.4941</Td>
                      </tr>
                      <tr>
                        <Td>6</Td>
                        <Td>Commercial & Crawl space w/ slab</Td>
                        <Td>1</Td>
                        <Td>0.2</Td>
                        <Td>0.001</Td>
                        <Td>1500</Td>
                        <Td>3</Td>
                        <Td>1.5</Td>
                        <Td>0.003</Td>
                        <Td>6750</Td>
                        <Td>20.25</Td>
                      </tr>
                      <tr>
                        <Td>7</Td>
                        <Td>Commercial & Crawl space w/ dirt floor</Td>
                        <Td>1</Td>
                        <Td>0</Td>
                        <Td>1</Td>
                        <Td>1500</Td>
                        <Td>3</Td>
                        <Td>1.5</Td>
                        <Td>0.003</Td>
                        <Td>6750</Td>
                        <Td>20.25</Td>
                      </tr>
                      <tr>
                        <Td>8</Td>
                        <Td>Commercial & Basement w/ slab</Td>
                        <Td>2</Td>
                        <Td>0.2</Td>
                        <Td>0.001</Td>
                        <Td>1500</Td>
                        <Td>3</Td>
                        <Td>1.5</Td>
                        <Td>0.003</Td>
                        <Td>6750</Td>
                        <Td>20.25</Td>
                      </tr>
                      <tr>
                        <Td>9</Td>
                        <Td>Commercial & Basement w/ dirt floor</Td>
                        <Td>2</Td>
                        <Td>0</Td>
                        <Td>1</Td>
                        <Td>1500</Td>
                        <Td>3</Td>
                        <Td>1.5</Td>
                        <Td>0.003</Td>
                        <Td>6750</Td>
                        <Td>20.25</Td>
                      </tr>
                      <tr>
                        <Td>10</Td>
                        <Td>Commercial & Slab-on-grade</Td>
                        <Td>0.2</Td>
                        <Td>0.2</Td>
                        <Td>0.001</Td>
                        <Td>1500</Td>
                        <Td>3</Td>
                        <Td>1.5</Td>
                        <Td>0.003</Td>
                        <Td>6750</Td>
                        <Td>20.25</Td>
                      </tr>
                      {building >= 11 ? (
                        <tr>
                          <Td>11</Td>
                          <Td>
                            <Input
                              type="text"
                              value={foundtype_11}
                              onChange={(e) => setfoundType_11(e.target.value)}
                            />
                          </Td>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={LB_11}
                              onChange={(e) => setLB_11(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Lf_11}
                              onChange={(e) => setLf_11(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={eta_11}
                              onChange={(e) => seteta_11(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Abf_11}
                              onChange={(e) => setAbf_11(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Hb_11}
                              onChange={(e) => setHb_11(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={ach_11}
                              onChange={(e) => setach_11(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qsoil_Qb_11}
                              onChange={(e) => setQsoil_Qb_11(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qb_11}
                              onChange={(e) => setQb_11(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qsoil_11}
                              onChange={(e) => setQsoil_11(e.target.value)}
                            />
                          </Td1>
                        </tr>
                      ) : null}
                      {building >= 12 ? (
                        <tr>
                          <Td>12</Td>
                          <Td>
                            <Input
                              type="text"
                              value={foundtype_12}
                              onChange={(e) => setfoundType_12(e.target.value)}
                            />
                          </Td>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={LB_12}
                              onChange={(e) => setLB_12(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Lf_12}
                              onChange={(e) => setLf_12(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={eta_12}
                              onChange={(e) => seteta_12(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Abf_12}
                              onChange={(e) => setAbf_12(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Hb_12}
                              onChange={(e) => setHb_12(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={ach_12}
                              onChange={(e) => setach_12(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qsoil_Qb_12}
                              onChange={(e) => setQsoil_Qb_12(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qb_12}
                              onChange={(e) => setQb_12(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qsoil_12}
                              onChange={(e) => setQsoil_12(e.target.value)}
                            />
                          </Td1>
                        </tr>
                      ) : null}
                      {building >= 13 ? (
                        <tr>
                          <Td>13</Td>
                          <Td>
                            <Input
                              type="text"
                              value={foundtype_13}
                              onChange={(e) => setfoundType_13(e.target.value)}
                            />
                          </Td>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={LB_13}
                              onChange={(e) => setLB_13(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Lf_13}
                              onChange={(e) => setLf_13(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={eta_13}
                              onChange={(e) => seteta_13(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Abf_13}
                              onChange={(e) => setAbf_13(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Hb_13}
                              onChange={(e) => setHb_13(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={ach_13}
                              onChange={(e) => setach_13(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qsoil_Qb_13}
                              onChange={(e) => setQsoil_Qb_13(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qb_13}
                              onChange={(e) => setQb_13(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qsoil_13}
                              onChange={(e) => setQsoil_13(e.target.value)}
                            />
                          </Td1>
                        </tr>
                      ) : null}
                      {building >= 14 ? (
                        <tr>
                          <Td>14</Td>
                          <Td>
                            <Input
                              type="text"
                              value={foundtype_14}
                              onChange={(e) => setfoundType_14(e.target.value)}
                            />
                          </Td>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={LB_14}
                              onChange={(e) => setLB_14(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Lf_14}
                              onChange={(e) => setLf_14(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={eta_14}
                              onChange={(e) => seteta_14(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Abf_14}
                              onChange={(e) => setAbf_14(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Hb_14}
                              onChange={(e) => setHb_14(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={ach_14}
                              onChange={(e) => setach_14(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qsoil_Qb_14}
                              onChange={(e) => setQsoil_Qb_14(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qb_14}
                              onChange={(e) => setQb_14(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qsoil_14}
                              onChange={(e) => setQsoil_14(e.target.value)}
                            />
                          </Td1>
                        </tr>
                      ) : null}
                      {building >= 15 ? (
                        <tr>
                          <Td>15</Td>
                          <Td>
                            <Input
                              type="text"
                              value={foundtype_15}
                              onChange={(e) => setfoundType_15(e.target.value)}
                            />
                          </Td>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={LB_15}
                              onChange={(e) => setLB_15(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Lf_15}
                              onChange={(e) => setLf_15(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={eta_15}
                              onChange={(e) => seteta_15(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Abf_15}
                              onChange={(e) => setAbf_15(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Hb_15}
                              onChange={(e) => setHb_15(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={ach_15}
                              onChange={(e) => setach_15(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qsoil_Qb_15}
                              onChange={(e) => setQsoil_Qb_15(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qb_15}
                              onChange={(e) => setQb_15(e.target.value)}
                            />
                          </Td1>
                          <Td1>
                            <InputSmall
                              type="number"
                              value={Qsoil_15}
                              onChange={(e) => setQsoil_15(e.target.value)}
                            />
                          </Td1>
                        </tr>
                      ) : null}
                      {building < 15 ? (
                        <tr>
                          <td
                            colSpan="9"
                            style={{ padding: "10px 5px" }}
                            onClick={addRow}
                          >
                            + 다른 건물 기초 유형 추가하기
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </Table>
                </div>
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/tutorial/2/geo")}>
                이전
              </S.PrevBtn>
              <S.NextBtn onClick={saveData}>다음</S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TFound2;

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`;

const Td = styled.td`
  border: 1px solid black;
  padding: 1rem;
`;

const Td1 = styled.td`
  border: 1px solid black;
  padding: 0.5rem;
`;
const Input = styled.input`
  width: 7rem;
  height: 1.5rem;
`;

const InputSmall = styled.input`
  width: 2rem;
  height: 1.5rem;
`;
