import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageButton from "../language-button";
import * as S from "./Header.style";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("home");

  return (
    <>
      <S.HeaderContainer>
        <S.Head>
          <S.LogoContainer>
            <S.Title
              onClick={() => {
                navigate("/");
                localStorage.setItem("where", "HOME");
              }}
            >
              RAPVI
            </S.Title>
            <S.FullTxtBox>
              <S.FullTxt>Risk Assessment Program</S.FullTxt>
              <S.FullTxt>for Vapor Intrusion</S.FullTxt>
            </S.FullTxtBox>
          </S.LogoContainer>
          <LanguageButton />
        </S.Head>
        <S.HorizontalMenu>
          <S.MenuWrapper>
            <S.HorizontalMenuTap
              onClick={() => {
                navigate("/");
                localStorage.setItem("where", "HOME");
              }}
            >
              {t("header.basicInfo")}
            </S.HorizontalMenuTap>
            <S.HorizontalMenuTap
              onClick={() => {
                navigate("/projectInfo");
              }}
            >
              RAPVI
            </S.HorizontalMenuTap>
            <S.HorizontalMenuTap onClick={() => navigate("/docs")}>
              {t("header.docs")}
            </S.HorizontalMenuTap>
          </S.MenuWrapper>
        </S.HorizontalMenu>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
