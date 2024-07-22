import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "../../styles/Home.style";

const FoundCheck = (props) => {
  const { t } = useTranslation("site");
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
        alert(t("found.input.alert.alert1"));
        reset();
      } else {
        setSizeCheck(
          `${t("found.input.sizeCheck")} : ${numOfRows} X ${numOfColumns} `
        );
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
    sessionStorage.removeItem("Found_Type");
    sessionStorage.setItem("check_found", false);
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
    sessionStorage.setItem("Found_Type", csv);
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
      if (n > props.building || n < 1) {
        alert(t("found.input.alert2"));
        reset();
        break;
      }
    }
  };

  // json 새 창
  const openData = () => {
    window.open("/foundtype", "", "_blank");
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <textarea
        style={{ display: visibleArea }}
        id="found"
        onChange={constructTableFromPasetedInput}
        value={data}
        placeholder={t("found.input.placeholder")}
      ></textarea>
      <div style={{ display: visibleBtn }}>
        <S.BtnBox>
          <p dangerouslySetInnerHTML={{ __html: sizeCheck }}></p>
          <div>
            <S.CheckBtn onClick={openData}>
              {t("found.input.openData")}
            </S.CheckBtn>
            <S.CheckBtn onClick={reset}>{t("found.input.reset")}</S.CheckBtn>
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
              <span>Residential & Closed crawl space w/ slab</span>
            </S.Legend>
            <S.Legend>
              <S.LegendItem
                style={{
                  backgroundColor: "#fd6f00",
                }}
              ></S.LegendItem>
              <span>Residential & Closed crawl space w/ dirt floor</span>
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
            {props.building >= 11 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#d2eaea",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("foundtype_11")} </span>
              </S.Legend>
            ) : null}
            {props.building >= 12 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#afe4e2",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("foundtype_12")} </span>
              </S.Legend>
            ) : null}
            {props.building >= 13 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#87d2d9",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("foundtype_13")} </span>
              </S.Legend>
            ) : null}
            {props.building >= 14 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#45b3cb",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("foundtype_14")} </span>
              </S.Legend>
            ) : null}
            {props.building >= 15 ? (
              <S.Legend>
                <S.LegendItem
                  style={{
                    backgroundColor: "#2b9fc8",
                  }}
                ></S.LegendItem>
                <span> {sessionStorage.getItem("foundtype_15")} </span>
              </S.Legend>
            ) : null}
          </div>
        </S.GridAndLegend>
      </div>
    </>
  );
};

export default FoundCheck;
