import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    wavyzX: "/img/wavyz3-1-300x300-1.png",
    text: "Dried Magic<br/>Mushrooms",
    driedMagicClassName: {},
  },
};
