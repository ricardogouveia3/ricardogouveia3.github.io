import {useEffect, useState} from "react";
import Card from "../Card/Card.tsx";
import { useTranslation } from "react-i18next";
import { GridClassNames } from "@constants/layout.ts";
import { images } from "@assets/images.ts";
import ButtonLink from "@components/Buttons/ButtonLink.tsx";
import {useRemoteConfig} from "@hooks/useRemoteConfig.ts";
import {fetchCV} from "@apis/curriculum.ts";

export default function AboutMe() {
  const { t } = useTranslation();
  const avatar = images.avatar;
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);

  const { value: showCVdownloadButton } = useRemoteConfig("websiteAboutMeShowCVdownloadButton");

  const hoverLinkClassnames = isHoveredOrFocused ? `decoration-cyan-500` : ``;
  const hoverPhotoClassnames = isHoveredOrFocused ? `scale-110 p-0 rotate-6` : `p-2`;

  const handleInteraction = () => {
    setIsHoveredOrFocused(true);
  };

  const handleLeaveOrBlur = () => {
    setIsHoveredOrFocused(false);
  };

  const [cvLink, setCVlink] = useState<string>('');

  useEffect(() => {

    fetchCV()
      .then((data) => {
        setCVlink(data[0].link);
      })
      .catch((error) => {
        console.error("Error fetching cv link:", error);
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
          <picture>
            <source srcSet={avatar} type="image/webp" />
            <img
              src={avatar}
              alt="Ricardo Gouveia"
              decoding="async"
              loading="lazy"
              className={`max-w-24 lg:max-w-32 rounded-full mb-2 lg:mb-3 border-4 border-black dark:border-white transition-all ${hoverPhotoClassnames}`}
              width={130}
              height={130}
            />
          </picture>
        )}
          {(!!showCVdownloadButton && cvLink) && <ButtonLink round="lg" link={cvLink} icon={'arrowDown'} iconPosition={'right'} iconClassnames={'max-h-4'}>CV</ButtonLink>}
        </div>
        <h1 className="font-bold text-2xl lg:text-4xl mb-1 lg:mb-3 tracking-tight">Ricardo Gouveia</h1>
        <h2 className="font-medium text-lg md:text-xl lg:text-2xl smooth-text-color tracking-tight mb-2">
          {t('aboutMe.a')} <span className="default-text-color font-bold">{t('aboutMe.primaryRole')}</span> {t('aboutMe.and')}&nbsp;
          <span className="default-text-color font-bold">{t('aboutMe.secondaryRole')}</span> {t('aboutMe.currentlyWorking')}&nbsp;
          <a
            href="https://www.thoughtworks.com/"
            target="_blank"
            className={`font-bold inline-block default-text-color underline decoration-wavy underline-offset-8 transition-colors ${hoverLinkClassnames}`}
          >
            Thoughtworks
          </a>
        </h2>
      </div>
    </Card>
  );
}
