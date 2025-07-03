import { useTranslation } from 'react-i18next';
import { GridClassNames } from '@constants/layout.ts';
import { Card } from 'barro-ui';

export default function PhraseSection() {
  const { t } = useTranslation();

  return (
    <Card classNames={`${GridClassNames.phrase}`}>
      <p className="smooth-text-color text-base">{t('phrase.first')}</p>
      <br />
      <p className="default-text-color text-lg font-medium">{t('phrase.second')}</p>
    </Card>
  );
}
