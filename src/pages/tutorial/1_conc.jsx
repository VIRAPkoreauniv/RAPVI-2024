import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TConc1 = () => {
  const navigate = useNavigate();

  // 세션 값 저장하기
  const saveData = () => {
    sessionStorage.setItem("type_1", "sat");
    sessionStorage.setItem("Ts_1", 25);
    sessionStorage.setItem("soilconc_1", 0.0336);
    sessionStorage.setItem("check_conc", true);
    navigate("/tutorial/1/geo");
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            튜토리얼 <BiChevronRight /> Input <BiChevronRight /> 오염원{" "}
            <BiChevronRight /> 오염 농도
          </S.PagePath>
          <S.PageTitle>오염농도</S.PageTitle>
          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <h3>오염물질 A : Benzene</h3>
                <table>
                  <thead>
                    <tr>
                      <td>오염원 매체</td>
                      <S.Td>
                        <select>
                          <option value="sat">포화대(지하수)</option>
                        </select>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <h5>※ 지하수 온도는 필요시 사용자가 수정할 수 있습니다.</h5>
                <table>
                  <tbody>
                    <tr>
                      <S.Td></S.Td>
                      <S.Td>기호</S.Td>
                      <S.Td>단위</S.Td>
                    </tr>
                    <tr>
                      <td>지하수 온도</td>
                      <S.Td>Ts</S.Td>
                      <S.Td>℃</S.Td>
                      <S.Td>
                        <input value={25} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>매체 농도</td>
                      <S.Td>Cmedium</S.Td>
                      <S.Td>ug/L</S.Td>
                      <S.Td>
                        <input value={0.0336} />
                      </S.Td>
                    </tr>
                  </tbody>
                </table>
              </S.PaddingBox>
            </S.EvalBox>

            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/tutorial/1/depth")}>
                이전
              </S.PrevBtn>
              <S.NextBtn onClick={saveData}>다음</S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TConc1;
