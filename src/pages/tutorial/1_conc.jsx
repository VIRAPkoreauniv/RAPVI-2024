import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TConc1 = () => {
  const { t } = useTranslation("basicAssessment");
  const navigate = useNavigate();

  // 세션 값 저장하기
  const saveData = () => {
    sessionStorage.setItem("type_1", "sat");
    sessionStorage.setItem("Ts_1", 25);
    sessionStorage.setItem("soilconc_1", 0.0336);
    sessionStorage.setItem("check_conc", true);
    navigate("/tutorial/1/geo");
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("tutorial.title")} <BiChevronRight /> Input <BiChevronRight />
            {t("conc.pagePath.text2")}
            <BiChevronRight /> {t("conc.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("conc.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h3>{t("conc.material")} A : Benzene</h3>
                <table>
                  <thead>
                    <tr>
                      <td>{t("conc.media.title")}</td>
                      <S.Td>
                        <select>
                          <option value="sat">{t("conc.media.sat")}</option>
                        </select>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <h5>{t("tutorial.conc.info")}</h5>
                <table>
                  <tbody>
                    <tr>
                      <S.Td></S.Td>
                      <S.Td>{t("conc.table.td1")}</S.Td>
                      <S.Td>{t("conc.table.td2")}</S.Td>
                    </tr>
                    <tr>
                      <td>{t("conc.table.td3")}</td>
                      <S.Td>Ts</S.Td>
                      <S.Td>℃</S.Td>
                      <S.Td>
                        <input value={25} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>{t("conc.table.td4")}</td>
                      <S.Td>Cmedium</S.Td>
                      <S.Td>ug/L</S.Td>
                      <S.Td>
                        <input value={0.0336} />
                      </S.Td>
                    </tr>
                  </tbody>
                </table>
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/tutorial/1/depth")}>
                {t("conc.prev")}
              </S.PrevBtn>
              <S.NextBtn onClick={saveData}>{t("conc.next")}</S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TConc1;
