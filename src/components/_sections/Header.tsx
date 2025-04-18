import React, { FC } from "react";
import ToggleButton from "@components/Buttons/ToggleButton.tsx";
import { icons, images } from "@assets/images.ts";
import {useTheme} from "@hooks/useTheme.ts";
import {HeaderProps} from "../../types/Header.types.ts";

const Header: FC<HeaderProps> = ({ language, handleLanguageToggle }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  const ToggleDarkModeIcon: React.ComponentType<React.SVGProps<SVGSVGElement>> =
    darkMode ? icons.sun : icons.moon;

  const ToggleLanguageIcon: string = language === "pt-br" ? images.flag_gb : images.flag_br;

  return (
    <header className="flex justify-center gap-3">
      <div className="flex flex-row gap-2">
        <ToggleButton onClick={toggleDarkMode} icon={ToggleDarkModeIcon} />
        <ToggleButton onClick={handleLanguageToggle} icon={ToggleLanguageIcon} />
      </div>
    </header>
  );
};

export default Header;
