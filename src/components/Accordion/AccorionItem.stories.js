import AccordionItem from "./AccordionItem";
import { fn } from "storybook/internal/test";

export default {
  title: "Mohan Sai/React Components/Accordion/AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const sampleItem = {
  id: 1,
  title: "What is React?",
  content: "React is a JavaScript library for building user interfaces.",
};

export const Open = {
  args: {
    item: sampleItem,
    openId: 1,
    setOpenId: fn(),
  },
};

export const Collapsed = {
  args: {
    item: sampleItem,
    openId: null,
    setOpenId: fn(),
  },
};
