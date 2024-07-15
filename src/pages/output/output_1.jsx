import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { BiChevronRight } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const Output1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [projectName, setProjectName] = useState([]);
  const [projectManager, setProjectManager] = useState([]);
  const [projectDate, setProjectDate] = useState([]);

  // 세션 값
  const materialNum = parseInt(sessionStorage.getItem("materialNum"));
  const [chem_1, setChem_1] = useState("입력값 없음");
  const [chem_2, setChem_2] = useState("입력값 없음");
  const [chem_3, setChem_3] = useState("입력값 없음");
  const [chem_4, setChem_4] = useState("입력값 없음");
  const [chem_5, setChem_5] = useState("입력값 없음");

  // res 가져오기
  const [Cia_1, setCia_1] = useState(0);
  const [Cia_2, setCia_2] = useState(0);
  const [Cia_3, setCia_3] = useState(0);
  const [Cia_4, setCia_4] = useState(0);
  const [Cia_5, setCia_5] = useState(0);

  const [HQ_1, setHQ_1] = useState(0);
  const [HQ_2, setHQ_2] = useState(0);
  const [HQ_3, setHQ_3] = useState(0);
  const [HQ_4, setHQ_4] = useState(0);
  const [HQ_5, setHQ_5] = useState(0);

  const [Risk_1, setRisk_1] = useState(0);
  const [Risk_2, setRisk_2] = useState(0);
  const [Risk_3, setRisk_3] = useState(0);
  const [Risk_4, setRisk_4] = useState(0);
  const [Risk_5, setRisk_5] = useState(0);

  const getSession = () => {
    // 프로젝트 정보
    setProjectName(sessionStorage.getItem("projectName"));
    setProjectManager(sessionStorage.getItem("projectManager"));
    setProjectDate(sessionStorage.getItem("projectDate"));
    sessionStorage.getItem("chem_1") !== null &&
      setChem_1(sessionStorage.getItem("chem_1"));
    sessionStorage.getItem("chem_2") !== null &&
      setChem_2(sessionStorage.getItem("chem_2"));
    sessionStorage.getItem("chem_3") !== null &&
      setChem_3(sessionStorage.getItem("chem_3"));
    sessionStorage.getItem("chem_4") !== null &&
      setChem_4(sessionStorage.getItem("chem_4"));
    sessionStorage.getItem("chem_5") !== null &&
      setChem_5(sessionStorage.getItem("chem_5"));

    // res 가져오기
    resultCia();
    resultRisk();
    resultHQ();
  };

  // 실내 오염 농도 (Cia)
  const resultCia = () => {
    let Cia = location.state.Cia;
    setCia_1(parseFloat(Cia[0]).toFixed(6));
    setCia_2(parseFloat(Cia[1]).toFixed(6));
    setCia_3(parseFloat(Cia[2]).toFixed(6));
    setCia_4(parseFloat(Cia[3]).toFixed(6));
    setCia_5(parseFloat(Cia[4]).toFixed(6));
  };
  // 발암위해도 (Risk)
  const resultRisk = () => {
    let Risk = location.state.Cia;
    setRisk_1(parseFloat(Risk[0]).toFixed(6));
    setRisk_2(parseFloat(Risk[1]).toFixed(6));
    setRisk_3(parseFloat(Risk[2]).toFixed(6));
    setRisk_4(parseFloat(Risk[3]).toFixed(6));
    setRisk_5(parseFloat(Risk[4]).toFixed(6));
  };

  // 비발암위해도 (HQ)
  const resultHQ = () => {
    let HQ = location.state.HQ;
    setHQ_1(parseFloat(HQ[0]).toFixed(3));
    setHQ_2(parseFloat(HQ[1]).toFixed(3));
    setHQ_3(parseFloat(HQ[2]).toFixed(3));
    setHQ_4(parseFloat(HQ[3]).toFixed(3));
    setHQ_5(parseFloat(HQ[4]).toFixed(3));
  };
  useEffect(() => {
    getSession();
  }, []);

  // 발암위해도 차트 1개
  let options_Risk = {
    chart: {
      type: "bar",
      width: "5rem",
    },
    colors: ["#e5cd85"],
  };
  let series_Risk = [
    {
      name: "발암위해도",
      data: [
        {
          x: chem_1,
          y: Risk_1,
          width: 10,
          goals: [
            {
              name: "기준치",
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: chem_2,
          y: Risk_2,
          goals: [
            {
              name: "기준치",
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: chem_3,
          y: Risk_3,
          goals: [
            {
              name: "기준치",
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: chem_4,
          y: Risk_4,
          goals: [
            {
              name: "기준치",
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: chem_5,
          y: Risk_5,
          goals: [
            {
              name: "기준치",
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
      ],
    },
  ];

  // 비발암위해도 차트
  let options_HQ = {
    chart: {
      type: "bar",
    },
    colors: ["#e5cd85"],
  };
  let series_HQ = [
    {
      name: "비발암위해도",
      data: [
        {
          x: chem_1,
          y: HQ_1,
          goals: [
            {
              name: "기준치",
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: chem_2,
          y: HQ_2,
          goals: [
            {
              name: "기준치",
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: chem_3,
          y: HQ_3,
          goals: [
            {
              name: "기준치",
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: chem_4,
          y: HQ_4,
          goals: [
            {
              name: "기준치",
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: chem_5,
          y: HQ_5,
          goals: [
            {
              name: "기준치",
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            위해성 평가 <BiChevronRight /> Output <BiChevronRight /> 결과 확인
          </S.PagePath>
          <S.PageTitle>결과 확인</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h4>프로젝트 : {projectName}</h4>
                <h4>담당자 : {projectManager}</h4>
                <h4>작업 일시 : {projectDate}</h4>
                <br />
                <h3>실내 오염 농도</h3>
                <S.Table>
                  <thead style={{ backgroundColor: "lightgray" }}>
                    <tr>
                      <Td>화학물질</Td>
                      <Td>실내 오염 농도</Td>
                    </tr>
                  </thead>
                  <tbody>
                    {materialNum >= 1 ? (
                      <tr>
                        <Td>1. {chem_1}</Td>
                        <Td>{Cia_1}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 2 ? (
                      <tr>
                        <Td>2. {chem_2}</Td>
                        <Td>{Cia_2}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 3 ? (
                      <tr>
                        <Td>3. {chem_3}</Td>
                        <Td>{Cia_3}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 4 ? (
                      <tr>
                        <Td>4. {chem_4}</Td>
                        <Td>{Cia_4}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 5 ? (
                      <tr>
                        <Td>5. {chem_5}</Td>
                        <Td>{Cia_5}</Td>
                      </tr>
                    ) : null}
                  </tbody>
                </S.Table>
                <br />
                <hr />
                <br />
                <h3>증기침입에 의한 발암위해도</h3>
                <Chart
                  options={options_Risk}
                  series={series_Risk}
                  type="bar"
                  width="60%"
                />
                <S.Table>
                  <thead style={{ backgroundColor: "lightgray" }}>
                    <tr>
                      <Td>화학물질</Td>
                      <Td>증기침입에 의한 발암위해도</Td>
                    </tr>
                  </thead>
                  <tbody>
                    {materialNum >= 1 ? (
                      <tr>
                        <Td>1. {chem_1}</Td>
                        <Td>{Risk_1}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 2 ? (
                      <tr>
                        <Td>2. {chem_2}</Td>
                        <Td>{Risk_2}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 3 ? (
                      <tr>
                        <Td>3. {chem_3}</Td>
                        <Td>{Risk_3}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 4 ? (
                      <tr>
                        <Td>4. {chem_4}</Td>
                        <Td>{Risk_4}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 5 ? (
                      <tr>
                        <Td>5. {chem_5}</Td>
                        <Td>{Risk_5}</Td>
                      </tr>
                    ) : null}
                  </tbody>
                </S.Table>
                <br />
                <hr />
                <br />
                <h3>증기침입에 의한 비발암위해도</h3>
                <Chart
                  options={options_HQ}
                  series={series_HQ}
                  type="bar"
                  width="60%"
                />
                <S.Table>
                  <thead style={{ backgroundColor: "lightgray" }}>
                    <tr>
                      <Td>화학물질</Td>
                      <Td>증기침입에 의한 비발암위해도</Td>
                    </tr>
                  </thead>
                  <tbody>
                    {materialNum >= 1 ? (
                      <tr>
                        <Td>1. {chem_1}</Td>
                        <Td>{HQ_1}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 2 ? (
                      <tr>
                        <Td>2. {chem_2}</Td>
                        <Td>{HQ_2}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 3 ? (
                      <tr>
                        <Td>3. {chem_3}</Td>
                        <Td>{HQ_3}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 4 ? (
                      <tr>
                        <Td>4. {chem_4}</Td>
                        <Td>{HQ_4}</Td>
                      </tr>
                    ) : null}
                    {materialNum >= 5 ? (
                      <tr>
                        <Td>5. {chem_5}</Td>
                        <Td>{HQ_5}</Td>
                      </tr>
                    ) : null}
                  </tbody>
                </S.Table>
              </S.PaddingBox>
            </S.EvalBox>
            <BtnAreaSolo>
              <S.PrevBtn onClick={() => navigate(-1)}>이전</S.PrevBtn>
            </BtnAreaSolo>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default Output1;

const Td = styled.td`
  border: 1px solid black;
  padding: 1rem;
`;
const BtnAreaSolo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3%;
`;
