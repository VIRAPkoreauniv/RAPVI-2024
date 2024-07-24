import * as S from "./ContentMenu.style";

const ContentMenu = ({ title, menuList, onClick, currWhere }) => {
  return (
    <S.LeftMenu>
      <h2>{title}</h2>
      {menuList.map((menu) => {
        return (
          <S.TapWrapper
            key={menu.id}
            onClick={() => onClick(menu.id)}
            $currWhere={currWhere}
            $menuId={menu.id}
          >
            <S.MenuTap>
              <strong>{menu.text}</strong>
            </S.MenuTap>
          </S.TapWrapper>
        );
      })}
    </S.LeftMenu>
  );
};

export default ContentMenu;
