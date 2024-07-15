import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TFound1 = () => {
  const navigate = useNavigate();

  // 세션 데이터 저장
  const saveData = () => {
    sessionStorage.setItem("foundType", "Residential & Basement w/ dirt floor");
    sessionStorage.setItem("LB", 2);
    sessionStorage.setItem("Lf", 0);
    sessionStorage.setItem("eta", 1);
    sessionStorage.setItem("Abf", 150);
    sessionStorage.setItem("Hb", 3.66);
    sessionStorage.setItem("ach", 0.45);
    sessionStorage.setItem("Qsoil_Qb", 0.003);

    sessionStorage.setItem("check_found", true);
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            튜토리얼 <BiChevronRight /> Input <BiChevronRight /> 경로{" "}
            <BiChevronRight /> 건물
          </S.PagePath>
          <S.PageTitle>건물</S.PageTitle>
          <S.EvalArea>
            <form action="/tutorial/1/exp">
              <S.EvalBox>
                <S.PaddingBox>
                  <table>
                    <thead>
                      <tr>
                        <td>건물기초 유형</td>
                        <S.Td>Found_Type</S.Td>
                        <S.Td>
                          <select>
                            <option>Residential & Basement w/ slab</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>

                  <h5>
                    ※ 아래의 값은 건물기초 유형에 따라 자동으로 입력되며 필요 시
                    수정할 수 있습니다.
                  </h5>
                  <table>
                    <thead>
                      <tr>
                        <td></td>
                        <S.Td>기호</S.Td>
                        <S.Td>단위</S.Td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>건물기초 바닥까지의 깊이</td>
                        <S.Td>LB</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input value={2} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>건물기초의 두께</td>
                        <S.Td>Lf</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input value={0} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>균열이 있는 건물기초 면적의 비율</td>
                        <S.Td>eta</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={1} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>밀폐된 공간 바닥의 면적</td>
                        <S.Td>Abf</S.Td>
                        <S.Td>m2</S.Td>
                        <S.Td>
                          <input value={150} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>밀폐된 공간의 섞임 높이 (mixing height)</td>
                        <S.Td>Hb</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input value={3.66} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>실내공기교환율</td>
                        <S.Td>ach</S.Td>
                        <S.Td>1/hr</S.Td>
                        <S.Td>
                          <input value={0.45} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>건물유입 평균 증기유량 ÷ 건물환기율</td>
                        <S.Td>Qsoil_Qb</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={0.003} />
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </S.PaddingBox>
              </S.EvalBox>
              <S.BtnAreaTwin>
                <S.PrevBtn onClick={() => navigate("/tutorial/1/geo")}>
                  이전
                </S.PrevBtn>
                <S.NextBtn onClick={saveData}>다음</S.NextBtn>
              </S.BtnAreaTwin>
            </form>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TFound1;
