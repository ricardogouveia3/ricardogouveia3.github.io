import { useEffect, useState } from 'react';
import Card from '../Card/Card.tsx';
import { useTranslation } from 'react-i18next';
import { GridClassNames } from '@constants/layout.ts';
import { images } from '@assets/images.ts';
import ButtonLink from '@components/Buttons/ButtonLink.tsx';
import { useRemoteConfig } from '@hooks/useRemoteConfig.ts';
import { fetchCV } from '@apis/curriculum.ts';
import Avatar from '@components/Avatar.tsx';
import TextUnderline from '@components/TextUnderline.tsx';

export default function AboutMe() {
  const { t } = useTranslation();
  const avatar = images.avatar;
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);

  const { value: showCVdownloadButton } = useRemoteConfig('websiteAboutMeShowCVdownloadButton');

  const handleInteraction = () => {
    setIsHoveredOrFocused(true);
  };

  const handleLeaveOrBlur = () => {
    setIsHoveredOrFocused(false);
  };

  const [cvLink, setCVlink] = useState<string>('');

  useEffect(() => {
    fetchCV()
      .then(data => {
        setCVlink(data[0].link);
      })
      .catch(error => {
        console.error('Error fetching cv link:', error);
      });
  }, []);

  return (
    <Card classNames={GridClassNames.aboutMe} contentClassnames="">
      <div
        className="default-text-color p-4 lg:p-6"
        onMouseOver={handleInteraction}
        onFocus={handleInteraction}
        onMouseLeave={handleLeaveOrBlur}
        onBlur={handleLeaveOrBlur}
      >
        <div className={'flex items-start justify-between'}>
          {avatar && (
            <Avatar
              src={avatar}
              alt="Ricardo Gouveia"
              isHoveredOrFocused={isHoveredOrFocused}
              onHoverStart={handleInteraction}
              onHoverEnd={handleLeaveOrBlur}
            />
          )}
          {!!showCVdownloadButton && cvLink && (
            <ButtonLink
              round="lg"
              link={cvLink}
              icon={'arrowDown'}
              iconPosition={'right'}
              iconClassnames={'max-h-4'}
            >
              CV
            </ButtonLink>
          )}
        </div>
        <h1 className="mb-1 text-2xl font-bold tracking-tight lg:mb-3 lg:text-4xl">
          Ricardo Gouveia
        </h1>
        <h2 className="smooth-text-color mb-2 text-lg font-medium tracking-tight md:text-xl lg:text-2xl">
          {t('aboutMe.a')}{' '}
          <span className="default-text-color font-bold">{t('aboutMe.primaryRole')}</span>{' '}
          {t('aboutMe.and')}
          &nbsp;
          <span className="default-text-color font-bold">{t('aboutMe.secondaryRole')}</span>{' '}
          {t('aboutMe.currentlyWorking')}
          &nbsp;
          <TextUnderline
            href="https://www.thoughtworks.com/"
            isHoveredOrFocused={isHoveredOrFocused}
          >
            Thoughtworks
          </TextUnderline>
        </h2>
      </div>
    </Card>
  );
}
