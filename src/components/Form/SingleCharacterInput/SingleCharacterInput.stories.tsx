import React from "react";
import SingleCharacterInput, { ISingleCharacterInputProps } from "./SingleCharacterInput";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { config, withDesign } from 'storybook-addon-designs';


export default {
  component: SingleCharacterInput,
  title: "SingleCharacterInput",
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

const defaultArgs = { pattern: "${}"};
const Template: Story<ISingleCharacterInputProps> = (args) => <SingleCharacterInput {...args} />;


export const Default = Template.bind({});
Default.args = { ...defaultArgs };