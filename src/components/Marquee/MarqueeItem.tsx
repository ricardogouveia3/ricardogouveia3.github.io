import Icon from "@components/Icon";
import { getContrastColor } from "@utils/color";
import { MarqueeItemProps } from "../../types/Marquee.type";

export default function MarqueeItem({
                                      children,
                                      iconName,
                                      hoverColor = "#000000",
                                      isHoveredOrFocused = false,
                                      darkMode = true,
                                    }: Readonly<MarqueeItemProps>) {
  const defaultTextColor = darkMode ? "#FFFFFF" : "#1A202C";
  const bgColor = isHoveredOrFocused ? hoverColor : "unset";
  const textColor = isHoveredOrFocused ? getContrastColor(hoverColor) : defaultTextColor;

  return (
    <div
      className="flex items-center px-4 mx-2 py-2 border rounded-lg gap-2 justify-center default-border transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <Icon name={iconName} color={textColor} />
      <span className="text-xs font-semibold default-text-color" style={{ color: textColor }}>
        {children}
      </span>
    </div>
  );
}
