import { useEffect, useState } from "react";
import * as S from "../../styles/Home.style";

const ReceptorCheck = (props) => {
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
    sessionStorage.removeItem("Expo_Type");
    sessionStorage.setItem("check_exp", false);
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
    sessionStorage.setItem("Expo_Type", csv);
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
      if (n > props.expoProp || n < 1) {
        alert(
          "잘못된 노출 특성 유형 번호가 포함되어 있습니다.\n하단의 입력 가능한 건물 기초 유형 번호를 확인한 후\n다시 시도해주세요."
        );
        reset();
        break;
      }
    }
  };

  // json 새 창
  const openData = () => {
    window.open("/receptor", "", "_blank");
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <textarea
        style={{ display: visibleArea }}
        id="recep"
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
            {props.expoProp >= 3 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#fffb81",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("expoProp_3")} </span>
              </S.Legend>
            ) : null}
            {props.expoProp >= 4 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#00bf5b",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("expoProp_4")} </span>
              </S.Legend>
            ) : null}
            {props.expoProp >= 5 ? (
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
        </S.GridAndLegend>
      </div>
    </>
  );
};

export default ReceptorCheck;
