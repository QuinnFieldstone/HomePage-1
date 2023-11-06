import { UserPerson } from ".";

export default {
  title: "Components/UserPerson",
  component: UserPerson,
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
    styleOutlined: "/img/style-outlined-1.png",
  },
};
