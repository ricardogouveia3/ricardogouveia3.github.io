import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MarqueeContent from '../Marquee/MarqueeContent.tsx';
import { GridClassNames } from '@constants/layout.ts';
import { useStack } from '@hooks/useStack.ts';
import { Card } from 'barro-ui';

const MarqueeSection = () => {
  const { t } = useTranslation();
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const { tech: stack, loading } = useStack();

  const handleInteraction = useCallback(() => setIsHoveredOrFocused(true), []);
  const handleLeaveOrBlur = useCallback(() => setIsHoveredOrFocused(false), []);

  return (
    <Card className={GridClassNames.marquee} contentClassName="p-0" loading={loading}>
      <section
        className="h-full p-4 lg:p-6"
        aria-labelledby="marquee-header"
        onMouseOver={handleInteraction}
        onFocus={handleInteraction}
        onMouseLeave={handleLeaveOrBlur}
        onBlur={handleLeaveOrBlur}
      >
        <p id="marquee-header" className="default-text-color text-lg/7 font-medium tracking-tight">
          {t('marquee.stack')}
        </p>

        <MarqueeContent isHoveredOrFocused={isHoveredOrFocused} stack={stack} loading={loading} />
      </section>
    </Card>
  );
};

export default memo(MarqueeSection);
