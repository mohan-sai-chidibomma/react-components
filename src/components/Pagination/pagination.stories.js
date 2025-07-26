import Pagination from "./Pagination";

export default {
  title: "Mohan Sai/React Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    totalRecords: { control: { type: "number" } },
    limit: { control: { type: "number" } },
  },
};

export const Default = {
  args: {
    totalRecords: 150,
    limit: 10,
  },
};
