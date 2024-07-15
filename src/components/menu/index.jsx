import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import styled from "styled-components";

const Menu = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("menu");

  const [visible1, setVisible1] = useState("inline-block");
  const [visible2, setVisible2] = useState("inline-block");
  const [visible3, setVisible3] = useState("inline-block");
  const [where, setWhere] = useState("");

  const [evalType, setEvalType] = useState("");
  const [check_coc, setcheck_coc] = useState("");
  const [check_depth, setcheck_depth] = useState("");
  const [check_conc, setcheck_conc] = useState("");
  const [check_geo, setcheck_geo] = useState("");
  const [check_found, setcheck_found] = useState("");
  const [check_exp, setcheck_exp] = useState("");

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

  const setVisible = (e) => {
    const clicked = e.target.innerText;
    if (clicked === t("left.part1.title")) {
      if (visible1 === "none") {
        setVisible1("inline-block");
      }
      if (visible1 === "inline-block") {
        setVisible1("none");
      }
    } else if (clicked === t("left.part2.title")) {
      if (visible2 === "none") {
        setVisible2("inline-block");
      }
      if (visible2 === "inline-block") {
        setVisible2("none");
      }
    } else if (clicked === t("left.part3.title")) {
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
                <p>{t("left.type1")}</p>
              </h3>
            )}
            {evalType === "부지기반평가" && (
              <h3>
                <p>{t("left.type2")}</p>
              </h3>
            )}
          </TypeBox>
          <Category>Input</Category>
          <ToggleTap onClick={setVisible}>
            {visible1 === "none" ? <BiChevronRight /> : <BiChevronDown />}
            {t("left.part1.title")}
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
                  <RiCheckboxCircleFill /> {t("left.part1.text1")}
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> {t("left.part1.text1")}
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
                  <RiCheckboxCircleFill /> {t("left.part1.text2")}
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> {t("left.part1.text2")}
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
                  <RiCheckboxCircleFill /> {t("left.part1.text3")}
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> {t("left.part1.text3")}
                </span>
              )}
            </MenuTap>
          </div>
          <ToggleTap onClick={setVisible}>
            {visible2 === "none" ? <BiChevronRight /> : <BiChevronDown />}
            {t("left.part2.title")}
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
                  <RiCheckboxCircleFill /> {t("left.part2.text1")}
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> {t("left.part2.text1")}
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
                  <RiCheckboxCircleFill /> {t("left.part2.text2")}
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> {t("left.part2.text2")}
                </span>
              )}
            </MenuTap>
          </div>
          <ToggleTap onClick={setVisible}>
            {visible3 === "none" ? <BiChevronRight /> : <BiChevronDown />}
            {t("left.part3.title")}
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
                  <RiCheckboxCircleFill /> {t("left.part3.text1")}
                </span>
              ) : (
                <span>
                  <RiCheckboxBlankCircleLine /> {t("left.part3.text1")}
                </span>
              )}
            </MenuTap>
          </div>
          <Category>Output</Category>
          <ToggleTap>
            <BiChevronRight /> {t("left.output")}
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
