import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import Elevation from "./2_depth_elevation_check";
import WaterLevel from "./2_depth_waterlevel_check";

const TDepth2 = () => {
  const { t } = useTranslation("site");
  const navigate = useNavigate();

  const moveTo = () => {
    sessionStorage.setItem("check_depth", true);
    navigate("/tutorial/2/conc");
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("tutorial.title")} <BiChevronRight /> Input <BiChevronRight />{" "}
            {t("depth.pagePath.text2")} <BiChevronRight />{" "}
            {t("depth.pagePath.text3")}
          </S.PagePath>
          <S.PageTitle>{t("depth.pageTitle")}</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <GridBox>
                <h3>{t("depth.waterlevel")}</h3>
                <WaterLevel />
              </GridBox>
              <hr />
              <GridBox>
                <h3>{t("depth.elevation")}</h3>
                <Elevation />
              </GridBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/tutorial/2/coc")}>
                {t("depth.prev")}
              </S.PrevBtn>
              <S.NextBtn onClick={moveTo}>{t("depth.next")}</S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TDepth2;

const GridBox = styled.div`
  padding: 1.5rem;
`;
