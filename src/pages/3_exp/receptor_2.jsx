import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BiChevronDown,
  BiChevronRight,
  BiChevronUp,
  BiLoader,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import ReceptorCheck from "./receptor_2_check";

const ReceptorPoint = () => {
  const { t } = useTranslation("site");
  const navigate = useNavigate();

  // 토글 관리
  const [displayTable, setDisplayTable] = useState("inline-block");
  const [data, setData] = useState(false);

  // 버튼 텍스트
  const [isClicked, setIsClicked] = useState(false);

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

  const [expoProp, setExpoProp] = useState(2);

  // 추가 데이터 변수 목록 (3~5)
  const [expoProp_3, setexpoProp_3] = useState("User Defined 3");
  const [EF_3, setEF_3] = useState(0);
  const [ED_3, setED_3] = useState(0);
  const [ET_3, setET_3] = useState(0);

  const [expoProp_4, setexpoProp_4] = useState("User Defined 4");
  const [EF_4, setEF_4] = useState(0);
  const [ED_4, setED_4] = useState(0);
  const [ET_4, setET_4] = useState(0);

  const [expoProp_5, setexpoProp_5] = useState("User Defined 5");
  const [EF_5, setEF_5] = useState(0);
  const [ED_5, setED_5] = useState(0);
  const [ET_5, setET_5] = useState(0);

  // 다른 건물 기초 유형 추가하기
  const addRow = () => {
    expoProp < 5 && setExpoProp(expoProp + 1);
  };

  // 세션 저장
  const saveData = () => {
    sessionStorage.setItem("expoProp", expoProp);
    sessionStorage.setItem("check_exp", true);

    if (expoProp >= 3) {
      sessionStorage.setItem("expoProp_3", expoProp_3);
      sessionStorage.setItem("EF_3", EF_3);
      sessionStorage.setItem("ED_3", ED_3);
      sessionStorage.setItem("ET_3", ET_3);
    }
    if (expoProp >= 4) {
      sessionStorage.setItem("expoProp_4", expoProp_4);
      sessionStorage.setItem("EF_4", EF_4);
      sessionStorage.setItem("ED_4", ED_4);
      sessionStorage.setItem("ET_4", ET_4);
    }
    if (expoProp >= 5) {
      sessionStorage.setItem("expoProp_5", expoProp_5);
      sessionStorage.setItem("EF_5", EF_5);
      sessionStorage.setItem("ED_5", ED_5);
      sessionStorage.setItem("ET_5", ET_5);
    }

    makeResult();
    // navigate("/output");
  };

  // 최종 데이터 담은 객체 생성
  const makeResult = () => {
    const data = {}; // 최종 데이터 객체
    // const data = new FormData();

    // 오염원 > 오염물질
    data.chem = sessionStorage.getItem("chem");
    data.value_S = sessionStorage.getItem("value_S");
    data.value_Hc = sessionStorage.getItem("value_Hc");
    data.value_Dair = sessionStorage.getItem("value_Dair");
    data.value_Dwater = sessionStorage.getItem("value_Dwater");
    data.value_DHvb = sessionStorage.getItem("value_DHvb");
    data.value_Tc = sessionStorage.getItem("value_Tc");
    data.value_Tb = sessionStorage.getItem("value_Tb");
    data.value_MW = sessionStorage.getItem("value_MW");
    data.value_IUR = sessionStorage.getItem("value_IUR");
    data.value_Rfc = sessionStorage.getItem("value_Rfc");
    data.value_Mut = sessionStorage.getItem("value_Mut");
    data.value_Koc = sessionStorage.getItem("value_Koc");
    data.value_foc = sessionStorage.getItem("value_foc");

    // 오염원 > 오염심도
    data.waterlevel = sessionStorage.getItem("waterlevel");
    data.elevation = sessionStorage.getItem("elevation");
    data.DeffT = sessionStorage.getItem("DeffT");

    // 오염원 > 오염농도
    data.conc_type = sessionStorage.getItem("conc_type");
    if (sessionStorage.getItem("Ts") !== null) {
      data.Ts = sessionStorage.getItem("Ts");
    }
    if (sessionStorage.getItem("sat_soilconc") !== null) {
      data.sat_soilconc = sessionStorage.getItem("sat_soilconc");
    }
    if (sessionStorage.getItem("unsat_soilconc") !== null) {
      data.unsat_soilconc = sessionStorage.getItem("unsat_soilconc");
    }

    // 경로 > 지질매체
    data.Geo_Type = sessionStorage.getItem("Geo_Type");
    const strat = parseInt(sessionStorage.getItem("strat"));
    const layerType = sessionStorage.getItem("layerType");
    data.layerType = sessionStorage.getItem("layerType");
    if (layerType === "multiple") {
      data.DeffT = sessionStorage.getItem("DeffT");
    } else if (layerType === "single") {
      data.Geo_Type = sessionStorage.getItem("Geo_Type");
      if (strat >= 13) {
        data.hSA_13 = sessionStorage.getItem("hSA_13");
        data.nSA_13 = sessionStorage.getItem("nSA_13");
        data.nwSA_13 = sessionStorage.getItem("nwSA_13");
        data.hcz_13 = sessionStorage.getItem("hcz_13");
        data.ncz_13 = sessionStorage.getItem("ncz_13");
        data.nwcz_13 = sessionStorage.getItem("nwcz_13");
      }
    }

    // 경로 > 건물
    data.Found_Type = sessionStorage.getItem("Found_Type");
    const building = parseInt(sessionStorage.getItem("building"));
    if (building >= 11) {
      data.foundtype_11 = sessionStorage.getItem("foundtype_11");
      data.LB_11 = sessionStorage.getItem("LB_11");
      data.Lf_11 = sessionStorage.getItem("Lf_11");
      data.eta_11 = sessionStorage.getItem("eta_11");
      data.Abf_11 = sessionStorage.getItem("Abf_11");
      data.Hb_11 = sessionStorage.getItem("Hb_11");
      data.ach_11 = sessionStorage.getItem("ach_11");
      data.Qsoil_Qb_11 = sessionStorage.getItem("Qsoil_Qb_11");
    }
    if (building >= 12) {
      data.foundtype_12 = sessionStorage.getItem("foundtype_12");
      data.LB_12 = sessionStorage.getItem("LB_12");
      data.Lf_12 = sessionStorage.getItem("Lf_12");
      data.eta_12 = sessionStorage.getItem("eta_12");
      data.Abf_12 = sessionStorage.getItem("Abf_12");
      data.Hb_12 = sessionStorage.getItem("Hb_12");
      data.ach_12 = sessionStorage.getItem("ach_12");
      data.Qsoil_Qb_12 = sessionStorage.getItem("Qsoil_Qb_12");
    }
    if (building >= 13) {
      data.foundtype_13 = sessionStorage.getItem("foundtype_13");
      data.LB_13 = sessionStorage.getItem("LB_13");
      data.Lf_13 = sessionStorage.getItem("Lf_13");
      data.eta_13 = sessionStorage.getItem("eta_13");
      data.Abf_13 = sessionStorage.getItem("Abf_13");
      data.Hb_13 = sessionStorage.getItem("Hb_13");
      data.ach_13 = sessionStorage.getItem("ach_13");
      data.Qsoil_Qb_13 = sessionStorage.getItem("Qsoil_Qb_13");
    }
    if (building >= 14) {
      data.foundtype_14 = sessionStorage.getItem("foundtype_14");
      data.LB_14 = sessionStorage.getItem("LB_14");
      data.Lf_14 = sessionStorage.getItem("Lf_14");
      data.eta_14 = sessionStorage.getItem("eta_14");
      data.Abf_14 = sessionStorage.getItem("Abf_14");
      data.Hb_14 = sessionStorage.getItem("Hb_14");
      data.ach_14 = sessionStorage.getItem("ach_14");
      data.Qsoil_Qb_14 = sessionStorage.getItem("Qsoil_Qb_14");
    }
    if (building >= 15) {
      data.foundtype_15 = sessionStorage.getItem("foundtype_15");
      data.LB_15 = sessionStorage.getItem("LB_15");
      data.Lf_15 = sessionStorage.getItem("Lf_15");
      data.eta_15 = sessionStorage.getItem("eta_15");
      data.Abf_15 = sessionStorage.getItem("Abf_15");
      data.Hb_15 = sessionStorage.getItem("Hb_15");
      data.ach_15 = sessionStorage.getItem("ach_15");
      data.Qsoil_Qb_15 = sessionStorage.getItem("Qsoil_Qb_15");
    }

    // 수용체 > 노출특성
    data.Expo_Type = sessionStorage.getItem("Expo_Type");
    const expoProp = parseInt(sessionStorage.getItem("expoProp"));
    if (expoProp >= 3) {
      data.EF_3 = sessionStorage.getItem("EF_3");
      data.ED_3 = sessionStorage.getItem("ED_3");
      data.ET_3 = sessionStorage.getItem("ET_3");
    }
    if (expoProp >= 4) {
      data.EF_4 = sessionStorage.getItem("EF_4");
      data.ED_4 = sessionStorage.getItem("ED_4");
      data.ET_4 = sessionStorage.getItem("ET_4");
    }
    if (expoProp >= 5) {
      data.EF_5 = sessionStorage.getItem("EF_5");
      data.ED_5 = sessionStorage.getItem("ED_5");
      data.ET_5 = sessionStorage.getItem("ET_5");
    }

    const jsonData = JSON.stringify(data);
    // 서버 전송
    const config = {
      "Content-Type": "application/json",
      withCredentials: true,
    };
    sendToBE(jsonData, config);
  };

  const sendToBE = async (data, config) => {
    setIsClicked(true);
    await axios
      // .post("https://mateofwind24.pythonanywhere.com/singleSource", data, {
      .post("https://kuenvgeo.pythonanywhere.com/singleSource", data, {
        headers: config,
      })
      .then((res) => {
        const message = res.data.message;
        if (message === "ZeroDivisionError") {
          alert(t("receptor.alert.alert1"));
        } else if (message === "OverflowError") {
          alert(t("receptor.alert.alert2"));
        } else {
          const Cia = res.data.Cia;
          const HQ = res.data.HQ;
          const Risk = res.data.Risk;

          sessionStorage.setItem("Cia", Cia);
          sessionStorage.setItem("HQ", HQ);
          sessionStorage.setItem("Risk", Risk);

          navigate("/output2", {
            state: {
              Cia: Cia,
              HQ: HQ,
              Risk: Risk,
            },
          });
        }
      })
      .catch((err) => {
        // console.log(err);
        if (err.message === "Request failed with status code 500") {
          alert(t("receptor.alert.alert3"));
        }
      });
  };

  // 세션 불러오기
  const [isTrichloroethylene, setIsTrichloroethylene] = useState(false);

  const getSession = () => {
    const preExpoProp = parseInt(sessionStorage.getItem("expoProp"));
    sessionStorage.getItem("expoProp") !== null && setExpoProp(preExpoProp);

    const coc_chem = sessionStorage.getItem("chem");
    coc_chem === "Trichloroethylene" && setIsTrichloroethylene(true);

    if (preExpoProp >= 3) {
      setexpoProp_3(sessionStorage.getItem("expoProp_3"));
      setEF_3(sessionStorage.getItem("EF_3"));
      setED_3(sessionStorage.getItem("ED_3"));
      setET_3(sessionStorage.getItem("ET_3"));
    }
    if (preExpoProp >= 4) {
      setexpoProp_4(sessionStorage.getItem("expoProp_4"));
      setEF_4(sessionStorage.getItem("EF_4"));
      setED_4(sessionStorage.getItem("ED_4"));
      setET_4(sessionStorage.getItem("ET_4"));
    }
    if (preExpoProp >= 5) {
      setexpoProp_5(sessionStorage.getItem("expoProp_5"));
      setEF_5(sessionStorage.getItem("EF_5"));
      setED_5(sessionStorage.getItem("ED_5"));
      setET_5(sessionStorage.getItem("ET_5"));
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
            {t("receptor.pagePath.text1")} <BiChevronRight /> Input
            <BiChevronRight /> {t("receptor.pagePath.text2")}
            <BiChevronRight /> {t("receptor.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("receptor.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h3>{t("receptor.input.title")}</h3>
                <ReceptorCheck setData={setData} expoProp={expoProp} />
                <hr />
                <h4 onClick={clickToggle}>
                  {displayTable === "inline-block" ? (
                    <BiChevronDown />
                  ) : (
                    <BiChevronUp />
                  )}
                  {t("receptor.table.title")}
                </h4>

                <div style={{ display: displayTable }}>
                  <p>{t("receptor.table.info")}</p>
                  <br />
                  <Table>
                    <thead>
                      <tr>
                        <Td>{t("receptor.table.td1")}</Td>
                        <Td>{t("receptor.table.td2")}</Td>
                        <Td>EF</Td>
                        <Td>ED</Td>
                        <Td>ET</Td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <Td>1</Td>
                        <Td>Residential</Td>
                        <Td>350</Td>
                        <Td>26</Td>
                        <Td>24</Td>
                      </tr>
                      <tr>
                        <Td>2</Td>
                        <Td>Commercial</Td>
                        <Td>250</Td>
                        <Td>25</Td>
                        <Td>8</Td>
                      </tr>
                      {expoProp >= 3 ? (
                        <tr>
                          <Td>3</Td>
                          <Td>
                            <Input
                              type="text"
                              value={expoProp_3}
                              onChange={(e) => setexpoProp_3(e.target.value)}
                            />
                          </Td>
                          <Td>
                            <InputSmall
                              type="number"
                              value={EF_3}
                              onChange={(e) => setEF_3(e.target.value)}
                            />
                          </Td>
                          <Td>
                            <InputSmall
                              type="number"
                              value={ED_3}
                              onChange={(e) => setED_3(e.target.value)}
                            />
                          </Td>
                          <Td>
                            <InputSmall
                              type="number"
                              value={ET_3}
                              onChange={(e) => setET_3(e.target.value)}
                            />
                          </Td>
                        </tr>
                      ) : null}
                      {expoProp >= 4 ? (
                        <tr>
                          <Td>4</Td>
                          <Td>
                            <Input
                              type="text"
                              value={expoProp_4}
                              onChange={(e) => setexpoProp_4(e.target.value)}
                            />
                          </Td>
                          <Td>
                            <InputSmall
                              type="number"
                              value={EF_4}
                              onChange={(e) => setEF_4(e.target.value)}
                            />
                          </Td>
                          <Td>
                            <InputSmall
                              type="number"
                              value={ED_4}
                              onChange={(e) => setED_4(e.target.value)}
                            />
                          </Td>
                          <Td>
                            <InputSmall
                              type="number"
                              value={ET_4}
                              onChange={(e) => setET_4(e.target.value)}
                            />
                          </Td>
                        </tr>
                      ) : null}
                      {expoProp >= 5 ? (
                        <tr>
                          <Td>5</Td>
                          <Td>
                            <Input
                              type="text"
                              value={expoProp_5}
                              onChange={(e) => setexpoProp_5(e.target.value)}
                            />
                          </Td>
                          <Td>
                            <InputSmall
                              type="number"
                              value={EF_5}
                              onChange={(e) => setEF_5(e.target.value)}
                            />
                          </Td>
                          <Td>
                            <InputSmall
                              type="number"
                              value={ET_5}
                              onChange={(e) => setET_5(e.target.value)}
                            />
                          </Td>
                          <Td>
                            <InputSmall
                              type="number"
                              value={ET_4}
                              onChange={(e) => setET_4(e.target.value)}
                            />
                          </Td>
                        </tr>
                      ) : null}
                      {expoProp < 5 && isTrichloroethylene === false ? (
                        <tr>
                          <td
                            colSpan="5"
                            style={{ padding: "10px 5px" }}
                            onClick={addRow}
                          >
                            {t("receptor.table.more")}
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </Table>
                </div>
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/input/pathway/found2")}>
                {t("receptor.prev")}
              </S.PrevBtn>
              <S.NextBtn
                onClick={() => {
                  data === false && alert(t("receptor.alert"));
                  data === true && saveData();
                }}
              >
                {isClicked ? (
                  <p>
                    <BiLoader /> Loading...
                  </p>
                ) : (
                  <p>{t("receptor.next")}</p>
                )}
              </S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default ReceptorPoint;

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`;

const Td = styled.td`
  border: 1px solid black;
  padding: 1rem;
`;

const Input = styled.input`
  width: 7rem;
  height: 1.5rem;
`;

const InputSmall = styled.input`
  width: 2rem;
  height: 1.5rem;
`;
