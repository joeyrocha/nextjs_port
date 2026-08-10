export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Systems & Data",
    skills: ["SQL", "Salesforce", "Zapier", "BigQuery", "dbt"],
  },
  {
    label: "Reporting & Visualization",
    skills: ["Tableau"],
  },
  {
    label: "Programming & Web",
    skills: ["Python", "JavaScript", "React", "Java", "HTML", "CSS", "WordPress"],
  },
];
