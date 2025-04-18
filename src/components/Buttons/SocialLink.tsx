import { useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";
import Icon from "@components/Icon";
import { getContrastColor } from "@utils/color";
import {SocialLinkProps} from "../../types/Button.type.ts";

export default function SocialLink({
  children,
  iconName,
  link,
  hoverColor = "#000000",
  darkMode = true,
}: Readonly<SocialLinkProps>) {
  const defaultTextColor = darkMode ? "#FFFFFF" : "#1A202C";

  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState(defaultTextColor);

  useEffect(() => {
    setBgColor("transparent");
    setTextColor(defaultTextColor);
  }, [darkMode, defaultTextColor]);

  const handleMouseEnter = () => {
    setBgColor(hoverColor);
    setTextColor(getContrastColor(hoverColor));
  };

  const handleMouseLeave = () => {
    setBgColor("transparent");
    setTextColor(defaultTextColor);
  };

  return (
    <ButtonLink
      link={link}
      round="full"
      hoverColor={hoverColor}
      className="transition-colors duration-300 ease-in-out"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {iconName && <Icon name={iconName} color={textColor} />}
      &nbsp;
      <span
        className="text-xs font-semibold"
        style={{ color: textColor }}
      >
        {children}
      </span>
    </ButtonLink>
  );
}
