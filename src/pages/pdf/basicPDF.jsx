import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import * as S from "./PDFstyle";
import makePDF from "./makePDF";

const BasicPdf = () => {
  const { t } = useTranslation("pdf");
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
        <button onClick={onClick}>{t("save")}</button>
      </PdfBtn>
      <S.Layout className="div_paper">
        <h1>{t("basic.projectInfo.rapvi")}</h1>
        <br />
        <br />
        <h2>{t("basic.projectInfo.title")}</h2>
        <hr />
        <h4>
          {t("basic.projectInfo.name")} : {projectName}
        </h4>
        <h4>
          {t("basic.projectInfo.manager")} : {projectManager}
        </h4>
        <h4>
          {t("basic.projectInfo.date")} : {projectDate}
        </h4>
        <br />
        <h2>{t("basic.input.title")}</h2>
        <hr />
        {materialNum >= 1 && (
          <>
            <h3>{t("basic.input.material")} A</h3>
            <h5>
              {t("basic.input.material")} : {sessionStorage.getItem("chem_1")}
            </h5>
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
            <h5>
              {t("basic.input.waterlevel")} :{" "}
              {sessionStorage.getItem("waterlevel_1")} m
            </h5>
            <h5>
              {t("basic.input.elevation")} :{" "}
              {sessionStorage.getItem("elevation_1")} m
            </h5>
            <br />
            <h5>
              {t("basic.input.medium")} : {sessionStorage.getItem("type_1")}
            </h5>
            {sessionStorage.getItem("Ts_1") !== null ? (
              <h5>
                {t("basic.input.temperature")} :{" "}
                {sessionStorage.getItem("Ts_1")} ℃
              </h5>
            ) : (
              <h5>{t("basic.input.temperature")} : 15 ℃</h5>
            )}
            <h5>
              {t("basic.input.conc")} : {sessionStorage.getItem("soilconc_1")}{" "}
              ug/L
            </h5>
            {sessionStorage.getItem("type_1") === "unsat" && (
              <>
                <h5>
                  {t("basic.input.koc")} (koc) :{" "}
                  {sessionStorage.getItem("value_Koc_1")} g-H2O/g-C
                </h5>
                <h5>
                  {t("basic.input.foc")} (foc) :{" "}
                  {sessionStorage.getItem("value_foc_1")} g-C/g-soil
                </h5>
              </>
            )}
            <br />
            <h5>
              {t("basic.input.geoType")} : {sessionStorage.getItem("geoType")}
            </h5>
            <h5>
              {t("basic.input.nSA")} (nSA) : {sessionStorage.getItem("nSA")}
            </h5>
            <h5>
              {t("basic.input.nwSA")} (nwSA) : {sessionStorage.getItem("nwSA")}
            </h5>
            <h5>
              {t("basic.input.rhoSA")}(bulk density) (rhoSA):
              {sessionStorage.getItem("rhoSA")} g/cm3
            </h5>
            <h5>
              {t("basic.input.hcz")} (hcz) : {sessionStorage.getItem("hcz")} m
            </h5>
            <h5>
              {t("basic.input.ncz")} (ncz) : {sessionStorage.getItem("ncz")}
            </h5>
            <h5>
              {t("basic.input.nwcz")} (nwcz) :{sessionStorage.getItem("nwcz")}
            </h5>
            <br />
            <h5>
              {t("basic.input.foundType")} :{" "}
              {sessionStorage.getItem("foundType")}
            </h5>
            <h5>
              {t("basic.input.lb")} (LB) : {sessionStorage.getItem("LB")} m
            </h5>
            <h5>
              {t("basic.input.lf")} (Lf) : {sessionStorage.getItem("Lf")} m
            </h5>
            <h5>
              {t("basic.input.eta")} (eta): {sessionStorage.getItem("eta")}
            </h5>
            <h5>
              {t("basic.input.abf")} (Abf) : {sessionStorage.getItem("Abf")} m2
            </h5>
            <h5>
              {t("basic.input.hb")} (mixing height) (Hb) :{" "}
              {sessionStorage.getItem("Hb")} m
            </h5>
            <h5>
              {t("basic.input.ach")} (ach) : {sessionStorage.getItem("ach")}{" "}
              1/hr
            </h5>
            <h5>
              {t("basic.input.Qsoil_Qb")} (Qsoil_Qb) :{" "}
              {sessionStorage.getItem("Qsoil_Qb")}
            </h5>
            <br />
            <h5>
              {t("basic.input.expType")} : {sessionStorage.getItem("expType")}
            </h5>
            <h5>
              {t("basic.input.ef")} (EF) : {sessionStorage.getItem("EF")} yrs
            </h5>
            <h5>
              {t("basic.input.ed")} (ED) : {sessionStorage.getItem("ED")}{" "}
              days/yr
            </h5>
            <h5>
              {t("basic.input.et")} (ET) : {sessionStorage.getItem("ET")}{" "}
              hrs/day
            </h5>
            <h5>
              {t("basic.input.atc")} (ATc) : {sessionStorage.getItem("ATc")} hr
            </h5>
            <h5>
              {t("basic.input.atnc")} (ATnc) : {sessionStorage.getItem("ATnc")}{" "}
              hr
            </h5>
            <br />
          </>
        )}
        {materialNum >= 2 && (
          <>
            <h3>{t("basic.input.material")} B</h3>
            <h5>
              {t("basic.input.material")} : {sessionStorage.getItem("chem_2")}
            </h5>
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
            <h5>
              {t("basic.input.waterlevel")} :{" "}
              {sessionStorage.getItem("waterlevel_2")} m
            </h5>
            <h5>
              {t("basic.input.elevation")} :{" "}
              {sessionStorage.getItem("elevation_2")} m
            </h5>
            <br />
            <h5>
              {t("basic.input.medium")}: {sessionStorage.getItem("type_2")}
            </h5>
            {sessionStorage.getItem("Ts_2") !== null ? (
              <h5>
                {t("basic.input.temperature")} :{" "}
                {sessionStorage.getItem("Ts_2")} ℃
              </h5>
            ) : (
              <h5>{t("basic.input.temperature")} : 15 ℃</h5>
            )}
            <h5>
              {t("basic.input.conc")} : {sessionStorage.getItem("soilconc_2")}{" "}
              ug/L
            </h5>
            {sessionStorage.getItem("type_2") === "unsat" && (
              <>
                <h5>
                  {t("basic.input.koc")} (koc) :{" "}
                  {sessionStorage.getItem("value_Koc_2")} g-H2O/g-C
                </h5>
                <h5>
                  {t("basic.input.foc")} (foc) :{" "}
                  {sessionStorage.getItem("value_foc_2")} g-C/g-soil
                </h5>
              </>
            )}
            <br />
            <h5>
              {t("basic.input.geoType")} : {sessionStorage.getItem("geoType")}
            </h5>
            <h5>
              {t("basic.input.nSA")} (nSA): {sessionStorage.getItem("nSA")}
            </h5>
            <h5>
              {t("basic.input.nwSA")} (nwSA) : {sessionStorage.getItem("nwSA")}
            </h5>
            <h5>
              {t("basic.input.rhoSA")}(bulk density) (rhoSA):{" "}
              {sessionStorage.getItem("rhoSA")} g/cm3
            </h5>
            <h5>
              {t("basic.input.hcz")} (hcz) : {sessionStorage.getItem("hcz")} m
            </h5>
            <h5>
              {t("basic.input.ncz")} (ncz) : {sessionStorage.getItem("ncz")}
            </h5>
            <h5>
              {t("basic.input.nwcz")} (nwcz) : {sessionStorage.getItem("nwcz")}
            </h5>
            <br />
            <h5>
              {t("basic.input.foundType")} :{" "}
              {sessionStorage.getItem("foundType")}
            </h5>
            <h5>
              {t("basic.input.lb")} (LB) : {sessionStorage.getItem("LB")} m
            </h5>
            <h5>
              {t("basic.input.lf")} (Lf) : {sessionStorage.getItem("Lf")} m
            </h5>
            <h5>
              {t("basic.input.eta")} (eta): {sessionStorage.getItem("eta")}
            </h5>
            <h5>
              {t("basic.input.abf")} (Abf) : {sessionStorage.getItem("Abf")} m2
            </h5>
            <h5>
              {t("basic.input.hb")} (mixing height) (Hb) :{" "}
              {sessionStorage.getItem("Hb")} m
            </h5>
            <h5>
              {t("basic.input.ach")} (ach) : {sessionStorage.getItem("ach")}{" "}
              1/hr
            </h5>
            <h5>
              {t("basic.input.Qsoil_Qb")} (Qsoil_Qb) :{" "}
              {sessionStorage.getItem("Qsoil_Qb")}
            </h5>
            <br />
            <h5>
              {t("basic.input.expType")} : {sessionStorage.getItem("expType")}
            </h5>
            <h5>
              {t("basic.input.ef")} : {sessionStorage.getItem("EF")} yrs
            </h5>
            <h5>
              {t("basic.input.ed")} : {sessionStorage.getItem("ED")} days/yr
            </h5>
            <h5>
              {t("basic.input.et")} : {sessionStorage.getItem("ET")} hrs/day
            </h5>
            <h5>
              {t("basic.input.atc")} (ATc) : {sessionStorage.getItem("ATc")} hr
            </h5>
            <h5>
              {t("basic.input.atnc")} (ATnc) : {sessionStorage.getItem("ATnc")}{" "}
              hr
            </h5>
            <br />{" "}
          </>
        )}

        <br />
        <h2>{t("basic.output.title")}</h2>
        <hr />
        <br />
        <h3>{t("basic.output.result1")}</h3>
        <br />
        <h3>{t("basic.output.result2")}</h3>
        <br />
        <h3>{t("basic.output.result3")}</h3>
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
