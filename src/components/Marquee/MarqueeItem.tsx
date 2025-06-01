import Icon from '@components/Icon';
import { getContrastColor } from '@utils/color';
import { MarqueeItemProps } from '../../types/Marquee.type';

export default function MarqueeItem({
  children,
  iconName,
  hoverColor = '#000000',
  isHoveredOrFocused = false,
  darkMode = true,
}: Readonly<MarqueeItemProps>) {
  const defaultTextColor = darkMode ? '#FFFFFF' : '#1A202C';
  const bgColor = isHoveredOrFocused ? hoverColor : 'unset';
  const textColor = isHoveredOrFocused ? getContrastColor(hoverColor) : defaultTextColor;

  return (
    <div
      className="default-border mx-2 flex items-center justify-center gap-2 rounded-lg border px-4 py-2 transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <Icon name={iconName} color={textColor} />
      <span className="default-text-color text-xs font-semibold" style={{ color: textColor }}>
        {children}
      </span>
    </div>
  );
}
