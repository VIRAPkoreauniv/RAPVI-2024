import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Menu from "../../components/menu";
import * as S from "../../styles/Home.style";

const ConcPoint = () => {
  const navigate = useNavigate();

  const [chem_1, setChem_1] = useState("");
  const [chem_2, setChem_2] = useState("");
  const [chem_3, setChem_3] = useState("");
  const [chem_4, setChem_4] = useState("");
  const [chem_5, setChem_5] = useState("");
  const [materialNum, setMaterialNum] = useState(0);

  const [drop_1, setDrop_1] = useState("disabled");
  const [drop_2, setDrop_2] = useState("disabled");
  const [drop_3, setDrop_3] = useState("disabled");
  const [drop_4, setDrop_4] = useState("disabled");
  const [drop_5, setDrop_5] = useState("disabled");

  const [disable_1, setDisable_1] = useState("disabled");
  const [disable_2, setDisable_2] = useState("disabled");
  const [disable_3, setDisable_3] = useState("disabled");
  const [disable_4, setDisable_4] = useState("disabled");
  const [disable_5, setDisable_5] = useState("disabled");

  const [gw_1, setGw_1] = useState("disabled");
  const [gw_2, setGw_2] = useState("disabled");
  const [gw_3, setGw_3] = useState("disabled");
  const [gw_4, setGw_4] = useState("disabled");
  const [gw_5, setGw_5] = useState("disabled");

  const [type_1, setType_1] = useState("");
  const [type_2, setType_2] = useState("");
  const [type_3, setType_3] = useState("");
  const [type_4, setType_4] = useState("");
  const [type_5, setType_5] = useState("");

  const [Ts_1, setTs_1] = useState(15);
  const [Ts_2, setTs_2] = useState(15);
  const [Ts_3, setTs_3] = useState(15);
  const [Ts_4, setTs_4] = useState(15);
  const [Ts_5, setTs_5] = useState(15);

  const [soilconc_1, setsoilConc_1] = useState();
  const [soilconc_2, setsoilConc_2] = useState();
  const [soilconc_3, setsoilConc_3] = useState();
  const [soilconc_4, setsoilConc_4] = useState();
  const [soilconc_5, setsoilConc_5] = useState();

  // koc, foc
  const [value_Koc_1, setValue_Koc_1] = useState();
  const [value_Koc_2, setValue_Koc_2] = useState();
  const [value_Koc_3, setValue_Koc_3] = useState();
  const [value_Koc_4, setValue_Koc_4] = useState();
  const [value_Koc_5, setValue_Koc_5] = useState();

  const [value_foc_1, setValue_foc_1] = useState();
  const [value_foc_2, setValue_foc_2] = useState();
  const [value_foc_3, setValue_foc_3] = useState();
  const [value_foc_4, setValue_foc_4] = useState();
  const [value_foc_5, setValue_foc_5] = useState();

  // 세션 값 가져오기
  const getSession = () => {
    let chem1 = sessionStorage.getItem("chem_1");
    let chem2 = sessionStorage.getItem("chem_2");
    let chem3 = sessionStorage.getItem("chem_3");
    let chem4 = sessionStorage.getItem("chem_4");
    let chem5 = sessionStorage.getItem("chem_5");
    setMaterialNum(parseInt(sessionStorage.getItem("materialNum")));

    if (sessionStorage.getItem("default_Koc_1") !== "null") {
      setValue_Koc_1(parseFloat(sessionStorage.getItem("default_Koc_1")));
    } else {
      setValue_Koc_1("NULL");
    }

    if (sessionStorage.getItem("default_Koc_2") !== "null") {
      setValue_Koc_2(parseFloat(sessionStorage.getItem("default_Koc_2")));
    } else {
      setValue_Koc_2("NULL");
    }

    if (sessionStorage.getItem("default_Koc_3") !== "null") {
      setValue_Koc_3(parseFloat(sessionStorage.getItem("default_Koc_3")));
    } else {
      setValue_Koc_3("NULL");
    }

    if (sessionStorage.getItem("default_Koc_4") !== "null") {
      setValue_Koc_4(parseFloat(sessionStorage.getItem("default_Koc_4")));
    } else {
      setValue_Koc_4("NULL");
    }
    if (sessionStorage.getItem("default_Koc_5") !== "null") {
      setValue_Koc_5(parseFloat(sessionStorage.getItem("default_Koc_4")));
    } else {
      setValue_Koc_5("NULL");
    }

    if (sessionStorage.getItem("default_foc_1") !== "null") {
      setValue_foc_1(parseFloat(sessionStorage.getItem("default_foc_1")));
    } else {
      setValue_foc_1("NULL");
    }

    if (sessionStorage.getItem("default_foc_2") !== "null") {
      setValue_foc_2(parseFloat(sessionStorage.getItem("default_foc_2")));
    } else {
      setValue_foc_2("NULL");
    }

    if (sessionStorage.getItem("default_foc_3") !== "null") {
      setValue_foc_3(parseFloat(sessionStorage.getItem("default_foc_3")));
    } else {
      setValue_foc_3("NULL");
    }

    if (sessionStorage.getItem("default_foc_4") !== "null") {
      setValue_foc_4(parseFloat(sessionStorage.getItem("default_foc_4")));
    } else {
      setValue_foc_4("NULL");
    }

    if (sessionStorage.getItem("default_foc_5") !== "null") {
      setValue_foc_5(parseFloat(sessionStorage.getItem("default_foc_5")));
    } else {
      setValue_foc_5("NULL");
    }

    if (chem1 !== null) {
      setChem_1(chem1);
      setDrop_1("");

      let temp = sessionStorage.getItem("Ts_1");
      let conc = sessionStorage.getItem("soilconc_1");
      let type = sessionStorage.getItem("type_1");

      temp !== null && setTs_1(temp);
      conc !== null && setsoilConc_1(conc);
      type !== null && setType_1(type);
      if (type === "sat") {
        setGw_1("");
        setDisable_1("");
      } else if (type === "unsat") {
        setDisable_1("");
      }
    }
    if (chem2 !== null) {
      setChem_2(chem2);
      setDrop_2("");

      let temp = sessionStorage.getItem("Ts_2");
      let conc = sessionStorage.getItem("soilconc_2");
      let type = sessionStorage.getItem("type_2");

      temp !== null && setTs_2(temp);
      conc !== null && setsoilConc_2(conc);
      type !== null && setType_2(type);
      if (type === "sat") {
        setGw_2("");
        setDisable_2("");
      } else if (type === "unsat") {
        setDisable_2("");
      }
    }
    if (chem3 !== null) {
      setChem_3(chem3);
      setDrop_3("");

      let temp = sessionStorage.getItem("Ts_3");
      let conc = sessionStorage.getItem("soilconc_3");
      let type = sessionStorage.getItem("type_3");

      temp !== null && setTs_3(temp);
      conc !== null && setsoilConc_3(conc);
      type !== null && setType_3(type);
      if (type === "sat") {
        setGw_3("");
        setDisable_3("");
      } else if (type === "unsat") {
        setDisable_3("");
      }
    }
    if (chem4 !== null) {
      setChem_4(chem4);
      setDrop_4("");

      let temp = sessionStorage.getItem("Ts_4");
      let conc = sessionStorage.getItem("soilconc_4");
      let type = sessionStorage.getItem("type_4");

      temp !== null && setTs_4(temp);
      conc !== null && setsoilConc_4(conc);
      type !== null && setType_4(type);
      if (type === "sat") {
        setGw_4("");
        setDisable_4("");
      } else if (type === "unsat") {
        setDisable_4("");
      }
    }
    if (chem5 !== null) {
      setChem_5(chem5);
      setDrop_5("");

      let temp = sessionStorage.getItem("Ts_5");
      let conc = sessionStorage.getItem("soilconc_5");
      let type = sessionStorage.getItem("type_5");

      temp !== null && setTs_5(temp);
      conc !== null && setsoilConc_5(conc);
      type !== null && setType_5(type);
      if (type === "sat") {
        setGw_5("");
        setDisable_5("");
      } else if (type === "unsat") {
        setDisable_5("");
      }
    }
  };
  const select_1 = (e) => {
    let selected = e.target.value;
    setType_1(selected);
    if (selected === "sat") {
      setGw_1("");
      setDisable_1("");
    } else if (selected === "unsat") {
      setTs_1();
      setGw_1("disabled");
      setDisable_1("");
      sessionStorage.removeItem("Ts_1");
    } else {
      setTs_1();
      setGw_1("disabled");
      setDisable_1("disabled");
    }
  };
  const select_2 = (e) => {
    let selected = e.target.value;
    setType_2(selected);

    if (selected === "sat") {
      setGw_2("");
      setDisable_2("");
    } else if (selected === "unsat") {
      setTs_2();
      setGw_2("disabled");
      setDisable_2("");
      sessionStorage.removeItem("Ts_2");
    } else {
      setTs_2();
      setGw_2("disabled");
      setDisable_2("disabled");
    }
  };
  const select_3 = (e) => {
    let selected = e.target.value;
    setType_3(selected);

    if (selected === "sat") {
      setGw_3("");
      setDisable_3("");
    } else if (selected === "unsat") {
      setTs_3();
      setGw_3("disabled");
      setDisable_3("");
      sessionStorage.removeItem("Ts_3");
    } else {
      setTs_3();
      setGw_3("disabled");
      setDisable_3("disabled");
    }
  };
  const select_4 = (e) => {
    let selected = e.target.value;
    setType_4(selected);

    if (selected === "sat") {
      setGw_4("");
      setDisable_4("");
    } else if (selected === "unsat") {
      setTs_4();
      setGw_4("disabled");
      setDisable_4("");
      sessionStorage.removeItem("Ts_4");
    } else {
      setTs_4();
      setGw_4("disabled");
      setDisable_4("disabled");
    }
  };
  const select_5 = (e) => {
    let selected = e.target.value;
    setType_5(selected);

    if (selected === "sat") {
      setGw_5("");
      setDisable_5("");
    } else if (selected === "unsat") {
      setTs_5();
      setGw_5("disabled");
      setDisable_5("");
      sessionStorage.removeItem("Ts_5");
    } else {
      setTs_5();
      setGw_5("disabled");
      setDisable_5("disabled");
    }
  };

  // 세션 값 저장하기
  const saveData = () => {
    let verify = false; // 값 다 있는 경우 true

    if (materialNum >= 1) {
      if (
        type_1 !== "" &&
        type_1 === "sat" &&
        Ts_1 !== undefined &&
        Ts_1 !== "" &&
        soilconc_1 !== undefined &&
        soilconc_1 !== ""
      ) {
        sessionStorage.setItem("type_1", type_1);
        sessionStorage.setItem("Ts_1", Ts_1);
        sessionStorage.setItem("soilconc_1", soilconc_1);
        if (materialNum === 1) {
          verify = true;
        }
      } else if (
        type_1 !== "" &&
        type_1 === "unsat" &&
        soilconc_1 !== undefined &&
        soilconc_1 !== "" &&
        value_Koc_1 !== "" &&
        value_foc_1 !== "" &&
        value_Koc_1 !== "NULL" &&
        value_foc_1 !== "NULL"
      ) {
        sessionStorage.setItem("type_1", type_1);
        sessionStorage.setItem("soilconc_1", soilconc_1);
        sessionStorage.setItem("value_Koc_1", value_Koc_1);
        sessionStorage.setItem("value_foc_1", value_foc_1);

        if (materialNum === 1) {
          verify = true;
        }
      } else {
        alert("오염물질 A의 값이 누락되었습니다.");
        return;
      }
    }
    if (materialNum >= 2) {
      if (
        type_2 !== "" &&
        type_2 === "sat" &&
        Ts_2 !== undefined &&
        Ts_2 !== "" &&
        soilconc_2 !== undefined &&
        soilconc_2 !== ""
      ) {
        sessionStorage.setItem("type_2", type_2);
        sessionStorage.setItem("Ts_2", Ts_2);
        sessionStorage.setItem("soilconc_2", soilconc_2);
        if (materialNum === 2) {
          verify = true;
        }
      } else if (
        type_2 !== "" &&
        type_2 === "unsat" &&
        soilconc_2 !== undefined &&
        soilconc_2 !== "" &&
        value_Koc_2 !== "" &&
        value_foc_2 !== "" &&
        value_Koc_2 !== "NULL" &&
        value_foc_2 !== "NULL"
      ) {
        sessionStorage.setItem("type_2", type_2);
        sessionStorage.setItem("soilconc_2", soilconc_2);
        sessionStorage.setItem("value_Koc_2", value_Koc_2);
        sessionStorage.setItem("value_foc_2", value_foc_2);

        if (materialNum === 2) {
          verify = true;
        }
      } else {
        alert("오염물질 B의 값이 누락되었습니다.");
        return;
      }
    }
    if (materialNum >= 3) {
      if (
        type_3 !== "" &&
        type_3 === "sat" &&
        Ts_3 !== undefined &&
        Ts_3 !== "" &&
        soilconc_3 !== undefined &&
        soilconc_3 !== ""
      ) {
        sessionStorage.setItem("type_3", type_3);
        sessionStorage.setItem("Ts_3", Ts_3);
        sessionStorage.setItem("soilconc_3", soilconc_3);
        if (materialNum === 3) {
          verify = true;
        }
      } else if (
        type_3 !== "" &&
        type_3 === "unsat" &&
        soilconc_3 !== undefined &&
        soilconc_3 !== "" &&
        value_Koc_3 !== "" &&
        value_foc_3 !== "" &&
        value_Koc_3 !== "NULL" &&
        value_foc_3 !== "NULL"
      ) {
        sessionStorage.setItem("type_3", type_3);
        sessionStorage.setItem("soilconc_3", soilconc_3);
        sessionStorage.setItem("value_Koc_3", value_Koc_3);
        sessionStorage.setItem("value_foc_3", value_foc_3);

        if (materialNum === 3) {
          verify = true;
        }
      } else {
        alert("오염물질 C의 값이 누락되었습니다.");
        return;
      }
    }
    if (materialNum >= 4) {
      if (
        type_4 !== "" &&
        type_4 === "sat" &&
        Ts_4 !== undefined &&
        Ts_4 !== "" &&
        soilconc_4 !== undefined &&
        soilconc_4 !== ""
      ) {
        sessionStorage.setItem("type_4", type_4);
        sessionStorage.setItem("Ts_4", Ts_4);
        sessionStorage.setItem("soilconc_4", soilconc_4);
        if (materialNum === 4) {
          verify = true;
        }
      } else if (
        type_4 !== "" &&
        type_4 === "unsat" &&
        soilconc_4 !== undefined &&
        soilconc_4 !== "" &&
        value_Koc_4 !== "" &&
        value_foc_4 !== "" &&
        value_Koc_4 !== "NULL" &&
        value_foc_4 !== "NULL"
      ) {
        sessionStorage.setItem("type_4", type_4);
        sessionStorage.setItem("soilconc_4", soilconc_4);
        sessionStorage.setItem("value_Koc_4", value_Koc_4);
        sessionStorage.setItem("value_foc_4", value_foc_4);

        if (materialNum === 4) {
          verify = true;
        }
      } else {
        alert("오염물질 D의 값이 누락되었습니다.");
        return;
      }
    }
    if (materialNum >= 5) {
      if (
        type_5 !== "" &&
        type_5 === "sat" &&
        Ts_5 !== undefined &&
        Ts_5 !== "" &&
        soilconc_5 !== undefined &&
        soilconc_5 !== ""
      ) {
        sessionStorage.setItem("type_5", type_5);
        sessionStorage.setItem("Ts_5", Ts_5);
        sessionStorage.setItem("soilconc_5", soilconc_5);
        if (materialNum === 5) {
          verify = true;
        }
      } else if (
        type_5 !== "" &&
        type_5 === "unsat" &&
        soilconc_5 !== undefined &&
        soilconc_5 !== "" &&
        value_Koc_5 !== "" &&
        value_foc_5 !== "" &&
        value_Koc_5 !== "NULL" &&
        value_foc_5 !== "NULL"
      ) {
        sessionStorage.setItem("type_5", type_5);
        sessionStorage.setItem("soilconc_5", soilconc_5);
        sessionStorage.setItem("value_Koc_5", value_Koc_5);
        sessionStorage.setItem("value_foc_5", value_foc_5);

        if (materialNum === 5) {
          verify = true;
        }
      } else {
        alert("오염물질 E의 값이 누락되었습니다.");
        return;
      }
    }

    // 값 누락 검사 후 이동
    verify === true && sessionStorage.setItem("check_conc", true);
    verify === true && navigate("/input/pathway/geo1");
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
            위해성 평가 <BiChevronRight /> Input <BiChevronRight /> 오염원{" "}
            <BiChevronRight /> 오염 농도
          </S.PagePath>
          <S.PageTitle>오염농도</S.PageTitle>
          <S.EvalArea>
            {materialNum >= 1 ? (
              <S.EvalBox>
                <S.PaddingBox>
                  <h3>오염물질 A : {chem_1}</h3>
                  <table>
                    <thead>
                      <tr>
                        <td>오염원 매체</td>
                        <S.Td>
                          <select
                            onChange={select_1}
                            value={type_1}
                            required
                            disabled={drop_1}
                          >
                            <option value="" selected disabled hidden>
                              오염원 매체를 선택해주세요.
                            </option>
                            <option value="sat">포화대(지하수)</option>
                            <option value="unsat">불포화대(토양)</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5>
                    ※ 불포화대(토양) 선택 시 지하수 온도는 15℃로 고정됩니다.
                  </h5>
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
                          <input
                            type="number"
                            placeholder="15"
                            value={Ts_1}
                            onChange={(e) => setTs_1(e.target.value)}
                            disabled={gw_1}
                            required
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>매체 농도</td>
                        <S.Td>Cmedium</S.Td>
                        <S.Td>ug/L</S.Td>
                        <S.Td>
                          <input
                            type="number"
                            value={soilconc_1}
                            onChange={(e) => setsoilConc_1(e.target.value)}
                            required
                            disabled={disable_1}
                          />
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                  {type_1 === "unsat" ? (
                    <>
                      <hr />
                      <h3>토양흡착특성</h3>
                      <h5>
                        ※ koc와 foc의 값은 오염물질에 따라 자동으로 입력될 수
                        있으며, 필요 시 사용자가 수정할 수 있습니다.
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
                            <td>토양-물 분배계수</td>
                            <S.Td>kd</S.Td>
                            <S.Td></S.Td>
                            <S.Td>= koc x foc</S.Td>
                          </tr>
                          <tr>
                            <td>탄소-물 분배계수</td>
                            <S.Td>koc</S.Td>
                            <S.Td>g-H2O/g-C</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                value={value_Koc_1}
                                onChange={(e) => setValue_Koc_1(e.target.value)}
                              />
                            </S.Td>
                          </tr>
                          <tr>
                            <td>유기물 분배계수</td>
                            <S.Td>foc</S.Td>
                            <S.Td>g-C/g-soil</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                value={value_foc_1}
                                onChange={(e) => setValue_foc_1(e.target.value)}
                              />
                            </S.Td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  ) : null}
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            {materialNum >= 2 ? (
              <S.EvalBox>
                <S.PaddingBox>
                  <h3>오염물질 B : {chem_2}</h3>
                  <table>
                    <thead>
                      <tr>
                        <td>오염원 매체</td>
                        <S.Td>
                          <select
                            onChange={select_2}
                            value={type_2}
                            required
                            disabled={drop_2}
                          >
                            <option value="" selected disabled hidden>
                              오염원 매체를 선택해주세요.
                            </option>
                            <option value="sat">포화대(지하수)</option>
                            <option value="unsat">불포화대(토양)</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5>
                    ※ 불포화대(토양) 선택 시 지하수 온도는 15℃로 고정됩니다.
                  </h5>
                  <table>
                    <tbody>
                      <tr>
                        <td></td>
                        <S.Td>기호</S.Td>
                        <S.Td>단위</S.Td>
                      </tr>
                      <tr>
                        <td>지하수 온도</td>
                        <S.Td>Ts</S.Td>
                        <S.Td>℃</S.Td>
                        <S.Td>
                          <input
                            type="number"
                            placeholder="15"
                            value={Ts_2}
                            onChange={(e) => setTs_2(e.target.value)}
                            disabled={gw_2}
                            required
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>매체 농도</td>
                        <S.Td>Cmedium</S.Td>
                        <S.Td>ug/L</S.Td>
                        <S.Td>
                          <input
                            type="number"
                            value={soilconc_2}
                            onChange={(e) => setsoilConc_2(e.target.value)}
                            required
                            disabled={disable_2}
                          />
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                  {type_2 === "unsat" ? (
                    <>
                      <hr />
                      <h3>토양흡착특성</h3>
                      <h5>
                        ※ koc와 foc의 값은 오염물질에 따라 자동으로 입력될 수
                        있으며, 필요 시 사용자가 수정할 수 있습니다.
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
                            <td>토양-물 분배계수</td>
                            <S.Td>kd</S.Td>
                            <S.Td></S.Td>
                            <S.Td>= koc x foc</S.Td>
                          </tr>
                          <tr>
                            <td>탄소-물 분배계수</td>
                            <S.Td>koc</S.Td>
                            <S.Td>g-H2O/g-C</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                value={value_Koc_2}
                                onChange={(e) => setValue_Koc_2(e.target.value)}
                              />
                            </S.Td>
                          </tr>
                          <tr>
                            <td>유기물 분배계수</td>
                            <S.Td>foc</S.Td>
                            <S.Td>g-C/g-soil</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                value={value_foc_2}
                                onChange={(e) => setValue_foc_2(e.target.value)}
                              />
                            </S.Td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  ) : null}
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            {materialNum >= 3 ? (
              <S.EvalBox>
                <S.PaddingBox>
                  <h3>오염물질 C : {chem_3}</h3>
                  <table>
                    <thead>
                      <tr>
                        <td>오염원 매체</td>
                        <S.Td>
                          <select
                            onChange={select_3}
                            value={type_3}
                            required
                            disabled={drop_3}
                          >
                            <option value="" selected disabled hidden>
                              오염원 매체를 선택해주세요.
                            </option>
                            <option value="sat">포화대(지하수)</option>
                            <option value="unsat">불포화대(토양)</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5>
                    ※ 불포화대(토양) 선택 시 지하수 온도는 15℃로 고정됩니다.
                  </h5>
                  <table>
                    <tbody>
                      <tr>
                        <td></td>
                        <S.Td>기호</S.Td>
                        <S.Td>단위</S.Td>
                      </tr>
                      <tr>
                        <td>지하수 온도</td>
                        <S.Td>Ts</S.Td>
                        <S.Td>℃</S.Td>
                        <S.Td>
                          <input
                            type="number"
                            placeholder="15"
                            value={Ts_3}
                            onChange={(e) => setTs_3(e.target.value)}
                            disabled={gw_3}
                            required
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>매체 농도</td>
                        <S.Td>Cmedium</S.Td>
                        <S.Td>ug/L</S.Td>
                        <S.Td>
                          <input
                            type="number"
                            value={soilconc_3}
                            onChange={(e) => setsoilConc_3(e.target.value)}
                            required
                            disabled={disable_3}
                          />
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                  {type_3 === "unsat" ? (
                    <>
                      <hr />
                      <h3>토양흡착특성</h3>
                      <h5>
                        ※ koc와 foc의 값은 오염물질에 따라 자동으로 입력될 수
                        있으며, 필요 시 사용자가 수정할 수 있습니다.
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
                            <td>토양-물 분배계수</td>
                            <S.Td>kd</S.Td>
                            <S.Td></S.Td>
                            <S.Td>= koc x foc</S.Td>
                          </tr>
                          <tr>
                            <td>탄소-물 분배계수</td>
                            <S.Td>koc</S.Td>
                            <S.Td>g-H2O/g-C</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                value={value_Koc_3}
                                onChange={(e) => setValue_Koc_3(e.target.value)}
                              />
                            </S.Td>
                          </tr>
                          <tr>
                            <td>유기물 분배계수</td>
                            <S.Td>foc</S.Td>
                            <S.Td>g-C/g-soil</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                value={value_foc_3}
                                onChange={(e) => setValue_foc_3(e.target.value)}
                              />
                            </S.Td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  ) : null}
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            {materialNum >= 4 ? (
              <S.EvalBox>
                <S.PaddingBox>
                  <h3>오염물질 D : {chem_4}</h3>
                  <table>
                    <thead>
                      <tr>
                        <td>오염원 매체</td>
                        <S.Td>
                          <select
                            onChange={select_4}
                            value={type_4}
                            required
                            disabled={drop_4}
                          >
                            <option value="" selected disabled hidden>
                              오염원 매체를 선택해주세요.
                            </option>
                            <option value="sat">포화대(지하수)</option>
                            <option value="unsat">불포화대(토양)</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5>
                    ※ 불포화대(토양) 선택 시 지하수 온도는 15℃로 고정됩니다.
                  </h5>
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
                          <input
                            type="number"
                            placeholder="15"
                            value={Ts_4}
                            onChange={(e) => setTs_4(e.target.value)}
                            disabled={gw_4}
                            required
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>매체 농도</td>
                        <S.Td>Cmedium</S.Td>
                        <S.Td>ug/L</S.Td>
                        <S.Td>
                          <input
                            type="number"
                            value={soilconc_4}
                            onChange={(e) => setsoilConc_4(e.target.value)}
                            required
                            disabled={disable_4}
                          />
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                  {type_4 === "unsat" ? (
                    <>
                      <hr />
                      <h3>토양흡착특성</h3>
                      <h5>
                        ※ koc와 foc의 값은 오염물질에 따라 자동으로 입력될 수
                        있으며, 필요 시 사용자가 수정할 수 있습니다.
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
                            <td>토양-물 분배계수</td>
                            <S.Td>kd</S.Td>
                            <S.Td></S.Td>
                            <S.Td>= koc x foc</S.Td>
                          </tr>
                          <tr>
                            <td>탄소-물 분배계수</td>
                            <S.Td>koc</S.Td>
                            <S.Td>g-H2O/g-C</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                value={value_Koc_4}
                                onChange={(e) => setValue_Koc_4(e.target.value)}
                              />
                            </S.Td>
                          </tr>
                          <tr>
                            <td>유기물 분배계수</td>
                            <S.Td>foc</S.Td>
                            <S.Td>g-C/g-soil</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                value={value_foc_4}
                                onChange={(e) => setValue_foc_4(e.target.value)}
                              />
                            </S.Td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  ) : null}
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            {materialNum >= 5 ? (
              <S.EvalBox>
                <S.PaddingBox>
                  <h3>오염물질 E : {chem_5}</h3>
                  <table>
                    <thead>
                      <tr>
                        <td>오염원 매체</td>
                        <S.Td>
                          <select
                            onChange={select_5}
                            value={type_5}
                            required
                            disabled={drop_5}
                          >
                            <option value="" selected disabled hidden>
                              오염원 매체를 선택해주세요.
                            </option>
                            <option value="sat">포화대(지하수)</option>
                            <option value="unsat">불포화대(토양)</option>
                          </select>
                        </S.Td>
                      </tr>
                    </thead>
                  </table>
                  <h5>
                    ※ 불포화대(토양) 선택 시 지하수 온도는 15℃로 고정됩니다.
                  </h5>
                  <table>
                    <tbody>
                      <tr>
                        <td></td>
                        <S.Td>기호</S.Td>
                        <S.Td>단위</S.Td>
                      </tr>
                      <tr>
                        <td>지하수 온도</td>
                        <S.Td>Ts</S.Td>
                        <S.Td>℃</S.Td>
                        <S.Td>
                          <input
                            type="number"
                            placeholder="15"
                            value={Ts_5}
                            onChange={(e) => setTs_5(e.target.value)}
                            disabled={gw_5}
                            required
                          />
                        </S.Td>
                      </tr>
                      <tr>
                        <td>매체 농도</td>
                        <S.Td>Cmedium</S.Td>
                        <S.Td>ug/L</S.Td>
                        <S.Td>
                          <input
                            type="number"
                            value={soilconc_5}
                            onChange={(e) => setsoilConc_5(e.target.value)}
                            required
                            disabled={disable_5}
                          />
                        </S.Td>
                      </tr>
                    </tbody>
                  </table>
                  {type_5 === "unsat" ? (
                    <>
                      <hr />
                      <h3>토양흡착특성</h3>
                      <h5>
                        ※ koc와 foc의 값은 오염물질에 따라 자동으로 입력될 수
                        있으며, 필요 시 사용자가 수정할 수 있습니다.
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
                            <td>토양-물 분배계수</td>
                            <S.Td>kd</S.Td>
                            <S.Td></S.Td>
                            <S.Td>= koc x foc</S.Td>
                          </tr>
                          <tr>
                            <td>탄소-물 분배계수</td>
                            <S.Td>koc</S.Td>
                            <S.Td>g-H2O/g-C</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                value={value_Koc_5}
                                onChange={(e) => setValue_Koc_5(e.target.value)}
                              />
                            </S.Td>
                          </tr>
                          <tr>
                            <td>유기물 분배계수</td>
                            <S.Td>foc</S.Td>
                            <S.Td>g-C/g-soil</S.Td>
                            <S.Td>
                              <input
                                type="number"
                                value={value_foc_5}
                                onChange={(e) => setValue_foc_5(e.target.value)}
                              />
                            </S.Td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  ) : null}
                </S.PaddingBox>
              </S.EvalBox>
            ) : null}
            <S.BtnAreaTwin>
              <S.PrevBtn onClick={() => navigate("/input/source/depth1")}>
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

export default ConcPoint;
