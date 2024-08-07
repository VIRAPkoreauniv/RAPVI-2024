import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { BiChevronRight } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import Header from "../../components/header"
import Menu from "../../components/menu"
import { CHEMICAL_LIST } from "../../data/chemicals"
import { siteInputState } from "../../stores/site-input"
import * as S from "../../styles/Home.style"
import getDefaultValues from "../../utils/getDefaultValues"

const Coc = () => {
  const { t } = useTranslation("site")
  const navigate = useNavigate()

  const [siteInputValue, setSiteInputValue] = useRecoilState(siteInputState)

  const [chem, setChem] = useState(siteInputValue.chemicalName)
  const [value, setValue] = useState({})
  const [defaultValue, setDefaultValue] = useState({})
  const [option, setOption] = useState("inline-block")
  const [disabled_IUR, setDisabled_IUR] = useState("disabled")
  const [disabled_Rfc, setDisabled_Rfc] = useState("disabled")
  const [typeIUR, setTypeIUR] = useState("number")
  const [typeRfc, setTypeRfc] = useState("number")

  const selectChem = (chemicalName) => {
    const defaultValues = getDefaultValues(chemicalName)

    setOption("none")
    setChem(chemicalName)
    setDefaultValue(defaultValues)
    setValue(defaultValues)
  }

  useEffect(() => {
    if (siteInputValue.chemicalName !== "오염 물질") {
      selectChem(siteInputValue.chemicalName)
    }
  }, [])

  const setNull = () => {
    if (value.IUR === null || value.IUR === "0") {
      setDisabled_IUR("disabled")
      setTypeIUR("text")
      setValue((prev) => ({ ...prev, IUR: "NULL" }))
    } else if (value.IUR !== null && value.IUR !== "NULL") {
      setDisabled_IUR("")
      setTypeIUR("number")
    }
    if (value.Rfc === null || value.Rfc === "0") {
      setDisabled_Rfc("disabled")
      setTypeRfc("text")
      setValue((prev) => ({ ...prev, Rfc: "NULL" }))
    } else if (value.Rfc !== null && value.Rfc !== "NULL") {
      setDisabled_Rfc("")
      setTypeRfc("number")
    }
  }

  useEffect(() => {
    setNull()
  }, [value.Hc])

  const saveData = () => {
    setSiteInputValue((prev) => ({ ...prev, chemicalName: chem, coc: value }))

    // TODO: 세션 저장 로직 제거
    sessionStorage.setItem("chem", chem)
    sessionStorage.setItem("value_S", value.S)
    sessionStorage.setItem("value_Hc", value.Hc)
    sessionStorage.setItem("value_Dair", value.Dair)
    sessionStorage.setItem("value_Dwater", value.Dwater)
    sessionStorage.setItem("value_DHvb", value.DHvb)
    sessionStorage.setItem("value_Tc", value.Tc)
    sessionStorage.setItem("value_Tb", value.Tb)
    sessionStorage.setItem("value_MW", value.MW)
    sessionStorage.setItem("value_IUR", value.IUR)
    sessionStorage.setItem("value_Rfc", value.Rfc)
    sessionStorage.setItem("value_Mut", value.Mut)
    sessionStorage.setItem("value_Koc", value.Koc)
    sessionStorage.setItem("value_foc", value.foc)
    sessionStorage.setItem("default_Koc", defaultValue.Koc)
    sessionStorage.setItem("default_foc", defaultValue.foc)
    sessionStorage.setItem("check_coc", true)
  }

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("coc.pagePath.text1")} <BiChevronRight /> Input
            <BiChevronRight /> {t("coc.pagePath.text2")} <BiChevronRight />{" "}
            {t("coc.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("coc.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <form action="/input/source/depth2">
              <S.EvalBox>
                <table>
                  <thead>
                    <tr>
                      <S.Td>{t("coc.pageTitle")}</S.Td>
                      <S.Td>
                        <select
                          onChange={(e) => selectChem(e.target.value)}
                          value={chem}
                          required
                        >
                          <option value="" selected style={{ display: option }}>
                            {t("coc.placeholder")}
                          </option>
                          {CHEMICAL_LIST.map((chem, index) => (
                            <option key={index} value={chem}>
                              {chem}
                            </option>
                          ))}
                        </select>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <S.PaddingBox>
                  <h5>{t("coc.info", { chem: chem || "오염물질" })}</h5>
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
                        <S.Td>{t("coc.table.td3")}</S.Td>
                        <S.Td>S</S.Td>
                        <S.Td>mg/L</S.Td>
                        <S.Td>
                          <input
                            value={value.S}
                            onChange={(e) => {
                              setValue((prev) => ({
                                ...prev,
                                S: e.target.value,
                              }))
                            }}
                            placeholder={defaultValue.S}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td4")}</S.Td>
                        <S.Td>Hc</S.Td>
                        <S.Td>atm-m3/mol</S.Td>
                        <S.Td>
                          <input
                            value={value.Hc}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                Hc: e.target.value,
                              }))
                            }
                            placeholder={defaultValue.Hc}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td5")}</S.Td>
                        <S.Td>Dair</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>
                          <input
                            value={value.Dair}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                Dair: e.target.value,
                              }))
                            }
                            placeholder={defaultValue.Dair}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td6")}</S.Td>
                        <S.Td>Dwater</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>
                          <input
                            value={value.Dwater}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                Dwater: e.target.value,
                              }))
                            }
                            placeholder={defaultValue.Dwater}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td7")}</S.Td>
                        <S.Td>DHvb</S.Td>
                        <S.Td>cal/mol</S.Td>
                        <S.Td>
                          <input
                            value={value.DHvb}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                DHvb: e.target.value,
                              }))
                            }
                            placeholder={defaultValue.DHvb}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td8")}</S.Td>
                        <S.Td>Tc</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>
                          <input
                            value={value.Tc}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                Tc: e.target.value,
                              }))
                            }
                            placeholder={defaultValue.Tc}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td9")}</S.Td>
                        <S.Td>Tb</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>
                          <input
                            value={value.Tb}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                Tb: e.target.value,
                              }))
                            }
                            placeholder={defaultValue.Tb}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>{t("coc.table.td10")}</S.Td>
                        <S.Td>MW</S.Td>
                        <S.Td>g/mol</S.Td>
                        <S.Td>
                          <input
                            value={value.MW}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                MW: e.target.value,
                              }))
                            }
                            placeholder={defaultValue.MW}
                            required
                            type="number"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>IUR</S.Td>
                        <S.Td></S.Td>
                        <S.Td>(ug/m3)^-1</S.Td>
                        <S.Td>
                          <input
                            value={value.IUR}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                IUR: e.target.value,
                              }))
                            }
                            placeholder={defaultValue.IUR}
                            disabled={disabled_IUR}
                            required
                            type={typeIUR}
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>RfC</S.Td>
                        <S.Td></S.Td>
                        <S.Td>mg/m3</S.Td>
                        <S.Td>
                          <input
                            value={value.Rfc}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                Rfc: e.target.value,
                              }))
                            }
                            placeholder={defaultValue.Rfc}
                            disabled={disabled_Rfc}
                            required
                            type={typeRfc}
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>Mut</S.Td>
                        <S.Td></S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <select
                            value={value.Mut}
                            onChange={(e) =>
                              setValue((prev) => ({
                                ...prev,
                                Mut: e.target.value,
                              }))
                            }
                            placeholder={defaultValue.Mut}
                            required
                          >
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </S.PaddingBox>
              </S.EvalBox>
              <S.BtnAreaTwin>
                <S.PrevBtn onClick={() => navigate(-1)}>
                  {t("coc.prev")}
                </S.PrevBtn>
                <S.NextBtn onClick={saveData}>{t("coc.next")}</S.NextBtn>
              </S.BtnAreaTwin>
            </form>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  )
}

export default Coc
