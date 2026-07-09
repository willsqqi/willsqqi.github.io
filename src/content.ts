export type IconName =
  | "python"
  | "java"
  | "typescript"
  | "javascript"
  | "sql"
  | "bash"
  | "spring"
  | "vuejs"
  | "angular"
  | "spark"
  | "docker"
  | "kubernetes"
  | "aws"
  | "gcp"
  | "grafana"
  | "playwright"
  | "cypress"
  | "jest"
  | "postgresql"
  | "redis"
  | "mongodb"
  | "neo4j"
  | "code";

export interface Skill {
  name: string;
  icon: IconName;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  pitch: string;
  description: string;
  stack: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface EducationItem {
  school: string;
  degree: string;
}

export const profile = {
  name: "William Qi",
  title: "Software Engineer",
  email: "sq2326@nyu.edu",
  github: "https://github.com/willsqqi",
  intro:
    "I build full-stack products and data-heavy systems where clear interfaces, reliable automation, and practical tooling matter.",
  tagline:
    "TypeScript frontends, Java and Python services, cloud workflows, and data platforms for finance and sustainability problems."
};

export const beliefs = [
  {
    title: "We can make the world better.",
    body:
      "I focus my time on things that I genuinely believe make the world better. Mainly climate action, but also little things that save people time or put a smile on their face."
  },
  {
    title: "Automate the repeatable.",
    body:
      "Testing, orchestration, observability, and deployment work best when they remove friction from everyday engineering decisions."
  },
  {
    title: "Keep the product useful.",
    body:
      "Good software should help people finish the task in front of them, then get out of the way."
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "sql" },
      { name: "Bash", icon: "bash" }
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Spring Boot", icon: "spring" },
      { name: "Vue.js", icon: "vuejs" },
      { name: "Angular", icon: "angular" },
      { name: "Apache Spark", icon: "spark" },
      { name: "ANTLR4", icon: "code" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Argo Workflows", icon: "code" },
      { name: "AWS", icon: "aws" },
      { name: "GCP", icon: "gcp" },
      { name: "Grafana", icon: "grafana" }
    ]
  },
  {
    title: "Testing & Data",
    skills: [
      { name: "Playwright", icon: "playwright" },
      { name: "Cypress", icon: "cypress" },
      { name: "JUnit", icon: "java" },
      { name: "Jest", icon: "jest" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Redis", icon: "redis" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Neo4j", icon: "neo4j" }
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Prediction Market Data Platform",
    pitch: "Cross-market data, reconciliation, and opportunity discovery.",
    description:
      "A cloud-native data platform for ingesting market data, normalizing event metadata, reconciling related markets, and exposing opportunity-focused APIs.",
    stack: ["GCP", "PostgreSQL", "Gemini Embedding", "REST APIs", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/willsqqi/PrecEdge" },
      { label: "Webpage", href: "https://edge.jsprec.com/" }
    ]
  }
];

export const education: EducationItem[] = [
  {
    school: "New York University",
    degree: "M.S. in Information Systems"
  },
  {
    school: "London School of Economics",
    degree: "M.Sc. in Risk and Finance"
  },
  {
    school: "Chinese University of Hong Kong",
    degree: "B.Sc. in Risk Management Science"
  }
];
