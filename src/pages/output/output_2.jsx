import { GoogleMap, Polygon, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const Output2 = () => {
  const { t } = useTranslation("site");
  const navigate = useNavigate();
  const location = useLocation();

  const [projectName, setProjectName] = useState([]);
  const [projectManager, setProjectManager] = useState([]);
  const [projectDate, setProjectDate] = useState([]);
  const [Cia, setCia] = useState([]);
  const [HQ, setHQ] = useState([]);
  const [Risk, setRisk] = useState([]);

  // 위도 경도
  const [lat1, setLat1] = useState(0);
  const [lat2, setLat2] = useState(0);
  const [lat3, setLat3] = useState(0);
  const [lat4, setLat4] = useState(0);
  const [lng1, setLng1] = useState(0);
  const [lng2, setLng2] = useState(0);
  const [lng3, setLng3] = useState(0);
  const [lng4, setLng4] = useState(0);

  const getSession = () => {
    // 프로젝트 정보
    setProjectName(sessionStorage.getItem("projectName"));
    setProjectManager(sessionStorage.getItem("projectManager"));
    setProjectDate(sessionStorage.getItem("projectDate"));
    setLat1(parseFloat(sessionStorage.getItem("lat1")));
    setLat2(parseFloat(sessionStorage.getItem("lat2")));
    setLat3(parseFloat(sessionStorage.getItem("lat3")));
    setLat4(parseFloat(sessionStorage.getItem("lat4")));
    setLng1(parseFloat(sessionStorage.getItem("lng1")));
    setLng2(parseFloat(sessionStorage.getItem("lng2")));
    setLng3(parseFloat(sessionStorage.getItem("lng3")));
    setLng4(parseFloat(sessionStorage.getItem("lng4")));

    // res 가져오기
    resultCia();
    resultRisk();
    resultHQ();
  };

  // 지도
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
  });

  const containerStyle = {
    width: "80%",
    height: "30rem",
  };

  const center = {
    lat: parseFloat(sessionStorage.getItem("lat1")),
    lng: parseFloat(sessionStorage.getItem("lng1")),
    // lat: 20.466,
    // lng: -70.268,
  };

  const paths = [
    // { lat: 20.466, lng: -70.19 },
    // { lat: 20.466, lng: -80.19 },
    // { lat: 18.466, lng: -80.19 },
    // { lat: 18.466, lng: -70.19 },
    { lat: lat1, lng: lng1 },
    { lat: lat2, lng: lng2 },
    { lat: lat3, lng: lng3 },
    { lat: lat4, lng: lng4 },
  ];

  const options = {
    fillColor: "white",
    fillOpacity: 0,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
  };

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(bounds);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // 실내 오염 농도 (Cia)
  const [drawCia, setDrawCia] = useState([]);
  const resultCia = () => {
    let Cia = [];
    if (location.state.Cia !== undefined) {
      Cia = location.state.Cia;
    }

    let indoorAir = [];
    let indoorAirColor = "white";

    Cia.map((row) => {
      let line = "";
      line += "<tr>";
      row.map((r) => {
        // 색깔 범위 지정
        if (r < 0.0000001) {
          indoorAirColor = "rgb(0,0,255)";
        } else if (r >= 0.0000001 && r < 0.0000005) {
          indoorAirColor = "rgb(0,255,255)";
        } else if (r >= 0.0000005 && r <= 0.000001) {
          indoorAirColor = "rgb(0,255,0)";
        } else if (r >= 0.000001 && r <= 0.000002) {
          indoorAirColor = "rgb(255,255,0)";
        } else if (r >= 0.000002 && r <= 0.00001) {
          indoorAirColor = "rgb(255,0,0)";
        } else if (r >= 0.00001) {
          indoorAirColor = "rgb(64, 8, 18)";
        }
        line += `<td style = 'background-color: ${indoorAirColor}; border: 1px solid black; padding: 0.5%'></td>`;
      });
      line += "</tr>";
      indoorAir.push(line);
    });

    indoorAir = indoorAir.join("");
    setDrawCia(indoorAir);
  };

  // 발암위해도 (Risk)
  const [drawRisk, setDrawRisk] = useState([]);
  const resultRisk = () => {
    let Risk = [];
    if (location.state.Risk !== undefined) {
      Risk = location.state.Risk;
    }

    let riskColor = "white";
    let riskArr = [];
    Risk.map((row) => {
      let line = "";
      line += "<tr>";
      row.map((r) => {
        // 색깔 범위 지정
        if (r < 0.0000001) {
          riskColor = "rgb(0,0,255)";
        } else if (r >= 0.0000001 && r < 0.0000005) {
          riskColor = "rgb(0,255,255)";
        } else if (r >= 0.0000005 && r <= 0.000001) {
          riskColor = "rgb(0,255,0)";
        } else if (r >= 0.000001 && r <= 0.000002) {
          riskColor = "rgb(255,255,0)";
        } else if (r >= 0.000002 && r <= 0.00001) {
          riskColor = "rgb(255,0,0)";
        } else if (r >= 0.00001) {
          riskColor = "rgb(64, 8, 18)";
        }
        line += `<td style = 'background-color: ${riskColor}; border: 1px solid black; padding: 0.5%'></td>`;
      });
      line += "</tr>";
      riskArr.push(line);
    });

    riskArr = riskArr.join("");
    setDrawRisk(riskArr);
  };

  // 비발암위해도 (HQ)
  const [drawHQ, setDrawHQ] = useState([]);
  const resultHQ = () => {
    let HQ = [];
    if (location.state.HQ !== undefined) {
      HQ = location.state.HQ;
    }

    let hq = [];
    let HQColor = "white";

    HQ.map((row) => {
      let line = "";
      line += "<tr>";
      row.map((r) => {
        // 색깔 범위 지정
        if (r < 0.1) {
          HQColor = "rgb(0,0,255)";
        } else if (r >= 0.1 && r < 0.5) {
          HQColor = "rgb(0,255,255)";
        } else if (r >= 0.5 && r <= 1) {
          HQColor = "rgb(0,255,0)";
        } else if (r >= 1 && r <= 2) {
          HQColor = "rgb(255,255,0)";
        } else if (r >= 2 && r <= 10) {
          HQColor = "rgb(255,0,0)";
        } else if (r >= 10) {
          HQColor = "rgb(64, 8, 18)";
        }
        line += `<td style = 'background-color: ${HQColor}; border: 1px solid black; padding: 0.5%'></td>`;
      });
      line += "</tr>";
      hq.push(line);
    });

    hq = hq.join("");
    setDrawHQ(hq);
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
            {t("output.pagePath.text1")} <BiChevronRight /> Output
            <BiChevronRight /> {t("output.pagePath.text2")}
          </S.PagePath>
          <Box>
            <S.PageTitle>{t("output.pageTitle")}</S.PageTitle>
            <button
              onClick={() =>
                navigate("/sitePDF", {
                  state: {
                    Cia: location.state.Cia,
                    HQ: location.state.HQ,
                    Risk: location.state.Risk,
                  },
                })
              }
            >
              {t("output.pdf")}
            </button>
          </Box>

          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h4>
                  {t("output.projectInfo.name")} : {projectName}
                </h4>
                <h4>
                  {t("output.projectInfo.manager")} : {projectManager}
                </h4>
                <h4>
                  {t("output.projectInfo.date")} : {projectDate}
                </h4>
                {isLoaded ? (
                  <>
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      onLoad={onLoad}
                      onUnmount={onUnmount}
                      mapTypeId="satellite"
                      zoom={13}
                    >
                      {/* Child components, such as markers, info windows, etc. */}
                      <Polygon
                        path={paths}
                        options={options}
                        // onLoad={onLoad}
                        // onUnmount={onUnmount}
                      />
                    </GoogleMap>
                  </>
                ) : null}
                <br />
                <hr />
                <br />
                <h3>{t("output.part1")}</h3>
                <S.GridAndLegend>
                  <GridTable
                    dangerouslySetInnerHTML={{ __html: drawCia }}
                  ></GridTable>
                  <div>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(0,0,255)",
                        }}
                      ></S.LegendItem>
                      <span>{`< 0.0000001`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(0,255,255)",
                        }}
                      ></S.LegendItem>
                      <span>{`0.0000001 ≤ x < 0.0000005`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(0,255,0)",
                        }}
                      ></S.LegendItem>
                      <span>{`0.0000005 ≤ x < 0.000001`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(255,255,0)",
                        }}
                      ></S.LegendItem>
                      <span>{`0.000001 ≤ x < 0.000002`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(255,0,0)",
                        }}
                      ></S.LegendItem>
                      <span>{`0.000002 ≤ x < 0.00001`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(64,8,18)",
                        }}
                      ></S.LegendItem>
                      <span>{`x ≥ 0.00001`}</span>
                    </S.Legend>
                  </div>
                </S.GridAndLegend>
                <br />
                <hr />
                <br />
                <h3>{t("output.part2")}</h3>
                <S.GridAndLegend>
                  <GridTable
                    dangerouslySetInnerHTML={{ __html: drawRisk }}
                  ></GridTable>
                  <div>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(0,0,255)",
                        }}
                      ></S.LegendItem>
                      <span>{`< 0.0000001`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(0,255,255)",
                        }}
                      ></S.LegendItem>
                      <span>{`0.0000001 ≤ x < 0.0000005`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(0,255,0)",
                        }}
                      ></S.LegendItem>
                      <span>{`0.0000005 ≤ x < 0.000001`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(255,255,0)",
                        }}
                      ></S.LegendItem>
                      <span>{`0.000001 ≤ x < 0.000002 `}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(255,0,0)",
                        }}
                      ></S.LegendItem>
                      <span>{`0.000002 ≤ x < 0.00001`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(64,8,18)",
                        }}
                      ></S.LegendItem>
                      <span>{`x ≥ 0.00001`}</span>
                    </S.Legend>
                  </div>
                </S.GridAndLegend>
                <br />
                <hr />
                <br />
                <h3>{t("output.part2")}</h3>
                <S.GridAndLegend>
                  <GridTable
                    dangerouslySetInnerHTML={{ __html: drawHQ }}
                  ></GridTable>
                  <div>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(0,0,255)",
                        }}
                      ></S.LegendItem>
                      <span>{`< 0.1`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(0,255,255)",
                        }}
                      ></S.LegendItem>
                      <span>{`0.1 ≤ x < 0.5`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(0,255,0)",
                        }}
                      ></S.LegendItem>
                      <span>{`0.5 ≤ x < 1`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(255,255,0)",
                        }}
                      ></S.LegendItem>
                      <span>{`1 ≤ x < 2`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(255,0,0)",
                        }}
                      ></S.LegendItem>
                      <span>{`2 ≤ x < 10`}</span>
                    </S.Legend>
                    <S.Legend>
                      <S.LegendItem
                        style={{
                          backgroundColor: "rgb(64,8,18)",
                        }}
                      ></S.LegendItem>
                      <span>{`x ≥ 10`}</span>
                    </S.Legend>
                  </div>
                </S.GridAndLegend>
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

export default Output2;

const GridTable = styled.table`
  width: 80%;
  border-collapse: collapse;
`;

const BtnAreaSolo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3%;
`;

const Box = styled.div`
  margin-right: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
