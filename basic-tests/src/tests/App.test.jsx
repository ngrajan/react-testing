import React from "react";
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
});
