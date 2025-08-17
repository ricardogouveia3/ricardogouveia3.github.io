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
    <li className="ms-4 mb-4 last:mb-0 lg:mb-7">
      <div className="border-quartz-100 bg-quartz-400 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border" />

      <div>
        <h4 className={`default-text-color font-medium text-wrap ${experienceStyle}`}>
          {jobTitle}
          <div>
            <span className="smooth-text-color font-normal">&nbsp;@&nbsp;</span>
            {company}
          </div>
        </h4>

        <time className="smooth-text-color mb-1 text-sm leading-none font-normal italic">
          {startDate} - {endDate ?? t('experience.present')}
        </time>
      </div>
    </li>
  );
};

export default ExperienceItem;
