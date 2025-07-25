import Accordion, { FAQS } from "./Accordion";

export default {
  title: "Mohan Sai/React Components/Accordion/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    data: FAQS,
  },
};
