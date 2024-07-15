import { BiChevronRight } from "react-icons/bi";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TCoc2 = () => {
  const saveData = () => {
    sessionStorage.setItem("check_coc", true);
  };

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            튜토리얼 <BiChevronRight /> Input <BiChevronRight /> 오염원{" "}
            <BiChevronRight /> 오염물질
          </S.PagePath>
          <S.PageTitle>오염물질</S.PageTitle>
          <S.EvalArea>
            <form action="/tutorial/2/depth">
              <S.EvalBox>
                <table>
                  <thead>
                    <tr>
                      <S.Td>오염물질</S.Td>
                      <S.Td>
                        <select>
                          <option>Trichloroethylene</option>
                        </select>
                      </S.Td>
                    </tr>
                  </thead>
                </table>
                <S.PaddingBox>
                  <h5>
                    ※ 아래의 값들은 Trichloroethylene에 따라 자동으로 입력되며
                    필요 시 사용자가 수정할 수 있습니다.
                  </h5>

                  <table>
                    <tbody>
                      <tr>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <S.Td>기호</S.Td>
                        <S.Td>단위</S.Td>
                      </tr>
                      <tr>
                        <td>순수 성분 수용성</td>
                        <S.Td>S</S.Td>
                        <S.Td>mg/L</S.Td>
                        <S.Td>1280</S.Td>
                      </tr>
                      <tr>
                        <td>표준 온도(25℃)의 헨리 상수</td>
                        <S.Td>Hc</S.Td>
                        <S.Td>atm-m3/mol</S.Td>
                        <S.Td>0.00985</S.Td>
                      </tr>
                      <tr>
                        <td>공기에서의 확산성</td>
                        <S.Td>Dair</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>0.0686618</S.Td>
                      </tr>
                      <tr>
                        <td>물에서의 확산성</td>
                        <S.Td>Dwater</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>0.0000102</S.Td>
                      </tr>
                      <tr>
                        <td>정상 끓는 점에서의 기화 엔탈피</td>
                        <S.Td>DHvb</S.Td>
                        <S.Td>cal/mol</S.Td>
                        <S.Td>7505</S.Td>
                      </tr>
                      <tr>
                        <td>임계 온도</td>
                        <S.Td>Tc</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>544.2</S.Td>
                      </tr>
                      <tr>
                        <td>정상 끓는 점</td>
                        <S.Td>Tb</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>360.2</S.Td>
                      </tr>
                      <tr>
                        <td>화합물의 분자량</td>
                        <S.Td>MW</S.Td>
                        <S.Td>g/mol</S.Td>
                        <S.Td>131.39</S.Td>
                      </tr>
                      <tr>
                        <td>IUR</td>
                        <S.Td></S.Td>
                        <S.Td>(ug/m3)^-1</S.Td>
                        <S.Td>NULL</S.Td>
                      </tr>
                      <tr>
                        <td>RfC</td>
                        <S.Td></S.Td>
                        <S.Td>mg/m3</S.Td>
                        <S.Td>0.002</S.Td>
                      </tr>
                      <tr>
                        <td>Mut</td>
                        <S.Td></S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <select>
                            <option>Yes</option>
                          </select>
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </S.PaddingBox>
              </S.EvalBox>
              <S.BtnAreaSolo>
                <S.NextBtn onClick={saveData}>다음</S.NextBtn>
              </S.BtnAreaSolo>
            </form>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TCoc2;
