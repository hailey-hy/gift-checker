import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../components"],
};
export default config;
