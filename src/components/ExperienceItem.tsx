import {useTranslation} from "react-i18next";
import {ExperienceItemProps} from "../types/Experience.type.ts";

const ExperienceItem = ({ jobTitle, company, startDate, endDate }: Readonly<ExperienceItemProps>) => {
  const { t } = useTranslation();
  const experienceStyle = endDate ? 'opacity-60 text-sm lg:text-base line-through' : 'text-base lg:text-lg';

  return (
    <li className="mb-4 lg:mb-7 ms-4 last:mb-0">
      <div className="absolute w-3 h-3 bg-quartz-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-quartz-100 dark:bg-quartz-400" />

      <div>
        <h4 className={`font-medium default-text-color text-wrap  ${experienceStyle}`}>
          {jobTitle}
          <div>
            <span className="smooth-text-color font-normal">&nbsp;@&nbsp;</span>
            {company}
          </div>
        </h4>

        <time className="mb-1 text-sm font-normal italic leading-none smooth-text-color">
          {startDate} - {endDate ?? t('experience.present')}
        </time>
      </div>

    </li>
  );
}

export default ExperienceItem;
