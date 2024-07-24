import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ContentMenu from "../../components/content-menu";
import Header from "../../components/header";
import * as S from "./BasicInfo.style";
import Introduction from "./components/introduction";
import Team from "./components/team";
import What from "./components/what";

export default function BasicInfoPage() {
  const { t } = useTranslation("home");
  const [where, setWhere] = useState(1);

  const MENU_LIST = [
    { id: 1, text: t("basicInfo.menu1.title") },
    { id: 2, text: t("basicInfo.menu2.title") },
    { id: 3, text: t("basicInfo.menu3.title") },
  ];

  const CONTENT_MAP = {
    1: <Introduction />,
    2: <What />,
    3: <Team />,
  };

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  return (
    <>
      <S.HomeContainer>
        <Header />
        <S.BasicInfoContainer>
          <ContentMenu
            title={t("basicInfo.menuTitle")}
            menuList={MENU_LIST}
            onClick={(id) => setWhere(id)}
            currWhere={where}
          />
          <S.TextContainer>{CONTENT_MAP[where]}</S.TextContainer>
        </S.BasicInfoContainer>
      </S.HomeContainer>
    </>
  );
}
