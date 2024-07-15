import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HOME_IMAGE from "../../assets/home.png";
import Header from "../../components/header";
import * as S from "./BasicInfo.style";

export default function BasicInfoPage() {
  const { t } = useTranslation("home");
  const [where, setWhere] = useState(1);

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  return (
    <>
      <S.HomeContainer>
        <Header />
        <S.BasicInfoContainer>
          <S.LeftMenu>
            <h2>{t("basicInfo.menuTitle")}</h2>
            {where === 1 ? (
              <>
                <S.RedTap>
                  <S.MenuTap onClick={() => setWhere(1)}>
                    <strong>{t("basicInfo.menu1.title")}</strong>
                  </S.MenuTap>
                </S.RedTap>
              </>
            ) : (
              <>
                <S.BlackTap>
                  <S.MenuTap onClick={() => setWhere(1)}>
                    {t("basicInfo.menu1.title")}
                  </S.MenuTap>
                </S.BlackTap>
              </>
            )}
            {where === 2 ? (
              <>
                <S.RedTap>
                  <S.MenuTap onClick={() => setWhere(2)}>
                    <strong>{t("basicInfo.menu2.title")}</strong>
                  </S.MenuTap>
                </S.RedTap>
              </>
            ) : (
              <>
                <S.BlackTap>
                  <S.MenuTap onClick={() => setWhere(2)}>
                    {t("basicInfo.menu2.title")}
                  </S.MenuTap>
                </S.BlackTap>
              </>
            )}
            {where === 3 ? (
              <>
                <S.RedTap>
                  <S.MenuTap onClick={() => setWhere(3)}>
                    <strong>{t(`basicInfo.menu3.title`)}</strong>
                  </S.MenuTap>
                </S.RedTap>
              </>
            ) : (
              <>
                <S.BlackTap>
                  <S.MenuTap onClick={() => setWhere(3)}>
                    {t("basicInfo.menu3.title")}
                  </S.MenuTap>
                </S.BlackTap>
              </>
            )}
          </S.LeftMenu>
          <S.TextContainer>
            {where === 1 && (
              <>
                <S.PageTitle>{t("basicInfo.menu1.title")}</S.PageTitle>
                <S.RedLine></S.RedLine>
                <S.FlexRow>
                  <S.TextBox>
                    <S.SubTitle>
                      Risk Assessment Program for Vapor Intrusion
                    </S.SubTitle>
                    <S.Explain>{t("basicInfo.menu1.text1")}</S.Explain>
                    <S.Explain>{t("basicInfo.menu1.text2")}</S.Explain>
                    <S.GuideLink
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/drive/folders/1K8u7_g8TPrMohENg2-COU2uF2rLNVIZu?usp=share_link"
                        )
                      }
                    >
                      {t("basicInfo.menu1.text3")}
                    </S.GuideLink>
                  </S.TextBox>
                  <S.VideoBox>
                    <iframe
                      src="https://www.youtube.com/embed/-1XgqPnOm-Y?rel=0&amp;autoplay=1&mute=1&amp;loop=1;playlist=영상키값"
                      title="video"
                      width="300"
                      height="150"
                    ></iframe>
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
            )}
            {where === 2 && (
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
            )}
            {where === 3 && (
              <>
                <S.PageTitle>{t("basicInfo.menu3.title")}</S.PageTitle>
                <S.RedLine></S.RedLine>
                <S.Person>
                  <S.Part>교수</S.Part>
                  <S.Name>이순재</S.Name>
                  <S.Mail>
                    서울시 성북구 안암로 145 고려대학교 자연계캠퍼스
                    메디힐지구환경관 510호
                  </S.Mail>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>연구</S.Part>
                  <S.Name>배민서</S.Name>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>연구, 백엔드 개발</S.Part>
                  <S.Name>최이준</S.Name>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>연구</S.Part>
                  <S.Name>한성경</S.Name>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>기획</S.Part>
                  <S.Name>김나영</S.Name>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>기획</S.Part>
                  <S.Name>임정아</S.Name>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>프론트엔드 개발</S.Part>
                  <S.Name>차수지</S.Name>
                </S.Person>
                <hr />
                <S.Person>
                  <S.Part>백엔드 개발</S.Part>
                  <S.Name>나혁주</S.Name>
                </S.Person>
                <hr />
              </>
            )}
          </S.TextContainer>
        </S.BasicInfoContainer>
      </S.HomeContainer>
    </>
  );
}