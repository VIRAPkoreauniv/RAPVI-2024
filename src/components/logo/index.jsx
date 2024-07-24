import { useNavigate } from "react-router-dom";
import * as S from "./Logo.style";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <S.LogoContainer>
      <S.Title
        onClick={() => {
          navigate("/");
        }}
      >
        RAPVI
      </S.Title>
      <S.FullTxtBox>
        <S.FullTxt>Risk Assessment Program</S.FullTxt>
        <S.FullTxt>for Vapor Intrusion</S.FullTxt>
      </S.FullTxtBox>
    </S.LogoContainer>
  );
};

export default Logo;
