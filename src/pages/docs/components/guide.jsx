import { useTranslation } from "react-i18next";
import { USER_GUIDE } from "../../../data/urls";
import * as S from "../../basic-info/BasicInfo.style";

const Guide = () => {
  const { t } = useTranslation("docs");

  return (
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
          <S.GuideLink onClick={() => window.open(USER_GUIDE)}>
            {t("menu1.text8")}
          </S.GuideLink>
        </S.TextBox>
      </S.FlexRow>
    </>
  );
};

export default Guide;
