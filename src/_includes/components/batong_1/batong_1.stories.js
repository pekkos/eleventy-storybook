import { createButton } from "./batong_1";

export default {
  title: "Nunjucks Batong_1",

  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: "text" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Batong",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Batong",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Batongg",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Bato",
};
