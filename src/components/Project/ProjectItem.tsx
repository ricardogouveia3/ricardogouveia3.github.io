import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Badge, Card } from 'barro-ui';
import { Project } from '../../types/Project.type.ts';

const MEDIA_FALLBACK_COLORS = [
  'bg-sky-300 dark:bg-sky-950',
  'bg-amber-300 dark:bg-amber-950',
  'bg-emerald-300 dark:bg-emerald-950',
  'bg-rose-300 dark:bg-rose-950',
  'bg-cyan-300 dark:bg-cyan-950',
];

export default function ProjectItem({
  project,
  expanded = false,
  highlighted = false,
  featured = false,
}: Readonly<{ project: Project; expanded?: boolean; highlighted?: boolean; featured?: boolean }>) {
  const { t } = useTranslation();

  const description = useMemo(
    () => (i18n.language === 'pt-br' ? project.descriptionBr : project.descriptionEn),
    [project.descriptionBr, project.descriptionEn],
  );

  const tagsToRender = project.tags.slice(0, 4);
  const colorSeed = String(project.id ?? project.title);
  const colorIndex = Array.from(colorSeed).reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  );
  const mediaFallbackColor = MEDIA_FALLBACK_COLORS[colorIndex % MEDIA_FALLBACK_COLORS.length];

  const renderProject = () => (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block h-full ${expanded ? 'min-h-60' : ''}`}
    >
      <Card
        animatedBorder={true}
        className="cursor-custom-pointer h-full"
        contentClassName="smooth-noisy-background h-full p-0"
      >
        <div className="above-noise-content-background hover-background flex h-full flex-col justify-between">
          {highlighted && (
            <div
              className={`relative block min-h-0 flex-1 overflow-hidden max-lg:hidden ${mediaFallbackColor}`}
              style={featured ? { flexGrow: 2 } : undefined}
            >
              {project.imgSrc && (
                <img
                  src={project.imgSrc}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>
          )}
          <div
            className={`flex h-full flex-col justify-between ${highlighted ? 'lg:h-auto lg:min-h-0 lg:flex-1' : ''
              }`}
          >
            <div className={`flex flex-col gap-4 ${highlighted ? 'p-4 lg:p-4' : 'p-4 lg:p-6'}`}>
              <h3 className="default-text-color text-lg font-medium">{project.title}</h3>
              {expanded && <p className="smooth-text-color line-clamp-3">{description}</p>}
            </div>
            <div className={`flex flex-wrap gap-2 ${highlighted ? 'p-4 lg:p-4' : 'p-4 lg:p-6'}`}>
              {tagsToRender.map(tag => (
                <Badge key={tag} className="default-border" variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
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
