import { useTranslation } from "react-i18next";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import WaterLevel from "./depth_1_ check_waterlevel";
import Elevation from "./depth_1_check_elevation";

const Depth = () => {
  const { t } = useTranslation("site");
  const navigate = useNavigate();

  const moveTo = () => {
    let waterlevel = sessionStorage.getItem("waterlevel");
    let elevation = sessionStorage.getItem("elevation");

    if (waterlevel !== null && elevation !== null) {
      sessionStorage.setItem("check_depth", true);
      navigate("/input/source/conc2");
    }
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            {t("depth.pagePath.text1")} <BiChevronRight /> Input{" "}
            <BiChevronRight /> {t("depth.pagePath.text2")}
            <BiChevronRight /> {t("depth.pagePath.text3")}
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
              <S.PrevBtn onClick={() => navigate("/input/source/coc2")}>
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

export default Depth;

const GridBox = styled.div`
  padding: 1.5rem;
`;
