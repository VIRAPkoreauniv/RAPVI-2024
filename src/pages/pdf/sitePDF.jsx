import { useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import * as S from "./PDFstyle";
import makePDF from "./makePDF";
import SiteHeader from "./siteInputHeader";
import SiteOutputHeader from "./siteOutputHeader";

const SitePdf = () => {
  const { t } = useTranslation("pdf");
  const location = useLocation();

  //오염원 - 오염심도 - 지하수위
  const [w_numOfRows, w_setNumOfRows] = useState();
  const [w_numOfColumns, w_setNumOfColumns] = useState();
  const [w_area, w_setArea] = useState("");
  const [w_data, w_setData] = useState("");
  let w_output = [];

  const getWaterlevel = () => {
    let preData = sessionStorage.getItem("waterlevel");

    if (preData !== null && preData !== "undefined" && preData !== "[]") {
      preData = JSON.parse(preData);
      let fromPreData = [];

      preData.map((arr) => {
        let prestr = "";
        for (let i = 0; i < preData[0].length; i++) {
          prestr = prestr + arr[i] + "\t";
        }
        prestr = prestr.slice(0, prestr.length - 1);
        fromPreData += prestr;
        fromPreData += "\n";
      });
      w_setData(fromPreData);
    }
    let rows = [];

    let rawRows = w_data.split("\n");
    rawRows.splice(rawRows.length - 1, 1);
    w_setNumOfRows(rawRows.length);
    let columnList = [];
    let firstCol = "white";
    let color = "white";

    rawRows.forEach((rawRows) => {
      let rawRowArray = rawRows.split("\t");
      columnList.push(rawRowArray.length);
      w_output.push(rawRowArray);
      rows.push(
        `<tr style = 'background-color: ${firstCol};'><td style = 'background-color: ${color}; border: 1px solid black; padding: 10px'>${rawRowArray.join(
          "</td><td style = 'border: 1px solid black; padding: 10px'>"
        )}</td></tr>`
      );
    });

    rows = rows.join("");
    w_setNumOfColumns(Math.max(...columnList));

    drawWaterlevel(w_output, w_numOfRows, w_numOfColumns);
  };

  const drawWaterlevel = (output, row, col) => {
    let hereColor = "white";
    let arr = output;
    let cols = col;
    let tag = "";

    // min max 찾기
    let numArr = [];
    arr.map((cols) => {
      cols.map((num) => {
        numArr.push(num);
      });
    });
    let rangeMin = Math.min(...numArr);
    let rangeMax = Math.max(...numArr);
    let gap = (rangeMax - rangeMin) / 10;

    for (let i = 0; i < arr.length; i++) {
      tag += "<tr>";

      for (let j = 0; j < cols; j++) {
        let here = parseInt(arr[i][j]);

        // 색깔 범위 지정
        if (here >= rangeMin + gap * 9) {
          // max 90%
          hereColor = "#ff0000";
        } else if (here >= rangeMin + gap * 8 && here < rangeMin + gap * 9) {
          // max 80%
          hereColor = "#FF1818";
        } else if (here >= rangeMin + gap * 7 && here < rangeMin + gap * 8) {
          // max 70%
          hereColor = "#FD2F2F";
        } else if (here >= rangeMin + gap * 6 && here < rangeMin + gap * 7) {
          // max 60%
          hereColor = "#FF4141";
        } else if (here >= rangeMin + gap * 5 && here < rangeMin + gap * 6) {
          // max 50%
          hereColor = "#FF5C5C";
        } else if (here >= rangeMin + gap * 4 && here < rangeMin + gap * 5) {
          // max 40%
          hereColor = "#FF6F6F";
        } else if (here >= rangeMin + gap * 3 && here < rangeMin + gap * 4) {
          // max 30%
          hereColor = "#FF7E7E";
        } else if (here >= rangeMin + gap * 2 && here < rangeMin + gap * 3) {
          // max 20%
          hereColor = "#FD8B8B";
        } else if (here >= rangeMin + gap * 1 && here < rangeMin + gap * 2) {
          // max 10%
          hereColor = "#FF9D9D";
        } else if (here >= rangeMin && here < rangeMin + gap * 1) {
          // max 0%
          hereColor = "#FFAFAF";
        }
        tag += `<td style = 'background-color: ${hereColor}; border: 1px solid black; padding: 0.1rem'></td>`;
      }
      tag += "</tr>";
    }
    w_setArea(tag);
  };

  //오염원 - 오염심도 - 표고
  const [e_numOfRows, e_setNumOfRows] = useState();
  const [e_numOfColumns, e_setNumOfColumns] = useState();
  const [e_area, e_setArea] = useState("");
  const [e_data, e_setData] = useState("");
  let e_output = [];

  const getElevation = () => {
    let preData = sessionStorage.getItem("elevation");

    if (preData !== null && preData !== "undefined" && preData !== "[]") {
      preData = JSON.parse(preData);
      let fromPreData = [];

      preData.map((arr) => {
        let prestr = "";
        for (let i = 0; i < preData[0].length; i++) {
          prestr = prestr + arr[i] + "\t";
        }
        prestr = prestr.slice(0, prestr.length - 1);
        fromPreData += prestr;
        fromPreData += "\n";
      });
      e_setData(fromPreData);
    }
    let rows = [];

    let rawRows = e_data.split("\n");
    rawRows.splice(rawRows.length - 1, 1);
    e_setNumOfRows(rawRows.length);
    let columnList = [];
    let firstCol = "white";
    let color = "white";

    rawRows.forEach((rawRows) => {
      let rawRowArray = rawRows.split("\t");
      columnList.push(rawRowArray.length);
      e_output.push(rawRowArray);
      rows.push(
        `<tr style = 'background-color: ${firstCol};'><td style = 'background-color: ${color}; border: 1px solid black; padding: 10px'>${rawRowArray.join(
          "</td><td style = 'border: 1px solid black; padding: 10px'>"
        )}</td></tr>`
      );
    });

    rows = rows.join("");
    e_setNumOfColumns(Math.max(...columnList));

    drawElevation(e_output, e_numOfRows, e_numOfColumns);
  };

  const drawElevation = (output, row, col) => {
    let hereColor = "white";
    let arr = output;
    let cols = col;
    let tag = "";

    // min max 찾기
    let numArr = [];
    arr.map((cols) => {
      cols.map((num) => {
        numArr.push(num);
      });
    });
    let rangeMin = Math.min(...numArr);
    let rangeMax = Math.max(...numArr);
    let gap = (rangeMax - rangeMin) / 10;

    for (let i = 0; i < arr.length; i++) {
      tag += "<tr>";

      for (let j = 0; j < cols; j++) {
        let here = parseInt(arr[i][j]);

        // 색깔 범위 지정
        if (here >= rangeMin + gap * 9) {
          // max 90%
          hereColor = "#ff0000";
        } else if (here >= rangeMin + gap * 8 && here < rangeMin + gap * 9) {
          // max 80%
          hereColor = "#FF1818";
        } else if (here >= rangeMin + gap * 7 && here < rangeMin + gap * 8) {
          // max 70%
          hereColor = "#FD2F2F";
        } else if (here >= rangeMin + gap * 6 && here < rangeMin + gap * 7) {
          // max 60%
          hereColor = "#FF4141";
        } else if (here >= rangeMin + gap * 5 && here < rangeMin + gap * 6) {
          // max 50%
          hereColor = "#FF5C5C";
        } else if (here >= rangeMin + gap * 4 && here < rangeMin + gap * 5) {
          // max 40%
          hereColor = "#FF6F6F";
        } else if (here >= rangeMin + gap * 3 && here < rangeMin + gap * 4) {
          // max 30%
          hereColor = "#FF7E7E";
        } else if (here >= rangeMin + gap * 2 && here < rangeMin + gap * 3) {
          // max 20%
          hereColor = "#FD8B8B";
        } else if (here >= rangeMin + gap * 1 && here < rangeMin + gap * 2) {
          // max 10%
          hereColor = "#FF9D9D";
        } else if (here >= rangeMin && here < rangeMin + gap * 1) {
          // max 0%
          hereColor = "#FFAFAF";
        }
        tag += `<td style = 'background-color: ${hereColor}; border: 1px solid black; padding: 0.1rem'></td>`;
      }
      tag += "</tr>";
    }
    e_setArea(tag);
  };

  //오염원 - 오염농도
  const [c_numOfRows, c_setNumOfRows] = useState();
  const [c_numOfColumns, c_setNumOfColumns] = useState();
  const [c_area, c_setArea] = useState("");
  const [c_data, c_setData] = useState("");
  let c_output = [];

  const getConc = () => {
    let preData = sessionStorage.getItem("sat_soilconc");

    if (preData !== null && preData !== "undefined" && preData !== "[]") {
      preData = JSON.parse(preData);
      let fromPreData = [];

      preData.map((arr) => {
        let prestr = "";
        for (let i = 0; i < preData[0].length; i++) {
          prestr = prestr + arr[i] + "\t";
        }
        prestr = prestr.slice(0, prestr.length - 1);
        fromPreData += prestr;
        fromPreData += "\n";
      });
      c_setData(fromPreData);
    }
    let rows = [];

    let rawRows = c_data.split("\n");
    rawRows.splice(rawRows.length - 1, 1);
    c_setNumOfRows(rawRows.length);
    let columnList = [];
    let firstCol = "white";
    let color = "white";

    rawRows.forEach((rawRows) => {
      let rawRowArray = rawRows.split("\t");
      columnList.push(rawRowArray.length);
      c_output.push(rawRowArray);
      rows.push(
        `<tr style = 'background-color: ${firstCol};'><td style = 'background-color: ${color}; border: 1px solid black; padding: 10px'>${rawRowArray.join(
          "</td><td style = 'border: 1px solid black; padding: 10px'>"
        )}</td></tr>`
      );
    });

    rows = rows.join("");
    c_setNumOfColumns(Math.max(...columnList));

    drawConc(c_output, c_numOfRows, c_numOfColumns);
  };

  const drawConc = (output, row, col) => {
    let hereColor = "white";
    let arr = output;
    let cols = col;
    let tag = "";

    // min max 찾기
    let numArr = [];
    arr.map((cols) => {
      cols.map((num) => {
        numArr.push(num);
      });
    });
    let rangeMin = Math.min(...numArr);
    let rangeMax = Math.max(...numArr);
    let gap = (rangeMax - rangeMin) / 10;

    for (let i = 0; i < arr.length; i++) {
      tag += "<tr>";

      for (let j = 0; j < cols; j++) {
        let here = parseInt(arr[i][j]);

        // 색깔 범위 지정
        if (here >= rangeMin + gap * 9) {
          // max 90%
          hereColor = "#ff0000";
        } else if (here >= rangeMin + gap * 8 && here < rangeMin + gap * 9) {
          // max 80%
          hereColor = "#FF1818";
        } else if (here >= rangeMin + gap * 7 && here < rangeMin + gap * 8) {
          // max 70%
          hereColor = "#FD2F2F";
        } else if (here >= rangeMin + gap * 6 && here < rangeMin + gap * 7) {
          // max 60%
          hereColor = "#FF4141";
        } else if (here >= rangeMin + gap * 5 && here < rangeMin + gap * 6) {
          // max 50%
          hereColor = "#FF5C5C";
        } else if (here >= rangeMin + gap * 4 && here < rangeMin + gap * 5) {
          // max 40%
          hereColor = "#FF6F6F";
        } else if (here >= rangeMin + gap * 3 && here < rangeMin + gap * 4) {
          // max 30%
          hereColor = "#FF7E7E";
        } else if (here >= rangeMin + gap * 2 && here < rangeMin + gap * 3) {
          // max 20%
          hereColor = "#FD8B8B";
        } else if (here >= rangeMin + gap * 1 && here < rangeMin + gap * 2) {
          // max 10%
          hereColor = "#FF9D9D";
        } else if (here >= rangeMin && here < rangeMin + gap * 1) {
          // max 0%
          hereColor = "#FFAFAF";
        }
        tag += `<td style = 'background-color: ${hereColor}; border: 1px solid black; padding: 0.1rem'></td>`;
      }
      tag += "</tr>";
    }
    c_setArea(tag);
  };

  // 경로 - 지질매체
  const [nSA, setnSA] = useState();
  const [nwSA, setnwSA] = useState();
  const [rhoSA, setrhoSA] = useState();
  const [hcz, sethcz] = useState();
  const [ncz, setncz] = useState();
  const [nwcz, setnwcz] = useState();

  const fillGeo = () => {
    let geotype = sessionStorage.getItem("Geo_Type");
    if (geotype === "1") {
      // clay
      setnSA(0.459);
      setnwSA(0.215);
      setrhoSA(1.43);
      sethcz(0.815217391);
      setncz(0.459);
      setnwcz(0.41185514);
    } else if (geotype === "2") {
      // clay loam
      setnSA(0.442);
      setnwSA(0.168);
      setrhoSA(1.48);
      sethcz(0.46875);
      setncz(0.442);
      setnwcz(0.375117458);
    } else if (geotype === "3") {
      // loam
      setnSA(0.399);
      setnwSA(0.148);
      setrhoSA(1.59);
      sethcz(0.375);
      setncz(0.399);
      setnwcz(0.331630276);
    } else if (geotype === "4") {
      // loamy sand
      setnSA(0.399);
      setnwSA(0.148);
      setrhoSA(1.59);
      sethcz(0.375);
      setncz(0.399);
      setnwcz(0.331630276);
    } else if (geotype === "5") {
      //sand
      setnSA(0.375);
      setnwSA(0.054);
      setrhoSA(1.66);
      sethcz(0.170454545);
      setncz(0.375);
      setnwcz(0.253258113);
    } else if (geotype === "6") {
      //sandy clay
      setnSA(0.385);
      setnwSA(0.197);
      setrhoSA(1.63);
      sethcz(0.3);
      setncz(0.385);
      setnwcz(0.354846864);
    } else if (geotype === "7") {
      // sandy clay loam
      setnSA(0.384);
      setnwSA(0.146);
      setrhoSA(1.63);
      sethcz(0.25862069);
      setncz(0.384);
      setnwcz(0.333283473);
    } else if (geotype === "8") {
      // sandy loam
      setnSA(0.387);
      setnwSA(0.103);
      setrhoSA(1.62);
      sethcz(0.25);
      setncz(0.387);
      setnwcz(0.31973079);
    } else if (geotype === "9") {
      // silt
      setnSA(0.489);
      setnwSA(0.167);
      setrhoSA(1.35);
      sethcz(1.630434783);
      setncz(0.489);
      setnwcz(0.381686648);
    } else if (geotype === "10") {
      // silt loam
      setnSA(0.439);
      setnwSA(0.18);
      setrhoSA(1.49);
      sethcz(0.681818182);
      setncz(0.439);
      setnwcz(0.348694517);
    } else if (geotype === "11") {
      // silty clay
      setnSA(0.481);
      setnwSA(0.216);
      setrhoSA(1.38);
      sethcz(1.923076923);
      setncz(0.481);
      setnwcz(0.423644962);
    } else if (geotype === "12") {
      // silty clay loam
      setnSA(0.482);
      setnwSA(0.198);
      setrhoSA(1.37);
      setncz(0.482);
      setnwcz(0.399159996);
      sethcz(1.339285714);
    } else if (geotype === "13") {
      // user defined
      setnSA(sessionStorage.getItem("nSA_13"));
      setnwSA(sessionStorage.getItem("nwSA_13"));
      setrhoSA(sessionStorage.getItem("rhoSA_13"));
      setncz(sessionStorage.getItem("ncz_13"));
      setnwcz(sessionStorage.getItem("nwcz_13"));
      sethcz(sessionStorage.getItem("hcz_13"));
    }
  };

  // 경로 - 건물
  const [f_numOfRows, f_setNumOfRows] = useState();
  const [f_numOfColumns, f_setNumOfColumns] = useState();
  const [f_area, f_setArea] = useState("");
  const [f_data, f_setData] = useState("");
  let f_output = [];

  const getFound = () => {
    let preData = sessionStorage.getItem("Found_Type");

    if (preData !== null && preData !== "undefined" && preData !== "[]") {
      preData = JSON.parse(preData);
      let fromPreData = [];

      preData.map((arr) => {
        let prestr = "";
        for (let i = 0; i < preData[0].length; i++) {
          prestr = prestr + arr[i] + "\t";
        }
        prestr = prestr.slice(0, prestr.length - 1);
        fromPreData += prestr;
        fromPreData += "\n";
      });
      f_setData(fromPreData);
    }
    let rows = [];

    let rawRows = f_data.split("\n");
    rawRows.splice(rawRows.length - 1, 1);
    f_setNumOfRows(rawRows.length);
    let columnList = [];
    let firstCol = "white";
    let color = "white";

    rawRows.forEach((rawRows) => {
      let rawRowArray = rawRows.split("\t");
      columnList.push(rawRowArray.length);
      f_output.push(rawRowArray);
      rows.push(
        `<tr style = 'background-color: ${firstCol};'><td style = 'background-color: ${color}; border: 1px solid black; padding: 10px'>${rawRowArray.join(
          "</td><td style = 'border: 1px solid black; padding: 10px'>"
        )}</td></tr>`
      );
    });

    rows = rows.join("");
    f_setNumOfColumns(Math.max(...columnList));

    drawFound(f_output, f_numOfRows, f_numOfColumns);
  };

  const drawFound = (output, row, col) => {
    let hereColor = "white";
    let arr = output;
    let cols = col;
    let tag = "";

    // min max 찾기
    let numArr = [];
    arr.map((cols) => {
      cols.map((num) => {
        numArr.push(num);
      });
    });

    for (let i = 0; i < arr.length; i++) {
      tag += "<tr>";

      for (let j = 0; j < cols; j++) {
        let here = parseInt(arr[i][j]);

        // 색깔 범위 지정
        if (here === 1) {
          hereColor = "#f50700";
        } else if (here === 2) {
          hereColor = "#fd6f00";
        } else if (here === 3) {
          hereColor = "#ffcd08";
        } else if (here === 4) {
          hereColor = "#fffb81";
        } else if (here === 5) {
          hereColor = "#fffbdb";
        } else if (here === 6) {
          hereColor = "#ffda95";
        } else if (here === 7) {
          hereColor = "#dbd87b";
        } else if (here === 8) {
          hereColor = "#8dcc59";
        } else if (here === 9) {
          hereColor = "#00bf5b";
        } else if (here === 10) {
          hereColor = "#00b88a";
        } else if (here === 11) {
          hereColor = "#d2eaea";
        } else if (here === 12) {
          hereColor = "#afe4e2";
        } else if (here === 13) {
          hereColor = "#87d2d9";
        } else if (here === 14) {
          hereColor = "#45b3cb";
        } else if (here === 15) {
          hereColor = "#2b9fc8";
        }
        tag += `<td style = 'background-color: ${hereColor}; border: 1px solid black; padding: 0.1rem'></td>`;
      }
      tag += "</tr>";
    }
    f_setArea(tag);
  };

  // 수용체 - 노출 특성
  const [r_numOfRows, r_setNumOfRows] = useState();
  const [r_numOfColumns, r_setNumOfColumns] = useState();
  const [r_area, r_setArea] = useState("");
  const [r_data, r_setData] = useState("");
  let r_output = [];

  const getReceptor = () => {
    let preData = sessionStorage.getItem("Expo_Type");

    if (preData !== null && preData !== "undefined" && preData !== "[]") {
      preData = JSON.parse(preData);
      let fromPreData = [];

      preData.map((arr) => {
        let prestr = "";
        for (let i = 0; i < preData[0].length; i++) {
          prestr = prestr + arr[i] + "\t";
        }
        prestr = prestr.slice(0, prestr.length - 1);
        fromPreData += prestr;
        fromPreData += "\n";
      });
      r_setData(fromPreData);
    }
    let rows = [];

    let rawRows = r_data.split("\n");
    rawRows.splice(rawRows.length - 1, 1);
    r_setNumOfRows(rawRows.length);
    let columnList = [];
    let firstCol = "white";
    let color = "white";

    rawRows.forEach((rawRows) => {
      let rawRowArray = rawRows.split("\t");
      columnList.push(rawRowArray.length);
      r_output.push(rawRowArray);
      rows.push(
        `<tr style = 'background-color: ${firstCol};'><td style = 'background-color: ${color}; border: 1px solid black; padding: 10px'>${rawRowArray.join(
          "</td><td style = 'border: 1px solid black; padding: 10px'>"
        )}</td></tr>`
      );
    });

    rows = rows.join("");
    r_setNumOfColumns(Math.max(...columnList));

    drawReceptor(r_output, r_numOfRows, r_numOfColumns);
  };

  const drawReceptor = (output, row, col) => {
    let hereColor = "white";
    let arr = output;
    let cols = col;
    let tag = "";

    for (let i = 0; i < arr.length; i++) {
      tag += "<tr>";

      for (let j = 0; j < cols; j++) {
        let here = parseInt(arr[i][j]);

        // 색깔 범위 지정
        if (here === 1) {
          hereColor = "#f50700";
        } else if (here === 2) {
          hereColor = "#ffcd08";
        } else if (here === 3) {
          hereColor = "#fffb81";
        } else if (here === 4) {
          hereColor = "#00bf5b";
        } else if (here === 5) {
          hereColor = "#2b9fc8";
        }
        tag += `<td style = 'background-color: ${hereColor}; border: 1px solid black; padding: 0.1rem'></td>`;
      }
      tag += "</tr>";
    }
    r_setArea(tag);
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
  };

  const paths = [
    {
      lat: parseFloat(sessionStorage.getItem("lat1")),
      lng: parseFloat(sessionStorage.getItem("lng1")),
    },
    {
      lat: parseFloat(sessionStorage.getItem("lat2")),
      lng: parseFloat(sessionStorage.getItem("lng2")),
    },
    {
      lat: parseFloat(sessionStorage.getItem("lat3")),
      lng: parseFloat(sessionStorage.getItem("lng3")),
    },
    {
      lat: parseFloat(sessionStorage.getItem("lat4")),
      lng: parseFloat(sessionStorage.getItem("lng4")),
    },
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

  // 실행
  useEffect(() => {
    getWaterlevel();
    getElevation();
    getConc();
    fillGeo();
    getFound();
    getReceptor();
    resultCia();
    resultHQ();
    resultRisk();
  });

  // make pdf
  const onClick = (e) => {
    e.preventDefault();
    const pdf = makePDF();
    pdf.viewWithPdf();
  };

  return (
    <div className="div_container">
      <S.PdfBtn>
        <S.PDFBtn onClick={onClick}>{t("save")}</S.PDFBtn>
      </S.PdfBtn>
      <S.Layout className="div_paper">
        <S.A4>
          <SiteHeader />
          <S.Box>
            <S.Table>
              <thead>
                <tr>
                  <S.TdHead colSpan={3}>{t("site.input.coc.title")}</S.TdHead>
                  <S.TdHead>{t("site.input.coc.table.head.text1")}</S.TdHead>
                  <S.TdHead>{t("site.input.coc.table.head.text2")}</S.TdHead>
                </tr>
                <tr>
                  <S.TdHead>{t("site.input.coc.table.head.text3")}</S.TdHead>
                  <S.TdBody colSpan={6}>
                    {sessionStorage.getItem("chem")}
                  </S.TdBody>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <S.TdBody2>S</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.coc.table.body.S")}
                  </S.TdBody3>
                  <S.TdBody4>mg/L</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_S")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>Hc</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.coc.table.body.Hc")}
                  </S.TdBody3>
                  <S.TdBody4>atm-m3/mol</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_Hc")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>Dair</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.coc.table.body.Dair")}
                  </S.TdBody3>
                  <S.TdBody4>cm2/s</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_Dair")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>Dwater</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.coc.table.body.Dwater")}
                  </S.TdBody3>
                  <S.TdBody4>cm2/s</S.TdBody4>
                  <S.TdBody4>
                    {sessionStorage.getItem("value_Dwater")}
                  </S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>DHvb</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.coc.table.body.DHvb")}
                  </S.TdBody3>
                  <S.TdBody4>cal/mol</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_DHvb")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>Tc</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.coc.table.body.Tc")}
                  </S.TdBody3>
                  <S.TdBody4>K</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_Tc")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>Tb</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.coc.table.body.Tb")}
                  </S.TdBody3>
                  <S.TdBody4>K</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_Tb")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>MW</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.coc.table.body.MW")}
                  </S.TdBody3>
                  <S.TdBody4>g/mol</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_MW")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>IUR</S.TdBody2>
                  <S.TdBody3 colSpan={2}>Incremental Unit Risk</S.TdBody3>
                  <S.TdBody4>(μg/m3)^(-1)</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_IUR")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>RfC</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.coc.table.body.RfC")}
                  </S.TdBody3>
                  <S.TdBody4>mg/m3</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_Rfc")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>Mut</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.coc.table.body.Mut")}
                  </S.TdBody3>
                  <S.TdBody4>-</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_Mut")}</S.TdBody4>
                </tr>
              </tbody>
            </S.Table>
          </S.Box>
        </S.A4>
        <S.A4>
          <SiteHeader />
          <S.Box>
            <S.Table>
              <thead>
                <tr>
                  <S.TdHead>{t("site.input.detph.title")}</S.TdHead>
                  <S.TdHead>{t("site.input.detph.table.head.text1")}</S.TdHead>
                  <S.TdHead>{t("site.input.detph.table.head.text2")}</S.TdHead>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <S.TdBody>
                    {t("site.input.detph.table.body.waterlevel")}
                  </S.TdBody>
                  <S.TdBody>m</S.TdBody>
                  <S.TdBody></S.TdBody>
                </tr>
                <tr>
                  <S.TdBody2>
                    <table
                      style={{ borderCollapse: "collapse" }}
                      dangerouslySetInnerHTML={{ __html: w_area }}
                    ></table>
                  </S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    <div>
                      <S.Legend>
                        <h5>{t("site.input.detph.table.body.legend")}</h5>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#ff0000",
                          }}
                        ></S.LegendItem>
                        <span>{`≥ 90`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF1818",
                          }}
                        ></S.LegendItem>
                        <span>{`80 ≤ x < 90`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FD2F2F",
                          }}
                        ></S.LegendItem>
                        <span>{`70 ≤ x < 80`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF4141",
                          }}
                        ></S.LegendItem>
                        <span>{`60 ≤ x < 70`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF5C5C",
                          }}
                        ></S.LegendItem>
                        <span>{`50 ≤ x < 60`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF6F6F",
                          }}
                        ></S.LegendItem>
                        <span>{`40 ≤ x < 50`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF7E7E",
                          }}
                        ></S.LegendItem>
                        <span>{`30 ≤ x < 40`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FD8B8B",
                          }}
                        ></S.LegendItem>
                        <span>{`20 ≤ x < 30`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF9D9D",
                          }}
                        ></S.LegendItem>
                        <span>{`10 ≤ x < 20`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FFAFAF",
                          }}
                        ></S.LegendItem>
                        <span>{`x < 10`}</span>
                      </S.Legend>
                    </div>
                  </S.TdBody3>
                </tr>
                <tr>
                  <S.TdBody>
                    {t("site.input.detph.table.body.elevation")}
                  </S.TdBody>
                  <S.TdBody>m</S.TdBody>
                  <S.TdBody></S.TdBody>
                </tr>
                <tr>
                  <S.TdBody2>
                    <table
                      style={{ borderCollapse: "collapse" }}
                      dangerouslySetInnerHTML={{ __html: e_area }}
                    ></table>
                  </S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    <div>
                      <S.Legend>
                        <h5>{t("site.input.detph.table.body.legend")}</h5>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#ff0000",
                          }}
                        ></S.LegendItem>
                        <span>{`≥ 90`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF1818",
                          }}
                        ></S.LegendItem>
                        <span>{`80 ≤ x < 90`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FD2F2F",
                          }}
                        ></S.LegendItem>
                        <span>{`70 ≤ x < 80`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF4141",
                          }}
                        ></S.LegendItem>
                        <span>{`60 ≤ x < 70`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF5C5C",
                          }}
                        ></S.LegendItem>
                        <span>{`50 ≤ x < 60`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF6F6F",
                          }}
                        ></S.LegendItem>
                        <span>{`40 ≤ x < 50`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF7E7E",
                          }}
                        ></S.LegendItem>
                        <span>{`30 ≤ x < 40`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FD8B8B",
                          }}
                        ></S.LegendItem>
                        <span>{`20 ≤ x < 30`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF9D9D",
                          }}
                        ></S.LegendItem>
                        <span>{`10 ≤ x < 20`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FFAFAF",
                          }}
                        ></S.LegendItem>
                        <span>{`x < 10`}</span>
                      </S.Legend>
                    </div>
                  </S.TdBody3>
                </tr>
              </tbody>
            </S.Table>
          </S.Box>
        </S.A4>
        <S.A4>
          <SiteHeader />
          <S.Box>
            <S.Table>
              <thead>
                <tr>
                  <S.TdHead colSpan={3}>{t("site.input.conc.title")}</S.TdHead>
                  <S.TdHead>{t("site.input.conc.table.head.text1")}</S.TdHead>
                  <S.TdHead>{t("site.input.conc.table.head.text2")}</S.TdHead>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <S.TdBody>{t("site.input.conc.table.body.source")}</S.TdBody>
                  <S.TdBody colSpan={4}></S.TdBody>
                </tr>
                <tr>
                  <S.TdBody2>Ts</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.conc.table.body.Ts")}
                  </S.TdBody3>
                  <S.TdBody4>℃</S.TdBody4>
                  {sessionStorage.getItem("Ts") !== "15" ? (
                    <S.TdBody4>15</S.TdBody4>
                  ) : (
                    <S.TdBody4>{sessionStorage.getItem("value_Ts")}</S.TdBody4>
                  )}
                </tr>
                <tr>
                  <S.TdBody2>koc</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.conc.table.body.koc")}
                  </S.TdBody3>
                  <S.TdBody4>g-H2O/g-C</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_Koc")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>foc</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.conc.table.body.foc")}
                  </S.TdBody3>
                  <S.TdBody4>g-C/g-Soil</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("value_foc")}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>Cmedium</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.conc.table.body.Cmedium")}
                  </S.TdBody3>
                  <S.TdBody4>μg/L</S.TdBody4>
                  <S.TdBody4></S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>
                    <table
                      style={{ borderCollapse: "collapse" }}
                      dangerouslySetInnerHTML={{ __html: c_area }}
                    ></table>
                  </S.TdBody2>
                  <S.TdBody3 colSpan={4}>
                    <div>
                      <S.Legend>
                        <h5>{t("site.input.conc.table.body.legend")}</h5>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#ff0000",
                          }}
                        ></S.LegendItem>
                        <span>{`≥ 90`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF1818",
                          }}
                        ></S.LegendItem>
                        <span>{`80 ≤ x < 90`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FD2F2F",
                          }}
                        ></S.LegendItem>
                        <span>{`70 ≤ x < 80`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF4141",
                          }}
                        ></S.LegendItem>
                        <span>{`60 ≤ x < 70`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF5C5C",
                          }}
                        ></S.LegendItem>
                        <span>{`50 ≤ x < 60`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF6F6F",
                          }}
                        ></S.LegendItem>
                        <span>{`40 ≤ x < 50`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF7E7E",
                          }}
                        ></S.LegendItem>
                        <span>{`30 ≤ x < 40`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FD8B8B",
                          }}
                        ></S.LegendItem>
                        <span>{`20 ≤ x < 30`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FF9D9D",
                          }}
                        ></S.LegendItem>
                        <span>{`10 ≤ x < 20`}</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#FFAFAF",
                          }}
                        ></S.LegendItem>
                        <span>{`x < 10`}</span>
                      </S.Legend>
                    </div>
                  </S.TdBody3>
                </tr>
              </tbody>
            </S.Table>
          </S.Box>
        </S.A4>
        <S.A4>
          <SiteHeader />
          <S.Box>
            <S.Table>
              <thead>
                <tr>
                  <S.TdHead colSpan={3}>{t("site.input.geo.title")}</S.TdHead>
                  <S.TdHead>{t("site.input.geo.table.head.text1")}</S.TdHead>
                  <S.TdHead>{t("site.input.geo.table.head.text2")}</S.TdHead>
                </tr>
                <tr>
                  <S.TdHead>{t("site.input.geo.table.body.geo")}</S.TdHead>
                  <S.TdBody colSpan={6}>
                    {sessionStorage.getItem("Geo_Type") === "1" && "Clay"}
                    {sessionStorage.getItem("Geo_Type") === "2" && "Clay Loam"}
                    {sessionStorage.getItem("Geo_Type") === "3" && "Loam"}
                    {sessionStorage.getItem("Geo_Type") === "4" && "Loamy Sand"}
                    {sessionStorage.getItem("Geo_Type") === "5" && "Sand"}
                    {sessionStorage.getItem("Geo_Type") === "6" && "Sandy Clay"}
                    {sessionStorage.getItem("Geo_Type") === "7" &&
                      "Sandy Clay Loam"}
                    {sessionStorage.getItem("Geo_Type") === "8" && "Sandy Loam"}
                    {sessionStorage.getItem("Geo_Type") === "9" && "Silt"}
                    {sessionStorage.getItem("Geo_Type") === "10" && "Silt Loam"}
                    {sessionStorage.getItem("Geo_Type") === "11" &&
                      "Silty Clay"}
                    {sessionStorage.getItem("Geo_Type") === "12" &&
                      "Silty Clay Loam"}
                    {sessionStorage.getItem("Geo_Type") === "13" &&
                      "User Defined"}
                  </S.TdBody>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <S.TdBody2>nSA</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.geo.table.body.nSA")}
                  </S.TdBody3>
                  <S.TdBody4>-</S.TdBody4>
                  <S.TdBody4>{nSA}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>nwSA</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.geo.table.body.nwSA")}
                  </S.TdBody3>
                  <S.TdBody4>-</S.TdBody4>
                  <S.TdBody4>{nwSA}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>rhoSA</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.geo.table.body.rhoSA")}
                  </S.TdBody3>
                  <S.TdBody4>g/cm3</S.TdBody4>
                  <S.TdBody4>{rhoSA}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>hcz</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.geo.table.body.hcz")}
                  </S.TdBody3>
                  <S.TdBody4>m</S.TdBody4>
                  <S.TdBody4>{hcz}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>ncz</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.geo.table.body.ncz")}
                  </S.TdBody3>
                  <S.TdBody4>-</S.TdBody4>
                  <S.TdBody4>{ncz}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>nwcz</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.geo.table.body.nwcz")}
                  </S.TdBody3>
                  <S.TdBody4>-</S.TdBody4>
                  <S.TdBody4>{nwcz}</S.TdBody4>
                </tr>
                <tr>
                  <S.TdBody2>DeffT</S.TdBody2>
                  <S.TdBody3 colSpan={2}>
                    {t("site.input.geo.table.body.DeffT")}
                  </S.TdBody3>
                  <S.TdBody4>-</S.TdBody4>
                  <S.TdBody4>{sessionStorage.getItem("DeffT")}</S.TdBody4>
                </tr>
              </tbody>
            </S.Table>
          </S.Box>
        </S.A4>
        <S.A4>
          <SiteHeader />
          <S.Box>
            <S.Table>
              <thead>
                <tr>
                  <S.TdHead colSpan={3}>{t("site.input.found.title")}</S.TdHead>
                  <S.TdHead colSpan={4}>
                    {t("site.input.found.table.head.text1")}
                  </S.TdHead>
                  <S.TdHead colSpan={4}>
                    {t("site.input.found.table.head.text2")}
                  </S.TdHead>
                </tr>
                <tr>
                  <S.TdHead>{t("site.input.found.table.body.found")}</S.TdHead>
                  <S.TdBody colSpan={10}></S.TdBody>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <S.TdBody2 colSpan={2}>
                    <table
                      style={{ borderCollapse: "collapse" }}
                      dangerouslySetInnerHTML={{ __html: f_area }}
                    ></table>
                  </S.TdBody2>
                  <S.TdBody3 colSpan={9}>
                    <div>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#f50700",
                          }}
                        ></S.LegendItem>
                        <span>Residential & Closed crawl space w/ slab</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#fd6f00",
                          }}
                        ></S.LegendItem>
                        <span>
                          Residential & Closed crawl space w/ dirt floor
                        </span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#ffcd08",
                          }}
                        ></S.LegendItem>
                        <span>Residential & Basement w/ slab</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#fffb81",
                          }}
                        ></S.LegendItem>
                        <span>Residential & Basement w/ dirt floor</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#fffbdb",
                          }}
                        ></S.LegendItem>
                        <span>Residential & Slab-on-grade </span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#ffda95",
                          }}
                        ></S.LegendItem>
                        <span>Commercial & Crawl space w/ slab </span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#dbd87b",
                          }}
                        ></S.LegendItem>
                        <span>Commercial & Crawl space w/ dirt floor </span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#8dcc59",
                          }}
                        ></S.LegendItem>
                        <span>Commercial & Basement w/ slab </span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#00bf5b",
                          }}
                        ></S.LegendItem>
                        <span> Commercial & Basement w/ dirt floor </span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#00b88a",
                          }}
                        ></S.LegendItem>
                        <span> Commercial & Slab-on-grade </span>
                      </S.Legend>
                      {sessionStorage.getItem("foundtype_11") ? (
                        <S.Legend>
                          <S.LegendItem
                            style={{
                              backgroundColor: "#d2eaea",
                            }}
                          ></S.LegendItem>
                          <span>
                            {" "}
                            {sessionStorage.getItem("foundtype_11")}{" "}
                          </span>
                        </S.Legend>
                      ) : null}
                      {sessionStorage.getItem("foundtype_12") ? (
                        <S.Legend>
                          <S.LegendItem
                            style={{
                              backgroundColor: "#afe4e2",
                            }}
                          ></S.LegendItem>
                          <span>
                            {" "}
                            {sessionStorage.getItem("foundtype_12")}{" "}
                          </span>
                        </S.Legend>
                      ) : null}
                      {sessionStorage.getItem("foundtype_13") ? (
                        <S.Legend>
                          <S.LegendItem
                            style={{
                              backgroundColor: "#87d2d9",
                            }}
                          ></S.LegendItem>
                          <span>
                            {" "}
                            {sessionStorage.getItem("foundtype_13")}{" "}
                          </span>
                        </S.Legend>
                      ) : null}
                      {sessionStorage.getItem("foundtype_14") ? (
                        <S.Legend>
                          <S.LegendItem
                            style={{
                              backgroundColor: "#45b3cb",
                            }}
                          ></S.LegendItem>
                          <span>{sessionStorage.getItem("foundtype_14")} </span>
                        </S.Legend>
                      ) : null}
                      {sessionStorage.getItem("foundtype_15") ? (
                        <S.Legend>
                          <S.LegendItem
                            style={{
                              backgroundColor: "#2b9fc8",
                            }}
                          ></S.LegendItem>
                          <span>{sessionStorage.getItem("foundtype_15")} </span>
                        </S.Legend>
                      ) : null}
                    </div>
                  </S.TdBody3>
                </tr>
                <tr>
                  <S.TdBody>{t("site.input.found.table.head.text3")}</S.TdBody>
                  <S.TdBody>{t("site.input.found.table.head.text4")}</S.TdBody>
                  <S.TdBody>LB</S.TdBody>
                  <S.TdBody>Lf</S.TdBody>
                  <S.TdBody>eta</S.TdBody>
                  <S.TdBody>Abf</S.TdBody>
                  <S.TdBody>Hb</S.TdBody>
                  <S.TdBody>ach</S.TdBody>
                  <S.TdBody>Qsoil_Qb</S.TdBody>
                  <S.TdBody>Qb</S.TdBody>
                  <S.TdBody>Qsoil</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>1</S.TdBody>
                  <S.TdBody>Residential & Closed crawl space w/ slab</S.TdBody>
                  <S.TdBody>1</S.TdBody>
                  <S.TdBody>0.1</S.TdBody>
                  <S.TdBody>0.001</S.TdBody>
                  <S.TdBody>150</S.TdBody>
                  <S.TdBody>1.3</S.TdBody>
                  <S.TdBody>0.45</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>87.75</S.TdBody>
                  <S.TdBody>0.2632</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>2</S.TdBody>
                  <S.TdBody>
                    Residential & Closed crawl space w/ dirt floor
                  </S.TdBody>
                  <S.TdBody>1</S.TdBody>
                  <S.TdBody>0</S.TdBody>
                  <S.TdBody>1</S.TdBody>
                  <S.TdBody>150</S.TdBody>
                  <S.TdBody>1.3</S.TdBody>
                  <S.TdBody>0.45</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>87.75</S.TdBody>
                  <S.TdBody>0.2632</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>3</S.TdBody>
                  <S.TdBody>Residential & Basement w/ slab </S.TdBody>
                  <S.TdBody>2</S.TdBody>
                  <S.TdBody>0.1</S.TdBody>
                  <S.TdBody>0.001</S.TdBody>
                  <S.TdBody>150</S.TdBody>
                  <S.TdBody>3.66</S.TdBody>
                  <S.TdBody>0.45</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>247.05</S.TdBody>
                  <S.TdBody>0.7412</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>3</S.TdBody>
                  <S.TdBody>Residential & Basement w/ slab </S.TdBody>
                  <S.TdBody>2</S.TdBody>
                  <S.TdBody>0.1</S.TdBody>
                  <S.TdBody>0.001</S.TdBody>
                  <S.TdBody>150</S.TdBody>
                  <S.TdBody>3.66</S.TdBody>
                  <S.TdBody>0.45</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>247.05</S.TdBody>
                  <S.TdBody>0.7412</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>4</S.TdBody>
                  <S.TdBody>Residential & Basement w/ dirt floor</S.TdBody>
                  <S.TdBody>2</S.TdBody>
                  <S.TdBody>0</S.TdBody>
                  <S.TdBody>1</S.TdBody>
                  <S.TdBody>150</S.TdBody>
                  <S.TdBody>3.66</S.TdBody>
                  <S.TdBody>0.45</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>247.05</S.TdBody>
                  <S.TdBody>0.7412</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>5</S.TdBody>
                  <S.TdBody>Residential & Slab-on-grade</S.TdBody>
                  <S.TdBody>0.1</S.TdBody>
                  <S.TdBody>0.1</S.TdBody>
                  <S.TdBody>0.001</S.TdBody>
                  <S.TdBody>150</S.TdBody>
                  <S.TdBody>2.44</S.TdBody>
                  <S.TdBody>0.45</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>164.7</S.TdBody>
                  <S.TdBody>0.4941</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>6</S.TdBody>
                  <S.TdBody>Commercial & Crawl space w/ slab</S.TdBody>
                  <S.TdBody>1</S.TdBody>
                  <S.TdBody>0.2</S.TdBody>
                  <S.TdBody>0.001</S.TdBody>
                  <S.TdBody>1500</S.TdBody>
                  <S.TdBody>3</S.TdBody>
                  <S.TdBody>1.5</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>6750</S.TdBody>
                  <S.TdBody>20.25</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>7</S.TdBody>
                  <S.TdBody>Commercial & Crawl space w/ dirt floor</S.TdBody>
                  <S.TdBody>1</S.TdBody>
                  <S.TdBody>0</S.TdBody>
                  <S.TdBody>1</S.TdBody>
                  <S.TdBody>1500</S.TdBody>
                  <S.TdBody>3</S.TdBody>
                  <S.TdBody>1.5</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>6750</S.TdBody>
                  <S.TdBody>20.25</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>8</S.TdBody>
                  <S.TdBody>Commercial & Basement w/ slab</S.TdBody>
                  <S.TdBody>2</S.TdBody>
                  <S.TdBody>0.2</S.TdBody>
                  <S.TdBody>0.001</S.TdBody>
                  <S.TdBody>1500</S.TdBody>
                  <S.TdBody>3</S.TdBody>
                  <S.TdBody>1.5</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>6750</S.TdBody>
                  <S.TdBody>20.25</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>9</S.TdBody>
                  <S.TdBody>Commercial & Basement w/ dirt floor</S.TdBody>
                  <S.TdBody>2</S.TdBody>
                  <S.TdBody>0</S.TdBody>
                  <S.TdBody>1</S.TdBody>
                  <S.TdBody>1500</S.TdBody>
                  <S.TdBody>3</S.TdBody>
                  <S.TdBody>1.5</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>6750</S.TdBody>
                  <S.TdBody>20.25</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>10</S.TdBody>
                  <S.TdBody>Commercial & Slab-on-grade</S.TdBody>
                  <S.TdBody>0.2</S.TdBody>
                  <S.TdBody>0.2</S.TdBody>
                  <S.TdBody>0.001</S.TdBody>
                  <S.TdBody>1500</S.TdBody>
                  <S.TdBody>3</S.TdBody>
                  <S.TdBody>1.5</S.TdBody>
                  <S.TdBody>0.003</S.TdBody>
                  <S.TdBody>6750</S.TdBody>
                  <S.TdBody>20.25</S.TdBody>
                </tr>
                {sessionStorage.getItem("foundtype_11") ? (
                  <tr>
                    <S.TdBody>11</S.TdBody>
                    <S.TdBody>
                      {sessionStorage.getItem("foundtype_11")}
                    </S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("LB_11")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Lf_11")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("eta_11")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Abf_11")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Hb_11")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ach_11")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Qsoil_Qb_11")}</S.TdBody>
                  </tr>
                ) : null}
                {sessionStorage.getItem("foundtype_12") ? (
                  <tr>
                    <S.TdBody>12</S.TdBody>
                    <S.TdBody>
                      {sessionStorage.getItem("foundtype_12")}
                    </S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("LB_12")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Lf_12")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("eta_12")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Abf_12")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Hb_12")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ach_12")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Qsoil_Qb_12")}</S.TdBody>
                  </tr>
                ) : null}
                {sessionStorage.getItem("foundtype_13") ? (
                  <tr>
                    <S.TdBody>13</S.TdBody>
                    <S.TdBody>
                      {sessionStorage.getItem("foundtype_13")}
                    </S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("LB_13")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Lf_13")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("eta_13")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Abf_13")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Hb_13")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ach_13")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Qsoil_Qb_13")}</S.TdBody>
                  </tr>
                ) : null}
                {sessionStorage.getItem("foundtype_14") ? (
                  <tr>
                    <S.TdBody>14</S.TdBody>
                    <S.TdBody>
                      {sessionStorage.getItem("foundtype_14")}
                    </S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("LB_14")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Lf_14")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("eta_14")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Abf_14")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Hb_14")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ach_14")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Qsoil_Qb_14")}</S.TdBody>
                  </tr>
                ) : null}
                {sessionStorage.getItem("foundtype_15") ? (
                  <tr>
                    <S.TdBody>15</S.TdBody>
                    <S.TdBody>
                      {sessionStorage.getItem("foundtype_15")}
                    </S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("LB_15")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Lf_15")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("eta_15")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Abf_15")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Hb_15")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ach_15")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("Qsoil_Qb_15")}</S.TdBody>
                  </tr>
                ) : null}
              </tbody>
            </S.Table>
          </S.Box>
        </S.A4>
        <S.A4>
          <SiteHeader />
          <S.Box>
            <S.Table>
              <thead>
                <tr>
                  <S.TdHead colSpan={3}>
                    {t("site.input.receptor.title")}
                  </S.TdHead>
                  <S.TdHead>
                    {t("site.input.receptor.table.head.text1")}
                  </S.TdHead>
                  <S.TdHead>
                    {t("site.input.receptor.table.head.text2")}
                  </S.TdHead>
                </tr>
                <tr>
                  <S.TdHead>
                    {t("site.input.receptor.table.head.text4")}
                  </S.TdHead>
                  <S.TdBody colSpan={6}></S.TdBody>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <S.TdBody2>
                    <table
                      style={{ borderCollapse: "collapse" }}
                      dangerouslySetInnerHTML={{ __html: r_area }}
                    ></table>
                  </S.TdBody2>
                  <S.TdBody3 colSpan={4}>
                    <div>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#f50700",
                          }}
                        ></S.LegendItem>
                        <span>Residential</span>
                      </S.Legend>
                      <S.Legend>
                        <S.LegendItem
                          style={{
                            backgroundColor: "#ffcd08",
                          }}
                        ></S.LegendItem>
                        <span>Commercial</span>
                      </S.Legend>
                      {sessionStorage.getItem("EF_3") ? (
                        <S.Legend>
                          <S.LegendItem
                            style={{
                              backgroundColor: "#fffb81",
                            }}
                          ></S.LegendItem>
                          <span> {sessionStorage.getItem("expoProp_3")} </span>
                        </S.Legend>
                      ) : null}
                      {sessionStorage.getItem("EF_4") ? (
                        <S.Legend>
                          <S.LegendItem
                            style={{
                              backgroundColor: "#00bf5b",
                            }}
                          ></S.LegendItem>
                          <span> {sessionStorage.getItem("expoProp_4")} </span>
                        </S.Legend>
                      ) : null}
                      {sessionStorage.getItem("EF_5") ? (
                        <S.Legend>
                          <S.LegendItem
                            style={{
                              backgroundColor: "#2b9fc8",
                            }}
                          ></S.LegendItem>
                          <span> {sessionStorage.getItem("expoProp_5")} </span>
                        </S.Legend>
                      ) : null}
                    </div>
                  </S.TdBody3>
                </tr>
                <tr>
                  <S.TdBody>
                    {t("site.input.receptor.table.head.text3")}
                  </S.TdBody>
                  <S.TdBody>
                    {t("site.input.receptor.table.head.text4")}
                  </S.TdBody>
                  <S.TdBody>EF</S.TdBody>
                  <S.TdBody>ED</S.TdBody>
                  <S.TdBody>ET</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>1</S.TdBody>
                  <S.TdBody>Residential</S.TdBody>
                  <S.TdBody>350</S.TdBody>
                  <S.TdBody>26</S.TdBody>
                  <S.TdBody>24</S.TdBody>
                </tr>
                <tr>
                  <S.TdBody>2</S.TdBody>
                  <S.TdBody>Commercial</S.TdBody>
                  <S.TdBody>250</S.TdBody>
                  <S.TdBody>25</S.TdBody>
                  <S.TdBody>8</S.TdBody>
                </tr>
                {sessionStorage.getItem("EF_3") ? (
                  <tr>
                    <S.TdBody>3</S.TdBody>
                    <S.TdBody>User Defined 3</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("EF_3")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ED_3")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ET_3")}</S.TdBody>
                  </tr>
                ) : null}
                {sessionStorage.getItem("EF_4") ? (
                  <tr>
                    <S.TdBody>4</S.TdBody>
                    <S.TdBody>User Defined 4</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("EF_4")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ED_4")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ET_4")}</S.TdBody>
                  </tr>
                ) : null}
                {sessionStorage.getItem("EF_5") ? (
                  <tr>
                    <S.TdBody>5</S.TdBody>
                    <S.TdBody>User Defined 5</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("EF_5")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ED_5")}</S.TdBody>
                    <S.TdBody>{sessionStorage.getItem("ET_5")}</S.TdBody>
                  </tr>
                ) : null}
              </tbody>
            </S.Table>
          </S.Box>
        </S.A4>
        <S.A4>
          <SiteOutputHeader />
          <S.Box>
            <h2>1. {t("site.output.result1")}</h2>
            <S.Table>
              <tr>
                <S.TdBody2>
                  <S.Table
                    dangerouslySetInnerHTML={{ __html: drawCia }}
                  ></S.Table>
                </S.TdBody2>
                <S.TdBody3>
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
                </S.TdBody3>
              </tr>
            </S.Table>
            <h2>2. {t("site.output.result2")}</h2>
            <S.Table>
              <tr>
                <S.TdBody2>
                  <S.Table
                    dangerouslySetInnerHTML={{ __html: drawRisk }}
                  ></S.Table>
                </S.TdBody2>
                <S.TdBody3>
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
                </S.TdBody3>
              </tr>
            </S.Table>
            <br />
          </S.Box>
        </S.A4>
        <S.A4>
          <SiteOutputHeader />
          <S.Box>
            <h2>3. {t("site.output.result3")}</h2>
            <S.Table>
              <tr>
                <S.TdBody2>
                  <S.Table
                    dangerouslySetInnerHTML={{ __html: drawHQ }}
                  ></S.Table>
                </S.TdBody2>
                <S.TdBody3>
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
                </S.TdBody3>
              </tr>
            </S.Table>
          </S.Box>
        </S.A4>
      </S.Layout>
    </div>
  );
};

export default SitePdf;
