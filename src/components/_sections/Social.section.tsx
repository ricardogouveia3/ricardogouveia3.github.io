import { useEffect, useState } from 'react';
import SocialLink from '../Buttons/SocialLink.tsx';
import { useTranslation } from 'react-i18next';
import { GridClassNames } from '@constants/layout.ts';
import { fetchSocialItems } from '@apis/social.ts';
import { SocialItem } from '../../types/Social.type.ts';
import { Card } from 'barro-ui';

export default function SocialSection() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [socialItems, setSocialItems] = useState<SocialItem[]>([]);

  useEffect(() => {
    fetchSocialItems().then(socialItems => {
      setSocialItems(socialItems);
      setLoading(false);
    });
  }, []);

  const renderSocialItems = (items: SocialItem[]) => {
    return items.map(({ iconName, label, hoverColor, link = '' }) => (
      <SocialLink iconName={iconName} key={label} hoverColor={hoverColor} link={link}>
        {label}
      </SocialLink>
    ));
  };

  return (
    <Card
      loading={loading}
      classNames={`${GridClassNames.social}`}
      contentClassnames="p-4 lg:p-6 flex flex-col gap-4"
    >
      <p className="text-lg/7 font-medium text-gray-950 dark:text-white">
        {t('social.getInTouch')}
      </p>
      <div className="flex flex-wrap gap-2">{renderSocialItems(socialItems)}</div>
    </Card>
  );
}
