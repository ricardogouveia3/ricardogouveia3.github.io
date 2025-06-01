import { useTranslation } from 'react-i18next';
import { ExperienceItemProps } from '../types/Experience.type.ts';

const ExperienceItem = ({
  jobTitle,
  company,
  startDate,
  endDate,
}: Readonly<ExperienceItemProps>) => {
  const { t } = useTranslation();
  const experienceStyle = endDate
    ? 'opacity-60 text-sm lg:text-base line-through'
    : 'text-base lg:text-lg';

  return (
    <li className="mb-4 ms-4 last:mb-0 lg:mb-7">
      <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-quartz-700 dark:border-quartz-100 dark:bg-quartz-400" />

      <div>
        <h4 className={`default-text-color text-wrap font-medium ${experienceStyle}`}>
          {jobTitle}
          <div>
            <span className="smooth-text-color font-normal">&nbsp;@&nbsp;</span>
            {company}
          </div>
        </h4>

        <time className="smooth-text-color mb-1 text-sm font-normal italic leading-none">
          {startDate} - {endDate ?? t('experience.present')}
        </time>
      </div>
    </li>
  );
};

export default ExperienceItem;
