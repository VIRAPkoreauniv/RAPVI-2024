import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import WaterLevel from "./depth_1_ check_waterlevel";
import Elevation from "./depth_1_check_elevation";

const Depth = () => {
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
            위해성 평가 <BiChevronRight /> Input <BiChevronRight /> 오염원{" "}
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
              <S.PrevBtn onClick={() => navigate("/input/source/coc2")}>
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

export default Depth;

const GridBox = styled.div`
  padding: 1.5rem;
`;
