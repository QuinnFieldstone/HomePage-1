import { InterfaceEssential } from ".";

export default {
  title: "Components/InterfaceEssential",
  component: InterfaceEssential,
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
    styleOutlined: "/img/style-outlined-2.png",
  },
};
