import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const Found1 = () => {
  const navigate = useNavigate();

  // 건물기초 유형
  const [foundType, setFoundType] = useState("");

  // 건물기초 유형 변수 목록
  const [LB, setLB] = useState();
  const [Lf, setLf] = useState();
  const [eta, seteta] = useState();
  const [Abf, setAbf] = useState();
  const [Hb, setHb] = useState();
  const [ach, setach] = useState();
  const [Qsoil_Qb, setQsoil_Qb] = useState();

  // default
  const [default_LB, setDefault_LB] = useState();
  const [default_Lf, setDefault_Lf] = useState();
  const [default_eta, setDefault_eta] = useState();
  const [default_Abf, setDefault_Abf] = useState();
  const [default_Hb, setDefault_Hb] = useState();
  const [default_ach, setDefault_ach] = useState();
  const [default_Qsoil_Qb, setDefault_Qsoil_Qb] = useState();

  // 자동 채움 값
  const fillValue = (e) => {
    let selected = e.target.value;
    if (selected === "Residential & Closed crawl space w/ slab") {
      setLB(1);
      setDefault_LB(1);

      setLf(0.1);
      setDefault_Lf(0.1);

      seteta(0.001);
      setDefault_eta(0.001);

      setAbf(150);
      setDefault_Abf(150);

      setHb(1.3);
      setDefault_Hb(1.3);

      setach(0.45);
      setDefault_ach(0.45);

      setQsoil_Qb(0.003);
      setDefault_Qsoil_Qb(0.003);
    } else if (selected === "Residential & Closed crawl space w/ dirt floor") {
      setLB(1);
      setDefault_LB(1);

      setLf(0);
      setDefault_Lf(0);

      seteta(1);
      setDefault_eta(1);

      setAbf(150);
      setDefault_Abf(150);

      setHb(1.3);
      setDefault_Hb(1.3);

      setach(0.45);
      setDefault_ach(0.45);

      setQsoil_Qb(0.003);
      setDefault_Qsoil_Qb(0.003);
    } else if (selected === "Residential & Basement w/ slab") {
      setLB(2);
      setDefault_LB(2);

      setLf(0.1);
      setDefault_Lf(0.1);

      seteta(0.001);
      setDefault_eta(0.001);

      setAbf(150);
      setDefault_Abf(150);

      setHb(3.66);
      setDefault_Hb(3.66);

      setach(0.45);
      setDefault_ach(0.45);

      setQsoil_Qb(0.003);
      setDefault_Qsoil_Qb(0.003);
    } else if (selected === "Residential & Basement w/ dirt floor") {
      setLB(2);
      setDefault_LB(2);

      setLf(0);
      setDefault_Lf(0);

      seteta(1);
      setDefault_eta(1);

      setAbf(150);
      setDefault_Abf(150);

      setHb(3.66);
      setDefault_Hb(3.66);

      setach(0.45);
      setDefault_ach(0.45);

      setQsoil_Qb(0.003);
      setDefault_Qsoil_Qb(0.003);
    } else if (selected === "Residential & Slab-on-grade") {
      setLB(0.1);
      setDefault_LB(0.1);

      setLf(0.1);
      setDefault_Lf(0.1);

      seteta(0.001);
      setDefault_eta(0.001);

      setAbf(150);
      setDefault_Abf(150);

      setHb(2.44);
      setDefault_Hb(2.44);

      setach(0.45);
      setDefault_ach(0.45);

      setQsoil_Qb(0.003);
      setDefault_Qsoil_Qb(0.003);
    } else if (selected === "Commercial & Crawl space w/ slab") {
      setLB(1);
      setDefault_LB(1);

      setLf(0.2);
      setDefault_Lf(0.2);

      seteta(0.001);
      setDefault_eta(0.001);

      setAbf(1500);
      setDefault_Abf(1500);

      setHb(3);
      setDefault_Hb(3);

      setach(1.5);
      setDefault_ach(1.5);

      setQsoil_Qb(0.003);
      setDefault_Qsoil_Qb(0.003);
    } else if (selected === "Commercial & Crawl space w/ dirt floor") {
      setLB(1);
      setDefault_LB(1);

      setLf(0);
      setDefault_Lf(0);

      seteta(1);
      setDefault_eta(1);

      setAbf(1500);
      setDefault_Abf(1500);

      setHb(3);
      setDefault_Hb(3);

      setach(1.5);
      setDefault_ach(1.5);

      setQsoil_Qb(0.003);
      setDefault_Qsoil_Qb(0.003);
    } else if (selected === "Commercial & Basement w/ slab") {
      setLB(2);
      setDefault_LB(2);

      setLf(0.2);
      setDefault_Lf(0.2);

      seteta(0.001);
      setDefault_eta(0.001);

      setAbf(1500);
      setDefault_Abf(1500);

      setHb(3);
      setDefault_Hb(3);

      setach(1.5);
      setDefault_ach(1.5);

      setQsoil_Qb(0.003);
      setDefault_Qsoil_Qb(0.003);
    } else if (selected === "Commercial & Basement w/ dirt floor") {
      setLB(2);
      setDefault_LB(2);

      setLf(0);
      setDefault_Lf(0);

      seteta(1);
      setDefault_eta(1);

      setAbf(1500);
      setDefault_Abf(1500);

      setHb(3);
      setDefault_Hb(3);

      setach(1.5);
      setDefault_ach(1.5);

      setQsoil_Qb(0.003);
      setDefault_Qsoil_Qb(0.003);
    } else if (selected === "Commercial & Slab-on-grade") {
      setLB(0.2);
      setDefault_LB(0.2);

      setLf(0.2);
      setDefault_Lf(0.2);

      seteta(0.001);
      setDefault_eta(0.001);

      setAbf(1500);
      setDefault_Abf(1500);

      setHb(3);
      setDefault_Hb(3);

      setach(1.5);
      setDefault_ach(1.5);

      setQsoil_Qb(0.003);
      setDefault_Qsoil_Qb(0.003);
    } else if (selected === "User Defined") {
      setLB(0);
      setDefault_LB("");

      setLf(0);
      setDefault_Lf("");

      seteta(0);
      setDefault_eta("");

      setAbf(0);
      setDefault_Abf("");

      setHb(0);
      setDefault_Hb("");

      setach(0);
      setDefault_ach("");

      setQsoil_Qb(0);
      setDefault_Qsoil_Qb("");
    }
  };

  // input field 비활성화
  const [disable, setDisable] = useState("disabled");

  // 세션 가져오기
  const getSession = () => {
    const preType = sessionStorage.getItem("foundType");
    preType !== null && setFoundType(preType);
    preType !== null && setDisable("");

    const preLB = sessionStorage.getItem("LB");
    preLB !== null && setLB(preLB);

    const preLf = sessionStorage.getItem("Lf");
    preLf !== null && setLf(preLf);

    const preeta = sessionStorage.getItem("eta");
    preeta !== null && seteta(preeta);

    const preAbf = sessionStorage.getItem("Abf");
    preAbf !== null && setAbf(preAbf);

    const preHb = sessionStorage.getItem("Hb");
    preHb !== null && setHb(preHb);

    const preach = sessionStorage.getItem("ach");
    preach !== null && setach(preach);

    const preQsoil_Qb = sessionStorage.getItem("Qsoil_Qb");
    preQsoil_Qb !== null && setQsoil_Qb(preQsoil_Qb);
  };

  // 세션 데이터 저장
  const saveData = () => {
    sessionStorage.setItem("foundType", foundType);
    sessionStorage.setItem("LB", LB);
    sessionStorage.setItem("Lf", Lf);
    sessionStorage.setItem("eta", eta);
    sessionStorage.setItem("Abf", Abf);
    sessionStorage.setItem("Hb", Hb);
    sessionStorage.setItem("ach", ach);
    sessionStorage.setItem("Qsoil_Qb", Qsoil_Qb);

    if (
      foundType !== "" &&
      LB !== "" &&
      Lf !== "" &&
      eta !== "" &&
      Abf !== "" &&
      Hb !== "" &&
      ach !== "" &&
      Qsoil_Qb !== ""
    ) {
      sessionStorage.setItem("check_found", true);
    }
  };

  useEffect(() => {
    getSession();
  }, []);
  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            위해성 평가 <BiChevronRight /> Input <BiChevronRight /> 경로{" "}
            <BiChevronRight /> 건물
          </S.PagePath>
          <S.PageTitle>건물</S.PageTitle>
          <S.EvalArea>
            <form action="/input/receptors/exp1">
              <S.EvalBox>
                <S.PaddingBox>
                  <table>
                    <thead>
                      <tr>
                        <td>건물기초 유형</td>
                        <S.Td>Found_Type</S.Td>
                        <S.Td>
                          <select
                            onChange={(e) => {
                              setFoundType(e.target.value);
                              setDisable("");
                              fillValue(e);
                            }}
                            value={foundType}
                          >
                            <option value="" selected disabled hidden>
                              건물기초 유형을 입력해주세요.
                            </option>
                            <option>
                              Residential & Closed crawl space w/ slab
                            </option>
                            <option>
                              Residential & Closed crawl space w/ dirt floor
                            </option>
                            <option>Residential & Basement w/ slab</option>
                            <option>
                              Residential & Basement w/ dirt floor
                            </option>
                            <option>Residential & Slab-on-grade</option>
                            <option>Commercial & Crawl space w/ slab</option>
                            <option>
                              Commercial & Crawl space w/ dirt floor
                            </option>
                            <option>Commercial & Basement w/ slab</option>
                            <option>Commercial & Basement w/ dirt floor</option>
                            <option>Commercial & Slab-on-grade</option>
                            <option>User Defined</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>

                  <h5>
                    ※ 아래의 값은 건물기초 유형에 따라 자동으로 입력되며 필요 시
                    수정할 수 있습니다.
                  </h5>
                  <table>
                    <thead>
                      <tr>
                        <td></td>
                        <S.Td>기호</S.Td>
                        <S.Td>단위</S.Td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>건물기초 바닥까지의 깊이</td>
                        <S.Td>LB</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setLB(e.target.value)}
                            required
                            disabled={disable}
                            value={LB}
                            placeholder={default_LB}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>건물기초의 두께</td>
                        <S.Td>Lf</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setLf(e.target.value)}
                            required
                            disabled={disable}
                            value={Lf}
                            placeholder={default_Lf}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>균열이 있는 건물기초 면적의 비율</td>
                        <S.Td>eta</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => seteta(e.target.value)}
                            required
                            disabled={disable}
                            value={eta}
                            placeholder={default_eta}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>밀폐된 공간 바닥의 면적</td>
                        <S.Td>Abf</S.Td>
                        <S.Td>m2</S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setAbf(e.target.value)}
                            required
                            disabled={disable}
                            value={Abf}
                            placeholder={default_Abf}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>밀폐된 공간의 섞임 높이 (mixing height)</td>
                        <S.Td>Hb</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setHb(e.target.value)}
                            required
                            disabled={disable}
                            value={Hb}
                            placeholder={default_Hb}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>실내공기교환율</td>
                        <S.Td>ach</S.Td>
                        <S.Td>1/hr</S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setach(e.target.value)}
                            required
                            disabled={disable}
                            value={ach}
                            placeholder={default_ach}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>건물유입 평균 증기유량 ÷ 건물환기율</td>
                        <S.Td>Qsoil_Qb</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setQsoil_Qb(e.target.value)}
                            required
                            disabled={disable}
                            value={Qsoil_Qb}
                            placeholder={default_Qsoil_Qb}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </S.PaddingBox>
              </S.EvalBox>
              <S.BtnAreaTwin>
                <S.PrevBtn onClick={() => navigate("/input/pathway/geo1")}>
                  이전
                </S.PrevBtn>
                <S.NextBtn onClick={saveData}>다음</S.NextBtn>
              </S.BtnAreaTwin>
            </form>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default Found1;
