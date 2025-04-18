export type Experience = {
  id: number | string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate?: string;
  order?: number;
};

export type ExperienceItemProps = {
  jobTitle: string,
  company: string,
  startDate: string,
  endDate?: string
}