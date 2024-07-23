import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TCoc2 = () => {
  const { t } = useTranslation("site");
  const saveData = () => {
    sessionStorage.setItem("check_coc", true);
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("tutorial.title")} <BiChevronRight /> Input <BiChevronRight />{" "}
            {t("coc.pagePath.text2")} <BiChevronRight />{" "}
            {t("coc.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("coc.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <form action="/tutorial/2/depth">
              <S.EvalBox>
                <table>
                  <thead>
                    <tr>
                      <S.Td>{t("coc.pageTitle")}</S.Td>
                      <S.Td>
                        <select>
                          <option>Trichloroethylene</option>
                        </select>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <S.PaddingBox>
                  <h5>{t("coc.info", { chem: "Trichloroethylene" })}</h5>

                  <table>
                    <tbody>
                      <tr>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <S.Td>{t("coc.table.td1")}</S.Td>
                        <S.Td>{t("coc.table.td2")}</S.Td>
                      </tr>
                      <tr>
                        <td>{t("coc.table.td3")}</td>
                        <S.Td>S</S.Td>
                        <S.Td>mg/L</S.Td>
                        <S.Td>1280</S.Td>
                      </tr>
                      <tr>
                        <td>{t("coc.table.td4")}</td>
                        <S.Td>Hc</S.Td>
                        <S.Td>atm-m3/mol</S.Td>
                        <S.Td>0.00985</S.Td>
                      </tr>
                      <tr>
                        <td>{t("coc.table.td5")}</td>
                        <S.Td>Dair</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>0.0686618</S.Td>
                      </tr>
                      <tr>
                        <td>{t("coc.table.td6")}</td>
                        <S.Td>Dwater</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>0.0000102</S.Td>
                      </tr>
                      <tr>
                        <td>{t("coc.table.td7")}</td>
                        <S.Td>DHvb</S.Td>
                        <S.Td>cal/mol</S.Td>
                        <S.Td>7505</S.Td>
                      </tr>
                      <tr>
                        <td>{t("coc.table.td8")}</td>
                        <S.Td>Tc</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>544.2</S.Td>
                      </tr>
                      <tr>
                        <td>{t("coc.table.td9")}</td>
                        <S.Td>Tb</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>360.2</S.Td>
                      </tr>
                      <tr>
                        <td>{t("coc.table.td10")}</td>
                        <S.Td>MW</S.Td>
                        <S.Td>g/mol</S.Td>
                        <S.Td>131.39</S.Td>
                      </tr>
                      <tr>
                        <td>IUR</td>
                        <S.Td></S.Td>
                        <S.Td>(ug/m3)^-1</S.Td>
                        <S.Td>NULL</S.Td>
                      </tr>
                      <tr>
                        <td>RfC</td>
                        <S.Td></S.Td>
                        <S.Td>mg/m3</S.Td>
                        <S.Td>0.002</S.Td>
                      </tr>
                      <tr>
                        <td>Mut</td>
                        <S.Td></S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <select>
                            <option>Yes</option>
                          </select>
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </S.PaddingBox>
              </S.EvalBox>
              <S.BtnAreaSolo>
                <S.NextBtn onClick={saveData}>{t("coc.next")}</S.NextBtn>
              </S.BtnAreaSolo>
            </form>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TCoc2;
