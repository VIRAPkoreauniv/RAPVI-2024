import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TDepth1 = () => {
  const { t } = useTranslation("basicAssessment");
  const navigate = useNavigate();

  const [chem_1, setChem_1] = useState("");

  // 세션 값 가져오기
  const getSession = () => {
    let chem1 = sessionStorage.getItem("chem_1");
    setChem_1(chem1);
  };

  // 세션 값 저장하기

  const saveData = () => {
    sessionStorage.setItem("waterlevel_1", 13.5291);
    sessionStorage.setItem("elevation_1", 15.5175);

    sessionStorage.setItem("check_depth", true);
    navigate("/tutorial/1/conc");
  };

  useEffect(() => {
    getSession();
  }, []);
  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("tutorial.title")} <BiChevronRight /> Input <BiChevronRight />
            {t("depth.pagePath.text2")}
            <BiChevronRight /> {t("depth.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("depth.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h3>
                  {t("depth.material")} A : {chem_1}
                </h3>
                <p>{t("depth.waterLevel")}</p>
                <input value={13.5291} />
                <p>{t("depth.elevation")}</p>
                <input value={15.5175} />
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/tutorial/1/coc")}>
                {t("depth.prev")}
              </S.PrevBtn>
              <S.NextBtn onClick={saveData}>{t("depth.next")}</S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TDepth1;
