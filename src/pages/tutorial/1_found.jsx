import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TFound1 = () => {
  const { t } = useTranslation("basicAssessment");
  const navigate = useNavigate();

  // 세션 데이터 저장
  const saveData = () => {
    sessionStorage.setItem("foundType", "Residential & Basement w/ dirt floor");
    sessionStorage.setItem("LB", 2);
    sessionStorage.setItem("Lf", 0);
    sessionStorage.setItem("eta", 1);
    sessionStorage.setItem("Abf", 150);
    sessionStorage.setItem("Hb", 3.66);
    sessionStorage.setItem("ach", 0.45);
    sessionStorage.setItem("Qsoil_Qb", 0.003);

    sessionStorage.setItem("check_found", true);
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("tutorial.title")} <BiChevronRight /> Input <BiChevronRight />{" "}
            {t("found.pagePath.text2")} <BiChevronRight />{" "}
            {t("found.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("found.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <form action="/tutorial/1/exp">
              <S.EvalBox>
                <S.PaddingBox>
                  <table>
                    <thead>
                      <tr>
                        <td>{t("found.select.title")}</td>
                        <S.Td>Found_Type</S.Td>
                        <S.Td>
                          <select>
                            <option>Residential & Basement w/ slab</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5>{t("found.info")}</h5>
                  <table>
                    <thead>
                      <tr>
                        <td></td>
                        <S.Td>{t("found.table.td1")}</S.Td>
                        <S.Td>{t("found.table.td2")}</S.Td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{t("found.table.td3")}</td>
                        <S.Td>LB</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input value={2} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("found.table.td4")}</td>
                        <S.Td>Lf</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input value={0} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("found.table.td5")}</td>
                        <S.Td>eta</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={1} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("found.table.td6")}</td>
                        <S.Td>Abf</S.Td>
                        <S.Td>m2</S.Td>
                        <S.Td>
                          <input value={150} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("found.table.td7")}</td>
                        <S.Td>Hb</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input value={3.66} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("found.table.td8")}</td>
                        <S.Td>ach</S.Td>
                        <S.Td>1/hr</S.Td>
                        <S.Td>
                          <input value={0.45} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("found.table.td9")}</td>
                        <S.Td>Qsoil_Qb</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={0.003} />
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </S.PaddingBox>
              </S.EvalBox>
              <S.BtnAreaTwin>
                <S.PrevBtn onClick={() => navigate("/tutorial/1/geo")}>
                  {t("found.prev")}
                </S.PrevBtn>
                <S.NextBtn onClick={saveData}>{t("found.next")}</S.NextBtn>
              </S.BtnAreaTwin>
            </form>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TFound1;
