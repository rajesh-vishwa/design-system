import React from "react";
import DropdownOld, { IDropdownProps } from "./Dropdown-Old";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  component: DropdownOld,
  title: "DropdownOld",
} as Meta;

const items = [
  { value: 10, text: "Option A" },
  { value: 20, text: "Option B" },
  { value: 30, text: "Option C" },
  { value: 40, text: "Option D" },
];

const defaultArgs = {
  label: "default label",
  items: [],
  selectedValue: "",
  disabled: false,

  onChange: action("on change"),
};
const Template: Story<IDropdownProps> = (args) => <DropdownOld {...args} />;

export const WithoutContent = Template.bind({});
WithoutContent.args = { ...defaultArgs };

export const WithContent = Template.bind({});
WithContent.args = { ...defaultArgs, items };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };

export const WithContentSelected = Template.bind({});
WithContentSelected.args = { ...defaultArgs, items, selectedValue: 20 };

export const WithContentRequired = Template.bind({});
WithContentRequired.args = {
  ...defaultArgs,
  items,
  isRequired: true,
};
