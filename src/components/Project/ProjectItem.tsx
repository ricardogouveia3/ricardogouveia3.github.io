import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Badge, Card } from 'barro-ui';
import { Project } from '../../types/Project.type.ts';

export default function ProjectItem({
  project,
  expanded = false,
}: Readonly<{ project: Project; expanded?: boolean }>) {
  const { t } = useTranslation();

  const description = useMemo(
    () => (i18n.language === 'pt-br' ? project.descriptionBr : project.descriptionEn),
    [project.descriptionBr, project.descriptionEn],
  );

  const tagsToRender = project.tags.slice(0, 4);

  const renderProject = () => (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block ${expanded ? 'min-h-60' : 'h-full'}`}
    >
      <Card
        animatedBorder={true}
        className="cursor-custom-pointer h-full"
        contentClassName="smooth-noisy-background h-full p-0"
      >
        <div className="above-noise-content-background hover-background flex h-full flex-col justify-between">
          <div className="flex flex-col gap-4 p-4 lg:p-6">
            <h3 className="default-text-color text-lg font-medium">{project.title}</h3>
            {expanded && <p className="smooth-text-color line-clamp-3">{description}</p>}
          </div>
          <div className="flex flex-wrap gap-2 p-4 lg:p-6">
            {tagsToRender.map(tag => (
              <Badge
                key={tag}
                className="default-border"
                variant="default" // or 'outline', check available variants if needed
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </a>
  );

  const renderSoon = () => (
    <Card
      animatedBorder={false}
      className="cursor-custom-not-allowed h-full"
      contentClassName="flex h-full flex-col justify-center text-center"
    >
      <h3 className="smooth-text-color p-8 text-lg font-medium lg:p-12">{t('projects.soon')}</h3>
    </Card>
  );

  return project.soon ? renderSoon() : renderProject();
}
