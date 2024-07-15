import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import SatConc from "./conc_1_check_sat_conc";
import UnsatConc from "./conc_1_check_unsat_conc";

const Concentration = () => {
  const [temp, setTemp] = useState(15);
  const [saturated, setSaturated] = useState(false);
  const [unsaturated, setUnsaturated] = useState(false);

  // koc, foc
  const [value_Koc, setValue_Koc] = useState();
  const [value_foc, setValue_foc] = useState();

  const getCheckbox = (e) => {
    let selected = e.target.value;
    let checked = e.target.checked;

    if (selected === "포화대" && checked === true) {
      setSaturated(true);
    } else if (selected === "포화대" && checked === false) {
      setSaturated(false);
    } else if (selected === "불포화대" && checked === true) {
      setUnsaturated(true);
    } else if (selected === "불포화대" && checked === false) {
      setUnsaturated(false);
    }
  };

  const navigate = useNavigate();

  const moveTo = () => {
    let type = "";
    if (saturated === true && unsaturated === true) {
      type = "both";
    } else if (saturated === true && unsaturated === false) {
      type = "sat";
    } else if (saturated === false && unsaturated === true) {
      type = "unsat";
    } else {
      alert("오염원 매체를 선택해주세요.");
    }
    sessionStorage.setItem("conc_type", type);

    let temp = sessionStorage.getItem("Ts");
    let sat_soilconc = sessionStorage.getItem("sat_soilconc");
    let unsat_soilconc = sessionStorage.getItem("unsat_soilconc");

    if (
      type === "both" &&
      temp !== "" &&
      sat_soilconc !== null &&
      unsat_soilconc !== null &&
      value_Koc !== undefined &&
      value_foc !== undefined
    ) {
      sessionStorage.setItem("check_conc", true);
      sessionStorage.setItem("value_Koc", value_Koc);
      sessionStorage.setItem("value_foc", value_foc);
      navigate("/input/pathway/geo2");
    } else if (type === "sat" && temp !== "" && sat_soilconc !== null) {
      sessionStorage.setItem("check_conc", true);
      navigate("/input/pathway/geo2");
    } else if (
      type === "unsat" &&
      unsat_soilconc !== null &&
      value_Koc !== undefined &&
      value_foc !== undefined
    ) {
      sessionStorage.setItem("check_conc", true);
      sessionStorage.setItem("value_Koc", value_Koc);
      sessionStorage.setItem("value_foc", value_foc);
      navigate("/input/pathway/geo2");
    }
  };

  const getSession = () => {
    const preTemp = sessionStorage.getItem("Ts");
    preTemp !== null && setTemp(preTemp);

    const preType = sessionStorage.getItem("conc_type");
    preType === "both" && setSaturated(true);
    preType === "both" && setUnsaturated(true);

    preType === "sat" && setSaturated(true);
    preType === "unsat" && setUnsaturated(true);

    if (sessionStorage.getItem("default_Koc") !== "null") {
      setValue_Koc(parseFloat(sessionStorage.getItem("default_Koc")));
    } else {
      setValue_Koc("NULL");
    }

    if (sessionStorage.getItem("default_foc") !== "null") {
      setValue_foc(parseFloat(sessionStorage.getItem("default_foc")));
    } else {
      setValue_foc("NULL");
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
            위해성 평가 <BiChevronRight /> Input <BiChevronRight /> 오염원{" "}
            <BiChevronRight /> 오염농도
          </S.PagePath>
          <S.PageTitle>오염농도</S.PageTitle>
          <S.EvalArea>
            <table>
              <thead>
                <tr>
                  <S.Td>오염원 매체 선택</S.Td>
                  <S.Td>
                    <label>
                      <input
                        type="checkbox"
                        name="오염원 매체 선택"
                        value="포화대"
                        onClick={getCheckbox}
                      />
                      포화대(지하수)
                    </label>
                  </S.Td>
                  <S.Td>
                    <label>
                      <input
                        type="checkbox"
                        name="오염원 매체 선택"
                        value="불포화대"
                        onClick={getCheckbox}
                      />
                      불포화대(토양)
                    </label>
                  </S.Td>
                </tr>
              </thead>
            </table>

            <S.EvalBox>
              <S.PaddingBox>
                {saturated === false && unsaturated === false ? (
                  <p>※ 오염원 매체를 선택해주세요</p>
                ) : null}

                {saturated === true ? (
                  <>
                    <h3>오염원 매체 : 포화대(지하수)</h3>
                    <p>
                      ※ 불포화대(토양) 선택 시 지하수 온도는 15℃로 고정됩니다.
                    </p>
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
                          <td>지하수 온도</td>
                          <S.Td>Ts</S.Td>
                          <S.Td>℃</S.Td>
                          <S.Td>
                            <input
                              type="number"
                              placeholder="15"
                              value={temp}
                              onChange={(e) => {
                                setTemp(e.target.value);
                                sessionStorage.setItem("Ts", e.target.value);
                              }}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <td>매체 농도</td>
                          <S.Td>Cmedium</S.Td>
                          <S.Td>ug/L</S.Td>
                          <S.Td>
                            <SatConc />
                          </S.Td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                ) : null}
                {unsaturated === true ? (
                  <>
                    <h3>오염원 매체 : 불포화대(토양)</h3>
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
                          <td>매체 농도</td>
                          <S.Td>Cmedium</S.Td>
                          <S.Td>ug/L</S.Td>
                          <S.Td>
                            <UnsatConc />
                          </S.Td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <h3>토양흡착특성</h3>
                    <h5>
                      ※ koc와 foc의 값은 오염물질에 따라 자동으로 입력될 수
                      있으며, 필요 시 사용자가 수정할 수 있습니다.
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
                          <td>토양-물 분배계수</td>
                          <S.Td>kd</S.Td>
                          <S.Td></S.Td>
                          <S.Td>= koc x foc</S.Td>
                        </tr>
                        <tr>
                          <td>탄소-물 분배계수</td>
                          <S.Td>koc</S.Td>
                          <S.Td>g-H2O/g-C</S.Td>
                          <S.Td>
                            <input
                              type="number"
                              value={value_Koc}
                              onChange={(e) => setValue_Koc(e.target.value)}
                            />
                          </S.Td>
                        </tr>
                        <tr>
                          <td>유기물 분배계수</td>
                          <S.Td>foc</S.Td>
                          <S.Td>g-C/g-soil</S.Td>
                          <S.Td>
                            <input
                              type="number"
                              value={value_foc}
                              onChange={(e) => setValue_foc(e.target.value)}
                            />
                          </S.Td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                ) : null}
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/input/source/depth2")}>
                이전
              </S.PrevBtn>
              <S.NextBtn onClick={moveTo}>다음</S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};
export default Concentration;
