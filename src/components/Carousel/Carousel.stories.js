import Carousel from "./Carousel";
import { CAROUSEL_DATA } from "./carousel.const";

export default {
  title: "Mohan Sai/React Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    data: CAROUSEL_DATA,
  },
};
