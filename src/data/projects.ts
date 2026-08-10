export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  /** Path under /public, or leave empty to render a labeled placeholder slot. */
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  category: "work" | "academic" | "side";
};

export const projects: Project[] = [
  {
    slug: "revenue-visibility-bi-dashboard",
    title: "Revenue-Visibility BI Dashboard",
    summary:
      "Cross-departmental BI rollout that contributed to a 15% revenue increase at BARTC.",
    description:
      "Directed the cross-departmental rollout of a business-intelligence dashboard system integrating system-usage, web-traffic, and financial data to increase revenue visibility. Built on SQL data pipelines for extraction and validation, feeding dashboards that sales, finance, and marketing now use for day-to-day reporting.",
    tech: ["SQL", "Tableau"],
    category: "work",
    // [[image: dashboard screenshot]]
  },
  {
    slug: "volunteernest",
    title: "VolunteerNest",
    summary:
      "Volunteer attendance-tracking SaaS for nonprofits, with planned Salesforce integration.",
    description:
      "A lightweight SaaS product for nonprofits to track volunteer attendance and hours without spreadsheets. Built with a typed, serverless-friendly stack and designed for a future Salesforce NPSP integration so nonprofit ops teams can keep one source of truth.",
    tech: ["Next.js", "PostgreSQL", "Drizzle ORM", "Neon"],
    category: "side",
    liveUrl: "https://volunteernest.com",
    // [[repo: add link if public]]
    // [[image: product screenshot]]
  },
  {
    slug: "donor-spatial-analysis",
    title: "Donor Spatial Analysis",
    summary:
      "M.S. capstone modeling donor penetration vs. distance to trail across 1,772 Bay Area census tracts.",
    description:
      "Spatial-econometric study of donor penetration versus distance to trail across 1,772 Bay Area census tracts. Combined a first-party CRM donor extract pulled via SOQL with the ACS 5-year Census API, ran multi-pass geocoding, then tested spatial autocorrelation with Moran's I and fit a spatial autoregressive (SAR) model reporting direct, indirect, and total impacts.",
    tech: ["Python", "GeoPandas", "PySAL", "SOQL"],
    category: "academic",
    // [[repo: add link if public]]
    // [[image: choropleth map]]
  },
  {
    slug: "sba-loan-default-prediction",
    title: "SBA Loan Default Prediction",
    summary:
      "End-to-end ML classification pipeline tuned around an asymmetric 5:1 cost structure.",
    description:
      "End-to-end classification pipeline comparing kNN, decision trees, bagging, AdaBoost, gradient boosting, random forest, and regularized logistic regression against a neural net baseline, tuned around an asymmetric 5:1 misclassification cost structure to reflect real lending risk.",
    tech: ["Python", "scikit-learn"],
    category: "academic",
    // [[repo: add link if public]]
    // [[image: model comparison chart]]
  },
  {
    slug: "ev-charging-station-data-viz",
    title: "EV Charging Station Data Viz",
    summary:
      "Interactive Tableau dashboards built from spatial joins of census and AFDC EV station data.",
    description:
      "Combined California census-tract GeoJSON with Alternative Fuels Data Center (AFDC) EV charging-station data via spatial joins, then built interactive Tableau dashboards to explore charging-station coverage relative to population density.",
    tech: ["GeoPandas", "Tableau"],
    category: "side",
    // [[repo: add link if public]]
    // [[image: Tableau dashboard]]
  },
];
