import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useResetRecoilState } from "recoil"
import MAP_IMAGE from "../../../assets/map.jpg"
import Header from "../../../components/header"
import { siteInputState } from "../../../stores/site-input"
import * as S from "./ProjectInfo.style"

export default function ProjectInfoPage() {
  const navigate = useNavigate()
  const { t } = useTranslation("start")
  const resetRecoilState = useResetRecoilState(siteInputState)

  const [projectName, setProjectName] = useState("")
  const [projectManager, setProjectManager] = useState("")
  const [projectDate, setProjectDate] = useState("")
  const [evalType, setEvalType] = useState("")
  const [tier1, setTier1] = useState("white")
  const [tier2, setTier2] = useState("white")
  const [numofRows, setNumofRows] = useState(0)
  const [numofCols, setNumofCols] = useState(0)
  const [lat1, setLat1] = useState(0)
  const [lat2, setLat2] = useState(0)
  const [lat3, setLat3] = useState(0)
  const [lat4, setLat4] = useState(0)
  const [lng1, setLng1] = useState(0)
  const [lng2, setLng2] = useState(0)
  const [lng3, setLng3] = useState(0)
  const [lng4, setLng4] = useState(0)

  useEffect(() => {
    sessionStorage.clear()
    localStorage.clear()
    resetRecoilState()
  }, [])

  const BUTTON_LIST = [t("projectInfo.button1"), t("projectInfo.button2")]

  const switchType = (e) => {
    const evalType = e.target.value

    if (evalType === t("projectInfo.button1")) {
      setTier1("rgb(224, 214, 198)")
      setTier2("white")
      setEvalType("기본평가")
    } else if (evalType === t("projectInfo.button2")) {
      setTier2("rgb(224, 214, 198)")
      setTier1("white")
      setEvalType("부지기반평가")
    }
  }

  const moveTo = () => {
    projectName === "" && alert(t("projectInfo.alert.alert1"))
    projectManager === "" && alert(t("projectInfo.alert.alert2"))
    projectDate === "" && alert(t("projectInfo.alert.alert3"))
    evalType === "" && alert(t("projectInfo.alert.alert4"))
    if (evalType === "부지기반평가" && numofRows === 0) {
      alert(t("projectInfo.alert.alert5"))
    }
    if (evalType === "부지기반평가" && numofCols === 0) {
      alert(t("projectInfo.alert.alert6"))
    }
    if (evalType === "부지기반평가") {
      if (lat1 === 0 || lat2 === 0 || lat3 === 0 || lat4 === 0) {
        alert(t("projectInfo.alert.alert7"))
      }
    }
    if (evalType === "부지기반평가") {
      if (lng1 === 0 || lng2 === 0 || lng3 === 0 || lng4 === 0) {
        alert(t("projectInfo.alert.alert8"))
      }
    }

    if (
      evalType === "기본평가" &&
      projectName !== "" &&
      projectManager !== "" &&
      projectDate !== ""
    ) {
      sessionStorage.setItem("eval_Type", "기본평가")
      sessionStorage.setItem("projectName", projectName)
      sessionStorage.setItem("projectManager", projectManager)
      sessionStorage.setItem("projectDate", projectDate)

      localStorage.setItem("where", "위해성 평가")
      navigate("/input/source/coc1")
    } else if (
      evalType === "부지기반평가" &&
      projectName !== "" &&
      projectManager !== "" &&
      projectDate !== "" &&
      numofCols > 0 &&
      numofRows > 0 &&
      lat1 !== 0 &&
      lng1 !== 0 &&
      lat2 !== 0 &&
      lng2 !== 0 &&
      lat3 !== 0 &&
      lng3 !== 0 &&
      lat4 !== 0 &&
      lng4 !== 0
    ) {
      sessionStorage.setItem("eval_Type", "부지기반평가")
      sessionStorage.setItem("projectName", projectName)
      sessionStorage.setItem("projectManager", projectManager)
      sessionStorage.setItem("projectDate", projectDate)
      sessionStorage.setItem("numofRows", String(numofRows))
      sessionStorage.setItem("numofCols", String(numofCols))
      sessionStorage.setItem("lat1", String(lat1))
      sessionStorage.setItem("lng1", String(lng1))
      sessionStorage.setItem("lat2", String(lat2))
      sessionStorage.setItem("lng2", String(lng2))
      sessionStorage.setItem("lat3", String(lat3))
      sessionStorage.setItem("lng3", String(lng3))
      sessionStorage.setItem("lat4", String(lat4))
      sessionStorage.setItem("lng4", String(lng4))

      localStorage.setItem("where", "위해성 평가")
      navigate("/input/source/coc2")
    }
  }

  return (
    <>
      <Header />
      <S.Content>
        <S.PageTitle>{t("projectInfo.title")}</S.PageTitle>
        <S.EvalArea>
          <S.EvalBox>
            <S.PaddingBox>
              <table>
                <tbody>
                  <tr>
                    <S.Td>{t("projectInfo.section1")}</S.Td>
                    <S.Td>
                      <input
                        type="text"
                        required
                        onChange={(e) => setProjectName(e.target.value)}
                      />
                    </S.Td>
                  </tr>
                  <tr>
                    <S.Td>{t("projectInfo.section2")}</S.Td>
                    <S.Td>
                      <input
                        type="text"
                        required
                        onChange={(e) => setProjectManager(e.target.value)}
                      />
                    </S.Td>
                  </tr>
                  <tr>
                    <S.Td>{t("projectInfo.section3")}</S.Td>
                    <S.Td>
                      <input
                        type="date"
                        required
                        onChange={(e) => setProjectDate(e.target.value)}
                      />
                    </S.Td>
                  </tr>
                  <tr>
                    <S.Td>
                      {t("projectInfo.section4")}
                      <div onClick={() => navigate("/typeinfo")}>
                        <p style={{ color: "blue" }}>
                          <AiOutlineQuestionCircle /> {t("projectInfo.text")}
                        </p>
                      </div>
                    </S.Td>
                    <S.Td>
                      {BUTTON_LIST.map((button, idx) => {
                        return (
                          <input
                            key={idx}
                            type="submit"
                            value={button}
                            style={{
                              backgroundColor: idx === 0 ? tier1 : tier2,
                              padding: "1rem",
                              margin: "0.5rem",
                              fontSize: "1.1rem",
                            }}
                            onClick={(e) => {
                              switchType(e)
                            }}
                          />
                        )
                      })}
                    </S.Td>
                  </tr>
                </tbody>
              </table>
              {evalType === "부지기반평가" ? (
                <>
                  <hr />
                  <table>
                    <thead>
                      <tr>
                        <S.Td>{t("projectInfo.map.section1")}</S.Td>
                        <S.Td>
                          <input
                            type="number"
                            onChange={(e) => setNumofRows(+e.target.value)}
                          />{" "}
                          X{" "}
                          <input
                            type="number"
                            onChange={(e) => setNumofCols(+e.target.value)}
                          />
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5 style={{ marginLeft: "1rem" }}>
                    {t("projectInfo.map.text")}
                  </h5>
                  <S.CoordinateBox>
                    <div>
                      <S.Img src={MAP_IMAGE} alt="지도 예시" />
                    </div>
                    <div>
                      <table>
                        <tbody>
                          <tr>
                            <S.Td>{t("projectInfo.map.section1")}</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                onChange={(e) => setLat1(+e.target.value)}
                              />{" "}
                              ,{" "}
                              <input
                                type="number"
                                onChange={(e) => setLng1(+e.target.value)}
                              />
                            </S.Td>
                          </tr>
                          <tr>
                            <S.Td>{t("projectInfo.map.section2")}</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                onChange={(e) => setLat2(+e.target.value)}
                              />{" "}
                              ,{" "}
                              <input
                                type="number"
                                onChange={(e) => setLng2(+e.target.value)}
                              />
                            </S.Td>
                          </tr>
                          <tr>
                            <S.Td>{t("projectInfo.map.section3")}</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                onChange={(e) => setLat3(+e.target.value)}
                              />{" "}
                              ,{" "}
                              <input
                                type="number"
                                onChange={(e) => setLng3(+e.target.value)}
                              />
                            </S.Td>
                          </tr>
                          <tr>
                            <S.Td>{t("projectInfo.map.section4")}</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                onChange={(e) => setLat4(+e.target.value)}
                              />{" "}
                              ,{" "}
                              <input
                                type="number"
                                onChange={(e) => setLng4(+e.target.value)}
                              />
                            </S.Td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </S.CoordinateBox>
                </>
              ) : null}
            </S.PaddingBox>
          </S.EvalBox>
        </S.EvalArea>
        <S.BtnAreaSolo>
          <S.NextBtn onClick={moveTo}>{t("projectInfo.nextButton")}</S.NextBtn>
        </S.BtnAreaSolo>
      </S.Content>
    </>
  )
}
