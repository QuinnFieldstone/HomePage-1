import { PropertyWrapper } from ".";

export default {
  title: "Components/PropertyWrapper",
  component: PropertyWrapper,
  argTypes: {
    property1: {
      options: ["option-2", "variant-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "option-2",
    className: {},
    element: "/img/0-1-6.png",
  },
};
