import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageButton from "../language-button";
import Logo from "../logo";
import * as S from "./Header.style";
import { HeaderMenuList } from "./header";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("home");

  return (
    <>
      <S.HeaderContainer>
        <S.Head>
          <Logo />
          <LanguageButton />
        </S.Head>
        <S.MenuWrapper>
          {HeaderMenuList.map((menu) => {
            return (
              <S.HorizontalMenuTap
                key={menu.value}
                onClick={() => {
                  navigate(menu.url);
                }}
              >
                {menu.isNeedTranslate ? t(`header.${menu.value}`) : menu.value}
              </S.HorizontalMenuTap>
            );
          })}
        </S.MenuWrapper>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
