import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Splash from "./Splash";

describe("Splash Screen", () => {
  it("renders the splash screen with splash text component", () => {
    render(<Splash />);
    const splashText = screen.getByTestId("splash-txt");
    expect(splashText).toBeInTheDocument();
  });
});
