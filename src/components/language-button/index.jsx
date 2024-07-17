import { useEffect, useState } from "react";
import styled from "styled-components";
import i18n from "../../i18next";

const LanguageButton = () => {
  const [lang, setLang] = useState(
    () => localStorage.getItem("locale") || "kr"
  );

  useEffect(() => {
    const currLang = localStorage.getItem("locale");
    if (currLang) {
      setLang(currLang);
      const nextLang = currLang === "kr" ? "en" : "kr";
      i18n.changeLanguage(nextLang.toLowerCase());
    } else {
      localStorage.setItem("locale", "kr");
      setLang("en");
    }
  }, [lang]);

  const handleLangClick = () => {
    const nextLang = lang === "kr" ? "en" : "kr";
    setLang(nextLang);
    localStorage.setItem("locale", nextLang);
    i18n.changeLanguage(lang.toLowerCase());
  };

  return <Button onClick={handleLangClick}>{lang}</Button>;
};

export default LanguageButton;

const Button = styled.div`
  width: 5rem;
  height: 3rem;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 0.1rem solid black;
  cursor: pointer;
`;
