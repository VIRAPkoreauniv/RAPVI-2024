import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { BiChevronRight } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header"
import Menu from "../../components/menu"
import { CHEMICAL_LIST } from "../../data/chemicals"
import * as S from "../../styles/Home.style"
import getDefaultValues from "../../utils/getDefaultValues"

const Coc = () => {
  const { t } = useTranslation("site")
  const navigate = useNavigate()

  const [default_S, setDefault_S] = useState(0)
  const [default_Hc, setDefault_Hc] = useState(0)
  const [default_Dair, setDefault_Dair] = useState(0)
  const [default_Dwater, setDefault_Dwater] = useState(0)
  const [default_DHvb, setDefault_DHvb] = useState(0)
  const [default_Tc, setDefault_Tc] = useState(0)
  const [default_Tb, setDefault_Tb] = useState(0)
  const [default_MW, setDefault_MW] = useState(0)
  const [default_IUR, setDefault_IUR] = useState(0)
  const [default_Rfc, setDefault_Rfc] = useState(0)
  const [default_Mut, setDefault_Mut] = useState(0)
  const [default_Koc, setDefault_Koc] = useState(0)
  const [default_foc, setDefault_foc] = useState(0)

  const [value_S, setValue_S] = useState()
  const [value_Hc, setValue_Hc] = useState()
  const [value_Dair, setValue_Dair] = useState()
  const [value_Dwater, setValue_Dwater] = useState()
  const [value_DHvb, setValue_DHvb] = useState()
  const [value_Tc, setValue_Tc] = useState()
  const [value_Tb, setValue_Tb] = useState()
  const [value_MW, setValue_MW] = useState()
  const [value_IUR, setValue_IUR] = useState()
  const [value_Rfc, setValue_Rfc] = useState()
  const [value_Mut, setValue_Mut] = useState()
  const [value_Koc, setValue_Koc] = useState()
  const [value_foc, setValue_foc] = useState()

  const [chem, setChem] = useState("오염 물질")
  // null 이면 input disabled
  const [disabled_IUR, setDisabled_IUR] = useState("disabled")
  const [disabled_Rfc, setDisabled_Rfc] = useState("disabled")

  const [typeIUR, setTypeIUR] = useState("number")
  const [typeRfc, setTypeRfc] = useState("number")

  // 세션 값 있으면 그거 쓰기
  const getSession = () => {
    if (sessionStorage.getItem("chem") !== null) {
      setChem(sessionStorage.getItem("chem"))
    }

    setValue_S(sessionStorage.getItem("value_S"))
    setValue_Hc(sessionStorage.getItem("value_Hc"))
    setValue_Dair(sessionStorage.getItem("value_Dair"))
    setValue_Dwater(sessionStorage.getItem("value_Dwater"))
    setValue_DHvb(sessionStorage.getItem("value_DHvb"))
    setValue_Tc(sessionStorage.getItem("value_Tc"))
    setValue_Tb(sessionStorage.getItem("value_Tb"))
    setValue_MW(sessionStorage.getItem("value_MW"))
    setValue_IUR(sessionStorage.getItem("value_IUR"))
    setValue_Rfc(sessionStorage.getItem("value_Rfc"))
    setValue_Mut(sessionStorage.getItem("value_Mut"))
    setValue_Koc(sessionStorage.getItem("value_Koc"))
    setValue_foc(sessionStorage.getItem("value_foc"))

    if (
      sessionStorage.getItem("value_IUR") === "NULL" ||
      sessionStorage.getItem("value_IUR") === "0"
    ) {
      setDisabled_IUR("disabled")
      setTypeIUR("text")
      setValue_IUR("NULL")
    } else if (value_IUR !== null) {
      setDisabled_IUR("")
      setTypeIUR("number")
    }
    if (
      sessionStorage.getItem("value_Rfc") === "NULL" ||
      sessionStorage.getItem("value_Rfc") === "0"
    ) {
      setDisabled_Rfc("disabled")
      setTypeRfc("text")
      setValue_Rfc("NULL")
    } else if (value_Rfc !== null) {
      setDisabled_Rfc("")
      setTypeRfc("number")
    }
  }

  const selectChem = (e) => {
    let selectedChem = e.target.value
    setOption("none")
    setChem(selectedChem)

    const defaultValues = getDefaultValues(selectedChem)

    setValue_S(defaultValues.S)
    setDefault_S(defaultValues.S)

    setValue_Hc(defaultValues.Hc)
    setDefault_Hc(defaultValues.Hc)

    setValue_Dair(defaultValues.Dair)
    setDefault_Dair(defaultValues.Dair)

    setValue_Dwater(defaultValues.Dwater)
    setDefault_Dwater(defaultValues.Dwater)

    setValue_DHvb(defaultValues.DHvb)
    setDefault_DHvb(defaultValues.DHvb)

    setValue_Tc(defaultValues.Tc)
    setDefault_Tc(defaultValues.Tc)

    setValue_Tb(defaultValues.Tb)
    setDefault_Tb(defaultValues.Tb)

    setValue_MW(defaultValues.MW)
    setDefault_MW(defaultValues.MW)

    setValue_IUR(defaultValues.IUR)
    setDefault_IUR(defaultValues.IUR)

    setValue_Rfc(defaultValues.Rfc)
    setDefault_Rfc(defaultValues.Rfc)

    setValue_Mut(defaultValues.Mut)
    setDefault_Mut(defaultValues.Mut)

    setValue_Koc(defaultValues.Koc)
    setDefault_Koc(defaultValues.Koc)

    setValue_foc(defaultValues.foc)
    setDefault_foc(defaultValues.foc)
  }

  const setNull = () => {
    if (value_IUR === null || value_IUR === "0") {
      setDisabled_IUR("disabled")
      setTypeIUR("text")
      setValue_IUR("NULL")
    } else if (value_IUR !== null && value_IUR !== "NULL") {
      setDisabled_IUR("")
      setTypeIUR("number")
    }
    if (value_Rfc === null || value_Rfc === "0") {
      setDisabled_Rfc("disabled")
      setTypeRfc("text")
      setValue_Rfc("NULL")
    } else if (value_Rfc !== null && value_Rfc !== "NULL") {
      setDisabled_Rfc("")
      setTypeRfc("number")
    }
  }

  const saveData = () => {
    sessionStorage.setItem("chem", chem)
    sessionStorage.setItem("value_S", value_S)
    sessionStorage.setItem("value_Hc", value_Hc)
    sessionStorage.setItem("value_Dair", value_Dair)
    sessionStorage.setItem("value_Dwater", value_Dwater)
    sessionStorage.setItem("value_DHvb", value_DHvb)
    sessionStorage.setItem("value_Tc", value_Tc)
    sessionStorage.setItem("value_Tb", value_Tb)
    sessionStorage.setItem("value_MW", value_MW)
    sessionStorage.setItem("value_IUR", value_IUR)
    sessionStorage.setItem("value_Rfc", value_Rfc)
    sessionStorage.setItem("value_Mut", value_Mut)
    sessionStorage.setItem("value_Koc", value_Koc)
    sessionStorage.setItem("value_foc", value_foc)
    sessionStorage.setItem("default_Koc", default_Koc)
    sessionStorage.setItem("default_foc", default_foc)
    sessionStorage.setItem("check_coc", true)
  }

  useEffect(() => {
    setNull()
  }, [value_Hc])

  useEffect(() => {
    getSession()
  }, [])

  const [option, setOption] = useState("inline-block")

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
                          onChange={(e) => selectChem(e)}
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
                            value={value_S}
                            onChange={(e) => {
                              setValue_S(e.target.value)
                            }}
                            placeholder={default_S}
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
                            value={value_Hc}
                            onChange={(e) => setValue_Hc(e.target.value)}
                            placeholder={default_Hc}
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
                            value={value_Dair}
                            onChange={(e) => setValue_Dair(e.target.value)}
                            placeholder={default_Dair}
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
                            value={value_Dwater}
                            onChange={(e) => setValue_Dwater(e.target.value)}
                            placeholder={default_Dwater}
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
                            value={value_DHvb}
                            onChange={(e) => setValue_DHvb(e.target.value)}
                            placeholder={default_DHvb}
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
                            value={value_Tc}
                            onChange={(e) => setValue_Tc(e.target.value)}
                            placeholder={default_Tc}
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
                            value={value_Tb}
                            onChange={(e) => setValue_Tb(e.target.value)}
                            placeholder={default_Tb}
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
                            value={value_MW}
                            onChange={(e) => setValue_MW(e.target.value)}
                            placeholder={default_MW}
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
                            value={value_IUR}
                            onChange={(e) => setValue_IUR(e.target.value)}
                            placeholder={default_IUR}
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
                            value={value_Rfc}
                            onChange={(e) => setValue_Rfc(e.target.value)}
                            placeholder={default_Rfc}
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
                            value={value_Mut}
                            onChange={(e) => setValue_Mut(e.target.value)}
                            placeholder={default_Mut}
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
