export interface Project {
  slug: string;
  label: string;
  title: string;
  problem: string;
  solution: string;
  technology: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "service-desk-intelligence",
    label: "Concept 01",
    title: "Service Desk Intelligence",
    problem:
      "Support teams drown in repetitive tickets while genuine issues wait in the same queue.",
    solution:
      "An AI assistant that triages, drafts and resolves routine requests, and hands complex cases to a human with full context attached.",
    technology: ["Next.js", "TypeScript", "LLM orchestration", "RAG"],
    outcome:
      "Demonstrates how AI support can be grounded in a business's own knowledge and escalate cleanly to people.",
  },
  {
    slug: "operations-command-view",
    label: "Concept 02",
    title: "Operations Command View",
    problem:
      "Operational data lives in five systems, so nobody can see the state of the business in one place.",
    solution:
      "A unified operations dashboard that consolidates systems into a single live view with drill-down to source data.",
    technology: ["React", "TypeScript", "Data modelling", "Visualisation"],
    outcome:
      "Demonstrates how consolidated data presentation supports faster, better-informed operational decisions.",
  },
  {
    slug: "document-processing-pipeline",
    label: "Concept 03",
    title: "Document Processing Pipeline",
    problem:
      "Invoices, forms and contracts arrive by email and are re-keyed into systems by hand.",
    solution:
      "A document intelligence pipeline that extracts, validates and routes information into the systems that need it.",
    technology: ["Node.js", "AI extraction", "Validation rules", "Integrations"],
    outcome:
      "Demonstrates how document automation removes repetitive manual processing with human review where it matters.",
  },
];
