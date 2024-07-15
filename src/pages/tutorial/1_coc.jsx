import { useState } from "react";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const TCoc1 = () => {
  const navigate = useNavigate();

  // 세션에 저장
  const saveData = () => {
    sessionStorage.setItem("chem_1", "Benzene");
    sessionStorage.setItem("value_S_1", "1790");
    sessionStorage.setItem("value_Hc_1", "0.00555");
    sessionStorage.setItem("value_Dair_1", "0.089534");
    sessionStorage.setItem("value_Dwater_1", "0.0000103");
    sessionStorage.setItem("value_DHvb_1", "7342");
    sessionStorage.setItem("value_Tc_1", "562.16");
    sessionStorage.setItem("value_Tb_1", "353");
    sessionStorage.setItem("value_MW_1", "78.115");
    sessionStorage.setItem("value_IUR_1", "0.0000078");
    sessionStorage.setItem("value_Rfc_1", "0.03");
    sessionStorage.setItem("value_Mut_1", "No");
    sessionStorage.setItem("value_Koc_1", "70.51");
    sessionStorage.setItem("value_foc_1", "0.0007");
    sessionStorage.setItem("default_Koc_1", "70.51");
    sessionStorage.setItem("default_foc_1", "0.0007");

    sessionStorage.setItem("check_coc", true);
    navigate("/tutorial/1/depth");
  };

  // 더보기 토글
  const [more1, setMore1] = useState("none");
  const [close1, setClose1] = useState("inline-block");

  const [option1, setOption1] = useState("inline-block");

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
            <table>
              <thead>
                <tr>
                  <S.Td>
                    <h3>오염물질 개수</h3>
                  </S.Td>
                  <S.Td>
                    <select>
                      <option value="1">1</option>
                    </select>
                  </S.Td>
                </tr>
              </thead>
            </table>

            <S.EvalBox>
              <table>
                <thead>
                  <tr>
                    <S.Td>오염물질 1</S.Td>
                    <S.Td>
                      <select>
                        <option value="" selected style={{ display: option1 }}>
                          Benzene
                        </option>
                      </select>
                    </S.Td>
                    <S.Td>
                      <button
                        onClick={() => {
                          setMore1("inline-block");
                          setClose1("none");
                        }}
                        style={{ display: close1 }}
                      >
                        더보기
                      </button>
                    </S.Td>
                  </tr>
                </thead>
              </table>
              <S.PaddingBox>
                <h5>
                  ※ 아래의 값들은 Benzene에 따라 자동으로 입력되며 필요 시
                  사용자가 수정할 수 있습니다.
                </h5>

                <div style={{ display: more1 }}>
                  <p style={{ textAlign: "center" }}>
                    <button
                      onClick={() => {
                        setMore1("none");
                        setClose1("inline-block");
                      }}
                    >
                      <BiChevronUp />
                      닫기
                    </button>
                  </p>

                  <table>
                    <tbody>
                      <tr>
                        <S.Td></S.Td>
                      </tr>
                      <tr>
                        <S.Td></S.Td>
                        <S.Td>기호</S.Td>
                        <S.Td>단위</S.Td>
                      </tr>
                      <tr>
                        <S.Td>순수 성분 수용성</S.Td>
                        <S.Td>S</S.Td>
                        <S.Td>mg/L</S.Td>
                        <S.Td>
                          <input value="1790" />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>표준 온도(25℃)의 헨리 상수</S.Td>
                        <S.Td>Hc</S.Td>
                        <S.Td>atm-m3/mol</S.Td>
                        <S.Td>
                          <input value={0.00555} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>공기에서의 확산성</S.Td>
                        <S.Td>Dair</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>
                          <input value={0.089534} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>물에서의 확산성</S.Td>
                        <S.Td>Dwater</S.Td>
                        <S.Td>cm2/s</S.Td>
                        <S.Td>
                          <input value={0.0000103} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>정상 끓는 점에서의 기화 엔탈피</S.Td>
                        <S.Td>DHvb</S.Td>
                        <S.Td>cal/mol</S.Td>
                        <S.Td>
                          <input value={7342} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>임계 온도</S.Td>
                        <S.Td>Tc</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>
                          <input value={562.16} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>정상 끓는 점</S.Td>
                        <S.Td>Tb</S.Td>
                        <S.Td>K</S.Td>
                        <S.Td>
                          <input value={353} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>화합물의 분자량</S.Td>
                        <S.Td>MW</S.Td>
                        <S.Td>g/mol</S.Td>
                        <S.Td>
                          <input value={78.115} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>IUR</S.Td>
                        <S.Td></S.Td>
                        <S.Td>(ug/m3)^-1</S.Td>
                        <S.Td>
                          <input value={0.0000078} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>RfC</S.Td>
                        <S.Td></S.Td>
                        <S.Td>mg/m3</S.Td>
                        <S.Td>
                          <input value={0.03} />
                        </S.Td>
                      </tr>
                      <tr>
                        <S.Td>Mut</S.Td>
                        <S.Td></S.Td>
                        <S.Td></S.Td>
                        <S.Td>
                          <select>
                            <option>No</option>
                          </select>
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </S.PaddingBox>
            </S.EvalBox>
          </S.EvalArea>
          <S.EvalArea>
            <S.BtnAreaSolo>
              <S.NextBtn onClick={saveData}>다음</S.NextBtn>
            </S.BtnAreaSolo>
          </S.EvalArea>
        </S.EvalContent>
      </S.Container>
    </>
  );
};

export default TCoc1;
