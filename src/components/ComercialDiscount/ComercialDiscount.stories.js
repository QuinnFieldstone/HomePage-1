import { ComercialDiscount } from ".";

export default {
  title: "Components/ComercialDiscount",
  component: ComercialDiscount,
  argTypes: {
    style: {
      options: ["outlined", "filled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "outlined",
    className: {},
    styleOutlined: "/img/style-outlined-5.png",
  },
};
