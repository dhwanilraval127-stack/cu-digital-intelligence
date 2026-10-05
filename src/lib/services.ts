export const SERVICE_SLUGS = [
  "ai-solutions-intelligent-systems",
  "ai-chatbots-virtual-assistants",
  "business-automation",
  "data-business-intelligence",
  "product-software-engineering",
  "on-demand-technology",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export interface Service {
  number: string;
  slug: string;
  title: string;
  short: string;
  description: string;
  capabilities: string[];
  subCapabilities?: string[];
}

export const services: Service[] = [
  {
    number: "01",
    slug: "ai-solutions-intelligent-systems",
    title: "AI Solutions & Intelligent Systems",
    short:
      "AI assistants, agents, LLM applications, RAG and intelligent business systems.",
    description:
      "We design and build AI that earns its place in a business — assistants, agents, LLM applications and retrieval systems grounded in your own data and connected to the tools your team already uses. The measure of success is simple: does it make the work measurably better.",
    capabilities: [
      "LLM applications",
      "AI agents",
      "RAG & search",
      "Knowledge systems",
      "Model integration",
      "Evaluation & guardrails",
    ],
  },
  {
    number: "02",
    slug: "ai-chatbots-virtual-assistants",
    title: "AI Chatbots & Virtual Assistants",
    short:
      "Customer-facing and internal assistants designed around business workflows.",
    description:
      "Assistants are only useful when they understand the business behind them. We build customer-facing and internal assistants designed around real workflows — with clear escalation paths, guardrails and the context they need to answer well, not just quickly.",
    capabilities: [
      "Customer assistants",
      "Internal copilots",
      "Workflow design",
      "Escalation & handover",
      "Tone & guardrails",
      "Continuous improvement",
    ],
  },
  {
    number: "03",
    slug: "business-automation",
    title: "Business Automation",
    short:
      "Workflow automation, document processing, integrations and repetitive-task automation.",
    description:
      "We find the work that consumes hours and automate it properly — document processing, data entry, approvals, reporting and the invisible glue between systems. Good automation removes busywork without removing oversight, and it keeps working after we step away.",
    capabilities: [
      "Workflow automation",
      "Document processing",
      "System integrations",
      "Data pipelines",
      "Approvals & notifications",
      "Reporting automation",
    ],
  },
  {
    number: "04",
    slug: "data-business-intelligence",
    title: "Data & Business Intelligence",
    short:
      "Power BI, dashboards, analytics and AI-powered business insights.",
    description:
      "Decisions deserve better than spreadsheet archaeology. We consolidate your data and build Power BI dashboards, analytics and AI-powered insight layers that show what is happening and why — in language the business actually speaks.",
    capabilities: [
      "Power BI",
      "Data modelling",
      "Dashboards & reporting",
      "Analytics engineering",
      "AI-powered insights",
      "Data quality",
    ],
  },
  {
    number: "05",
    slug: "product-software-engineering",
    title: "Product & Software Engineering",
    short:
      "From digital products and business websites to custom applications, CU designs, builds and continuously improves software around the way your business works.",
    description:
      "From digital products and business websites to custom applications, CU designs, builds and continuously improves software around the way your business works.",
    capabilities: [
      "Product strategy",
      "UX & Product Design",
      "Website Development",
      "Web Applications",
      "Software Engineering",
      "APIs & Integrations",
      "Maintenance & Improvement",
    ],
    subCapabilities: [
      "Product thinking and strategy",
      "UX & Product Design",
      "Website Development & Maintenance",
      "Web Applications",
      "Software Engineering",
      "API & integration development",
      "Continuous improvement",
    ],
  },
  {
    number: "06",
    slug: "on-demand-technology",
    title: "On-Demand Technology",
    short:
      "Flexible technology, AI and software development built around whatever the business needs.",
    description:
      "Some requirements don't fit a service category — that's exactly what this is for. Bring the challenge, the idea or the half-formed requirement and we'll work with you to shape the right approach, then build it. Your requirement. Our expertise.",
    capabilities: [
      "Rapid prototyping",
      "Proof of concepts",
      "Technical direction",
      "Flexible engagement",
      "Emerging technology",
      "Whatever it takes",
    ],
  },
];
