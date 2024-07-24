import { useTranslation } from "react-i18next";
import { GOOGLE_DRIVE_FOLDER, YOUTUBE } from "../../../data/urls";
import * as S from "../BasicInfo.style";

const Introduction = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <S.PageTitle>{t("basicInfo.menu1.title")}</S.PageTitle>
      <S.RedLine></S.RedLine>
      <S.FlexRow>
        <S.TextBox>
          <S.SubTitle>Risk Assessment Program for Vapor Intrusion</S.SubTitle>
          <S.Explain>{t("basicInfo.menu1.text1")}</S.Explain>
          <S.Explain>{t("basicInfo.menu1.text2")}</S.Explain>
          <S.GuideLink onClick={() => window.open(GOOGLE_DRIVE_FOLDER)}>
            {t("basicInfo.menu1.text3")}
          </S.GuideLink>
        </S.TextBox>
        <S.VideoBox>
          <iframe src={YOUTUBE} title="video" width="300" height="150"></iframe>
        </S.VideoBox>
      </S.FlexRow>
      <br />
      <S.SubTitle>{t("basicInfo.menu1.text4")}</S.SubTitle>
      <S.FlexRow>
        <S.Box>
          <S.HorizontalLine>
            <S.SubTitle>{t("basicInfo.menu1.text5")}</S.SubTitle>
            <S.Explain>{t("basicInfo.menu1.text6")}</S.Explain>
          </S.HorizontalLine>
          <S.Explain>{t("basicInfo.menu1.text7")}</S.Explain>
          <S.Explain>{t("basicInfo.menu1.text8")}</S.Explain>
          <S.Explain>{t("basicInfo.menu1.text9")}</S.Explain>
          <S.Explain>{t("basicInfo.menu1.text10")}</S.Explain>
          <S.Explain>{t("basicInfo.menu1.text11")}</S.Explain>
        </S.Box>
        <S.Box>
          <S.HorizontalLine>
            <S.SubTitle>{t("basicInfo.menu1.text12")}</S.SubTitle>
            <S.Explain>{t("basicInfo.menu1.text13")}</S.Explain>
          </S.HorizontalLine>
          <S.Explain>{t("basicInfo.menu1.text14")}</S.Explain>
          <S.Explain>{t("basicInfo.menu1.text15")}</S.Explain>
          <S.Explain>{t("basicInfo.menu1.text16")}</S.Explain>
          <S.Explain>{t("basicInfo.menu1.text17")}</S.Explain>
          <S.Explain>{t("basicInfo.menu1.text18")}</S.Explain>
        </S.Box>
      </S.FlexRow>
    </>
  );
};

export default Introduction;
