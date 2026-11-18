export const projectTypes = [
  {
    id: "client",
    label: "Client Projects",
    description: "Independent collaborations, built around a client’s goals.",
    emptyMessage: "Client projects will appear here as they’re added.",
  },
  {
    id: "team",
    label: "Company Contributions",
    description: "Products and projects I helped build as part of an organization’s team.",
    emptyMessage: "Projects from my work with teams will appear here as they’re added.",
  },
  {
    id: "open-source",
    label: "Public Code",
    description: "Open-source tools, experiments, and resources shared with the community.",
    emptyMessage: "Open-source projects will appear here as they’re added.",
  },
] as const;
