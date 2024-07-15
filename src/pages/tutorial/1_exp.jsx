import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TExp1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            튜토리얼 <BiChevronRight /> Input <BiChevronRight /> 수용체{" "}
            <BiChevronRight /> 노출 특성
          </S.PagePath>
          <S.PageTitle>노출 특성</S.PageTitle>

          <S.EvalArea>
            <S.EvalBox>
              <S.PaddingBox>
                <table>
                  <thead>
                    <td>노출 특성 유형</td>
                    <S.Td>Exposure_Type</S.Td>
                    <S.Td>
                      <select>
                        <option value="Residential">Residential</option>
                      </select>
                    </S.Td>
                  </thead>
                </table>
                <h5>
                  ※ 아래의 값은 노출 특성 유형에 따라 자동으로 입력됩니다.
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
                      <td>노출 기간</td>
                      <S.Td>EF</S.Td>
                      <S.Td>yrs</S.Td>
                      <S.Td>
                        <input value={350} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>노출 빈도</td>
                      <S.Td>ED</S.Td>
                      <S.Td>days/yr</S.Td>
                      <S.Td>
                        <input value={26} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>노출 시간</td>
                      <S.Td>ET</S.Td>
                      <S.Td>hrs/day</S.Td>
                      <S.Td>
                        <input value={24} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>발암물질 평균 노출 시간</td>
                      <S.Td>ATc</S.Td>
                      <S.Td>hr</S.Td>
                      <S.Td>
                        <input value={70} />
                      </S.Td>
                    </tr>
                    <tr>
                      <td>비발암물질 평균 노출 시간</td>
                      <S.Td>ATnc</S.Td>
                      <S.Td>hr</S.Td>
                      <S.Td>
                        <input value={26} />
                      </S.Td>
                    </tr>
                  </tbody>
                </table>
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/tutorial/1/found")}>
                이전
              </S.PrevBtn>
              <S.NextBtn onClick={() => navigate("/tutorial/1/output")}>
                다음
              </S.NextBtn>
            </S.BtnAreaTwin>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TExp1;
