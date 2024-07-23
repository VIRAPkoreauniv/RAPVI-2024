import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TCoc1 = () => {
  const { t } = useTranslation("basicAssessment");
  const navigate = useNavigate();

  // 세션에 저장
  const saveData = () => {
    sessionStorage.setItem("chem_1", "Benzene");
    sessionStorage.setItem("value_S_1", "1790");
    sessionStorage.setItem("value_Hc_1", "0.00555");
    sessionStorage.setItem("value_Dair_1", "0.089534");
    sessionStorage.setItem("value_Dwater_1", "0.0000103");
    sessionStorage.setItem("value_DHvb_1", "7342");
    sessionStorage.setItem("value_Tc_1", "562.16");
    sessionStorage.setItem("value_Tb_1", "353");
    sessionStorage.setItem("value_MW_1", "78.115");
    sessionStorage.setItem("value_IUR_1", "0.0000078");
    sessionStorage.setItem("value_Rfc_1", "0.03");
    sessionStorage.setItem("value_Mut_1", "No");
    sessionStorage.setItem("value_Koc_1", "70.51");
    sessionStorage.setItem("value_foc_1", "0.0007");
    sessionStorage.setItem("default_Koc_1", "70.51");
    sessionStorage.setItem("default_foc_1", "0.0007");

    sessionStorage.setItem("check_coc", true);
    navigate("/tutorial/1/depth");
  };

  // 더보기 토글
  const [more1, setMore1] = useState("none");
  const [close1, setClose1] = useState("inline-block");

  const [option1, setOption1] = useState("inline-block");

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("tutorial.title")} <BiChevronRight /> Input <BiChevronRight />{" "}
            {t("coc.pagePath.text2")}
            <BiChevronRight /> {t("coc.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("coc.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <table>
              <thead>
                <tr>
                  <S.Td>
                    <h3>{t("coc.numOfMaterials")}</h3>
                  </S.Td>
                  <S.Td>
                    <select>
                      <option value="1">1</option>
                    </select>
                  </S.Td>
                </tr>
              </thead>
            </table>

            <S.EvalBox>
              <table>
                <thead>
                  <tr>
                    <S.Td>{t("coc.material.title", { number: 1 })}</S.Td>
                    <S.Td>
                      <select>
                        <option value="" selected style={{ display: option1 }}>
                          Benzene
                        </option>
                      </select>
                    </S.Td>
                    <S.Td>
                      <button
                        onClick={() => {
                          setMore1("inline-block");
                          setClose1("none");
                        }}
                        style={{ display: close1 }}
                      >
                        {t("coc.more")}
                      </button>
                    </S.Td>
                  </tr>
                </thead>
              </table>
              <S.PaddingBox>
                <h5>{t("coc.info")}</h5>

                <div style={{ display: more1 }}>
                  <p style={{ textAlign: "center" }}>
                    <button
                      onClick={() => {
                        setMore1("none");
                        setClose1("inline-block");
                      }}
                    >
                      <BiChevronUp />
                      {t("coc.close")}
                    </button>
                  </p>

                  <table>
                    <tbody>
                      <tr>
                        <S.Td></S.Td>
                      </tr>
                      <tr>
                        <S.Td></S.Td>
                        <S.Td>{t("coc.table.td1")}</S.Td>
                        <S.Td>{t("coc.table.td2")}</S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td3")}</S.Td>
                        <S.Td>S</S.Td>
                        <S.Td>mg/L</S.Td>
                        <S.Td>
                          <input value="1790" />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td4")}</S.Td>
                        <S.Td>Hc</S.Td>
                        <S.Td>atm-m3/mol</S.Td>
                        <S.Td>
                          <input value={0.00555} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td5")}</S.Td>
                        <S.Td>Dair</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>
                          <input value={0.089534} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td6")}</S.Td>
                        <S.Td>Dwater</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>
                          <input value={0.0000103} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td7")}</S.Td>
                        <S.Td>DHvb</S.Td>
                        <S.Td>cal/mol</S.Td>
                        <S.Td>
                          <input value={7342} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td8")}</S.Td>
                        <S.Td>Tc</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>
                          <input value={562.16} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td9")}</S.Td>
                        <S.Td>Tb</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>
                          <input value={353} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td10")}</S.Td>
                        <S.Td>MW</S.Td>
                        <S.Td>g/mol</S.Td>
                        <S.Td>
                          <input value={78.115} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>IUR</S.Td>
                        <S.Td></S.Td>
                        <S.Td>(ug/m3)^-1</S.Td>
                        <S.Td>
                          <input value={0.0000078} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>RfC</S.Td>
                        <S.Td></S.Td>
                        <S.Td>mg/m3</S.Td>
                        <S.Td>
                          <input value={0.03} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>Mut</S.Td>
                        <S.Td></S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <select>
                            <option>No</option>
                          </select>
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </S.PaddingBox>
            </S.EvalBox>
          </S.EvalArea>
          <S.EvalArea>
            <S.BtnAreaSolo>
              <S.NextBtn onClick={saveData}>{t("coc.next")}</S.NextBtn>
            </S.BtnAreaSolo>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TCoc1;
