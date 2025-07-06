import React from "react";
import AccordionItem from "./AccordionItem";

export default {
  title: "Mohan Sai/React Components/AccordionItem",
  component: AccordionItem,
  tags: ["autodocs"],
};

const sampleItem = {
  id: 1,
  title: "What is React?",
  content: "React is a JavaScript library for building user interfaces.",
};

export const Default = {
  args: {
    item: sampleItem,
  },
};
