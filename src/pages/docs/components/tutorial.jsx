import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as S from "../../basic-info/BasicInfo.style";

const Tutorial = () => {
  const { t } = useTranslation("docs");
  const navigate = useNavigate();

  return (
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
  );
};

export default Tutorial;
