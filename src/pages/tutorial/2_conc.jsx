import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";
import SatConc from "./2_conc_check";

const TConc2 = () => {
  const [temp, setTemp] = useState(15);
  const [saturated, setSaturated] = useState(false);
  const [unsaturated, setUnsaturated] = useState(false);

  // koc, foc
  const [value_Koc, setValue_Koc] = useState();
  const [value_foc, setValue_foc] = useState();

  const getCheckbox = (e) => {
    let selected = e.target.value;
    let checked = e.target.checked;

    if (selected === "포화대" && checked === true) {
      setSaturated(true);
    } else if (selected === "포화대" && checked === false) {
      setSaturated(false);
    } else if (selected === "불포화대" && checked === true) {
      setUnsaturated(true);
    } else if (selected === "불포화대" && checked === false) {
      setUnsaturated(false);
    }
  };

  const navigate = useNavigate();

  const moveTo = () => {
    sessionStorage.setItem("check_conc", true);
    navigate("/tutorial/2/geo");
  };

  const getSession = () => {
    const preTemp = sessionStorage.getItem("Ts");
    preTemp !== null && setTemp(preTemp);

    const preType = sessionStorage.getItem("conc_type");
    preType === "both" && setSaturated(true);
    preType === "both" && setUnsaturated(true);

    preType === "sat" && setSaturated(true);
    preType === "unsat" && setUnsaturated(true);

    if (sessionStorage.getItem("default_Koc") !== "null") {
      setValue_Koc(parseFloat(sessionStorage.getItem("default_Koc")));
    } else {
      setValue_Koc("NULL");
    }

    if (sessionStorage.getItem("default_foc") !== "null") {
      setValue_foc(parseFloat(sessionStorage.getItem("default_foc")));
    } else {
      setValue_foc("NULL");
    }
  };
  useEffect(() => {
    getSession();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <Menu />
        <S.EvalContent>
          <S.PagePath>
            튜토리얼 <BiChevronRight /> Input <BiChevronRight /> 오염원{" "}
            <BiChevronRight /> 오염농도
          </S.PagePath>
          <S.PageTitle>오염농도</S.PageTitle>
          <S.EvalArea>
            <table>
              <thead>
                <tr>
                  <S.Td>오염원 매체 선택</S.Td>
                  <S.Td>
                    <label>
                      <input
                        type="checkbox"
                        name="오염원 매체 선택"
                        value="포화대"
                        onClick={getCheckbox}
                        checked
                      />
                      포화대(지하수)
                    </label>
                  </S.Td>
                  <S.Td>
                    <label>
                      <input
                        type="checkbox"
                        name="오염원 매체 선택"
                        value="불포화대"
                        onClick={getCheckbox}
                        disabled
                      />
                      불포화대(토양)
                    </label>
                  </S.Td>
                </tr>
              </thead>
            </table>

            <S.EvalBox>
              <S.PaddingBox>
                <h3>오염원 매체 : 포화대(지하수)</h3>
                <p>※ 지하수 온도는 필요시 사용자가 수정할 수 있습니다.</p>
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
                      <td>지하수 온도</td>
                      <S.Td>Ts</S.Td>
                      <S.Td>℃</S.Td>
                      <S.Td>18</S.Td>
                    </tr>
                    <tr>
                      <td>매체 농도</td>
                      <S.Td>Cmedium</S.Td>
                      <S.Td>ug/L</S.Td>
                      <S.Td>
                        <SatConc />
                      </S.Td>
                    </tr>
                  </tbody>
                </table>
              </S.PaddingBox>
            </S.EvalBox>
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/tutorial/2/depth")}>
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
export default TConc2;
