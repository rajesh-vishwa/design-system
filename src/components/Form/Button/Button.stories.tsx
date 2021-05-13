import React from "react";
import Button, { TButtonProps } from "./Button";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { config, withDesign } from "storybook-addon-designs";
import ErrorIcon from "../../Icons/ErrorIcon";
import Docs from "./Button.mdx";

export default {
  component: Button,
  title: "Button",
  decorators: [withDesign],
  parameters: {
    // docs: {
    //   page: Docs
    // },
    design: config({
      type: "figma",
      url: "",
    }),
  },
} as Meta;

const defaultArgs = {
  text: "button",
  type: "button",
  onClick: action("on clicked"),
};
const Template: Story<TButtonProps> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = { ...defaultArgs, buttonStyle: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { ...defaultArgs, buttonStyle: "secondary" };

export const PrimaryWrappingText = Template.bind({});
PrimaryWrappingText.args = {
  ...defaultArgs,
  buttonStyle: "primary-wrappingtext",
};

export const SecondaryWrappingText = Template.bind({});
SecondaryWrappingText.args = {
  ...defaultArgs,
  buttonStyle: "secondary-wrappingtext",
};

export const SecondaryTinyWrappingText = Template.bind({});
SecondaryTinyWrappingText.args = {
  ...defaultArgs,
  size: "small",
  buttonStyle: "secondary-tiny-wrappingtext",
};

export const Tertiary = Template.bind({});
Tertiary.args = { ...defaultArgs, size: "large", buttonStyle: "tertiary" };

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  ...defaultArgs,
  buttonStyle: "primary",
  disabled: true,
};

export const ControlPlus = Template.bind({});

ControlPlus.args = {
  ...defaultArgs,
  buttonStyle: "controlText",
  text: <ErrorIcon />,
};
