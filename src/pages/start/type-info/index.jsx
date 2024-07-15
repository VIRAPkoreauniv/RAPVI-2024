import TIER1_IMAGE from "@/assets/tier1.png";
import TIER23_IMAGE from "@/assets/tier23.png";
import Header from "@components/header";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as S from "./TypeInfo.style";

export default function TypeInfoPage() {
  const navigate = useNavigate();
  const { t } = useTranslation("start");

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.Content>
          <S.PageTitle>{t("typeInfo.title")}</S.PageTitle>
          <S.EvalArea>
            <S.PaddingBox>
              <Container>
                <S.EvalBox>
                  <S.PaddingBox>
                    <h3>{t("typeInfo.section1.title")}</h3>
                    <p>{t("typeInfo.section1.text")}</p>
                    <Img2 src={TIER1_IMAGE} alt="Tier 1" />
                  </S.PaddingBox>
                </S.EvalBox>
                <S.EvalBox>
                  <S.PaddingBox>
                    <h3>{t("typeInfo.section2.title")}</h3>
                    <p>{t("typeInfo.section2.text")}</p>
                    <Img2 src={TIER23_IMAGE} alt="Tier 2/3" />
                  </S.PaddingBox>
                </S.EvalBox>
              </Container>
            </S.PaddingBox>
          </S.EvalArea>

          <BtnAreaSolo>
            <S.PrevBtn onClick={() => navigate(-1)}>
              {t("typeInfo.button")}
            </S.PrevBtn>
          </BtnAreaSolo>
        </S.Content>
      </S.Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BtnAreaSolo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 3%;
`;
const Img2 = styled.img`
  width: 80%;
  margin: 3rem;
`;
