import React from "react";
import Input, { IInputProps } from "./Input";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { config, withDesign } from 'storybook-addon-designs';
import Docs from './Input.mdx';

export default {
  component: Input,
  title: "Input",
  decorators: [withDesign],
  parameters: {
    // docs: {
    //   page: Docs
    // },
    design: config({
      type: 'figma',
      url:
        ''
    })
  }
} as Meta;

const defaultArgs = { label: "Please enter", type: "text", onChange: action('on change'), onFocus: action('On focus'), onBlur: action('On blur')};
const Template: Story<IInputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const EmailField = Template.bind({});
EmailField.args = { ...defaultArgs, type: 'email' };

export const PasswordField = Template.bind({});
PasswordField.args = { ...defaultArgs, type: 'password' };

export const InputWithName = Template.bind({});
InputWithName.args = { ...defaultArgs,  name: "Name" };

export const FromControlWithDisabled = Template.bind({});
FromControlWithDisabled.args = { ...defaultArgs,  disabled: true };

export const FromControlWithCustomWidth = Template.bind({});
FromControlWithCustomWidth.args = { ...defaultArgs, width: 50};

export const FromControlWithHelperText = Template.bind({});
FromControlWithHelperText.args = { ...defaultArgs,helperText: "Please enter credit card number"};

// export const FromControlWithStyle = Template.bind({});
// FromControlWithStyle.args = { ...defaultArgs, style: {color: 'red'}};

