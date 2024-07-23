import { useState } from "react";
import MAP_IMG from "../../assets/map.jpg";
import Header from "../../components/header";
import * as S from "../../styles/Home.style";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const TInfo = () => {
  const { t } = useTranslation("start");
  const navigate = useNavigate();

  const [evalType, setEvalType] = useState("");
  const [tier1, setTier1] = useState("white");
  const [tier2, setTier2] = useState("white");

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  const switchType = (e) => {
    let evalType = e.target.value;
    if (evalType === "기본평가" || evalType === "Basic assessment") {
      setTier1("rgb(224, 214, 198)");
      setTier2("white");
      setEvalType("기본평가");
    } else if (
      evalType === "부지기반평가" ||
      evalType === "Site-specific assessment"
    ) {
      setTier2("rgb(224, 214, 198)");
      setTier1("white");
      setEvalType("부지기반평가");
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
                      <input value={t("tutorial.name")} />
                    </S.Td>
                  </tr>
                  <tr>
                    <S.Td>{t("projectInfo.section2")}</S.Td>
                    <S.Td>
                      <input value="홍길동" />
                    </S.Td>
                  </tr>
                  <tr>
                    <S.Td>{t("projectInfo.section3")}</S.Td>
                    <S.Td>
                      <input value="2023-01-01" />
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
              {evalType === "부지기반평가" ? (
                <>
                  <hr />
                  <table>
                    <thead>
                      <tr>
                        <S.Td>{t("projectInfo.map.section1")}</S.Td>
                        <S.Td>
                          <input value={100} /> X <input value={100} />
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5 style={{ marginLeft: "1rem" }}>
                    {t("projectInfo.map.text")}
                  </h5>
                  <CoordinateBox>
                    <div>
                      <Img src={MAP_IMG} alt="지도 예시" />
                    </div>
                    <div>
                      <table>
                        <tbody>
                          <tr>
                            <S.Td>{t("projectInfo.map.section2")}</S.Td>
                            <S.Td>
                              <input value={36.0064915} /> ,{" "}
                              <input value={128.3945927} />
                            </S.Td>
                          </tr>
                          <tr>
                            <S.Td>{t("projectInfo.map.section3")}</S.Td>
                            <S.Td>
                              <input value={35.9784614} /> ,{" "}
                              <input value={128.3919799} />
                            </S.Td>
                          </tr>
                          <tr>
                            <S.Td>{t("projectInfo.map.section4")}</S.Td>
                            <S.Td>
                              <input value={35.9793236} /> ,{" "}
                              <input value={128.4293442} />
                            </S.Td>
                          </tr>
                          <tr>
                            <S.Td>{t("projectInfo.map.section5")}</S.Td>
                            <S.Td>
                              <input value={36.0068097} /> ,{" "}
                              <input value={128.4281826} />
                            </S.Td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CoordinateBox>
                </>
              ) : null}
            </S.PaddingBox>
          </S.EvalBox>
        </S.EvalArea>

        <S.BtnAreaSolo>
          <S.NextBtn
            onClick={() => {
              if (evalType === "기본평가") {
                localStorage.setItem("where", "위해성 평가");
                sessionStorage.setItem("eval_Type", "기본평가");
                navigate("/tutorial/1/coc");
              } else if (evalType === "부지기반평가") {
                localStorage.setItem("where", "위해성 평가");
                sessionStorage.setItem("eval_Type", "부지기반평가");
                navigate("/tutorial/2/coc");
              }
            }}
          >
            {t("projectInfo.nextButton")}
          </S.NextBtn>
        </S.BtnAreaSolo>
      </S.Content>
    </>
  );
};

export default TInfo;

const CoordinateBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Img = styled.img`
  margin: 1rem;
  width: 80%;
`;
