import { useTranslation } from "react-i18next";
import { MEMBER_LIST } from "../../../data/members";
import * as S from "../BasicInfo.style";

const Team = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <S.PageTitle>{t("basicInfo.menu3.title")}</S.PageTitle>
      <S.RedLine></S.RedLine>
      {MEMBER_LIST.map((member) => {
        return (
          <>
            <S.Person key={member.id}>
              <S.Part>{t(`basicInfo.menu3.person${member.id}.team`)}</S.Part>
              <S.Name>{t(`basicInfo.menu3.person${member.id}.name`)}</S.Name>
              {member.id === 1 && (
                <S.Mail>
                  {t(`basicInfo.menu3.person${member.id}.address`)}
                </S.Mail>
              )}
            </S.Person>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default Team;
