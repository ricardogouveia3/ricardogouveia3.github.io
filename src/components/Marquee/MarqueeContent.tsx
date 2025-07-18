import Marquee from 'react-fast-marquee';
import MarqueeItem from './MarqueeItem';
import { useBreakpoint } from '@hooks/useBreakpoint.ts';
import { memo, useContext, useMemo } from 'react';
import { MarqueeContentProps, MarqueeItemData } from '../../types/Marquee.type.ts';
import { ThemeContext } from '@context/ThemeContext.tsx';

const MarqueeContent = ({
  isHoveredOrFocused = false,
  stack,
  loading,
}: Readonly<MarqueeContentProps>) => {
  const { darkMode } = useContext(ThemeContext) ?? { darkMode: true };
  const { isAboveSm } = useBreakpoint('sm');
  const marqueeGradientWidth = isAboveSm ? 100 : 20;
  const marqueeGradientColor = darkMode ? '#242424' : '#ffffff';

  const [marqueeItemsLeft, marqueeItemsRight] = useMemo(() => {
    const half = Math.ceil(stack.length / 2);
    return [stack.slice(0, half), stack.slice(half)];
  }, [stack]);

  const renderMarqueeItems = useMemo(
    () => (items: MarqueeItemData[]) =>
      items.map(({ iconName, label, hoverColor }) => (
        <MarqueeItem
          iconName={iconName}
          key={label}
          hoverColor={hoverColor}
          isHoveredOrFocused={isHoveredOrFocused}
        >
          {label}
        </MarqueeItem>
      )),
    [isHoveredOrFocused],
  );

  if (loading) {
    return (
      <div className="flex h-24 items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        Carregando stack...
      </div>
    );
  }

  const marquees: { items: MarqueeItemData[]; direction: 'left' | 'right'; speed: number }[] = [
    { items: marqueeItemsLeft, direction: 'left', speed: 10 },
    { items: marqueeItemsRight, direction: 'right', speed: 20 },
  ];

  return (
    <div className="mt-3 flex flex-col gap-2">
      {marquees.map(({ items, direction, speed }) => (
        <Marquee
          key={direction}
          play={!isHoveredOrFocused}
          direction={direction}
          gradient
          gradientColor={marqueeGradientColor}
          gradientWidth={marqueeGradientWidth}
          speed={speed}
        >
          {renderMarqueeItems(items)}
        </Marquee>
      ))}
    </div>
  );
};

export default memo(MarqueeContent);
