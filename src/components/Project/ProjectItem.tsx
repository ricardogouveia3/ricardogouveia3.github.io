import { Project } from '../../types/Project.type.ts';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { motion } from 'framer-motion';
import { cardBorderMotionProps } from '@layout/Animation.tsx';
import { useState } from 'react';

export default function ProjectItem({
  project,
  expanded = false,
}: Readonly<{ project: Project; expanded?: boolean }>) {
  const { t } = useTranslation();
  const height = expanded ? 'min-h-60' : 'h-full';
  const tagsToRender = project.tags.slice(0, 4);

  const description = i18n.language === 'pt-br' ? project.descriptionBr : project.descriptionEn;

  const [showBorder, setShowBorder] = useState(false);

  const renderProject = () => {
    return (
      <motion.a
        href={project.link}
        onHoverStart={() => setShowBorder(true)}
        onHoverEnd={() => setShowBorder(false)}
        onFocus={() => setShowBorder(true)}
        onBlur={() => setShowBorder(false)}
        target="_blank"
        rel="noopener noreferrer"
        className={`default-border h-${height} relative flex overflow-hidden rounded-lg p-px`}
      >
        {showBorder && (
          <motion.div
            className="pointer-events-none absolute inset-0"
            animate="animate"
            {...cardBorderMotionProps}
          />
        )}

        <div
          className={`smooth-noisy-background relative z-10 flex h-full w-full flex-col justify-between overflow-hidden rounded-lg`}
        >
          <div className={`above-noise-content-background hover-background`}>
            <div className="flex flex-col gap-4 p-4 lg:p-6">
              <h3 className="default-text-color text-lg font-medium">{project.title}</h3>
              {expanded && <p className="smooth-text-color line-clamp-3">{description}</p>}
            </div>

            <div className="flex flex-wrap gap-2 p-4 lg:p-6">
              {tagsToRender.map((tag: string) => (
                <span
                  key={tag}
                  className="smooth-text-color default-border rounded-full px-2 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.a>
    );
  };

  const renderSoon = () => {
    return (
      <div
        className={`default-border flex h-full cursor-not-allowed flex-col justify-center overflow-hidden rounded-lg text-center align-middle`}
      >
        <h3 className="smooth-text-color p-8 text-lg font-medium lg:p-12">{t('projects.soon')}</h3>
      </div>
    );
  };

  return project.soon ? renderSoon() : renderProject();
}
