import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import Elevation from "./2_depth_elevation_check";
import WaterLevel from "./2_depth_waterlevel_check";

const TDepth2 = () => {
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
            튜토리얼 <BiChevronRight /> Input <BiChevronRight /> 오염원{" "}
            <BiChevronRight /> 오염심도
          </S.PagePath>
          <S.PageTitle>오염심도</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <GridBox>
                <h3>지하수위 (단위 : m)</h3>
                <WaterLevel />
              </GridBox>
              <hr />
              <GridBox>
                <h3>표고 (단위 : m)</h3>
                <Elevation />
              </GridBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/tutorial/2/coc")}>
                이전
              </S.PrevBtn>
              <S.NextBtn onClick={moveTo}>다음</S.NextBtn>
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
