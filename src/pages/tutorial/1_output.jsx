import Chart from "react-apexcharts";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TOutput1 = () => {
  const navigate = useNavigate();

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
          x: "Benzene",
          y: 0.000000026942,
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
          x: "입력값 없음",
          y: 0,
          goals: [
            {
              name: "기준치",
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: "입력값 없음",
          y: 0,
          goals: [
            {
              name: "기준치",
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: "입력값 없음",
          y: 0,
          goals: [
            {
              name: "기준치",
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: "입력값 없음",
          y: 0,
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
          x: "Benzene",
          y: 0.00030999,
          goals: [
            {
              name: "기준치",
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: "입력값 없음",
          y: 0,
          goals: [
            {
              name: "기준치",
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: "입력값 없음",
          y: 0,
          goals: [
            {
              name: "기준치",
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: "입력값 없음",
          y: 0,
          goals: [
            {
              name: "기준치",
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: "입력값 없음",
          y: 0,
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
            튜토리얼 <BiChevronRight /> Output <BiChevronRight /> 결과 확인
          </S.PagePath>
          <S.PageTitle>결과 확인</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h4>프로젝트 : 튜토리얼</h4>
                <h4>담당자 : 홍길동</h4>
                <h4>작업 일시 : 2023-01-01</h4>
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
                    <tr>
                      <Td>1. Benzene</Td>
                      <Td>0.0096982</Td>
                    </tr>
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
                    <tr>
                      <Td>1. Benzene</Td>
                      <Td>0.0096982</Td>
                    </tr>
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
                    <tr>
                      <Td>1. Benzene</Td>
                      <Td>0.000000026942</Td>
                    </tr>
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

export default TOutput1;

const Td = styled.td`
  border: 1px solid black;
  padding: 1rem;
`;
const BtnAreaSolo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3%;
`;
