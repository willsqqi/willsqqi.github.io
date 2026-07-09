import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("Portfolio content", () => {
  it("presents William Qi as a software engineer without exposing employer names or job details", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "William Qi" })).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "William Qi headshot" })).toHaveAttribute("src", "/headshot.png");
    expect(screen.queryByText("WQ")).not.toBeInTheDocument();

    const pageText = document.body.textContent ?? "";
    expect(pageText).not.toMatch(/Jingyan/i);
    expect(pageText).not.toMatch(/Fidelity/i);
    expect(pageText).not.toMatch(/Rotational Analyst/i);
    expect(pageText).not.toMatch(/Software Engineer @/i);
  });

  it("shows schools and degrees without education years or date ranges", () => {
    render(<App />);

    const education = screen.getByLabelText("Education");
    expect(within(education).getByText("New York University")).toBeInTheDocument();
    expect(within(education).getByText("London School of Economics")).toBeInTheDocument();
    expect(within(education).getByText("Chinese University of Hong Kong")).toBeInTheDocument();

    const educationText = education.textContent ?? "";
    expect(educationText).not.toMatch(/\b20\d{2}\b/);
    expect(educationText).not.toMatch(/Jan|Sep|Nov|Dec|Aug/i);
    expect(educationText).not.toMatch(/Distinction|First Class Honours/i);
  });

  it("uses the resume-aligned technology stack", () => {
    render(<App />);

    const skills = screen.getByLabelText("Technology stack");
    [
      "Python",
      "Java",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Bash",
      "Spring Boot",
      "Vue.js",
      "Angular",
      "Apache Spark",
      "ANTLR4",
      "Docker",
      "Kubernetes",
      "Argo Workflows",
      "AWS",
      "GCP",
      "Grafana",
      "Playwright",
      "Cypress",
      "JUnit",
      "Jest",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Neo4j"
    ].forEach((skill) => {
      expect(within(skills).getByText(skill)).toBeInTheDocument();
    });
  });

  it("uses theme-colored icons for dark brand marks that disappear on dark cards", () => {
    render(<App />);

    ["Bash", "Cypress"].forEach((skill) => {
      const skillCard = screen.getByText(skill).closest(".skill-item");
      const icon = skillCard?.querySelector("i");

      expect(icon).toBeTruthy();
      expect(icon?.className).not.toContain("colored");
    });
  });

  it("shows the requested belief copy", () => {
    render(<App />);

    expect(screen.getByText("We can make the world better.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "I focus my time on things that I genuinely believe make the world better. Mainly climate action, but also little things that save people time or put a smile on their face."
      )
    ).toBeInTheDocument();
    expect(screen.queryByText("Build for clarity.")).not.toBeInTheDocument();
  });

  it("only highlights the Prediction Market Data Platform project and contact links", () => {
    render(<App />);

    expect(screen.getByText("Prediction Market Data Platform")).toBeInTheDocument();
    expect(screen.queryByText("ESG Reporting Platform")).not.toBeInTheDocument();
    expect(screen.queryByText("Climate Rating Pipeline")).not.toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /GitHub/i }).some((link) => link.getAttribute("href") === "https://github.com/willsqqi")
    ).toBe(true);
    expect(
      screen.getAllByRole("link", { name: /Email/i }).some((link) => link.getAttribute("href") === "mailto:sq2326@nyu.edu")
    ).toBe(true);
  });
});
