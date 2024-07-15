import { useEffect, useState } from "react";
import styled from "styled-components";
import * as S from "../../styles/Home.style";

const SatConc = () => {
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
    sessionStorage.removeItem("sat_soilconc");

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
  };

  const resetVisible = () => {
    setVisibleBtn("none");
    setVisibleArea("inline-block");
  };

  // json
  const makeJSON = (numOfRows) => {
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

    sessionStorage.setItem("sat_soilconc", result);
  };

  // json 새 창
  const openData = () => {
    window.open("/satsoilconc", "", "_blank");
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <textarea
        style={{ display: visibleArea }}
        id="satsoilconc"
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
          <GridTable
            style={{ display: visibleBtn }}
            dangerouslySetInnerHTML={{ __html: area }}
          ></GridTable>
          <div>
            <S.Legend>
              <h5>오염농도 (최고농도 = 100 기준)</h5>
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
        </S.GridAndLegend>
      </div>
    </>
  );
};

export default SatConc;
const GridTable = styled.table`
  width: 50%;
  border-collapse: collapse;
`;
