import { useTranslation } from "react-i18next";
import * as S from "../../styles/Popup.style";

const PopDeffi = () => {
  const { t } = useTranslation();
  let data = window.opener.document.getElementById("Deffi").value;
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
      <h2>{t("conc.pop.deffi")}</h2>
      <S.Table dangerouslySetInnerHTML={{ __html: bodyRows }}></S.Table>
    </S.Container>
  );
};

export default PopDeffi;
