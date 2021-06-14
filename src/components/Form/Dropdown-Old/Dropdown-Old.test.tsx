import React from "react";
import { render, screen } from "@testing-library/react";

import DropdownOld, { testId } from "./Dropdown-Old";

const items = [
  { value: 10, text: "Option A" },
  { value: 20, text: "Option B" },
  { value: 30, text: "Option C" },
];

const defaultArgs = {
  label: "Label",
  selectedValue: "",
  items: [],
  disabled: false,
};

describe("Dropdown", () => {
  test("should render without crashing", () => {
    render(<DropdownOld {...defaultArgs} />);

    const component = screen.getByTestId(testId);

    expect(component).toBeDefined();
  });

  //   test("options should have a data-value attribute", () => {
  //     render(<Dropdown {...defaultArgs} items={items} />);
  //     // const options = screen.getByRole("button", { name: /Select/ });
  //     // console.log(options);
  //     // expect(options[0]).toHaveAttribute("data-value", "10");
  //     //expect(options[1]).to.have.attribute('data-value', '20');
  //   });
});
