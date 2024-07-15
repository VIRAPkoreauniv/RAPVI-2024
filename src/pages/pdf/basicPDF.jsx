import React, { useEffect, useState } from "react";
import * as S from "./PDFstyle";
import makePDF from "./makePDF";
import styled from "styled-components";

const BasicPdf = () => {
  // data
  // 프로젝트 정보
  const [projectName, setProjectName] = useState([]);
  const [projectManager, setProjectManager] = useState([]);
  const [projectDate, setProjectDate] = useState([]);

  // 입력값
  const materialNum = parseInt(sessionStorage.getItem("materialNum"));

  const getSession = () => {
    // 프로젝트 정보
    setProjectName(sessionStorage.getItem("projectName"));
    setProjectManager(sessionStorage.getItem("projectManager"));
    setProjectDate(sessionStorage.getItem("projectDate"));

    // 입력값

    // 결과
  };

  useEffect(() => {
    getSession();
  });

  // make pdf
  const onClick = (e) => {
    e.preventDefault();
    const pdf = makePDF();
    pdf.viewWithPdf();
  };
  return (
    <div className="div_container">
      <PdfBtn>
        <button onClick={onClick}>PDF 출력/저장</button>
      </PdfBtn>
      <S.Layout className="div_paper">
        <h1>RAPVI 기본평가</h1>
        <br />
        <br />
        <h2>프로젝트 정보</h2>
        <hr />
        <h4>프로젝트 명 : {projectName}</h4>
        <h4>담당자 : {projectManager}</h4>
        <h4>작업 일시 : {projectDate}</h4>
        <br />
        <h2>입력값</h2>
        <hr />

        {materialNum >= 1 && (
          <>
            <h3>오염물질 A</h3>
            <h5>오염물질 : {sessionStorage.getItem("chem_1")}</h5>
            <h5>S : {sessionStorage.getItem("value_S_1")} mg/L</h5>
            <h5>Hc : {sessionStorage.getItem("value_Hc_1")} atm-m3/mol</h5>
            <h5>Dair : {sessionStorage.getItem("value_Dair_1")} cm2/s</h5>
            <h5>Dwater : {sessionStorage.getItem("value_Dwater_1")} cm2/s</h5>
            <h5>DHvb : {sessionStorage.getItem("value_DHvb_1")} cal/mol</h5>
            <h5>Tc : {sessionStorage.getItem("value_Tc_1")} K</h5>
            <h5>Tb : {sessionStorage.getItem("value_Tb_1")} K</h5>
            <h5>MW : {sessionStorage.getItem("value_MW_1")} g/mol</h5>
            <h5>IUR : {sessionStorage.getItem("value_IUR_1")} (ug/m3)^-1</h5>
            <h5>Rfc : {sessionStorage.getItem("value_Rfc_1")} mg/m3</h5>
            <h5>Mut : {sessionStorage.getItem("value_Mut_1")}</h5>
            <br />
            <h5>지하수위 : {sessionStorage.getItem("waterlevel_1")} m</h5>
            <h5>표고 : {sessionStorage.getItem("elevation_1")} m</h5>
            <br />
            <h5>오염원 매체 : {sessionStorage.getItem("type_1")}</h5>
            {sessionStorage.getItem("Ts_1") !== null ? (
              <h5>지하수 온도 : {sessionStorage.getItem("Ts_1")} ℃</h5>
            ) : (
              <h5>지하수 온도 : 15 ℃</h5>
            )}
            <h5>매체 농도 : {sessionStorage.getItem("soilconc_1")} ug/L</h5>
            {sessionStorage.getItem("type_1") === "unsat" && (
              <>
                <h5>
                  탄소-물 분배계수 (koc) :{" "}
                  {sessionStorage.getItem("value_Koc_1")} g-H2O/g-C
                </h5>
                <h5>
                  유기물 분배계수 (foc) :{" "}
                  {sessionStorage.getItem("value_foc_1")} g-C/g-soil
                </h5>
              </>
            )}
            <br />
            <h5>지층 토양 유형 : {sessionStorage.getItem("geoType")}</h5>
            <h5>지층 전체 공극률 (nSA) : {sessionStorage.getItem("nSA")}</h5>
            <h5>
              지층 물이 채워진 공극률 (nwSA) : {sessionStorage.getItem("nwSA")}
            </h5>
            <h5>
              지층 부피밀도(bulk density) (rhoSA):{" "}
              {sessionStorage.getItem("rhoSA")} g/cm3
            </h5>
            <h5>모세관대의 높이 (hcz) : {sessionStorage.getItem("hcz")} m</h5>
            <h5>
              모세관 영역 전체 공극률 (ncz) : {sessionStorage.getItem("ncz")}
            </h5>
            <h5>
              모세관 영역 물이 채워진 공극률 (nwcz) :{" "}
              {sessionStorage.getItem("nwcz")}
            </h5>
            <br />
            <h5>건물 기초 유형 : {sessionStorage.getItem("foundType")}</h5>
            <h5>
              건물기초 바닥까지의 깊이 (LB) : {sessionStorage.getItem("LB")} m
            </h5>
            <h5>건물기초의 두께 (Lf) : {sessionStorage.getItem("Lf")} m</h5>
            <h5>
              균열이 있는 건물기초 면적의 비율 (eta):{" "}
              {sessionStorage.getItem("eta")}
            </h5>
            <h5>
              밀폐된 공간 바닥의 면적 (Abf) : {sessionStorage.getItem("Abf")} m2
            </h5>
            <h5>
              밀폐된 공간의 섞임 높이 (mixing height) (Hb) :{" "}
              {sessionStorage.getItem("Hb")} m
            </h5>
            <h5>실내공기교환율 (ach) : {sessionStorage.getItem("ach")} 1/hr</h5>
            <h5>
              건물유입 평균 증기유량 ÷ 건물환기율 (Qsoil_Qb) :{" "}
              {sessionStorage.getItem("Qsoil_Qb")}
            </h5>
            <br />
            <h5>노출 특성 유형 : {sessionStorage.getItem("expType")}</h5>
            <h5>노출 기간 (EF) : {sessionStorage.getItem("EF")} yrs</h5>
            <h5>노출 빈도 (ED) : {sessionStorage.getItem("ED")} days/yr</h5>
            <h5>노출 시간 (ET) : {sessionStorage.getItem("EF")} hrs/day</h5>
            <h5>
              발암물질 평균 노출 시간 (ATc) : {sessionStorage.getItem("ATc")} hr
            </h5>
            <h5>
              비발암물질 평균 노출 시간 (ATnc) :{" "}
              {sessionStorage.getItem("ATnc")} hr
            </h5>
            <br />
          </>
        )}
        {materialNum >= 2 && (
          <>
            <h3>오염물질 B</h3>
            <h5>오염물질 : {sessionStorage.getItem("chem_2")}</h5>
            <h5>S : {sessionStorage.getItem("value_S_2")} mg/L</h5>
            <h5>Hc : {sessionStorage.getItem("value_Hc_2")} atm-m3/mol</h5>
            <h5>Dair : {sessionStorage.getItem("value_Dair_2")} cm2/s</h5>
            <h5>Dwater : {sessionStorage.getItem("value_Dwater_2")} cm2/s</h5>
            <h5>DHvb : {sessionStorage.getItem("value_DHvb_2")} cal/mol</h5>
            <h5>Tc : {sessionStorage.getItem("value_Tc_2")} K</h5>
            <h5>Tb : {sessionStorage.getItem("value_Tb_2")} K</h5>
            <h5>MW : {sessionStorage.getItem("value_MW_2")} g/mol</h5>
            <h5>IUR : {sessionStorage.getItem("value_IUR_2")} (ug/m3)^-1</h5>
            <h5>Rfc : {sessionStorage.getItem("value_Rfc_2")} mg/m3</h5>
            <h5>Mut : {sessionStorage.getItem("value_Mut_2")}</h5>
            <br />
            <h5>지하수위 : {sessionStorage.getItem("waterlevel_2")} m</h5>
            <h5>표고 : {sessionStorage.getItem("elevation_2")} m</h5>
            <br />
            <h5>오염원 매체 : {sessionStorage.getItem("type_2")}</h5>
            {sessionStorage.getItem("Ts_2") !== null ? (
              <h5>지하수 온도 : {sessionStorage.getItem("Ts_2")} ℃</h5>
            ) : (
              <h5>지하수 온도 : 15 ℃</h5>
            )}
            <h5>매체 농도 : {sessionStorage.getItem("soilconc_2")} ug/L</h5>
            {sessionStorage.getItem("type_2") === "unsat" && (
              <>
                <h5>
                  탄소-물 분배계수 (koc) :{" "}
                  {sessionStorage.getItem("value_Koc_2")} g-H2O/g-C
                </h5>
                <h5>
                  유기물 분배계수 (foc) :{" "}
                  {sessionStorage.getItem("value_foc_2")} g-C/g-soil
                </h5>
              </>
            )}
            <br />
            <h5>지층 토양 유형 : {sessionStorage.getItem("geoType")}</h5>
            <h5>지층 전체 공극률 (nSA) : {sessionStorage.getItem("nSA")}</h5>
            <h5>
              지층 물이 채워진 공극률 (nwSA) : {sessionStorage.getItem("nwSA")}
            </h5>
            <h5>
              지층 부피밀도(bulk density) (rhoSA):{" "}
              {sessionStorage.getItem("rhoSA")} g/cm3
            </h5>
            <h5>모세관대의 높이 (hcz) : {sessionStorage.getItem("hcz")} m</h5>
            <h5>
              모세관 영역 전체 공극률 (ncz) : {sessionStorage.getItem("ncz")}
            </h5>
            <h5>
              모세관 영역 물이 채워진 공극률 (nwcz) :{" "}
              {sessionStorage.getItem("nwcz")}
            </h5>
            <br />
            <h5>건물 기초 유형 : {sessionStorage.getItem("foundType")}</h5>
            <h5>
              건물기초 바닥까지의 깊이 (LB) : {sessionStorage.getItem("LB")} m
            </h5>
            <h5>건물기초의 두께 (Lf) : {sessionStorage.getItem("Lf")} m</h5>
            <h5>
              균열이 있는 건물기초 면적의 비율 (eta):{" "}
              {sessionStorage.getItem("eta")}
            </h5>
            <h5>
              밀폐된 공간 바닥의 면적 (Abf) : {sessionStorage.getItem("Abf")} m2
            </h5>
            <h5>
              밀폐된 공간의 섞임 높이 (mixing height) (Hb) :{" "}
              {sessionStorage.getItem("Hb")} m
            </h5>
            <h5>실내공기교환율 (ach) : {sessionStorage.getItem("ach")} 1/hr</h5>
            <h5>
              건물유입 평균 증기유량 ÷ 건물환기율 (Qsoil_Qb) :{" "}
              {sessionStorage.getItem("Qsoil_Qb")}
            </h5>
            <br />
            <h5>노출 특성 유형 : {sessionStorage.getItem("expType")}</h5>
            <h5>노출 기간 (EF) : {sessionStorage.getItem("EF")} yrs</h5>
            <h5>노출 빈도 (ED) : {sessionStorage.getItem("ED")} days/yr</h5>
            <h5>노출 시간 (ET) : {sessionStorage.getItem("EF")} hrs/day</h5>
            <h5>
              발암물질 평균 노출 시간 (ATc) : {sessionStorage.getItem("ATc")} hr
            </h5>
            <h5>
              비발암물질 평균 노출 시간 (ATnc) :{" "}
              {sessionStorage.getItem("ATnc")} hr
            </h5>
            <br />{" "}
          </>
        )}

        <br />
        <h2>결과</h2>
        <hr />
        <br />
        <h3>실내 오염 농도</h3>
        <br />
        <h3>증기침입에 의한 발암위해도</h3>
        <br />
        <h3>증기침입에 의한 비발암위해도</h3>
        <br />
      </S.Layout>
    </div>
  );
};

export default BasicPdf;

const PdfBtn = styled.div`
  display: flex;
  float: right;
`;
