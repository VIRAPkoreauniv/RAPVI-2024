import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TOutput1 = () => {
  const { t } = useTranslation("basicAssessment");
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
      name: t("output.chart1.name"),
      data: [
        {
          x: "Benzene",
          y: 0.000000026942,
          width: 10,
          goals: [
            {
              name: t("output.chart1.bar"),
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: t("output.noInput"),
          y: 0,
          goals: [
            {
              name: t("output.chart1.bar"),
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: t("output.noInput"),
          y: 0,
          goals: [
            {
              name: t("output.chart1.bar"),
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: t("output.noInput"),
          y: 0,
          goals: [
            {
              name: t("output.chart1.bar"),
              value: 0.000001,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: t("output.noInput"),
          y: 0,
          goals: [
            {
              name: t("output.chart1.bar"),
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
      name: t("output.chart2.name"),
      data: [
        {
          x: "Benzene",
          y: 0.00030999,
          goals: [
            {
              name: t("output.chart2.bar"),
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: t("output.noInput"),
          y: 0,
          goals: [
            {
              name: t("output.chart2.bar"),
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: t("output.noInput"),
          y: 0,
          goals: [
            {
              name: t("output.chart2.bar"),
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: t("output.noInput"),
          y: 0,
          goals: [
            {
              name: t("output.chart2.bar"),
              value: 1,
              strokeColor: "rgb(141, 0, 42)",
            },
          ],
        },
        {
          x: t("output.noInput"),
          y: 0,
          goals: [
            {
              name: t("output.chart2.bar"),
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
            {t("tutorial.title")} <BiChevronRight /> Output <BiChevronRight />{" "}
            {t("output.pagePath.text2")}
          </S.PagePath>
          <S.PageTitle>{t("output.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h4>{t("output.projectInfo.name")} : 튜토리얼</h4>
                <h4>{t("output.projectInfo.manager")} : 홍길동</h4>
                <h4>{t("output.projectInfo.date")} : 2023-01-01</h4>
                <br />
                <h3>{t("output.part1.title")}</h3>
                <S.Table>
                  <thead style={{ backgroundColor: "lightgray" }}>
                    <tr>
                      <Td>{t("output.part1.td1")}</Td>
                      <Td>{t("output.part1.td2")}</Td>
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
                <h3>{t("output.part2.title")}</h3>
                <Chart
                  options={options_Risk}
                  series={series_Risk}
                  type="bar"
                  width="60%"
                />
                <S.Table>
                  <thead style={{ backgroundColor: "lightgray" }}>
                    <tr>
                      <Td>{t("output.part2.td1")}</Td>
                      <Td>{t("output.part2.td2")}</Td>
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
                <h3>{t("output.part3.title")}</h3>
                <Chart
                  options={options_HQ}
                  series={series_HQ}
                  type="bar"
                  width="60%"
                />
                <S.Table>
                  <thead style={{ backgroundColor: "lightgray" }}>
                    <tr>
                      <Td>{t("output.part3.td1")}</Td>
                      <Td>{t("output.part3.td2")}</Td>
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
              <S.PrevBtn onClick={() => navigate(-1)}>
                {t("output.prev")}
              </S.PrevBtn>
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
