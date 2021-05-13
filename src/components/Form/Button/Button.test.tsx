import React from "react";
import { render, screen } from "@testing-library/react";

import Button, { testId } from "./Button";

describe("Button", () => {
  test("should render without crashing", () => {
    render(<Button text="abc" />);
    //screen.debug();
    const component = screen.getByTestId(testId);
    //console.log(component);

    expect(component).toBeDefined();
  });
});
