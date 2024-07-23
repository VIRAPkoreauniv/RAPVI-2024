import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ContentMenu from "../../components/content-menu";
import Header from "../../components/header";
import * as S from "../basic-info/BasicInfo.style";
import Guide from "./components/guide";
import Tutorial from "./components/tutorial";

export default function DocsPage() {
  const { t } = useTranslation("docs");
  const [where, setWhere] = useState(1);

  const MENU_LIST = [
    { id: 1, text: t("menu1.title") },
    { id: 2, text: t("menu2.title") },
  ];

  const CONTENT_MAP = {
    1: <Guide />,
    2: <Tutorial />,
  };

  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  return (
    <S.HomeContainer>
      <Header />
      <S.BasicInfoContainer>
        <ContentMenu
          title={t("title")}
          menuList={MENU_LIST}
          onClick={(id) => setWhere(id)}
          currWhere={where}
        />
        <S.TextContainer>{CONTENT_MAP[where]}</S.TextContainer>
      </S.BasicInfoContainer>
    </S.HomeContainer>
  );
}
