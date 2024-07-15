import { useState } from "react";
import Header from "../../components/header";
import * as S from "../../styles/Home.style";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { AiOutlineQuestionCircle } from "react-icons/ai";

const TInfo = () => {
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
    evalType === "기본평가" && setTier1("rgb(224, 214, 198)");
    evalType === "기본평가" && setTier2("white");
    evalType === "기본평가" && setEvalType("기본평가");
    evalType === "부지기반평가" && setTier2("rgb(224, 214, 198)");
    evalType === "부지기반평가" && setTier1("white");
    evalType === "부지기반평가" && setEvalType("부지기반평가");
  };

  return (
    <>
      <Header />
      <S.Content>
        <S.PageTitle>프로젝트 정보</S.PageTitle>
        <S.EvalArea>
          <S.EvalBox>
            <S.PaddingBox>
              <table>
                <tbody>
                  <tr>
                    <S.Td>프로젝트</S.Td>
                    <S.Td>
                      <input value="튜토리얼" />
                    </S.Td>
                  </tr>
                  <tr>
                    <S.Td>담당자</S.Td>
                    <S.Td>
                      <input value="홍길동" />
                    </S.Td>
                  </tr>
                  <tr>
                    <S.Td>작업 일시</S.Td>
                    <S.Td>
                      <input value="2023-01-01" />
                    </S.Td>
                  </tr>
                  <tr>
                    <S.Td>
                      위해성 평가 방식
                      <div onClick={() => navigate("/typeinfo")}>
                        <p style={{ color: "blue" }}>
                          <AiOutlineQuestionCircle /> 기본평가, 부지기반평가가
                          무엇인가요?
                        </p>
                      </div>
                    </S.Td>
                    <S.Td>
                      <input
                        type="submit"
                        value="기본평가"
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
                        value="부지기반평가"
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
                        <S.Td>데이터 크기 (행 X 열)</S.Td>
                        <S.Td>
                          <input value={100} /> X <input value={100} />
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5 style={{ marginLeft: "1rem" }}>
                    ※ 연구 범위에 해당하는 영역의 네 지점 좌표를 입력해주세요.
                    아래 사진은 예시입니다.
                  </h5>
                  <CoordinateBox>
                    <div>
                      <Img src="/img/map.jpg" alt="지도 예시" />
                    </div>
                    <div>
                      <table>
                        <tbody>
                          <tr>
                            <S.Td>좌표1 (위도, 경도)</S.Td>
                            <S.Td>
                              <input value={36.0064915} /> ,{" "}
                              <input value={128.3945927} />
                            </S.Td>
                          </tr>
                          <tr>
                            <S.Td>좌표2 (위도, 경도)</S.Td>
                            <S.Td>
                              <input value={35.9784614} /> ,{" "}
                              <input value={128.3919799} />
                            </S.Td>
                          </tr>
                          <tr>
                            <S.Td>좌표3 (위도, 경도)</S.Td>
                            <S.Td>
                              <input value={35.9793236} /> ,{" "}
                              <input value={128.4293442} />
                            </S.Td>
                          </tr>
                          <tr>
                            <S.Td>좌표4 (위도, 경도)</S.Td>
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
            다음
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
