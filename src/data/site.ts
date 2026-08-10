export const site = {
  name: "Joey Rocha-Perez",
  role: "Business Systems Analyst",
  positioning:
    "I turn CRM and operational data into dashboards, pipelines, and systems people actually trust.",
  location: "San Francisco Bay Area",
  url: "https://jrochaperez.com",
  email: "jrochaperez123@gmail.com",
  // [[confirm: show phone number publicly?]]
  showPhone: false,
  phone: "[[phone number]]",
  ogImage: "/images/hero-image.png",
  description:
    "Portfolio of Joey Rocha-Perez, a Business Systems Analyst who turns CRM and operational data into dashboards, pipelines, and systems people actually trust.",
} as const;

export const social = {
  email: `mailto:${site.email}`,
  linkedin: "https://linkedin.com/in/jrochaperez123/",
  // [[confirm GitHub handle]]
  github: "https://github.com/joeyrocha",
  site: site.url,
} as const;
