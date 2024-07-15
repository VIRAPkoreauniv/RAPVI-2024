import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MAP_IMAGE from "../../../assets/map.jpg";
import Header from "../../../components/header";
import * as S from "./ProjectInfo.style";

export default function ProjectInfoPage() {
  const navigate = useNavigate();
  const { t } = useTranslation("start");

  const [projectName, setProjectName] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [projectDate, setProjectDate] = useState("");
  const [evalType, setEvalType] = useState("");
  const [tier1, setTier1] = useState("white");
  const [tier2, setTier2] = useState("white");
  const [numofRows, setNumofRows] = useState(0);
  const [numofCols, setNumofCols] = useState(0);
  const [lat1, setLat1] = useState(0);
  const [lat2, setLat2] = useState(0);
  const [lat3, setLat3] = useState(0);
  const [lat4, setLat4] = useState(0);
  const [lng1, setLng1] = useState(0);
  const [lng2, setLng2] = useState(0);
  const [lng3, setLng3] = useState(0);
  const [lng4, setLng4] = useState(0);

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  const switchType = (e) => {
    const evalType = e.target.value;
    evalType === "기본평가" && setTier1("rgb(224, 214, 198)");
    evalType === "기본평가" && setTier2("white");
    evalType === "기본평가" && setEvalType("기본평가");
    evalType === "부지기반평가" && setTier2("rgb(224, 214, 198)");
    evalType === "부지기반평가" && setTier1("white");
    evalType === "부지기반평가" && setEvalType("부지기반평가");
  };

  const moveTo = () => {
    projectName === "" && alert("프로젝트 명을 입력해주세요.");
    projectManager === "" && alert("담당자 이름을 입력해주세요.");
    projectDate === "" && alert("작업 일시를 입력해주세요.");
    evalType === "" && alert("위해성 평가 방식을 선택해주세요.");
    if (evalType === "부지기반평가" && numofRows === 0) {
      alert("데이터 크기를 입력해주세요. (행)");
    }
    if (evalType === "부지기반평가" && numofCols === 0) {
      alert("데이터 크기를 입력해주세요. (열)");
    }
    if (evalType === "부지기반평가") {
      if (lat1 === 0 || lat2 === 0 || lat3 === 0 || lat4 === 0) {
        alert("위도를 입력해주세요.");
      }
    }
    if (evalType === "부지기반평가") {
      if (lng1 === 0 || lng2 === 0 || lng3 === 0 || lng4 === 0) {
        alert("경도를 입력해주세요.");
      }
    }

    if (
      evalType === "기본평가" &&
      projectName !== "" &&
      projectManager !== "" &&
      projectDate !== ""
    ) {
      sessionStorage.setItem("eval_Type", "기본평가");
      sessionStorage.setItem("projectName", projectName);
      sessionStorage.setItem("projectManager", projectManager);
      sessionStorage.setItem("projectDate", projectDate);

      localStorage.setItem("where", "위해성 평가");
      navigate("/input/source/coc1");
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
      sessionStorage.setItem("eval_Type", "부지기반평가");
      sessionStorage.setItem("projectName", projectName);
      sessionStorage.setItem("projectManager", projectManager);
      sessionStorage.setItem("projectDate", projectDate);
      sessionStorage.setItem("numofRows", String(numofRows));
      sessionStorage.setItem("numofCols", String(numofCols));
      sessionStorage.setItem("lat1", String(lat1));
      sessionStorage.setItem("lng1", String(lng1));
      sessionStorage.setItem("lat2", String(lat2));
      sessionStorage.setItem("lng2", String(lng2));
      sessionStorage.setItem("lat3", String(lat3));
      sessionStorage.setItem("lng3", String(lng3));
      sessionStorage.setItem("lat4", String(lat4));
      sessionStorage.setItem("lng4", String(lng4));

      localStorage.setItem("where", "위해성 평가");
      navigate("/input/source/coc2");
    }
  };

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
                      <input
                        type="submit"
                        value={t("projectInfo.button1")}
                        style={{
                          backgroundColor: tier1,
                          padding: "1rem",
                          margin: "0.5rem",
                          fontSize: "1.1rem",
                        }}
                        onClick={(e) => {
                          switchType(e);
                        }}
                      />
                      <input
                        type="submit"
                        value={t("projectInfo.button2")}
                        style={{
                          backgroundColor: tier2,
                          padding: "1rem",
                          margin: "0.5rem",
                          fontSize: "1.1rem",
                        }}
                        onClick={(e) => {
                          switchType(e);
                        }}
                      />
                    </S.Td>
                  </tr>
                </tbody>
              </table>
              {evalType === t("projectInfo.button2") ? (
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
  );
}
