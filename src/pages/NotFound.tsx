import PageContainer from '../containers/PageContainer.tsx';
import Card from '@components/Card/Card.tsx';
import { useTranslation } from 'react-i18next';
import ButtonLink from '@components/Buttons/ButtonLink.tsx';
import Icon from '@components/Icon';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Card contentClassnames="text-center justify-center items-center default-text-color p-6 lg:p-8">
        <div className={'px-16 lg:px-32'}>
          <a className={'w-full flex justify-center items-center mb-4 lg:mb-6'} href={'/'}>
            <Icon
              name="rcrd"
              className="max-w-24 lg:max-w-32 max-h-20 lg:max-h-24 transition-all"
            />
          </a>

          <h1 className="font-bold text-2xl lg:text-4xl mb-3 lg:mb-5 tracking-tight">
            {t('notFound.title')}
          </h1>
          <h2 className="font-medium text-lg md:text-xl lg:text-2xl mb-8 lg:mb-10 smooth-text-color tracking-tight">
            {t('notFound.description')}
          </h2>
        </div>

        <ButtonLink className={'w-full hover-background py-2.5'} round="lg" link={'/'}>
          {t('notFound.backHome')}
        </ButtonLink>
      </Card>
    </PageContainer>
  );
}
