import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("Personal homepage", () => {
  it("shows a concise background with anonymous employer descriptions", () => {
    render(<App />);
    expect(screen.getByRole("heading", {level: 1, name: "Songqiao Qi"})).toBeInTheDocument();
    expect(screen.getByText(/a sustainability startup and a global asset management company/)).toBeInTheDocument();
    const text = document.body.textContent ?? "";
    expect(text.match(/Songqiao Qi/g)).toHaveLength(1);
    expect(screen.getByText("Computer vision and NLP at NYU.")).toBeInTheDocument();
    expect(text).not.toMatch(/Fidelity|Jingyan|ImpactEdge|ResponsibleEdge|LinkedIn|Rotational Analyst|Scrum lead/i);
  });

  it("provides direct contact links", () => {
    render(<App />);
    expect(screen.getByRole("link", {name: /GitHub/})).toHaveAttribute("href", "https://github.com/willsqqi");
    expect(screen.getByRole("link", {name: /email/})).toHaveAttribute("href", "mailto:sq2326@nyu.edu");
    expect(screen.queryByRole("link", {name: /source|website/})).not.toBeInTheDocument();
    expect(screen.getByText(/PrecEdge · prediction market research/)).toBeInTheDocument();
  });

  it("retains education and general finance interests", () => {
    render(<App />);
    const education = screen.getByLabelText("Education");
    expect(within(education).getByText("M.S. Computer Science")).toBeInTheDocument();
    expect(within(education).getByText("M.Sc. Risk and Finance")).toBeInTheDocument();
    expect(screen.getByText(/agentic AI could reshape financial workflows/)).toBeInTheDocument();
  });
});
