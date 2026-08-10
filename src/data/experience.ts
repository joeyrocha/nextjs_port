export type ExperienceEntry = {
  org: string;
  title: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    org: "BARTC",
    title: "Business Systems Analyst",
    period: "2024 — Present",
    highlights: [
      "Led requirements-gathering sessions with multiple stakeholders to define technical and business needs, producing user-centric dashboards and streamlined reporting workflows.",
      "Directed cross-departmental implementation of a BI dashboard system integrating system usage, web traffic, and financial data — contributed to a 15% revenue increase.",
      "Built and maintained SQL data pipelines for extraction and validation supporting sales, finance, and marketing reporting.",
      "Standardized intake processes and SOPs for recurring data requests, cutting reporting turnaround time by 50% and increasing internal adoption.",
      "Analyzed foot-traffic and program-participation data for a partner org, delivering visualizations that grew event participation by 30%.",
    ],
  },
  {
    org: "Bayview Hunters Point Foundation",
    title: "Business Analyst & Project Manager",
    period: "2023",
    highlights: [
      "Conducted systems analysis across case-management and CRM platforms (SQL, Excel), identifying process inefficiencies that improved case management, client retention, and program outcomes.",
      "Managed a reporting-system upgrade from scoping through rollout across program, fundraising, and case-management teams.",
      "Built custom reports and dashboards with advanced filtering and aggregate logic; mapped business processes to surface automation opportunities.",
    ],
  },
  {
    org: "California State University, East Bay",
    title: "Information Solutions Specialist",
    period: "2022 — 2023",
    highlights: [
      "Established data-governance standards via duplicate detection and field standardization, improving CRM accuracy and pipeline reporting.",
      "Automated mailing-list management for 100K–200K records in Python, eliminating duplicates and improving campaign targeting and ROI by 30%.",
      "Partnered with accounting to reconcile sales records and improve revenue-tracking accuracy.",
    ],
  },
  {
    org: "ClimbHire",
    title: "Salesforce Administrator",
    period: "2020 — 2022",
    highlights: [],
  },
];
