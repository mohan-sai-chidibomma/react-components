import Button from "./Button";

import { fn } from "storybook/test";

export default {
  title: "Mohan Sai/React Components",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    children: "Button",
  },
  argTypes: {
    children: { control: "text" },
  },
};

export const Primary = {
  args: { children: "Button", buttonType: "primary", size: "medium" },
};

export const Secondary = {
  args: {
    children: "Button",
    buttonType: "secondary",
    size: "medium",
  },
};

export const Danger = {
  args: {
    children: "Button",
    buttonType: "danger",
    size: "medium",
  },
};
