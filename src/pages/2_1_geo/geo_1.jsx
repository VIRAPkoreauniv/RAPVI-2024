import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const Geo1 = () => {
  const { t } = useTranslation("basicAssessment");
  const navigate = useNavigate();

  // 지층 토양 유형
  const [geoType, setGeoType] = useState("");

  // 지질매체 변수 목록
  const [nSA, setnSA] = useState();
  const [nwSA, setnwSA] = useState();
  const [rhoSA, setrhoSA] = useState();
  const [hcz, sethcz] = useState();
  const [ncz, setncz] = useState();
  const [nwcz, setnwcz] = useState();

  // default
  const [default_nSA, setDefault_nSA] = useState();
  const [default_nwSA, setDefault_nwSA] = useState();
  const [default_rhoSA, setDefault_rhoSA] = useState();
  const [default_hcz, setDefault_hcz] = useState();
  const [default_ncz, setDefault_ncz] = useState();
  const [default_nwcz, setDefault_nwcz] = useState();

  // 자동 채움 값
  const fillValue = (e) => {
    let selected = e.target.value;
    if (selected === "Clay") {
      setnSA(0.459);
      setDefault_nSA(0.459);

      setnwSA(0.215);
      setDefault_nwSA(0.215);

      setrhoSA(1.43);
      setDefault_rhoSA(1.43);

      sethcz(0.815217391);
      setDefault_hcz(0.815217391);

      setncz(0.459);
      setDefault_ncz(0.459);

      setnwcz(0.41185514);
      setDefault_nwcz(0.41185514);
    } else if (selected === "Clay Loam") {
      setnSA(0.442);
      setDefault_nSA(0.442);

      setnwSA(0.168);
      setDefault_nwSA(0.168);

      setrhoSA(1.48);
      setDefault_rhoSA(1.48);

      sethcz(0.46875);
      setDefault_hcz(0.46875);

      setncz(0.442);
      setDefault_ncz(0.442);

      setnwcz(0.375117458);
      setDefault_nwcz(0.375117458);
    } else if (selected === "Loam") {
      setnSA(0.399);
      setDefault_nSA(0.399);

      setnwSA(0.148);
      setDefault_nwSA(0.148);

      setrhoSA(1.59);
      setDefault_rhoSA(1.59);

      sethcz(0.375);
      setDefault_hcz(0.375);

      setncz(0.399);
      setDefault_ncz(0.399);

      setnwcz(0.331630276);
      setDefault_nwcz(0.331630276);
    } else if (selected === "Loamy Sand") {
      setnSA(0.39);
      setDefault_nSA(0.39);

      setnwSA(0.076);
      setDefault_nwSA(0.076);

      setrhoSA(1.62);
      setDefault_rhoSA(1.62);

      sethcz(0.1875);
      setDefault_hcz(0.1875);

      setncz(0.39);
      setDefault_ncz(0.39);

      setnwcz(0.302585409);
      setDefault_nwcz(0.302585409);
    } else if (selected === "Sand") {
      setnSA(0.375);
      setDefault_nSA(0.375);

      setnwSA(0.054);
      setDefault_nwSA(0.054);

      setrhoSA(1.66);
      setDefault_rhoSA(1.66);

      sethcz(0.170454545);
      setDefault_hcz(0.170454545);

      setncz(0.375);
      setDefault_ncz(0.375);

      setnwcz(0.253258113);
      setDefault_nwcz(0.253258113);
    } else if (selected === "Sandy Clay") {
      setnSA(0.385);
      setDefault_nSA(0.385);

      setnwSA(0.197);
      setDefault_nwSA(0.197);

      setrhoSA(1.63);
      setDefault_rhoSA(1.63);

      sethcz(0.3);
      setDefault_hcz(0.3);

      setncz(0.385);
      setDefault_ncz(0.385);

      setnwcz(0.354846864);
      setDefault_nwcz(0.354846864);
    } else if (selected === "Sandy Clay Loam") {
      setnSA(0.384);
      setDefault_nSA(0.384);

      setnwSA(0.146);
      setDefault_nwSA(0.146);

      setrhoSA(1.63);
      setDefault_rhoSA(1.63);

      sethcz(0.25862069);
      setDefault_hcz(0.25862069);

      setncz(0.384);
      setDefault_ncz(0.384);

      setnwcz(0.333283473);
      setDefault_nwcz(0.333283473);
    } else if (selected === "Sandy Loam") {
      setnSA(0.387);
      setDefault_nSA(0.387);

      setnwSA(0.103);
      setDefault_nwSA(0.103);

      setrhoSA(1.62);
      setDefault_rhoSA(1.62);

      sethcz(0.25);
      setDefault_hcz(0.25);

      setncz(0.387);
      setDefault_ncz(0.387);

      setnwcz(0.31973079);
      setDefault_nwcz(0.31973079);
    } else if (selected === "Silt") {
      setnSA(0.489);
      setDefault_nSA(0.489);

      setnwSA(0.167);
      setDefault_nwSA(0.167);

      setrhoSA(1.35);
      setDefault_rhoSA(1.35);

      sethcz(1.630434783);
      setDefault_hcz(1.630434783);

      setncz(0.489);
      setDefault_ncz(0.489);

      setnwcz(0.381686648);
      setDefault_nwcz(0.381686648);
    } else if (selected === "Silt Loam") {
      setnSA(0.439);
      setDefault_nSA(0.439);

      setnwSA(0.18);
      setDefault_nwSA(0.18);

      setrhoSA(1.49);
      setDefault_rhoSA(1.49);

      sethcz(0.681818182);
      setDefault_hcz(0.681818182);

      setncz(0.439);
      setDefault_ncz(0.439);

      setnwcz(0.348694517);
      setDefault_nwcz(0.348694517);
    } else if (selected === "Silty Clay") {
      setnSA(0.481);
      setDefault_nSA(0.481);

      setnwSA(0.216);
      setDefault_nwSA(0.216);

      setrhoSA(1.38);
      setDefault_rhoSA(1.38);

      sethcz(1.923076923);
      setDefault_hcz(1.923076923);

      setncz(0.481);
      setDefault_ncz(0.481);

      setnwcz(0.423644962);
      setDefault_nwcz(0.423644962);
    } else if (selected === "Silty Clay Loam") {
      setnSA(0.482);
      setDefault_nSA(0.482);

      setnwSA(0.198);
      setDefault_nwSA(0.198);

      setrhoSA(1.37);
      setDefault_rhoSA(1.37);

      sethcz(1.339285714);
      setDefault_hcz(1.339285714);

      setncz(0.482);
      setDefault_ncz(0.482);

      setnwcz(0.399159996);
      setDefault_nwcz(0.399159996);
    } else if (selected === "User Defined") {
      setnSA("");
      setDefault_nSA("");

      setnwSA("");
      setDefault_nwSA("");

      setrhoSA("");
      setDefault_rhoSA("");

      sethcz("");
      setDefault_hcz("");

      setncz("");
      setDefault_ncz("");

      setnwcz("");
      setDefault_nwcz("");
    }
  };

  // input field 비활성화
  const [disable, setDisable] = useState("disabled");

  // 세션 가져오기
  const getSession = () => {
    const preType = sessionStorage.getItem("geoType");
    preType !== null && setGeoType(preType);
    preType !== null && setDisable("");

    const prenSA = sessionStorage.getItem("nSA");
    prenSA !== null && setnSA(prenSA);

    const prenwSA = sessionStorage.getItem("nwSA");
    prenwSA !== null && setnwSA(prenwSA);

    const prerhoSA = sessionStorage.getItem("rhoSA");
    prerhoSA !== null && setrhoSA(prerhoSA);

    const prehcz = sessionStorage.getItem("hcz");
    prehcz !== null && sethcz(prehcz);

    const prencz = sessionStorage.getItem("ncz");
    prencz !== null && setncz(prencz);

    const prenwcz = sessionStorage.getItem("nwcz");
    prenwcz !== null && setnwcz(prenwcz);
  };

  // 세션 데이터 저장
  const saveData = () => {
    sessionStorage.setItem("geoType", geoType);
    sessionStorage.setItem("nSA", nSA);
    sessionStorage.setItem("nwSA", nwSA);
    sessionStorage.setItem("rhoSA", rhoSA);
    sessionStorage.setItem("hcz", hcz);
    sessionStorage.setItem("ncz", ncz);
    sessionStorage.setItem("nwcz", nwcz);

    if (
      geoType !== "" &&
      nSA !== "" &&
      nwSA !== "" &&
      rhoSA !== "" &&
      hcz !== "" &&
      ncz !== "" &&
      nwcz !== ""
    ) {
      sessionStorage.setItem("check_geo", true);
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
            {t("geo.pagePath.text1")} <BiChevronRight /> Input
            <BiChevronRight /> {t("geo.pagePath.text2")} <BiChevronRight />
            {t("geo.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("geo.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <form action="/input/pathway/found1">
              <S.EvalBox>
                <S.PaddingBox>
                  <table>
                    <thead>
                      <tr>
                        <td>{t("geo.select.title")}</td>
                        <S.Td>SCS_A</S.Td>
                        <S.Td>
                          <select
                            onChange={(e) => {
                              setGeoType(e.target.value);
                              setDisable("");
                              fillValue(e);
                            }}
                            value={geoType}
                          >
                            <option value="" selected disabled hidden>
                              {t("geo.select.placeholder")}
                            </option>
                            <option>Clay</option>
                            <option>Clay Loam</option>
                            <option>Loam</option>
                            <option>Loamy Sand</option>
                            <option>Sand</option>
                            <option>Sandy Clay</option>
                            <option>Sandy Clay Loam</option>
                            <option>Sandy Loam</option>
                            <option>Silt</option>
                            <option>Silt Loam</option>
                            <option>Silty Clay</option>
                            <option>Silty Clay Loam</option>
                            <option>User Defined</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5>{t("geo.info")}</h5>
                  <table>
                    <thead>
                      <tr>
                        <td></td>
                        <S.Td>{t("geo.table.td1")}</S.Td>
                        <S.Td>{t("geo.table.td2")}</S.Td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{t("geo.table.td3")}</td>
                        <S.Td>nSA</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setnSA(e.target.value)}
                            required
                            disabled={disable}
                            value={nSA}
                            placeholder={default_nSA}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("geo.table.td4")}</td>
                        <S.Td>nwSA</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setnwSA(e.target.value)}
                            required
                            disabled={disable}
                            value={nwSA}
                            placeholder={default_nwSA}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("geo.table.td5")}</td>
                        <S.Td>rhoSA</S.Td>
                        <S.Td>g/cm3</S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setrhoSA(e.target.value)}
                            required
                            disabled={disable}
                            value={rhoSA}
                            placeholder={default_rhoSA}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("geo.table.td6")}</td>
                        <S.Td>hcz</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => sethcz(e.target.value)}
                            required
                            disabled={disable}
                            value={hcz}
                            placeholder={default_hcz}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("geo.table.td7")}</td>
                        <S.Td>ncz</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setncz(e.target.value)}
                            required
                            disabled={disable}
                            value={ncz}
                            placeholder={default_ncz}
                            type="number"
                            step="0.00000000001"
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>{t("geo.table.td8")}</td>
                        <S.Td>nwcz</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input
                            onChange={(e) => setnwcz(e.target.value)}
                            required
                            disabled={disable}
                            value={nwcz}
                            placeholder={default_nwcz}
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
                <S.PrevBtn onClick={() => navigate("/input/source/conc1")}>
                  {t("geo.prev")}
                </S.PrevBtn>
                <S.NextBtn onClick={saveData}>{t("geo.next")}</S.NextBtn>
              </S.BtnAreaTwin>
            </form>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default Geo1;
