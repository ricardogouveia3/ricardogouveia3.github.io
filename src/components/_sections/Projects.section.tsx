import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { GridClassNames } from "@constants/layout.ts";
import Card from "../Card/Card.tsx";
import ProjectItem from "@components/Project/ProjectItem.tsx";
import { Project } from "../../types/Project.type.ts";
import { useBreakpoint } from "@hooks/useBreakpoint.ts";
import { fetchProjects } from "@apis/projects.ts";
import ButtonLink from "@components/Buttons/ButtonLink.tsx";
import {useRemoteConfig} from "@hooks/useRemoteConfig.ts";

const MAX_PROJECTS = 12;

const ProjectSection = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  
  const { value: showAllProjectsButton } = useRemoteConfig("websiteProjectsShowAllButton");
  
  const { isAbove2xl } = useBreakpoint("2xl");
  const { isAboveLg } = useBreakpoint("lg");
  const { isAboveMd } = useBreakpoint("md");
  
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    fetchProjects().then((projects) => {
      setProjects(projects);
      setLoading(false);
    });
  }, []);
  
  const getGridSettings = (count: number) => {
    if (isAbove2xl)
      return {
        gridCols: count >= 12 ? "grid-cols-4" : "grid-cols-3",
        maxRendered: count
      };
    if (isAboveLg)
      return {
        gridCols: count >= 9 ? "grid-cols-3" : "grid-cols-2",
        maxRendered: 9
      };
    if (isAboveMd)
      return {
        gridCols: count >= 6 ? "grid-cols-2" : "grid-cols-1",
        maxRendered: 6
      };
    return {
      gridCols: "grid-cols-1",
      maxRendered: 3
    };
  };
  
  const placeholders: Project[] = Array.from(
    { length: Math.max(0, MAX_PROJECTS - projects.length) },
    (_, i) => ({
      id: 1000 + i,
      title: "",
      description: "",
      link: "#",
      imgSrc: "",
      tags: [],
      expanded: false,
      soon: true,
    })
  );
  
  const combinedProjects = [...projects, ...placeholders];
  const projectsToRender = combinedProjects.slice(0, MAX_PROJECTS);
  
  const { gridCols, maxRendered } = getGridSettings(projectsToRender.length);
  const itemsToRender = projectsToRender.slice(0, maxRendered);
  
  return (
    <Card classNames={GridClassNames.projects} loading={loading} contentClassnames="p-4 lg:p-6 flex flex-col gap-4">
      <header className="flex flex-row justify-between mb-4 items-center">
        <h3 className="text-lg/7 mb-4 font-medium default-text-color">{t("projects.title")}</h3>
        {(!!showAllProjectsButton && projects.length >= 12) && <ButtonLink round="lg" link={'/projects'}>{t('projects.seeAll')}</ButtonLink>}
      </header>
      
      <div className={`grid ${gridCols} gap-4`}>
        {itemsToRender.map((project) => (
          <ProjectItem
            key={project.id ?? project.title}
            project={project}
            expanded={project.expanded}
          />
        ))}
      </div>
    </Card>
  );
};

export default ProjectSection;
