import PageContainer from '../containers/PageContainer.tsx';
import { useTranslation } from 'react-i18next';
import ButtonLink from '@components/Buttons/ButtonLink.tsx';
import { Card, Icon } from 'barro-ui';
import { logos } from '@assets/images.ts';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Card contentClassnames="text-center justify-center items-center default-text-color p-6 lg:p-8">
        <div className={'px-16 lg:px-32'}>
          <a className={'mb-4 flex w-full items-center justify-center lg:mb-6'} href={'/'}>
            <Icon
              icon={logos.rcrd}
              className="max-h-20 max-w-24 transition-all lg:max-h-24 lg:max-w-32"
            />
          </a>

          <h1 className="mb-3 text-2xl font-bold tracking-tight lg:mb-5 lg:text-4xl">
            {t('notFound.title')}
          </h1>
          <h2 className="smooth-text-color mb-8 text-lg font-medium tracking-tight md:text-xl lg:mb-10 lg:text-2xl">
            {t('notFound.description')}
          </h2>
        </div>

        <ButtonLink className={'hover-background w-full py-2.5'} round="lg" link={'/'}>
          {t('notFound.backHome')}
        </ButtonLink>
      </Card>
    </PageContainer>
  );
}
