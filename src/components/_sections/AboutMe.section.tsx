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
        <div className={'flex justify-between items-start'}>
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
        <h1 className="font-bold text-2xl lg:text-4xl mb-1 lg:mb-3 tracking-tight">
          Ricardo Gouveia
        </h1>
        <h2 className="font-medium text-lg md:text-xl lg:text-2xl smooth-text-color tracking-tight mb-2">
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
