import { useState, useEffect } from "react";
import styled from "styled-components";
import * as S from "../HomeStyle";

const GeoCheck = (props) => {
  const [visibleBtn, setVisibleBtn] = useState("none");
  const [visibleArea, setVisibleArea] = useState("inline-block");

  const [sizeCheck, setSizeCheck] = useState("");
  const [jsonString, setJSONString] = useState();
  const [bodyRows, setBodyRows] = useState([]);
  const [numOfRows, setNumOfRows] = useState();
  const [numOfColumns, setNumOfColumns] = useState();
  const [area, setArea] = useState("");
  const [data, setData] = useState("");
  let output = [];

  const constructTableFromPasetedInput = (input) => {
    setData(input.target.value);
  };

  // 그리드
  const makeGrid = (output, row, col) => {
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
        } else if (here === 16) {
          hereColor = "#ff58cc";
        } else if (here === 17) {
          hereColor = "#b84aac";
        } else if (here === 18) {
          hereColor = "#703d8b";
        } else if (here === 19) {
          hereColor = "#3c316c";
        } else if (here === 20) {
          hereColor = "#132754";
        }

        tag += `<td style = 'background-color: ${hereColor}; border: 1px solid black; padding: 0.1rem'></td>`;
      }
      tag += "</tr>";
    }

    setArea(tag);
  };

  // 데이터 크기 제한
  const [numofRows, setNumofRows] = useState(0);
  const [numofCols, setNumofCols] = useState(0);

  const getSession = () => {
    setNumofRows(parseInt(sessionStorage.getItem("numofRows")));
    setNumofCols(parseInt(sessionStorage.getItem("numofCols")));
  };

  useEffect(() => {
    getSession();
  }, []);

  // 엑셀 데이터 받기
  const getData = () => {
    let preData = sessionStorage.getItem("Geo_Type");

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
      setData(fromPreData);
    }

    let rows = [];

    let rawRows = data.split("\n");
    rawRows.splice(rawRows.length - 1, 1);
    setNumOfRows(rawRows.length);
    let columnList = [];
    let firstCol = "white";
    let color = "white";

    rawRows.forEach((rawRows, idx) => {
      let rawRowArray = rawRows.split("\t");
      columnList.push(rawRowArray.length);
      output.push(rawRowArray);
      rows.push(
        `<tr style = 'background-color: ${firstCol};'><td style = 'background-color: ${color}; border: 1px solid black; padding: 10px'>${rawRowArray.join(
          "</td><td style = 'border: 1px solid black; padding: 10px'>"
        )}</td></tr>`
      );
    });

    rows = rows.join("");
    setNumOfColumns(Math.max(...columnList));

    if (numOfRows > 1 && numOfColumns > 1) {
      if (numOfRows !== numofRows || numOfColumns !== numofCols) {
        alert("입력된 데이터의 크기가 올바르지 않습니다.");
        reset();
      } else {
        setSizeCheck(`입력된 데이터 크기 : ${numOfRows} X ${numOfColumns} `);
        setVisibleBtn("inline-block");
        setVisibleArea("none");
        makeGrid(output, numOfRows, numOfColumns);
        makeJSON(numOfRows);
      }
    } else if (numOfRows < 1) {
      setVisibleBtn("none");
      setVisibleArea("inline-block");
    }
    setBodyRows(rows);
  };

  const reset = () => {
    sessionStorage.removeItem("Geo_Type");
    sessionStorage.setItem("check_geo", false);
    props.setData(false);

    setData("");
    setArea();
    setVisibleBtn("none");
    setVisibleArea("inline-block");
    setNumOfColumns(0);
    setNumOfRows(0);
    setBodyRows([]);
    setJSONString();
    setSizeCheck("");
    resetVisible();
    window.location.reload();
  };

  const resetVisible = () => {
    setVisibleBtn("none");
    setVisibleArea("inline-block");
  };

  // json
  const makeJSON = (numOfRows) => {
    props.setData(true);
    output = output.splice(0, numOfRows);
    setJSONString(JSON.stringify(output));
    const jsonstr = JSON.stringify(output);
    let result = "";
    const arr = [...jsonstr];
    arr.map((s) => {
      if (s !== '"') {
        result += s;
      }
    });

    result.length > 0 && verify(result);
  };

  // 유효성 검사
  const verify = (csv) => {
    sessionStorage.setItem("Geo_Type", csv);
    let str = "";
    for (let i = 0; i < csv.length; i++) {
      let s = csv[i];
      if (s !== "[" && s !== "]" && s !== '"') {
        str += s;
      }
    }
    str = str.split(",");

    for (let i = 0; i < str.length; i++) {
      let n = parseInt(str[i]);
      if (n > props.strat || n < 1) {
        alert(
          "잘못된 지층 토양 유형 번호가 포함되어 있습니다.\n하단의 입력 가능한 건물 기초 유형 번호를 확인한 후\n다시 시도해주세요."
        );
        reset();
        break;
      }
    }
  };
  // json 새 창
  const openData = () => {
    window.open("/geotype", "", "_blank");
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <textarea
        style={{ display: visibleArea }}
        id="geo"
        onChange={constructTableFromPasetedInput}
        value={data}
        placeholder="그리드 값을 입력하세요."
      ></textarea>
      <div style={{ display: visibleBtn }}>
        <S.BtnBox>
          <p dangerouslySetInnerHTML={{ __html: sizeCheck }}></p>
          <div>
            <S.CheckBtn onClick={openData}>데이터 세부 확인</S.CheckBtn>
            <S.CheckBtn onClick={reset}>다시 입력</S.CheckBtn>
          </div>
        </S.BtnBox>
        <S.GridAndLegend>
          <S.GridTable
            style={{ display: visibleBtn }}
            dangerouslySetInnerHTML={{ __html: area }}
          ></S.GridTable>
          <div>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#f50700",
                }}
              ></S.LegendItem>
              <span>Clay</span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#fd6f00",
                }}
              ></S.LegendItem>
              <span>Clay Loam</span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#ffcd08",
                }}
              ></S.LegendItem>
              <span>Loam</span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#fffb81",
                }}
              ></S.LegendItem>
              <span>Loamy Sand</span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#fffbdb",
                }}
              ></S.LegendItem>
              <span>Sand </span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#ffda95",
                }}
              ></S.LegendItem>
              <span>Sandy Clay </span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#dbd87b",
                }}
              ></S.LegendItem>
              <span>Sandy Clay Loam </span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#8dcc59",
                }}
              ></S.LegendItem>
              <span>Sandy Loam </span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#00bf5b",
                }}
              ></S.LegendItem>
              <span> Silt </span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#00b88a",
                }}
              ></S.LegendItem>
              <span> Silt Loam </span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#d2eaea",
                }}
              ></S.LegendItem>
              <span>Silty Clay </span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#afe4e2",
                }}
              ></S.LegendItem>
              <span>Silty Clay Loam </span>
            </S.Legend>
            {props.strat >= 13 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#87d2d9",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("geotype_13")} </span>
              </S.Legend>
            ) : null}
            {props.strat >= 14 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#45b3cb",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("geotype_14")} </span>
              </S.Legend>
            ) : null}
            {props.strat >= 15 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#2b9fc8",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("geotype_15")} </span>
              </S.Legend>
            ) : null}
            {props.strat >= 16 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#ff58cc",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("geotype_16")} </span>
              </S.Legend>
            ) : null}
            {props.strat >= 17 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#b84aac",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("geotype_17")} </span>
              </S.Legend>
            ) : null}
            {props.strat >= 18 ? (
              <S.Legend>
                <div
                  style={{
                    backgroundColor: "#703d8b",
                  }}
                ></div>
                <span> {sessionStorage.getItem("geotype_18")} </span>
              </S.Legend>
            ) : null}
            {props.strat >= 19 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#3c316c",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("geotype_19")} </span>
              </S.Legend>
            ) : null}
            {props.strat >= 20 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#132754",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("geotype_20")} </span>
              </S.Legend>
            ) : null}
          </div>
        </S.GridAndLegend>
      </div>
    </>
  );
};

export default GeoCheck;
