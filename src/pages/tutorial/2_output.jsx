import { BiChevronRight } from "react-icons/bi";
import * as S from "../../styles/Home.style";

import { GoogleMap, Polygon, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";

const TOutput2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getSession = () => {
    // res 가져오기
    resultCia();
    resultRisk();
    resultHQ();
  };

  // 지도
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLEMAP_API_KEY,
  });

  const containerStyle = {
    width: "80%",
    height: "30rem",
  };

  const center = {
    lat: 36.0064915,
    lng: 128.3945927,
  };

  const paths = [
    { lat: 36.0064915, lng: 128.3945927 },
    { lat: 35.9784614, lng: 128.3919799 },
    { lat: 35.9793236, lng: 128.4293442 },
    { lat: 36.0068097, lng: 128.4281826 },
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
            튜토리얼 <BiChevronRight /> Output <BiChevronRight /> 결과 확인
          </S.PagePath>
          <S.PageTitle>결과 확인</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h4>프로젝트 : 튜토리얼</h4>
                <h4>담당자 : 홍길동</h4>
                <h4>작업 일시 : 2023-01-01</h4>
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
                <h3>실내 오염 농도</h3>
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
                <h3>발암위해도</h3>
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
                <h3>비발암위해도</h3>
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
              <S.PrevBtn onClick={() => navigate(-1)}>이전</S.PrevBtn>
            </BtnAreaSolo>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TOutput2;

const GridTable = styled.table`
  width: 80%;
  border-collapse: collapse;
`;

const BtnAreaSolo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3%;
`;
const Legend = styled.div`
  display: flex;
`;
