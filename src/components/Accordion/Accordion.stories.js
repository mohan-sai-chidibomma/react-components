import React from "react";
import Accordion from "./Accordion";

export default {
  title: "Mohan Sai/React Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const sampleItems = [
  {
    title: "Section 1",
    content: "This is the content for section 1.",
  },
  {
    title: "Section 2",
    content: "This is the content for section 2.",
  },
  {
    title: "Section 3",
    content: "This is the content for section 3.",
  },
];

export const Default = {
  args: {
    items: sampleItems,
  },
};

export const SingleOpen = {
  args: {
    items: sampleItems,
    allowMultipleOpen: false,
  },
};

export const MultipleOpen = {
  args: {
    items: sampleItems,
    allowMultipleOpen: true,
  },
};
