import * as S from "../../styles/Popup.style";

const PopGeotype = () => {
  let data = window.opener.document.getElementById("geo").value;
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
      `<tr><td style = 'border: 1px solid black; padding:  0.5rem 1rem'>${rawRowArray.join(
        "</td><td style = 'border: 1px solid black ; padding:  0.5rem 1rem'>"
      )}</td></tr>`
    );
  });

  bodyRows = bodyRows.join("");

  return (
    <S.Container>
      <h2>지질매체</h2>
      <S.Table dangerouslySetInnerHTML={{ __html: bodyRows }}></S.Table>
    </S.Container>
  );
};

export default PopGeotype;
