import { Project } from "../../types/Project.type.ts";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import { motion } from "framer-motion";
import {cardBorderMotionProps} from "@layout/Animation.tsx";
import {useState} from "react";

export default function ProjectItem({ project, expanded = false }: Readonly<{ project: Project, expanded?: boolean }>) {
  const { t } = useTranslation();
  const height = expanded ? "min-h-60" : "h-full";
  const tagsToRender = project.tags.slice(0, 4);
  
  const description = i18n.language === "pt-br" ? project.descriptionBr : project.descriptionEn;

  const [showBorder, setShowBorder] = useState(false);

  const renderProject = ()=> {
    return (
  <motion.a href={project.link}
            onHoverStart={() => setShowBorder(true)}
            onHoverEnd={() => setShowBorder(false)}
            onFocus={() => setShowBorder(true)}
            onBlur={() => setShowBorder(false)}
     target="_blank"
     rel="noopener noreferrer"
     className={`relative flex overflow-hidden rounded-lg default-border  h-${height} p-[1px]`}>

    {showBorder && (
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate="animate"
        {...cardBorderMotionProps}
      />
    )}

    <div className={`relative flex flex-col justify-between overflow-hidden rounded-lg smooth-noisy-background z-10 h-full w-full`}>
      <div className={`above-noise-content-background hover-background`}>
        <div className="flex flex-col gap-4 p-4 lg:p-6">
          <h3 className="text-lg font-medium default-text-color">{project.title}</h3>
          {expanded && <p className="line-clamp-3 smooth-text-color">{description}</p>}
        </div>

        <div className="flex flex-wrap gap-2 p-4 lg:p-6">
          {tagsToRender.map((tag: string) => (
            <span key={tag} className="text-xs font-medium smooth-text-color default-border rounded-full px-2 py-1">
            {tag}
          </span>
          ))}
        </div>
      </div>

    </div>

  </motion.a>
);
  }
  
  const renderSoon = ()=> {
    return (
      <div className={`flex flex-col justify-center align-middle text-center overflow-hidden rounded-lg default-border cursor-not-allowed h-full`}>
          <h3 className="text-lg font-medium smooth-text-color p-8 lg:p-12">{t("projects.soon")}</h3>
      </div>
    );
  }
  
  return (
    project.soon ? renderSoon() : renderProject()
  );
}

