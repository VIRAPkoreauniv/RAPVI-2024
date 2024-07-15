import * as S from "./PDFstyle";

const SiteOutputHeader = () => {
  return (
    <>
      <S.Header>
        <S.RAPVItitle>RAPVI</S.RAPVItitle>
        <h2>출력 값 확인</h2>
      </S.Header>
      <S.Box>
        <S.Flexrow>
          <h3>프로젝트명 : {sessionStorage.getItem("projectName")}</h3>
          <h3>담당자 : {sessionStorage.getItem("projectManager")}</h3>
        </S.Flexrow>
        <S.Flexrow>
          <h3>위해성 평가 방식 : 부지기반평가</h3>
          <h3>작업 일시 : {sessionStorage.getItem("projectDate")}</h3>
        </S.Flexrow>
        <S.Flexrow>
          <h3>
            부지 영역 : 좌표1({sessionStorage.getItem("lat1")}{" "}
            {sessionStorage.getItem("lng1")}), 좌표2(
            {sessionStorage.getItem("lat2")} {sessionStorage.getItem("lng2")}),
            좌표3({sessionStorage.getItem("lat3")}{" "}
            {sessionStorage.getItem("lng3")}), 좌표4(
            {sessionStorage.getItem("lat4")} {sessionStorage.getItem("lng4")})
          </h3>
        </S.Flexrow>
      </S.Box>
    </>
  );
};

export default SiteOutputHeader;
