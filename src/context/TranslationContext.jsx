import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Translation = createContext();

const TranslationContext = ({children}) => {

  const { t, i18n } = useTranslation();
  const language = i18n.language;

  function handleClick(lang) {
      i18n.changeLanguage(lang);
  }

  return (
    <Translation.Provider value={{handleClick, t, language}}>
      {children}
    </Translation.Provider>
  )
}

export default TranslationContext