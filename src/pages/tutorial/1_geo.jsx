import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TGeo1 = () => {
  const { t } = useTranslation("basicAssessment");
  const navigate = useNavigate();

  // 세션 데이터 저장
  const saveData = () => {
    sessionStorage.setItem("geoType", "Sand");
    sessionStorage.setItem("nSA", 0.375);
    sessionStorage.setItem("nwSA", 0.054);
    sessionStorage.setItem("rhoSA", 1.66);
    sessionStorage.setItem("hcz", 0.170454545);
    sessionStorage.setItem("ncz", 0.375);
    sessionStorage.setItem("nwcz", 0.253258113);
    sessionStorage.setItem("check_geo", true);
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("tutorial.title")} <BiChevronRight /> Input <BiChevronRight />{" "}
            {t("geo.pagePath.text2")} <BiChevronRight />{" "}
            {t("geo.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("geo.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <form action="/tutorial/1/found">
              <S.EvalBox>
                <S.PaddingBox>
                  <table>
                    <thead>
                      <tr>
                        <td>{t("geo.select.title")}</td>
                        <S.Td>SCS_A</S.Td>
                        <S.Td>
                          <select>
                            <option>Sand</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5>{t("geo.info")}</h5>
                  <table>
                    <thead>
                      <tr>
                        <td></td>
                        <S.Td>{t("geo.table.td1")}</S.Td>
                        <S.Td>{t("geo.table.td2")}</S.Td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{t("geo.table.td3")}</td>
                        <S.Td>nSA</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={0.375} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("geo.table.td4")}</td>
                        <S.Td>nwSA</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={0.054} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("geo.table.td5")}</td>
                        <S.Td>rhoSA</S.Td>
                        <S.Td>g/cm3</S.Td>
                        <S.Td>
                          <input value={1.66} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("geo.table.td6")}</td>
                        <S.Td>hcz</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input value={0.170454545} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("geo.table.td7")}</td>
                        <S.Td>ncz</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={0.375} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("geo.table.td8")}</td>
                        <S.Td>nwcz</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={0.253258113} />
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </S.PaddingBox>
              </S.EvalBox>
              <S.BtnAreaTwin>
                <S.PrevBtn onClick={() => navigate("/tutorial/1/conc")}>
                  {t("geo.prev")}
                </S.PrevBtn>
                <S.NextBtn onClick={saveData}>{t("geo.next")}</S.NextBtn>
              </S.BtnAreaTwin>
            </form>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TGeo1;
