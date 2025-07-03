import { useTranslation } from 'react-i18next';
import { GridClassNames } from '@constants/layout.ts';
import { Card } from 'barro-ui';

export default function PhraseSection() {
  const { t } = useTranslation();

  return (
    <Card classNames={`${GridClassNames.phrase}`}>
      <p className="smooth-text-color text-sm lg:text-lg">{t('phrase.first')}</p>
      <br />
      <p className="default-text-color text-base font-medium lg:text-xl">{t('phrase.second')}</p>
    </Card>
  );
}
