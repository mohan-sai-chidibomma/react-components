import Table from "./Table";
import { DATA, HEADERS } from "./util";

export default {
  title: "Mohan Sai/React Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    data: DATA,
    headers: HEADERS,
  },
};
