import React from "react";
import Dropdown, { IDropdownProps } from "./Dropdown";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  component: Dropdown,
  title: "Dropdown",
} as Meta;

const items = [
  { value: 10, text: "Option A" },
  { value: 20, text: "Option B" },
  { value: 30, text: "Option C" },
];

const defaultArgs = {
  label: "Label",
  items: [],
  selectedValue: "",
  disabled: false,

  onChange: action("on change"),
};
const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />;

export const EmptyWithLabel = Template.bind({});
EmptyWithLabel.args = { ...defaultArgs };

export const ItemsWithLabel = Template.bind({});
ItemsWithLabel.args = { ...defaultArgs, items };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };

export const ItemsWithSelected = Template.bind({});
ItemsWithSelected.args = { ...defaultArgs, items, selectedValue: 20 };
