export type Certification = {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
};

export const certifications: Certification[] = [
  {
    name: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    year: "2022",
    credentialId: "120091",
  },
  {
    name: "Google Data Analytics Certificate",
    issuer: "Google",
    year: "2023",
  },
  {
    name: "Google Project Management Certificate",
    issuer: "Google",
    year: "2021",
  },
];
