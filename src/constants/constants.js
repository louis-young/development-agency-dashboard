const ROUTES = {
  DASHBOARD: "/",
  DOMAINS: "/domains",
  CLIENTS: "/clients",
  DOCUMENTATION: "/documentation",
  PROJECTS: "/projects",
};

const COLLECTIONS = {
  DOMAINS: "domains",
  DOCUMENTATION: "documentation",
  CLIENTS: "clients",
  PROJECTS: "projects",
};

const HEADERS = {
  PROJECTS: ["Client", "Stage", "Status", "Type", "Notes", "Next Action", "Actions"],
  CLIENTS: ["Company", "Contact", "Email", "Phone", "Actions"],
  DOMAINS: ["Domain", "Client", "Provider", "Renewal", "Actions"],
  DOCUMENTATION: ["Title", "Description", "Actions"],
};

export { ROUTES, COLLECTIONS, HEADERS };
