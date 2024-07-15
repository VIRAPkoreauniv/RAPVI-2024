import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import styled from "styled-components";

const Menu = () => {
  type StatusType = string | null;

  const navigate = useNavigate();

  const [visible1, setVisible1] = useState("inline-block");
  const [visible2, setVisible2] = useState("inline-block");
  const [visible3, setVisible3] = useState("inline-block");
  const [where, setWhere] = useState<StatusType>("");

  const [evalType, setEvalType] = useState<StatusType>("");
  const [check_coc, setcheck_coc] = useState<StatusType>("");
  const [check_depth, setcheck_depth] = useState<StatusType>("");
  const [check_conc, setcheck_conc] = useState<StatusType>("");
  const [check_geo, setcheck_geo] = useState<StatusType>("");
  const [check_found, setcheck_found] = useState<StatusType>("");
  const [check_exp, setcheck_exp] = useState<StatusType>("");

  const setMenu = () => {
    // 위치
    setWhere(localStorage.getItem("where"));

    // 평가 방식
    setEvalType(sessionStorage.getItem("eval_Type"));

    // 체크 항목 검사
    setcheck_coc(sessionStorage.getItem("check_coc"));
    setcheck_depth(sessionStorage.getItem("check_depth"));
    setcheck_conc(sessionStorage.getItem("check_conc"));
    setcheck_geo(sessionStorage.getItem("check_geo"));
    setcheck_found(sessionStorage.getItem("check_found"));
    setcheck_exp(sessionStorage.getItem("check_exp"));
  };

  const setVisible = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const clicked = target.innerText;
    if (clicked === "오염원") {
      if (visible1 === "none") {
        setVisible1("inline-block");
      }
      if (visible1 === "inline-block") {
        setVisible1("none");
      }
    } else if (clicked === "경로") {
      if (visible2 === "none") {
        setVisible2("inline-block");
      }
      if (visible2 === "inline-block") {
        setVisible2("none");
      }
    } else if (clicked === "수용체") {
      if (visible3 === "none") {
        setVisible3("inline-block");
      }
      if (visible3 === "inline-block") {
        setVisible3("none");
      }
    }
  };

  useEffect(() => {
    setMenu();
  }, []);

  return (
    <Container>
      {where === "위해성 평가" ? (
        <Menubar>
          <TypeBox>
            {evalType === "기본평가" && (
              <h3>
                <p>기본평가</p>
              </h3>
            )}
            {evalType === "부지기반평가" && (
              <h3>
                <p>부지기반평가</p>
              </h3>
            )}
          </TypeBox>
          <Category>Input</Category>

          <ToggleTap onClick={setVisible}>
            {visible1 === "none" ? <BiChevronRight /> : <BiChevronDown />}
            오염원
          </ToggleTap>
          <div style={{ display: visible1 }}>
            <MenuTap>
              {check_coc === "true" ? (
                <span
                  onClick={() => {
                    evalType === "tier1" && navigate("/input/source/coc1");
                    evalType === "tier2/3" && navigate("/input/source/coc2");
                  }}
                >
                  <RiCheckboxCircleFill /> 오염물질
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> 오염물질
                </span>
              )}
            </MenuTap>
            <MenuTap>
              {check_depth === "true" ? (
                <span
                  onClick={() => {
                    evalType === "tier1" && navigate("/input/source/depth1");
                    evalType === "tier2/3" && navigate("/input/source/depth2");
                  }}
                >
                  <RiCheckboxCircleFill /> 오염심도
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> 오염심도
                </span>
              )}
            </MenuTap>
            <MenuTap>
              {check_conc === "true" ? (
                <span
                  onClick={() => {
                    evalType === "tier1" && navigate("/input/source/conc1");
                    evalType === "tier2/3" && navigate("/input/source/conc2");
                  }}
                >
                  <RiCheckboxCircleFill /> 오염농도
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> 오염농도
                </span>
              )}
            </MenuTap>
          </div>
          <ToggleTap onClick={setVisible}>
            {visible2 === "none" ? <BiChevronRight /> : <BiChevronDown />}
            경로
          </ToggleTap>
          <div style={{ display: visible2 }}>
            <MenuTap>
              {check_geo === "true" ? (
                <span
                  onClick={() => {
                    evalType === "tier1" && navigate("/input/pathway/geo1");
                    evalType === "tier2/3" && navigate("/input/pathway/geo2");
                  }}
                >
                  <RiCheckboxCircleFill /> 지질매체
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> 지질매체
                </span>
              )}
            </MenuTap>
            <MenuTap>
              {check_found === "true" ? (
                <span
                  onClick={() => {
                    evalType === "tier1" && navigate("/input/pathway/found1");
                    evalType === "tier2/3" && navigate("/input/pathway/found2");
                  }}
                >
                  <RiCheckboxCircleFill /> 건물
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> 건물
                </span>
              )}
            </MenuTap>
          </div>
          <ToggleTap onClick={setVisible}>
            {visible3 === "none" ? <BiChevronRight /> : <BiChevronDown />}
            수용체
          </ToggleTap>
          <div style={{ display: visible3 }}>
            <MenuTap>
              {check_exp === "true" ? (
                <span
                  onClick={() => {
                    evalType === "tier1" && navigate("/input/receptors/exp1");
                    evalType === "tier2/3" && navigate("/input/receptors/exp2");
                  }}
                >
                  <RiCheckboxCircleFill /> 노출 특성
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> 노출 특성
                </span>
              )}
            </MenuTap>
          </div>
          <Category>Output</Category>
          <ToggleTap>
            <BiChevronRight /> 결과 확인
          </ToggleTap>
        </Menubar>
      ) : null}
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const Menubar = styled.div`
  position: relative;
  left: 0;
  height: 100%;
  padding-top: 10%;
  padding-left: 10%;
  background-color: rgb(224, 214, 198);
`;

const ToggleTap = styled.p`
  &:hover {
    cursor: pointer;
  }
  font-weight: 600;
`;
const MenuTap = styled.p`
  &:hover {
    cursor: pointer;
  }
  font-size: 15px;
  margin-left: 30px;
`;

const TypeBox = styled.div`
  background-color: white;
  width: 80%;
  padding: 0.1rem;
  text-align: center;
`;

const Category = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;
