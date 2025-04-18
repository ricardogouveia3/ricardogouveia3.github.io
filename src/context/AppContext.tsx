import { createContext, useState, useEffect, ReactNode } from "react";
import i18n from "@utils/i18n";

interface AppContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: string;
  toggleLanguage: () => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(language).then();
  }, [language]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode: () => setDarkMode(!darkMode),
        language,
        toggleLanguage: () => setLanguage(language === "en" ? "pt-br" : "en"),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
