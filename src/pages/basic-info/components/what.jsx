import { useTranslation } from "react-i18next";
import HOME_IMAGE from "../../../assets/home.png";
import * as S from "../BasicInfo.style";

const What = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <S.PageTitle>{t("basicInfo.menu2.title")}</S.PageTitle>
      <S.RedLine></S.RedLine>
      <S.FlexRow>
        <div>
          <S.SubTitle>{t("basicInfo.menu2.text1")}</S.SubTitle>
          <S.Explain>{t("basicInfo.menu2.text2")}</S.Explain>
          <S.SubTitle>{t("basicInfo.menu2.text3")}</S.SubTitle>
          <S.Explain>{t("basicInfo.menu2.text4")}</S.Explain>
        </div>
        <S.HomeImg src={HOME_IMAGE} alt="증기침입 위해성평가" />
      </S.FlexRow>
    </>
  );
};

export default What;
