import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("should render main heading", () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  it("should increment the count on user clicking the button", () => {
    render(<App />);
    const countElement = screen.getByTestId("count");
    const btn = screen.getByRole("button", { name: /count is/i });

    expect(countElement).toHaveTextContent(0);

    fireEvent.click(btn);

    expect(countElement).toHaveTextContent(1);
  });

  it("should navigate to vite documentation", () => {
    render(<App />);
    const image = screen.getByAltText(/vite logo/i);
    const link = image.closest("a");

    expect(link).toHaveAttribute("href", "https://vite.dev");
    fireEvent.click(image);
    expect(link.href).toContain("vite.dev");
  });

  it("should navigate to react documentation", () => {
    render(<App />);

    const image = screen.getByAltText(/react logo/i);
    const link = image.closest("a");

    expect(link).toHaveAttribute("href", "https://react.dev");
    fireEvent.click(image);
    expect(link.href).toContain("react.dev");
  });
});
