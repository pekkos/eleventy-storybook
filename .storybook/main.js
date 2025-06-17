export default {
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.njk$/,
      use: [
        {
          loader: "simple-nunjucks-loader",
        },
      ],
    });
    return config;
  },
};
