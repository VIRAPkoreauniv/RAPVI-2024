import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import SatConc from "./conc_1_check_sat_conc";
import UnsatConc from "./conc_1_check_unsat_conc";

const Concentration = () => {
  const { t } = useTranslation("site");
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
      alert(t("conc.alert"));
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
            {t("conc.pagePath.text1")} <BiChevronRight /> Input
            <BiChevronRight /> {t("conc.pagePath.text2")}
            <BiChevronRight /> {t("conc.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("conc.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <table>
              <thead>
                <tr>
                  <S.Td>{t("conc.select.title")}</S.Td>
                  <S.Td>
                    <label>
                      <input
                        type="checkbox"
                        name="오염원 매체 선택"
                        value="포화대"
                        onClick={getCheckbox}
                      />
                      {t("conc.select.sat")}
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
                      {t("conc.select.unsat")}
                    </label>
                  </S.Td>
                </tr>
              </thead>
            </table>

            <S.EvalBox>
              <S.PaddingBox>
                {saturated === false && unsaturated === false ? (
                  <p>{t("conc.info")}</p>
                ) : null}
                {saturated === true ? (
                  <>
                    <h3>{t("conc.sat.title")}</h3>
                    <p>{t("conc.sat.info")}</p>
                    <table>
                      <thead>
                        <tr>
                          <td></td>
                          <S.Td>{t("conc.sat.table.td1")}</S.Td>
                          <S.Td>{t("conc.sat.table.td2")}</S.Td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t("conc.sat.table.td3")}</td>
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
                          <td>{t("conc.sat.table.td4")}</td>
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
                    <h3>{t("conc.unsat.title")}</h3>
                    <table>
                      <thead>
                        <tr>
                          <td></td>
                          <S.Td>{t("conc.unsat.table.td1")}</S.Td>
                          <S.Td>{t("conc.unsat.table.td2")}</S.Td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t("conc.unsat.table.td3")}</td>
                          <S.Td>Cmedium</S.Td>
                          <S.Td>ug/L</S.Td>
                          <S.Td>
                            <UnsatConc />
                          </S.Td>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <h3>{t("conc.unsat.soil.title")}</h3>
                    <h5>{t("conc.unsat.soil.info")}</h5>
                    <table>
                      <thead>
                        <tr>
                          <td></td>
                          <S.Td>{t("conc.unsat.soil.table.td1")}</S.Td>
                          <S.Td>{t("conc.unsat.soil.table.td2")}</S.Td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t("conc.unsat.soil.table.td3")}</td>
                          <S.Td>kd</S.Td>
                          <S.Td></S.Td>
                          <S.Td>= koc x foc</S.Td>
                        </tr>
                        <tr>
                          <td>{t("conc.unsat.soil.table.td4")}</td>
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
                          <td>{t("conc.unsat.soil.table.td5")}</td>
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
                {t("conc.prev")}
              </S.PrevBtn>
              <S.NextBtn onClick={moveTo}>{t("conc.next")}</S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};
export default Concentration;
