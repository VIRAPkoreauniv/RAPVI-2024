import * as S from "@/pages/basic-info/BasicInfo.style";
import Header from "@components/header";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function DocsPage() {
  const navigate = useNavigate();
  const { t } = useTranslation("docs");
  const [where, setWhere] = useState(1);

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  return (
    <S.HomeContainer>
      <Header />
      <S.BasicInfoContainer>
        <S.LeftMenu>
          <h2>{t("title")}</h2>
          {where === 1 ? (
            <>
              <S.RedTap>
                <S.MenuTap onClick={() => setWhere(1)}>
                  <strong>{t("menu1.title")}</strong>
                </S.MenuTap>
              </S.RedTap>
            </>
          ) : (
            <>
              <S.BlackTap>
                <S.MenuTap onClick={() => setWhere(1)}>
                  {t("menu1.title")}
                </S.MenuTap>
              </S.BlackTap>
            </>
          )}
          {where === 2 ? (
            <>
              <S.RedTap>
                <S.MenuTap onClick={() => setWhere(2)}>
                  <strong>{t("menu2.title")}</strong>
                </S.MenuTap>
              </S.RedTap>
            </>
          ) : (
            <>
              <S.BlackTap>
                <S.MenuTap onClick={() => setWhere(2)}>
                  {t("menu2.title")}
                </S.MenuTap>
              </S.BlackTap>
            </>
          )}
        </S.LeftMenu>
        <S.TextContainer>
          {where === 1 && (
            <>
              <S.PageTitle>{t("menu1.title")}</S.PageTitle>
              <S.RedLine></S.RedLine>
              <S.FlexRow>
                <S.TextBox>
                  <S.Explain>{t("menu1.text1")}</S.Explain>
                  <ul>
                    <li>
                      <S.Explain>{t("menu1.text2")}</S.Explain>
                    </li>
                    <li>
                      <S.Explain>{t("menu1.text3")}</S.Explain>
                    </li>
                  </ul>
                  <S.Explain>{t("menu1.text4")}</S.Explain>
                  <S.Explain>{t("menu1.text5")}</S.Explain>
                  <S.Explain>{t("menu1.text6")}</S.Explain>
                  <S.Explain>{t("menu1.text7")}</S.Explain>
                  <S.GuideLink
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/presentation/d/1J1dtYnPnG7OTtm18ixwL-5pzql4ZHltf/edit?usp=share_link&ouid=100870610785043714305&rtpof=true&sd=true"
                      )
                    }
                  >
                    {t("menu1.text8")}
                  </S.GuideLink>
                </S.TextBox>
              </S.FlexRow>
            </>
          )}
          {where === 2 && (
            <>
              <S.PageTitle>{t("menu2.title")}</S.PageTitle>
              <S.RedLine></S.RedLine>
              <S.FlexRow>
                <div>
                  <S.Explain>{t("menu2.text1")}</S.Explain>
                  <S.Explain>{t("menu2.text2")}</S.Explain>
                  <S.Explain>{t("menu2.text3")}</S.Explain>
                  <S.GuideLink onClick={() => navigate("/tutorial")}>
                    {t("menu2.text4")}
                  </S.GuideLink>
                </div>
              </S.FlexRow>
            </>
          )}
        </S.TextContainer>
      </S.BasicInfoContainer>
    </S.HomeContainer>
  );
}
