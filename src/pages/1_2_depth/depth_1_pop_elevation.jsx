import * as S from "../../styles/Popup.style";

const PopElevation = () => {
  let data = window.opener.document.getElementById("elevation").value;
  let output = [];
  let bodyRows = [];

  let rawRows = data.split("\n");
  rawRows.splice(rawRows.length - 1, 1);

  let columnList = [];

  rawRows.forEach((rawRows) => {
    let rawRowArray = rawRows.split("\t");
    columnList.push(rawRowArray.length);
    output.push(rawRowArray);
    bodyRows.push(
      `<tr><td style = 'border: 1px solid black; padding: 13px'>${rawRowArray.join(
        "</td><td style = 'border: 1px solid black ; padding: 13px'>"
      )}</td></tr>`
    );
  });

  bodyRows = bodyRows.join("");

  return (
    <S.Container>
      <h2>오염농도 - 표고</h2>
      <S.Table dangerouslySetInnerHTML={{ __html: bodyRows }}></S.Table>
    </S.Container>
  );
};

export default PopElevation;