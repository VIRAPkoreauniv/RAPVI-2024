import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import SatConc from "./2_conc_check";

const TConc2 = () => {
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
    sessionStorage.setItem("check_conc", true);
    navigate("/tutorial/2/geo");
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
            {t("tutorial.title")} <BiChevronRight /> Input <BiChevronRight />{" "}
            {t("conc.pagePath.text2")} <BiChevronRight />{" "}
            {t("conc.pagePath.text3")}
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
                        checked
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
                        disabled
                      />
                      {t("conc.select.unsat")}
                    </label>
                  </S.Td>
                </tr>
              </thead>
            </table>

            <S.EvalBox>
              <S.PaddingBox>
                <h3>{t("conc.sat.title")}</h3>
                <p>{t("tutorial.conc.info")}</p>
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
                      <S.Td>18</S.Td>
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
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/tutorial/2/depth")}>
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
export default TConc2;
