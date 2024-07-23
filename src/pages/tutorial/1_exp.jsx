import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TExp1 = () => {
  const { t } = useTranslation("basicAssessment");
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("tutorial.title")} <BiChevronRight /> Input <BiChevronRight />{" "}
            {t("receptor.pagePath.text2")} <BiChevronRight />{" "}
            {t("receptor.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("receptor.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <table>
                  <thead>
                    <td>{t("receptor.select.title")}</td>
                    <S.Td>Exposure_Type</S.Td>
                    <S.Td>
                      <select>
                        <option value="Residential">Residential</option>
                      </select>
                    </S.Td>
                  </thead>
                </table>
                <h5>{t("receptor.info")}</h5>
                <table>
                  <thead>
                    <tr>
                      <td></td>
                      <S.Td>{t("receptor.table.td1")}</S.Td>
                      <S.Td>{t("receptor.table.td2")}</S.Td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t("receptor.table.td3")}</td>
                      <S.Td>EF</S.Td>
                      <S.Td>yrs</S.Td>
                      <S.Td>
                        <input value={350} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>{t("receptor.table.td4")}</td>
                      <S.Td>ED</S.Td>
                      <S.Td>days/yr</S.Td>
                      <S.Td>
                        <input value={26} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>{t("receptor.table.td5")}</td>
                      <S.Td>ET</S.Td>
                      <S.Td>hrs/day</S.Td>
                      <S.Td>
                        <input value={24} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>{t("receptor.table.td6")}</td>
                      <S.Td>ATc</S.Td>
                      <S.Td>hr</S.Td>
                      <S.Td>
                        <input value={70} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>{t("receptor.table.td7")}</td>
                      <S.Td>ATnc</S.Td>
                      <S.Td>hr</S.Td>
                      <S.Td>
                        <input value={26} />
                      </S.Td>
                    </tr>
                  </tbody>
                </table>
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/tutorial/1/found")}>
                {t("receptor.prev")}
              </S.PrevBtn>
              <S.NextBtn onClick={() => navigate("/tutorial/1/output")}>
                {t("receptor.next")}
              </S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TExp1;
