import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const ElevationPoint = () => {
  const navigate = useNavigate();

  const [chem_1, setChem_1] = useState("");
  const [chem_2, setChem_2] = useState("");
  const [chem_3, setChem_3] = useState("");
  const [chem_4, setChem_4] = useState("");
  const [chem_5, setChem_5] = useState("");
  const [materialNum, setMaterialNum] = useState(0);

  // 세션 값 가져오기
  const getSession = () => {
    let chem1 = sessionStorage.getItem("chem_1");
    let chem2 = sessionStorage.getItem("chem_2");
    let chem3 = sessionStorage.getItem("chem_3");
    let chem4 = sessionStorage.getItem("chem_4");
    let chem5 = sessionStorage.getItem("chem_5");
    setMaterialNum(parseInt(sessionStorage.getItem("materialNum")));

    if (chem1 !== null) {
      setChem_1(chem1);

      let level = sessionStorage.getItem("waterlevel_1");
      let elevation = sessionStorage.getItem("elevation_1");

      if (level !== null && elevation !== null) {
        setWaterlevel_1(level);
        setElevation_1(elevation);
      }
    }
    if (chem2 !== null) {
      setChem_2(chem2);

      let level = sessionStorage.getItem("waterlevel_2");
      let elevation = sessionStorage.getItem("elevation_2");

      if (level !== null && elevation !== null) {
        setWaterlevel_2(level);
        setElevation_2(elevation);
      }
    }
    if (chem3 !== null) {
      setChem_3(chem3);

      let level = sessionStorage.getItem("waterlevel_3");
      let elevation = sessionStorage.getItem("elevation_3");

      if (level !== null && elevation !== null) {
        setWaterlevel_3(level);
        setElevation_3(elevation);
      }
    }
    if (chem4 !== null) {
      setChem_4(chem4);

      let level = sessionStorage.getItem("waterlevel_4");
      let elevation = sessionStorage.getItem("elevation_4");

      if (level !== null && elevation !== null) {
        setWaterlevel_4(level);
        setElevation_4(elevation);
      }
    }
    if (chem5 !== null) {
      setChem_5(chem5);

      let level = sessionStorage.getItem("waterlevel_5");
      let elevation = sessionStorage.getItem("elevation_5");

      if (level !== null && elevation !== null) {
        setWaterlevel_5(level);
        setElevation_5(elevation);
      }
    }
  };

  // 세션 값 저장하기
  const [waterlevel_1, setWaterlevel_1] = useState();
  const [waterlevel_2, setWaterlevel_2] = useState();
  const [waterlevel_3, setWaterlevel_3] = useState();
  const [waterlevel_4, setWaterlevel_4] = useState();
  const [waterlevel_5, setWaterlevel_5] = useState();

  const [elevation_1, setElevation_1] = useState();
  const [elevation_2, setElevation_2] = useState();
  const [elevation_3, setElevation_3] = useState();
  const [elevation_4, setElevation_4] = useState();
  const [elevation_5, setElevation_5] = useState();

  const saveData = () => {
    let verify = false; // 값 다 있는 경우 true

    if (materialNum >= 1) {
      if (
        waterlevel_1 !== undefined &&
        waterlevel_1 !== "" &&
        elevation_1 !== undefined &&
        elevation_1 !== ""
      ) {
        sessionStorage.setItem("waterlevel_1", waterlevel_1);
        sessionStorage.setItem("elevation_1", elevation_1);
        if (materialNum === 1) {
          verify = true;
        }
      } else {
        alert("오염물질 A의 값이 누락되었습니다.");
      }
    }
    if (materialNum >= 2) {
      if (
        waterlevel_2 !== undefined &&
        waterlevel_2 !== "" &&
        elevation_2 !== undefined &&
        elevation_2 !== ""
      ) {
        sessionStorage.setItem("waterlevel_2", waterlevel_2);
        sessionStorage.setItem("elevation_2", elevation_2);
        if (materialNum === 2) {
          verify = true;
        }
      } else {
        alert("오염물질 B의 값이 누락되었습니다.");
      }
    }
    if (materialNum >= 3) {
      if (
        waterlevel_3 !== undefined &&
        waterlevel_3 !== "" &&
        elevation_3 !== undefined &&
        elevation_3 !== ""
      ) {
        sessionStorage.setItem("waterlevel_3", waterlevel_3);
        sessionStorage.setItem("elevation_3", elevation_3);
        if (materialNum === 3) {
          verify = true;
        }
      } else {
        alert("오염물질 C의 값이 누락되었습니다.");
      }
    }
    if (materialNum >= 4) {
      if (
        waterlevel_4 !== undefined &&
        waterlevel_4 !== "" &&
        elevation_4 !== undefined &&
        elevation_4 !== ""
      ) {
        sessionStorage.setItem("waterlevel_4", waterlevel_4);
        sessionStorage.setItem("elevation_4", elevation_4);
        if (materialNum === 4) {
          verify = true;
        }
      } else {
        alert("오염물질 D의 값이 누락되었습니다.");
      }
    }
    if (materialNum >= 5) {
      if (
        waterlevel_5 !== undefined &&
        waterlevel_5 !== "" &&
        elevation_5 !== undefined &&
        elevation_5 !== ""
      ) {
        sessionStorage.setItem("waterlevel_5", waterlevel_5);
        sessionStorage.setItem("elevation_5", elevation_5);
        if (materialNum === 5) {
          verify = true;
        }
      } else {
        alert("오염물질 E의 값이 누락되었습니다.");
      }
    }

    // 값 누락 검사 후 이동
    verify === true && sessionStorage.setItem("check_depth", true);
    verify === true && navigate("/input/source/conc1");
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
            위해성 평가 <BiChevronRight /> Input <BiChevronRight /> 오염원{" "}
            <BiChevronRight /> 오염심도
          </S.PagePath>
          <S.PageTitle>오염심도</S.PageTitle>
          <S.EvalArea>
            {materialNum >= 1 ? (
              <S.EvalBox>
                <S.PaddingBox>
                  <h3>오염물질 A : {chem_1}</h3>
                  <p>지하수위 (단위 : m)</p>
                  <input
                    type="number"
                    placeholder="값을 입력하세요."
                    value={waterlevel_1}
                    onChange={(e) => {
                      setWaterlevel_1(e.target.value);
                    }}
                  />
                  <p>표고 (단위 : m)</p>
                  <input
                    type="number"
                    placeholder="값을 입력하세요."
                    value={elevation_1}
                    onChange={(e) => {
                      setElevation_1(e.target.value);
                    }}
                  />
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            {materialNum >= 2 ? (
              <S.EvalBox>
                <S.PaddingBox>
                  <h3>오염물질 B : {chem_2}</h3>
                  <p>지하수위 (단위 : m)</p>
                  <input
                    type="number"
                    placeholder="값을 입력하세요."
                    value={waterlevel_2}
                    onChange={(e) => {
                      setWaterlevel_2(e.target.value);
                    }}
                  />
                  <p>표고 (단위 : m)</p>
                  <input
                    type="number"
                    placeholder="값을 입력하세요."
                    value={elevation_2}
                    onChange={(e) => {
                      setElevation_2(e.target.value);
                    }}
                  />
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            {materialNum >= 3 ? (
              <S.EvalBox>
                <S.PaddingBox>
                  <h3>오염물질 C : {chem_3}</h3>
                  <p>지하수위 (단위 : m)</p>
                  <input
                    type="number"
                    placeholder="값을 입력하세요."
                    value={waterlevel_3}
                    onChange={(e) => {
                      setWaterlevel_3(e.target.value);
                    }}
                  />
                  <p>표고 (단위 : m)</p>
                  <input
                    type="number"
                    placeholder="값을 입력하세요."
                    value={elevation_3}
                    onChange={(e) => {
                      setElevation_3(e.target.value);
                    }}
                  />
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            {materialNum >= 4 ? (
              <S.EvalBox>
                <S.PaddingBox>
                  <h3>오염물질 D : {chem_4}</h3>
                  <p>지하수위 (단위 : m)</p>
                  <input
                    type="number"
                    placeholder="값을 입력하세요."
                    value={waterlevel_4}
                    onChange={(e) => {
                      setWaterlevel_4(e.target.value);
                    }}
                  />
                  <p>표고 (단위 : m)</p>
                  <input
                    type="number"
                    placeholder="값을 입력하세요."
                    value={elevation_4}
                    onChange={(e) => {
                      setElevation_4(e.target.value);
                    }}
                  />
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            {materialNum >= 5 ? (
              <S.EvalBox>
                <S.PaddingBox>
                  <h3>오염물질 E : {chem_5}</h3>
                  <p>지하수위 (단위 : m)</p>
                  <input
                    type="number"
                    placeholder="값을 입력하세요."
                    value={waterlevel_5}
                    onChange={(e) => {
                      setWaterlevel_5(e.target.value);
                    }}
                  />
                  <p>표고 (단위 : m)</p>
                  <input
                    type="number"
                    placeholder="값을 입력하세요."
                    value={elevation_5}
                    onChange={(e) => {
                      setElevation_5(e.target.value);
                    }}
                  />
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/input/source/coc1")}>
                이전
              </S.PrevBtn>
              <S.NextBtn onClick={saveData}>다음</S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default ElevationPoint;
