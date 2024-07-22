import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronDown, BiChevronRight, BiChevronUp } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import FoundCheck from "./found_2_check";

const Found2 = () => {
  const { t } = useTranslation("site");
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
    sessionStorage.setItem("building", building);
    sessionStorage.setItem("check_found", true);

    if (building >= 11) {
      sessionStorage.setItem("foundtype_11", foundtype_11);
      sessionStorage.setItem("LB_11", LB_11);
      sessionStorage.setItem("Lf_11", Lf_11);
      sessionStorage.setItem("eta_11", eta_11);
      sessionStorage.setItem("Abf_11", Abf_11);
      sessionStorage.setItem("Hb_11", Hb_11);
      sessionStorage.setItem("ach_11", ach_11);
      sessionStorage.setItem("Qsoil_Qb_11", Qsoil_Qb_11);
      sessionStorage.setItem("Qb_11", Qb_11);
      sessionStorage.setItem("Qsoil_11", Qsoil_11);
    }
    if (building >= 12) {
      sessionStorage.setItem("foundtype_12", foundtype_12);
      sessionStorage.setItem("LB_12", LB_12);
      sessionStorage.setItem("Lf_12", Lf_12);
      sessionStorage.setItem("eta_12", eta_12);
      sessionStorage.setItem("Abf_12", Abf_12);
      sessionStorage.setItem("Hb_12", Hb_12);
      sessionStorage.setItem("ach_12", ach_12);
      sessionStorage.setItem("Qsoil_Qb_12", Qsoil_Qb_12);
      sessionStorage.setItem("Qb_12", Qb_12);
      sessionStorage.setItem("Qsoil_12", Qsoil_12);
    }
    if (building >= 13) {
      sessionStorage.setItem("foundtype_13", foundtype_13);
      sessionStorage.setItem("LB_13", LB_13);
      sessionStorage.setItem("Lf_13", Lf_13);
      sessionStorage.setItem("eta_13", eta_13);
      sessionStorage.setItem("Abf_13", Abf_13);
      sessionStorage.setItem("Hb_13", Hb_13);
      sessionStorage.setItem("ach_13", ach_13);
      sessionStorage.setItem("Qsoil_Qb_13", Qsoil_Qb_13);
      sessionStorage.setItem("Qb_13", Qb_13);
      sessionStorage.setItem("Qsoil_13", Qsoil_13);
    }
    if (building >= 14) {
      sessionStorage.setItem("foundtype_14", foundtype_14);
      sessionStorage.setItem("LB_14", LB_14);
      sessionStorage.setItem("Lf_14", Lf_14);
      sessionStorage.setItem("eta_14", eta_14);
      sessionStorage.setItem("Abf_14", Abf_14);
      sessionStorage.setItem("Hb_14", Hb_14);
      sessionStorage.setItem("ach_14", ach_14);
      sessionStorage.setItem("Qsoil_Qb_14", Qsoil_Qb_14);
      sessionStorage.setItem("Qb_14", Qb_14);
      sessionStorage.setItem("Qsoil_14", Qsoil_14);
    }
    if (building >= 15) {
      sessionStorage.setItem("foundtype_15", foundtype_15);
      sessionStorage.setItem("LB_15", LB_15);
      sessionStorage.setItem("Lf_15", Lf_15);
      sessionStorage.setItem("eta_15", eta_15);
      sessionStorage.setItem("Abf_15", Abf_15);
      sessionStorage.setItem("Hb_15", Hb_15);
      sessionStorage.setItem("ach_15", ach_15);
      sessionStorage.setItem("Qsoil_Qb_15", Qsoil_Qb_15);
      sessionStorage.setItem("Qb_15", Qb_15);
      sessionStorage.setItem("Qsoil_15", Qsoil_15);
    }
    navigate("/input/receptors/exp2");
  };

  // 세션 불러오기
  const getSession = () => {
    const preBuilding = parseInt(sessionStorage.getItem("building"));
    sessionStorage.getItem("building") !== null && setBuilding(preBuilding);

    if (preBuilding >= 11) {
      setfoundType_11(sessionStorage.getItem("foundtype_11"));
      setLB_11(sessionStorage.getItem("LB_11"));
      setLf_11(sessionStorage.getItem("Lf_11"));
      seteta_11(sessionStorage.getItem("eta_11"));
      setAbf_11(sessionStorage.getItem("Abf_11"));
      setHb_11(sessionStorage.getItem("Hb_11"));
      setach_11(sessionStorage.getItem("ach_11"));
      setQsoil_Qb_11(sessionStorage.getItem("Qsoil_Qb_11"));
      setQb_11(sessionStorage.getItem("Qb_11"));
      setQsoil_11(sessionStorage.getItem("Qsoil_11"));
    }
    if (preBuilding >= 12) {
      setfoundType_12(sessionStorage.getItem("foundtype_12"));
      setLB_12(sessionStorage.getItem("LB_12"));
      setLf_12(sessionStorage.getItem("Lf_12"));
      seteta_12(sessionStorage.getItem("eta_12"));
      setAbf_12(sessionStorage.getItem("Abf_12"));
      setHb_12(sessionStorage.getItem("Hb_12"));
      setach_12(sessionStorage.getItem("ach_12"));
      setQsoil_Qb_12(sessionStorage.getItem("Qsoil_Qb_12"));
      setQb_12(sessionStorage.getItem("Qb_12"));
      setQsoil_12(sessionStorage.getItem("Qsoil_12"));
    }
    if (preBuilding >= 13) {
      setfoundType_13(sessionStorage.getItem("foundtype_13"));
      setLB_13(sessionStorage.getItem("LB_13"));
      setLf_13(sessionStorage.getItem("Lf_13"));
      seteta_13(sessionStorage.getItem("eta_13"));
      setAbf_13(sessionStorage.getItem("Abf_13"));
      setHb_13(sessionStorage.getItem("Hb_13"));
      setach_13(sessionStorage.getItem("ach_13"));
      setQsoil_Qb_13(sessionStorage.getItem("Qsoil_Qb_13"));
      setQb_13(sessionStorage.getItem("Qb_13"));
      setQsoil_13(sessionStorage.getItem("Qsoil_13"));
    }
    if (preBuilding >= 14) {
      setfoundType_14(sessionStorage.getItem("foundtype_14"));
      setLB_14(sessionStorage.getItem("LB_14"));
      setLf_14(sessionStorage.getItem("Lf_14"));
      seteta_14(sessionStorage.getItem("eta_14"));
      setAbf_14(sessionStorage.getItem("Abf_14"));
      setHb_14(sessionStorage.getItem("Hb_14"));
      setach_14(sessionStorage.getItem("ach_14"));
      setQsoil_Qb_14(sessionStorage.getItem("Qsoil_Qb_14"));
      setQb_14(sessionStorage.getItem("Qb_14"));
      setQsoil_14(sessionStorage.getItem("Qsoil_14"));
    }
    if (preBuilding >= 15) {
      setfoundType_15(sessionStorage.getItem("foundtype_15"));
      setLB_15(sessionStorage.getItem("LB_15"));
      setLf_15(sessionStorage.getItem("Lf_15"));
      seteta_15(sessionStorage.getItem("eta_15"));
      setAbf_15(sessionStorage.getItem("Abf_15"));
      setHb_15(sessionStorage.getItem("Hb_15"));
      setach_15(sessionStorage.getItem("ach_15"));
      setQsoil_Qb_15(sessionStorage.getItem("Qsoil_Qb_15"));
      setQb_15(sessionStorage.getItem("Qb_15"));
      setQsoil_15(sessionStorage.getItem("Qsoil_15"));
    }
  };
  useEffect(() => {
    getSession();
  }, []);
  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("found.pagePath.text1")} <BiChevronRight /> Input
            <BiChevronRight /> {t("found.pagePath.text2")}
            <BiChevronRight /> {t("found.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("found.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h3>{t("found.input.title")}</h3>
                <FoundCheck setData={setData} building={building} />
                <hr />
                <h4 onClick={clickToggle}>
                  {displayTable === "inline-block" ? (
                    <BiChevronDown />
                  ) : (
                    <BiChevronUp />
                  )}
                  {t("found.table.title")}
                </h4>
                <div style={{ display: displayTable }}>
                  <p>{t("found.table.info")}</p>
                  <Table>
                    <thead>
                      <tr>
                        <Td>{t("found.table.td1")}</Td>
                        <Td>{t("found.table.td2")}</Td>
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
                            {t("found.table.more")}
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </Table>
                </div>
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/input/pathway/geo2")}>
                {t("found.prev")}
              </S.PrevBtn>
              <S.NextBtn
                onClick={() => {
                  data === false && alert(t("found.alert"));
                  data === true && saveData();
                }}
              >
                {t("found.next")}
              </S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default Found2;

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
