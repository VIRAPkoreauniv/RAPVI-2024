import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const Geo2 = () => {
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

  const [strat, setStrat] = useState(12);

  // 추가 데이터 변수 목록 (13~20)
  const [geotype_13, setgeoType_13] = useState("User Defined 13");
  const [nSA_13, setnSA_13] = useState(0);
  const [nwSA_13, setnwSA_13] = useState(0);
  const [rhoSA_13, setrhoSA_13] = useState(0);
  const [hcz_13, sethcz_13] = useState(0);
  const [ncz_13, setncz_13] = useState(0);
  const [nwcz_13, setnwcz_13] = useState(0);

  // 다른 지층 토양 유형 추가하기
  const addRow = () => {
    strat < 13 && setStrat(strat + 1);
  };

  // 세션 저장
  const saveData = () => {
    sessionStorage.setItem("check_geo", true);
    sessionStorage.setItem("layerType", layerType);
    if (layerType === "multiple") {
      sessionStorage.setItem("DeffT", DeffT);
    }
    if (layerType === "single") {
      sessionStorage.setItem("Geo_Type", singleType);
      sessionStorage.setItem("strat", strat);
      if (strat >= 13) {
        sessionStorage.setItem("nSA_13", nSA_13);
        sessionStorage.setItem("nwSA_13", nwSA_13);
        sessionStorage.setItem("rhoSA_13", rhoSA_13);
        sessionStorage.setItem("hcz_13", hcz_13);
        sessionStorage.setItem("ncz_13", ncz_13);
        sessionStorage.setItem("nwcz_13", nwcz_13);
      }
    }
    navigate("/input/pathway/found2");
  };

  // 세션 불러오기
  const getSession = () => {
    const preStrat = parseInt(sessionStorage.getItem("strat"));
    const preLayerType = sessionStorage.getItem("layerType");

    sessionStorage.getItem("strat") !== null && setStrat(preStrat);
    sessionStorage.getItem("layerType") !== null && setLayerType(preLayerType);
    if (preLayerType === "multiple") {
      setDeffT(parseInt(sessionStorage.getItem("DeffT")));
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  // 층서 유형
  const [layerType, setLayerType] = useState("");
  const [option, setOption] = useState("inline-block");

  // 단일층 토양 유형
  const [singleType, setSingleType] = useState("");

  // 다중층
  const [DeffT, setDeffT] = useState(0);

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            위해성 평가 <BiChevronRight /> Input <BiChevronRight /> 경로{" "}
            <BiChevronRight /> 지질매체
          </S.PagePath>
          <S.PageTitle>지질매체</S.PageTitle>
          <LayerSelectBox>
            <BoldTxt>층서유형 선택</BoldTxt>
            <form>
              <div>
                <Radio
                  type="radio"
                  id="single"
                  name="layer"
                  onChange={(e) => setLayerType(e.target.id)}
                />
                <Label htmlFor="single">단일층</Label>
                <Radio
                  type="radio"
                  id="multiple"
                  name="layer"
                  onChange={(e) => setLayerType(e.target.id)}
                />
                <Label htmlFor="multiple">다중층</Label>
              </div>
            </form>
          </LayerSelectBox>

          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                {layerType === "" && (
                  <InfoBox>
                    <center>
                      <p>층서유형을 선택해주세요.</p>
                      <p>단일층일 때와 다중층일 때 입력값이 달라집니다.</p>
                    </center>
                  </InfoBox>
                )}
                {layerType === "single" && (
                  <>
                    <LayerSelectBox>
                      <h3>지층 토양 유형</h3>
                      <Select
                        onChange={(e) => {
                          setOption("none");
                          setSingleType(e.target.value);
                        }}
                      >
                        <option value="" style={{ display: option }}>
                          지층토양유형을 선택해주세요.
                        </option>
                        <option value="1">Clay</option>
                        <option value="2">Loam</option>
                        <option value="3">Clay Loam</option>
                        <option value="4">Loamy Sand</option>
                        <option value="5">Sand</option>
                        <option value="6">Sandy Clay</option>
                        <option value="7">Sandy Clay Loam</option>
                        <option value="8">Sandy Loam</option>
                        <option value="9">Silt</option>
                        <option value="10">Silt Loam</option>
                        <option value="11">Silty Clay</option>
                        <option value="12">Silty Clay Loam</option>
                        {strat >= 13 && (
                          <option value="13">{geotype_13}</option>
                        )}
                      </Select>
                    </LayerSelectBox>
                    <p>
                      하단의 '입력 가능한 지층토양유형'표를 참고해
                      지층토양유형을 선택해주세요.
                    </p>
                    <p>
                      지층토양유형을 선택하면 모든 데이터 범위가 선택한
                      지층토양유형(단일 유형)으로 채워집니다.
                    </p>
                    {/* <GeoCheck setData={setData} strat={strat} /> */}
                    <hr />
                    <h4 onClick={clickToggle}>
                      {displayTable === "inline-block" ? (
                        <BiChevronDown />
                      ) : (
                        <BiChevronUp />
                      )}
                      입력 가능한 지층 토양 유형
                    </h4>
                    <div style={{ display: displayTable }}>
                      <p>
                        ※ 표 하단의{" "}
                        <strong>+ 다른 지층토양유형 추가하기</strong>를 클릭하여
                        사용자 정의 유형을 추가할 수 있습니다.
                      </p>
                      <Table>
                        <thead>
                          <tr>
                            <Td>번호</Td>
                            <Td>지층 토양 유형</Td>
                            <Td>nSA</Td>
                            <Td>nwSA</Td>
                            <Td>rhoSA</Td>
                            <Td>hcz</Td>
                            <Td>ncz</Td>
                            <Td>nwcz</Td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <Td>1</Td>
                            <Td>Clay</Td>
                            <Td>0.459</Td>
                            <Td>0.215</Td>
                            <Td>1.43</Td>
                            <Td>0.815217391</Td>
                            <Td>0.459</Td>
                            <Td>0.41185514</Td>
                          </tr>
                          <tr>
                            <Td>2</Td>
                            <Td>Clay Loam</Td>
                            <Td>0.442</Td>
                            <Td>0.168</Td>
                            <Td>1.48</Td>
                            <Td>0.46875</Td>
                            <Td>0.442</Td>
                            <Td>0.375117458</Td>
                          </tr>
                          <tr>
                            <Td>3</Td>
                            <Td>Loam</Td>
                            <Td>0.399</Td>
                            <Td>0.148</Td>
                            <Td>1.59</Td>
                            <Td>0.375</Td>
                            <Td>0.399</Td>
                            <Td>0.331630276</Td>
                          </tr>
                          <tr>
                            <Td>4</Td>
                            <Td>Loamy Sand</Td>
                            <Td>0.39</Td>
                            <Td>0.076</Td>
                            <Td>1.62</Td>
                            <Td>0.1875</Td>
                            <Td>0.39</Td>
                            <Td>0.302585409</Td>
                          </tr>
                          <tr>
                            <Td>5</Td>
                            <Td>Sand</Td>
                            <Td>0.375</Td>
                            <Td>0.054</Td>
                            <Td>1.66</Td>
                            <Td>0.170454545</Td>
                            <Td>0.375</Td>
                            <Td>0.253258113</Td>
                          </tr>
                          <tr>
                            <Td>6</Td>
                            <Td>Sandy Clay</Td>
                            <Td>0.385</Td>
                            <Td>0.197</Td>
                            <Td>1.63</Td>
                            <Td>0.3</Td>
                            <Td>0.385</Td>
                            <Td>0.354846864</Td>
                          </tr>
                          <tr>
                            <Td>7</Td>
                            <Td>Sandy Clay Loam</Td>
                            <Td>0.384</Td>
                            <Td>0.146</Td>
                            <Td>1.63</Td>
                            <Td>0.25862069</Td>
                            <Td>0.384</Td>
                            <Td>0.333283473</Td>
                          </tr>
                          <tr>
                            <Td>8</Td>
                            <Td>Sandy Loam</Td>
                            <Td>0.387</Td>
                            <Td>0.103</Td>
                            <Td>1.62</Td>
                            <Td>0.25</Td>
                            <Td>0.387</Td>
                            <Td>0.31973079</Td>
                          </tr>
                          <tr>
                            <Td>9</Td>
                            <Td>Silt</Td>
                            <Td>0.489</Td>
                            <Td>0.167</Td>
                            <Td>1.35</Td>
                            <Td>1.630434783</Td>
                            <Td>0.489</Td>
                            <Td>0.381686648</Td>
                          </tr>
                          <tr>
                            <Td>10</Td>
                            <Td>Silt Loam</Td>
                            <Td>0.439</Td>
                            <Td>0.18</Td>
                            <Td>1.49</Td>
                            <Td>0.681818182</Td>
                            <Td>0.439</Td>
                            <Td>0.348694517</Td>
                          </tr>
                          <tr>
                            <Td>11</Td>
                            <Td>Silty Clay</Td>
                            <Td>0.481</Td>
                            <Td>0.216</Td>
                            <Td>1.38</Td>
                            <Td>1.923076923</Td>
                            <Td>0.481</Td>
                            <Td>0.423644962</Td>
                          </tr>
                          <tr>
                            <Td>12</Td>
                            <Td>Silty Clay Loam</Td>
                            <Td>0.482</Td>
                            <Td>0.198</Td>
                            <Td>1.37</Td>
                            <Td>1.339285714</Td>
                            <Td>0.482</Td>
                            <Td>0.399159996</Td>
                          </tr>
                          {strat >= 13 ? (
                            <tr>
                              <Td>13</Td>
                              <Td1>
                                <Input
                                  type="text"
                                  value={geotype_13}
                                  onChange={(e) =>
                                    setgeoType_13(e.target.value)
                                  }
                                />
                              </Td1>
                              <Td1>
                                <Input
                                  type="number"
                                  value={nSA_13}
                                  onChange={(e) => setnSA_13(e.target.value)}
                                />
                              </Td1>
                              <Td1>
                                <Input
                                  type="number"
                                  value={nwSA_13}
                                  onChange={(e) => setnwSA_13(e.target.value)}
                                />
                              </Td1>
                              <Td1>
                                <Input
                                  type="number"
                                  value={rhoSA_13}
                                  onChange={(e) => setrhoSA_13(e.target.value)}
                                />
                              </Td1>
                              <Td1>
                                <Input
                                  type="number"
                                  value={hcz_13}
                                  onChange={(e) => sethcz_13(e.target.value)}
                                />
                              </Td1>
                              <Td1>
                                <Input
                                  type="number"
                                  value={ncz_13}
                                  onChange={(e) => setncz_13(e.target.value)}
                                />
                              </Td1>
                              <Td1>
                                <Input
                                  type="number"
                                  value={nwcz_13}
                                  onChange={(e) => setnwcz_13(e.target.value)}
                                />
                              </Td1>
                            </tr>
                          ) : null}
                          {strat < 13 ? (
                            <tr>
                              <td
                                colSpan="9"
                                style={{ padding: "10px 5px" }}
                                onClick={addRow}
                              >
                                + 다른 지층 토양 유형 추가하기
                              </td>
                            </tr>
                          ) : null}
                        </tbody>
                      </Table>
                    </div>
                  </>
                )}
                {layerType === "multiple" && (
                  <>
                    <LayerSelectBox>
                      <h3>확산계수 (DeffT)</h3>
                      <DeffTInput
                        type="number"
                        placeholder="DeffT값을 입력해주세요."
                        onChange={(e) => setDeffT(e.target.value)}
                      />
                    </LayerSelectBox>
                    <h4>
                      엑셀 전처리 파일의 DeffT 시트에서 계산된 값을
                      입력해주세요.
                    </h4>
                  </>
                )}
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/input/source/conc2")}>
                이전
              </S.PrevBtn>
              <S.NextBtn
                onClick={() => {
                  if (layerType === "single" && singleType === "") {
                    alert("지층 토양 유형을 선택해주세요.");
                  } else if (layerType === "single" && singleType !== "") {
                    saveData();
                  } else if (layerType === "multiple" && DeffT === 0) {
                    alert("DeffT을 입력해주세요.");
                  } else if (layerType === "multiple" && DeffT !== 0) {
                    saveData();
                  }
                }}
              >
                다음
              </S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default Geo2;

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

const LayerSelectBox = styled.div`
  display: flex;
`;

const BoldTxt = styled.h3`
  margin: 2rem 3rem 0rem 3rem;
`;

const Radio = styled.input`
  margin: 2.3rem 1.5rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const Select = styled.select`
  margin: 1rem 3rem;
`;

const DeffTInput = styled.input`
  margin: 1rem 3rem;
`;
