export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with the business — the problem, the people, the data and the constraints. No assumptions.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We define the product, the experience and the architecture before anything gets built.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We engineer the system — software, automation or AI — with quality and maintainability from day one.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "We connect the solution to the tools and workflows the business already relies on.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "We improve, extend and scale as requirements evolve — the system grows with the business.",
  },
];
