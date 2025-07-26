import Pagination from "./Pagination";

export default {
  title: "Mohan Sai/React Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    totalPages: { control: { type: "number" } },
  },
};

export const Default = {
  args: {
    totalPages: 5,
  },
};
