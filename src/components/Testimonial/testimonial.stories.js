import Testimonial from "./Testimonial";
export default {
  title: "Mohan Sai/React Components/Testimonial",
  component: Testimonial,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   args: {
  //     children: "Button",
  //   },
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    testimonialText: { control: "text" },
    author: { control: "text" },
  },
};

export const Default = {
  args: {
    src: "/dave.jpg",
    alt: "Dave's Profile Picture",
    testimonialText:
      "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    author: "Dave Bryson",
  },
};
