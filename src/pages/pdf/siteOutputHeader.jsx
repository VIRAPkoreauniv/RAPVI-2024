import { useTranslation } from "react-i18next";
import * as S from "./PDFstyle";

const SiteOutputHeader = () => {
  const { t } = useTranslation("pdf");
  return (
    <>
      <S.Header>
        <S.RAPVItitle>RAPVI</S.RAPVItitle>
        <h2>{t("site.header.checkOutput")}</h2>
      </S.Header>
      <S.Box>
        <S.Flexrow>
          <h3>
            {t("site.header.projectInfo.name")} :{" "}
            {sessionStorage.getItem("projectName")}
          </h3>
          <h3>
            {t("site.header.projectInfo.manager")} :{" "}
            {sessionStorage.getItem("projectManager")}
          </h3>
        </S.Flexrow>
        <S.Flexrow>
          <h3>{t("site.header.projectInfo.type")}</h3>
          <h3>
            {t("site.header.projectInfo.date")} :{" "}
            {sessionStorage.getItem("projectDate")}
          </h3>
        </S.Flexrow>
        <S.Flexrow>
          <h3>
            {t("site.header.projectInfo.site")} :{" "}
            {t("site.header.projectInfo.coor")}1(
            {sessionStorage.getItem("lat1")} {sessionStorage.getItem("lng1")}),
            {t("site.header.projectInfo.coor")}2(
            {sessionStorage.getItem("lat2")} {sessionStorage.getItem("lng2")}),
            {t("site.header.projectInfo.coor")}3(
            {sessionStorage.getItem("lat3")} {sessionStorage.getItem("lng3")}),{" "}
            {t("site.header.projectInfo.coor")}4(
            {sessionStorage.getItem("lat4")} {sessionStorage.getItem("lng4")})
          </h3>
        </S.Flexrow>
      </S.Box>
    </>
  );
};

export default SiteOutputHeader;
