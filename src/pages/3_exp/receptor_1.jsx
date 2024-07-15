import axios from "axios";
import { useEffect, useState } from "react";
import { BiChevronRight, BiLoader } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const Receptor = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [EF, setEF] = useState();
  const [ED, setED] = useState();
  const [ET, setET] = useState();
  const [ATc, setATc] = useState();
  const [ATnc, setATnc] = useState();
  const [disabled, setDisabled] = useState("disable");

  const selectType = (e) => {
    let selected = e.target.value;
    setType(selected);
    if (selected === "Residential") {
      setDisabled("");
      setEF(350);
      setED(26);
      setET(24);
      setATc(70);
      setATnc(26);
    } else if (selected === "Commercial") {
      setDisabled("");
      setEF(250);
      setED(26);
      setET(8);
      setATc(70);
      setATnc(25);
    } else {
      alert("노출 특성 유형을 선택해주세요.");
    }
  };

  const saveData = () => {
    type !== "" && sessionStorage.setItem("expType", type);
    type !== "" && sessionStorage.setItem("EF", EF);
    type !== "" && sessionStorage.setItem("ED", ED);
    type !== "" && sessionStorage.setItem("ET", ET);
    type !== "" && sessionStorage.setItem("ATc", ATc);
    type !== "" && sessionStorage.setItem("ATnc", ATnc);

    // type !== "" && navigate("/output");
    type !== "" && sessionStorage.setItem("check_exp", true);

    if (type !== "") {
      makeResult();
    }
  };

  // 최종 데이터 담기
  const makeResult = () => {
    const data = {};

    // 오염원 > 오염물질
    const numOfMaterial = parseInt(sessionStorage.getItem("materialNum")); // 오염물질 개수
    if (numOfMaterial >= 1) {
      data.chem_1 = sessionStorage.getItem("chem_1");
      data.value_S_1 = sessionStorage.getItem("value_S_1");
      data.value_Hc_1 = sessionStorage.getItem("value_Hc_1");
      data.value_Dair_1 = sessionStorage.getItem("value_Dair_1");
      data.value_Dwater_1 = sessionStorage.getItem("value_Dwater_1");
      data.value_DHvb_1 = sessionStorage.getItem("value_DHvb_1");
      data.value_Tc_1 = sessionStorage.getItem("value_Tc_1");
      data.value_Tb_1 = sessionStorage.getItem("value_Tb_1");
      data.value_MW_1 = sessionStorage.getItem("value_MW_1");
      data.value_IUR_1 = sessionStorage.getItem("value_IUR_1");
      data.value_Rfc_1 = sessionStorage.getItem("value_Rfc_1");
      data.value_Mut_1 = sessionStorage.getItem("value_Mut_1");
      data.value_Koc_1 = sessionStorage.getItem("value_Koc_1");
      data.value_foc_1 = sessionStorage.getItem("value_foc_1");
      data.value_Kow_1 = sessionStorage.getItem("value_Kow_1");
    }
    if (numOfMaterial >= 2) {
      data.chem_2 = sessionStorage.getItem("chem_2");
      data.value_S_2 = sessionStorage.getItem("value_S_2");
      data.value_Hc_2 = sessionStorage.getItem("value_Hc_2");
      data.value_Dair_2 = sessionStorage.getItem("value_Dair_2");
      data.value_Dwater_2 = sessionStorage.getItem("value_Dwater_2");
      data.value_DHvb_2 = sessionStorage.getItem("value_DHvb_2");
      data.value_Tc_2 = sessionStorage.getItem("value_Tc_2");
      data.value_Tb_2 = sessionStorage.getItem("value_Tb_2");
      data.value_MW_2 = sessionStorage.getItem("value_MW_2");
      data.value_IUR_2 = sessionStorage.getItem("value_IUR_2");
      data.value_Rfc_2 = sessionStorage.getItem("value_Rfc_2");
      data.value_Mut_2 = sessionStorage.getItem("value_Mut_2");
      data.value_Koc_2 = sessionStorage.getItem("value_Koc_2");
      data.value_foc_2 = sessionStorage.getItem("value_foc_2");
      data.value_Kow_2 = sessionStorage.getItem("value_Kow_2");
    }
    if (numOfMaterial >= 3) {
      data.chem_3 = sessionStorage.getItem("chem_3");
      data.value_S_3 = sessionStorage.getItem("value_S_3");
      data.value_Hc_3 = sessionStorage.getItem("value_Hc_3");
      data.value_Dair_3 = sessionStorage.getItem("value_Dair_3");
      data.value_Dwater_3 = sessionStorage.getItem("value_Dwater_3");
      data.value_DHvb_3 = sessionStorage.getItem("value_DHvb_3");
      data.value_Tc_3 = sessionStorage.getItem("value_Tc_3");
      data.value_Tb_3 = sessionStorage.getItem("value_Tb_3");
      data.value_MW_3 = sessionStorage.getItem("value_MW_3");
      data.value_IUR_3 = sessionStorage.getItem("value_IUR_3");
      data.value_Rfc_3 = sessionStorage.getItem("value_Rfc_3");
      data.value_Mut_3 = sessionStorage.getItem("value_Mut_3");
      data.value_Koc_3 = sessionStorage.getItem("value_Koc_3");
      data.value_foc_3 = sessionStorage.getItem("value_foc_3");
      data.value_Kow_3 = sessionStorage.getItem("value_Kow_3");
    }
    if (numOfMaterial >= 4) {
      data.chem_4 = sessionStorage.getItem("chem_4");
      data.value_S_4 = sessionStorage.getItem("value_S_4");
      data.value_Hc_4 = sessionStorage.getItem("value_Hc_4");
      data.value_Dair_4 = sessionStorage.getItem("value_Dair_4");
      data.value_Dwater_4 = sessionStorage.getItem("value_Dwater_4");
      data.value_DHvb_4 = sessionStorage.getItem("value_DHvb_4");
      data.value_Tc_4 = sessionStorage.getItem("value_Tc_4");
      data.value_Tb_4 = sessionStorage.getItem("value_Tb_4");
      data.value_MW_4 = sessionStorage.getItem("value_MW_4");
      data.value_IUR_4 = sessionStorage.getItem("value_IUR_4");
      data.value_Rfc_4 = sessionStorage.getItem("value_Rfc_4");
      data.value_Mut_4 = sessionStorage.getItem("value_Mut_4");
      data.value_Koc_4 = sessionStorage.getItem("value_Koc_4");
      data.value_foc_4 = sessionStorage.getItem("value_foc_4");
      data.value_Kow_4 = sessionStorage.getItem("value_Kow_4");
    }
    if (numOfMaterial >= 5) {
      data.chem_5 = sessionStorage.getItem("chem_5");
      data.value_S_5 = sessionStorage.getItem("value_S_5");
      data.value_Hc_5 = sessionStorage.getItem("value_Hc_5");
      data.value_Dair_5 = sessionStorage.getItem("value_Dair_5");
      data.value_Dwater_5 = sessionStorage.getItem("value_Dwater_5");
      data.value_DHvb_5 = sessionStorage.getItem("value_DHvb_5");
      data.value_Tc_5 = sessionStorage.getItem("value_Tc_5");
      data.value_Tb_5 = sessionStorage.getItem("value_Tb_5");
      data.value_MW_5 = sessionStorage.getItem("value_MW_5");
      data.value_IUR_5 = sessionStorage.getItem("value_IUR_5");
      data.value_Rfc_5 = sessionStorage.getItem("value_Rfc_5");
      data.value_Mut_5 = sessionStorage.getItem("value_Mut_5");
      data.value_Koc_5 = sessionStorage.getItem("value_Koc_5");
      data.value_foc_5 = sessionStorage.getItem("value_foc_5");
      data.value_Kow_5 = sessionStorage.getItem("value_Kow_5");
    }

    // 오염원 > 오염심도
    if (numOfMaterial >= 1) {
      data.waterlevel_1 = sessionStorage.getItem("waterlevel_1");
      data.elevation_1 = sessionStorage.getItem("elevation_1");
    }
    if (numOfMaterial >= 2) {
      data.waterlevel_2 = sessionStorage.getItem("waterlevel_2");
      data.elevation_2 = sessionStorage.getItem("elevation_2");
    }
    if (numOfMaterial >= 3) {
      data.waterlevel_3 = sessionStorage.getItem("waterlevel_3");
      data.elevation_3 = sessionStorage.getItem("elevation_3");
    }
    if (numOfMaterial >= 4) {
      data.waterlevel_4 = sessionStorage.getItem("waterlevel_4");
      data.elevation_4 = sessionStorage.getItem("elevation_4");
    }
    if (numOfMaterial >= 5) {
      data.waterlevel_5 = sessionStorage.getItem("waterlevel_5");
      data.elevation_5 = sessionStorage.getItem("elevation_5");
    }

    // 오염원 > 오염농도
    if (numOfMaterial >= 1) {
      data.type_1 = sessionStorage.getItem("type_1");

      if (sessionStorage.getItem("Ts_1") !== null) {
        data.Ts_1 = sessionStorage.getItem("Ts_1");
      }
      if (sessionStorage.getItem("soilconc_1") !== null) {
        data.soilconc_1 = sessionStorage.getItem("soilconc_1");
      }
    }
    if (numOfMaterial >= 2) {
      data.type_2 = sessionStorage.getItem("type_2");

      if (sessionStorage.getItem("Ts_2") !== null) {
        data.Ts_2 = sessionStorage.getItem("Ts_2");
      }
      if (sessionStorage.getItem("soilconc_2") !== null) {
        data.soilconc_2 = sessionStorage.getItem("soilconc_2");
      }
    }
    if (numOfMaterial >= 3) {
      data.type_3 = sessionStorage.getItem("type_3");

      if (sessionStorage.getItem("Ts_3") !== null) {
        data.Ts_3 = sessionStorage.getItem("Ts_3");
      }
      if (sessionStorage.getItem("soilconc_3") !== null) {
        data.soilconc_3 = sessionStorage.getItem("soilconc_3");
      }
    }
    if (numOfMaterial >= 4) {
      data.type_4 = sessionStorage.getItem("type_4");

      if (sessionStorage.getItem("Ts_4") !== null) {
        data.Ts_4 = sessionStorage.getItem("Ts_4");
      }
      if (sessionStorage.getItem("soilconc_4") !== null) {
        data.soilconc_4 = sessionStorage.getItem("soilconc_4");
      }
    }
    if (numOfMaterial >= 5) {
      data.type_5 = sessionStorage.getItem("type_5");

      if (sessionStorage.getItem("Ts_5") !== null) {
        data.Ts_5 = sessionStorage.getItem("Ts_5");
      }
      if (sessionStorage.getItem("soilconc_5") !== null) {
        data.soilconc_5 = sessionStorage.getItem("soilconc_5");
      }
    }

    // 경로 > 지질매체
    data.geoType = sessionStorage.getItem("geoType");
    data.hSA = sessionStorage.getItem("hSA");
    data.nSA = sessionStorage.getItem("nSA");
    data.nwSA = sessionStorage.getItem("nwSA");
    data.rhoSA = sessionStorage.getItem("rhoSA");
    data.ncz = sessionStorage.getItem("ncz");
    data.hcz = sessionStorage.getItem("hcz");
    data.nwcz = sessionStorage.getItem("nwcz");

    // 경로 > 건물
    data.Found_Type = sessionStorage.getItem("Found_Type");
    data.LB = sessionStorage.getItem("LB");
    data.Lf = sessionStorage.getItem("Lf");
    data.eta = sessionStorage.getItem("eta");
    data.Abf = sessionStorage.getItem("Abf");
    data.Hb = sessionStorage.getItem("Hb");
    data.ach = sessionStorage.getItem("ach");
    data.Qsoil_Qb = sessionStorage.getItem("Qsoil_Qb");

    // 수용체 > 노출특성
    data.expType = sessionStorage.getItem("expType");
    data.EF = sessionStorage.getItem("EF");
    data.ED = sessionStorage.getItem("ED");
    data.ET = sessionStorage.getItem("ET");
    data.ATc = sessionStorage.getItem("ATc");
    data.ATnc = sessionStorage.getItem("ATnc");

    // 서버 전송
    const jsonData = JSON.stringify(data);

    const config = { "Content-Type": "application/json" };
    sendToBE(jsonData, config);
  };

  const sendToBE = async (data, config) => {
    setIsClicked(true);

    await axios
      // .post("https://mateofwind24.pythonanywhere.com/multipleSource", data, {
      .post("https://kuenvgeo.pythonanywhere.com/multipleSource", data, {
        headers: config,
      })
      .then((res) => {
        const message = res.data.message;
        if (message === "ZeroDivisionError") {
          alert("계산 오류\nZeroDivisionError");
        } else if (message === "OverflowError") {
          alert(
            "계산 오류\nOverflowError\n서버의 계산 한계를 넘어섰습니다. eta를 10배 증가시켜 대입해보세요"
          );
        } else {
          const Cia = res.data.Cia;
          const HQ = res.data.HQ;
          const Risk = res.data.Risk;
          navigate("/output1", {
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
          alert("입력값이 잘못되었습니다. (계산 오류)");
        }
      });
  };

  const getSession = () => {
    sessionStorage.getItem("expType") !== null &&
      setType(sessionStorage.getItem("expType"));
    sessionStorage.getItem("EF") !== null &&
      setEF(sessionStorage.getItem("EF"));
    sessionStorage.getItem("ED") !== null &&
      setED(sessionStorage.getItem("ED"));
    sessionStorage.getItem("ET") !== null &&
      setET(sessionStorage.getItem("ET"));
    sessionStorage.getItem("ATc") !== null &&
      setATc(sessionStorage.getItem("ATc"));
    sessionStorage.getItem("ATnc") !== null &&
      setATnc(sessionStorage.getItem("ATnc"));
  };

  useEffect(() => {
    getSession();
  }, []);

  // 버튼 텍스트
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            위해성 평가 <BiChevronRight /> Input <BiChevronRight /> 수용체{" "}
            <BiChevronRight /> 노출 특성
          </S.PagePath>
          <S.PageTitle>노출 특성</S.PageTitle>

          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <table>
                  <thead>
                    <td>노출 특성 유형</td>
                    <S.Td>Exposure_Type</S.Td>
                    <S.Td>
                      <select
                        required
                        onChange={(e) => selectType(e)}
                        value={type}
                      >
                        <option value="" defaultValue disabled hidden>
                          노출 특성 유형을 선택해주세요.
                        </option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </S.Td>
                  </thead>
                </table>
                <h5>
                  ※ 아래의 값은 노출 특성 유형에 따라 자동으로 입력됩니다.
                </h5>
                <table>
                  <thead>
                    <tr>
                      <td></td>
                      <S.Td>기호</S.Td>
                      <S.Td>단위</S.Td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>노출 기간</td>
                      <S.Td>EF</S.Td>
                      <S.Td>yrs</S.Td>
                      <S.Td>
                        <input value={EF} disabled={disabled} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>노출 빈도</td>
                      <S.Td>ED</S.Td>
                      <S.Td>days/yr</S.Td>
                      <S.Td>
                        <input value={ED} disabled={disabled} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>노출 시간</td>
                      <S.Td>ET</S.Td>
                      <S.Td>hrs/day</S.Td>
                      <S.Td>
                        <input value={ET} disabled={disabled} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>발암물질 평균 노출 시간</td>
                      <S.Td>ATc</S.Td>
                      <S.Td>hr</S.Td>
                      <S.Td>
                        <input value={ATc} disabled={disabled} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>비발암물질 평균 노출 시간</td>
                      <S.Td>ATnc</S.Td>
                      <S.Td>hr</S.Td>
                      <S.Td>
                        <input value={ATnc} disabled={disabled} />
                      </S.Td>
                    </tr>
                  </tbody>
                </table>
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/input/pathway/found1")}>
                이전
              </S.PrevBtn>
              <S.NextBtn onClick={saveData}>
                {isClicked ? (
                  <p>
                    <BiLoader /> Loading...
                  </p>
                ) : (
                  <p>다음</p>
                )}
              </S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default Receptor;
