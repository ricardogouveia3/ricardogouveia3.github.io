import { useEffect, useState } from 'react';
import { useBreakpoint } from '@hooks/useBreakpoint.ts';
import Card from '../Card/Card.tsx';
import ExperienceItem from '../ExperienceItem.tsx';
import { Experience } from '../../types/Experience.type.ts';
import { GridClassNames } from '@constants/layout.ts';
import { useTranslation } from 'react-i18next';
import { fetchExperiences } from '@apis/experiences.ts';

export default function ExperienceSection() {
  const { t } = useTranslation();
  const { isAboveMd } = useBreakpoint('md');
  const [loading, setLoading] = useState(true);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetchExperiences().then(experiences => {
      setExperiences(experiences);
      setLoading(false);
    });
  }, []);

  const maxRendered = isAboveMd ? experiences.length : 3;
  const itemsToRender = experiences.slice(0, maxRendered);

  return (
    <Card loading={loading} classNames={`${GridClassNames.experience} flex flex-col`}>
      <h3 className="mb-4 text-lg/7 font-medium text-gray-950 dark:text-white">
        {t('experience.title')}
      </h3>
      <ol className="relative flex flex-col items-stretch border-s border-quartz-900 dark:border-quartz-400">
        {itemsToRender.map((experience: Experience) => (
          <ExperienceItem
            key={experience.id}
            jobTitle={experience.jobTitle}
            company={experience.company}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        ))}
      </ol>
    </Card>
  );
}
