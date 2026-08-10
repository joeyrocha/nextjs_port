export type VolunteerPhoto = {
  /** Path under /public. Leave unset to render a labeled placeholder slide. */
  src?: string;
  alt: string;
  caption?: string;
};

export const volunteerPhotos: VolunteerPhoto[] = [
  {
    alt: "Hayward Promise Neighborhoods mentoring session",
    caption: "Hayward Promise Neighborhoods",
  },
  {
    alt: "IEEE youth program event",
    caption: "IEEE Youth Program",
  },
  {
    alt: "Startup East Bay / Innovate East Bay hackathon",
    caption: "Innovate East Bay Hackathon",
  },
];
