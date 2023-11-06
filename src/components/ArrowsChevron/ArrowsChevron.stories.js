import { ArrowsChevron } from ".";

export default {
  title: "Components/ArrowsChevron",
  component: ArrowsChevron,
  argTypes: {
    style: {
      options: ["filled", "outlined"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "filled",
    className: {},
    styleFilled: "/img/style-filled-3.png",
  },
};
