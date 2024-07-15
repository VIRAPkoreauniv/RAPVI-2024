import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TGeo1 = () => {
  const navigate = useNavigate();

  // 세션 데이터 저장
  const saveData = () => {
    sessionStorage.setItem("geoType", "Sand");
    sessionStorage.setItem("nSA", 0.375);
    sessionStorage.setItem("nwSA", 0.054);
    sessionStorage.setItem("rhoSA", 1.66);
    sessionStorage.setItem("hcz", 0.170454545);
    sessionStorage.setItem("ncz", 0.375);
    sessionStorage.setItem("nwcz", 0.253258113);
    sessionStorage.setItem("check_geo", true);
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            튜토리얼 <BiChevronRight /> Input <BiChevronRight /> 경로{" "}
            <BiChevronRight /> 지질매체
          </S.PagePath>
          <S.PageTitle>지질매체</S.PageTitle>
          <S.EvalArea>
            <form action="/tutorial/1/found">
              <S.EvalBox>
                <S.PaddingBox>
                  <table>
                    <thead>
                      <tr>
                        <td>지층 토양 유형</td>
                        <S.Td>SCS_A</S.Td>
                        <S.Td>
                          <select>
                            <option>Sand</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>

                  <h5>
                    ※ 아래의 값은 지층 토양 유형에 따라 자동으로 입력되며 필요
                    시 수정할 수 있습니다.
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
                        <td>지층 전체 공극률</td>
                        <S.Td>nSA</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={0.375} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>지층 물이 채워진 공극률</td>
                        <S.Td>nwSA</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={0.054} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>지층 부피밀도 (bulk density)</td>
                        <S.Td>rhoSA</S.Td>
                        <S.Td>g/cm3</S.Td>
                        <S.Td>
                          <input value={1.66} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>모세관대의 높이</td>
                        <S.Td>hcz</S.Td>
                        <S.Td>m</S.Td>
                        <S.Td>
                          <input value={0.170454545} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>모세관 영역 전체 공극률</td>
                        <S.Td>ncz</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={0.375} />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>모세관 영역 물이 채워진 공극률</td>
                        <S.Td>nwcz</S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <input value={0.253258113} />
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </S.PaddingBox>
              </S.EvalBox>
              <S.BtnAreaTwin>
                <S.PrevBtn onClick={() => navigate("/tutorial/1/conc")}>
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

export default TGeo1;
