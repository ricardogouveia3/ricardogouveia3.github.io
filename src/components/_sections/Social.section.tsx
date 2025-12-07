import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GridClassNames } from '@constants/layout.ts';
import { fetchSocialItems } from '@apis/social.ts';
import { SocialItem } from '../../types/Social.type.ts';
import { IconAdapter } from '@components/adapters/IconAdapter.tsx';
import { Button, Card } from 'barro-ui';

export default function SocialSection() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [socialItems, setSocialItems] = useState<SocialItem[]>([]);

  useEffect(() => {
    fetchSocialItems().then(items => {
      setSocialItems(items);
      setLoading(false);
    });
  }, []);

  const renderSocialItems = (items: SocialItem[]) => {
    return items.map(({ iconName, label, hoverColor, link = '' }) => (
      <Button
        key={label}
        rounded="full"
        type="link"
        link={link}
        hoverColor={hoverColor}
        icon={{
          name: () => <IconAdapter name={iconName} className="mr-2 h-4 w-4" />,
          position: 'left',
        }}
      >
        {label}
      </Button>
    ));
  };

  return (
    <Card
      loading={loading}
      className={`${GridClassNames.social}`}
      contentClassName="flex flex-col p-4 lg:p-6 gap-4"
    >
      <p className="text-lg/7 font-medium text-white">{t('social.getInTouch')}</p>
      <div className="flex flex-wrap gap-2">{renderSocialItems(socialItems)}</div>
    </Card>
  );
}
