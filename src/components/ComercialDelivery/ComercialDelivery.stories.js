import { ComercialDelivery } from ".";

export default {
  title: "Components/ComercialDelivery",
  component: ComercialDelivery,
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
    styleOutlined: "/img/style-outlined-4.png",
  },
};
