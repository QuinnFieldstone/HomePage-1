import { ComercialShopping } from ".";

export default {
  title: "Components/ComercialShopping",
  component: ComercialShopping,
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
    styleOutlined: "/img/style-outlined.png",
  },
};
